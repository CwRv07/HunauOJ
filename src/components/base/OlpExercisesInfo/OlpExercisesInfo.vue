<!--
 * @Author: ND_LJQ
 * @Date: 2022-07-07 17:04:35
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-07-09 10:34:45
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
          <div
            class="no-records"
            v-if="submitRecordsList.length == 0"
            style="
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            "
          >
            <div style="color: #b7b7b7">
              <h4>您还没有任何的提交记录</h4>
            </div>
          </div>

          <div class="submit-records-list" v-else>
            <olp-table-group :data="submitRecordsList" :props="submitProps">
              <template #submitRes="{ value }">
                <el-tag effect="dark" v-if="value == 1" type="success"> Accepted </el-tag>
                <el-tag effect="dark" v-if="value == 2" type="warning"> Compile Error </el-tag>
              </template>
              <template #runtime="{ value }">{{ value }} </template>
              <template #consumption="{ value }">{{ value }} </template>
              <template #language="{ value }">{{ value }} </template>
              <template #submitTime="{ value }">{{ value }} </template>
            </olp-table-group>
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

const submitProps = [
  { prop: 'submitRes', label: '提交结果', width: 100, align: 'center' as const },
  { prop: 'runtime', label: '执行用时', width: 100, align: 'center' as const },
  { prop: 'consumption', label: '内存消耗', width: 100, align: 'center' as const },
  { prop: 'language', label: '语言', width: 100, align: 'center' as const },
  { prop: 'submitTime', label: '提交时间', width: 200, align: 'center' as const },
];

const submitRecordsList = reactive([
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
  {
    submitRes: 1,
    runtime: '8ms',
    consumption: '10.78MB',
    language: 'C++',
    submitTime: '2022/07/07 21:06',
  },
]);
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
  // align-items: center;
  width: 100%;
  .submit-records-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .submit-records-list {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
