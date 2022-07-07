<!--
 * @Author: ND_LJQ
 * @Date: 2022-07-07 17:04:35
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-07-08 00:09:17
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <el-tabs type="border-card" class="exercise-tabs" style="width: 50vw">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><calendar /></el-icon>
          <span>题目描述</span>
        </span>
      </template>
      <div class="exercise-info tab-item">
        <div class="exercise-info-content">
          <div class="exercise-tabView">
            <div class="exercise-title">
              <h1>{{ allInfo.exerciseTitle }}</h1>
            </div>
          </div>
          <div class="markdown-content"><olp-markdown-edit :is-preview-only="true" /></div>
        </div>
      </div>
    </el-tab-pane>

    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><Clock /></el-icon>
          <span>提交记录</span>
        </span>
      </template>
      <div class="submit-records tab-item">
        <div class="submit-records-content">
          <div class="no-records" v-if="submitRecordsList.length == 0">
            <div style="color: #b7b7b7">
              <h4>您还没有任何的提交记录</h4>
            </div>
          </div>
        </div>
      </div>
    </el-tab-pane>

    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><ChatDotRound /></el-icon>
          <span>讨论</span>
        </span>
      </template>
    </el-tab-pane>

    <!-- <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><calendar /></el-icon>
          <span>评论</span>
        </span>
      </template>
    </el-tab-pane> -->
  </el-tabs>
</template>

<script setup lang="ts">
interface exerciseInfo {
  exerciseTitle: string;
  exerciseMarkdown: string;
}

const fatherInfo = defineProps({ exerciseID: { type: Number, required: true, default: 0 } });

const allInfo: exerciseInfo = reactive({
  exerciseTitle: 'test',
  exerciseMarkdown: '',
});

const submitRecordsList = reactive([]);
const getExerciseInfo = () => {
  console.log('我被调用了');
  return;
};

onMounted(() => {
  getExerciseInfo();
  console.log(submitRecordsList);
  console.log(submitRecordsList.valueOf());
});
</script>

<style lang="scss" scoped>
.exercise-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.exercise-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}

.exercise-tabs {
  :deep(.el-tabs__content) {
    padding: 15px 0 15px 15px !important;
  }
}
.exercise-info {
  // height: 100vh;
}

.tab-item {
  height: 60vh;
  overflow: scroll;
}

.submit-records {
  display: flex;
  justify-content: center;
  align-items: center;
  .submit-records-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
