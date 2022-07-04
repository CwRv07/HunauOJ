<!--
 * @Author: Rv_Jiang
 * @Date: 2022-07-04 10:12:58
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-07-04 12:32:22
 * @Description: 比赛
 * @Email: Rv_Jiang@outlook.com
-->
<template>
  <main id="competition">
    <!-- 筛选器板块 -->
    <header class="competition-select">
      <el-card>
        <el-row :gutter="20">
          <el-col :md="6" :sm="8" :xs="10">
            <el-select class="status-select" clearable v-model="statusSelect.active" placeholder="状态">
              <el-option v-for="item in statusSelect.list" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-col>
          <el-col :md="10" :sm="12" :xs="14">
            <el-autocomplete class="title-select" v-model="titleSelect" :fetch-suggestions="titleQuerySearch" clearable placeholder="题目搜索" prefix-icon="Search" />
          </el-col>
        </el-row>
      </el-card>
    </header>
    <!-- 展示板块 -->
    <main class="competition-display">
      <competition-card />
    </main>
    <!-- 分页板块 -->
    <footer class="competiton-pagination">
      <el-pagination
        v-model:currentPage="pagination.currentPage"
        v-model:page-size="pagination.pageSize"
        :background="true"
        :total="pagination.total"
        layout="prev, pager, next"
        @current-change="changePage"
      />
    </footer>
  </main>
</template>

<script setup lang="ts" name="competition">
import competitionCard from './components/competitionCard.vue';
/* 状态筛选器 */
const statusSelect = reactive({
  active: '',
  list: [
    { label: '未开始', value: 'watting' },
    { label: '进行中', value: 'going' },
    { label: '已结束', value: 'over' },
  ],
});
/* /状态筛选器 */

/* 标题筛选器 */
const titleSelect = ref('');
const titleQuerySearch = () => {
  return;
};
/* /标题筛选器 */

/* 分页模块 */
const pagination = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 50,
});
const changePage = (page: number) => {
  return;
};
/* /分页模块 */
</script>

<style lang="scss" scoped>
#competition {
  @include body-padding($body-padding-list);
  margin-top: 30px;

  /* 筛选器板块 */
  .competition-select {
    .status-select {
      margin-bottom: 10px;
    }
    .title-select {
      width: 100%;
    }
  }
}
</style>
