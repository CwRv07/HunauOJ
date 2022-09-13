<template>
  <div id="team">
    <!-- 团队筛选器 -->
    <header class="team-select">
      <el-card>
        <!-- 题目名称 -->
        <el-autocomplete
          class="team-name-select"
          v-model="teamNameSelect"
          clearable
          placeholder="团队搜索"
          prefix-icon="Search"
        />
        <!-- /题目名称 -->
      </el-card>
    </header>
    <!-- 团队展示框 -->
    <main class="team-display">
      <el-row :gutter="20">
        <el-col v-for="item in teamListData" :key="item.tId" :md="8" :sm="12" :xs="24">
          <team-card :team-data="item" />
        </el-col>
      </el-row>
    </main>
    <footer class="team-pagination">
      <el-pagination
        v-model:currentPage="pagination.currentPage"
        v-model:page-size="pagination.pageSize"
        :background="true"
        :total="pagination.total"
        layout="prev, pager, next"
        @current-change="pagination.currentChange"
      />
    </footer>
  </div>
</template>

<script setup lang="ts" name="team">
import TeamCard from './components/teamCard.vue';
import { TeamAPI } from '@/network';
import { TeamListParam } from '@/utils/type/param';
import { TeamData } from '@/utils/type/data';

/* 数据初始化-start */
onMounted(() => {
  getTeamListData();
});
/* 数据初始化-end */

/* 筛选器-start */

// 标题筛选
const teamNameSelect = ref('');

/* /筛选器-end */

/* 分页器-start */

const currentChange = (pageNum: number) => {
  getTeamListData();
};
const pagination = reactive({
  currentPage: 1,
  pageSize: 12,
  total: 10,
  currentChange,
});

/* 分页器-end */

/* 团队数据-start */

const getTeamListData = async () => {
  const params: TeamListParam = {
    pageNum: pagination.currentPage || 1,
  };
  params.pageSize = pagination.pageSize || 10;
  params.teamName = teamNameSelect.value || '';
  const list = await TeamAPI.list(params);
  // 数据
  teamListData.length = 0;
  teamListData.push(...list.records);
  // 分页器
  pagination.currentPage = list.current;
  pagination.pageSize = list.size;
  pagination.total = list.total;
};
// 团队数据容器
const teamListData = reactive<TeamData[]>([]);
/* 团队数据-end */
</script>

<style lang="scss" scoped>
#team {
  @include body-padding($body-padding-list);
  margin-top: 30px;

  /* 团队筛选器 */
  .team-select {
    margin-bottom: 10px;
  }

  /* 团队展示框 */
  .team-display {
  }

  /* 团队分页器 */
  .team-pagination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
