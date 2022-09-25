<template>
  <section id="teamContest">
    <section class="contest-display">
      <olp-table-group :props="dataProps" :data="contestData">
        <!-- 名称 -->
        <template #cName="{ value }">
          <span class="name">
            {{ value }}
          </span>
        </template>

        <!-- 描述 -->
        <template #cDescription="{ value }">
          <span class="description">
            {{ value }}
          </span>
        </template>

        <!-- 事件状态 -->
        <template #cStatu="{ row }">
          <template v-if="Date.parse(row.cStart) < Date.now()">
            <el-tag type="info">未开始</el-tag>
          </template>
          <template v-else-if="Date.now() < Date.parse(row.cEnd)">
            <el-tag type="danger">已结束</el-tag>
          </template>
          <template v-else>
            <el-tag type="success">进行中</el-tag>
          </template>
        </template>

        <!-- 权限 -->
        <template #cAuth="{ value }">
          <template v-if="value === 0">
            <el-tag type="success">公开</el-tag>
          </template>
          <template v-else>
            <el-tag type="danger">私有</el-tag>
          </template>
        </template>

        <!-- 模式 -->
        <template #cType="{ value }">
          <template v-if="value === 0">
            <el-tag type="info">ACM</el-tag>
          </template>
          <template v-else>
            <el-tag type="info">OI</el-tag>
          </template>
        </template>
      </olp-table-group>
    </section>

    <footer>
      <el-pagination
        v-model:currentPage="pagination.currentPage"
        v-model:page-size="pagination.pageSize"
        :hide-on-single-page="true"
        :background="true"
        :total="pagination.total"
        layout="prev, pager, next"
        @current-change="pagination.currentChange"
      />
    </footer>
  </section>
</template>

<script setup lang="ts" name="teamContest">
import { ContestAPI } from '@/network';
import { Ref } from 'vue';
import { ContestListByTeamIdParam } from '@/utils/type/param';
import { ContestData, TeamData } from '@/utils/type/data';

/* 比赛数据-start */
const teamData = inject<Ref<TeamData>>('teamData');

const contestData = reactive<ContestData[]>([]);
// 请求比赛数据封装函数，请确保teamData有值
const getContestData = async () => {
  const prarms: ContestListByTeamIdParam = {
    teamId: (teamData as Ref<TeamData>).value.tId,
    pageNum: pagination.currentPage,
    pageSize: 10,
  };
  const data = await ContestAPI.listByTeamId(prarms);
  // 比赛数据
  contestData.length = 0;
  contestData.push(...data.records);
  // 分页器
  pagination.currentPage = data.current;
  pagination.total = data.total;
};

// 数据表格渲染
const dataProps = [
  {
    prop: 'cName',
    label: '名称',
    width: 80,
    fixed: true,
    align: 'center' as const,
    overflow: true,
  },
  {
    prop: 'cDescription',
    label: '描述',
    width: 150,
    overflow: true,
  },
  {
    prop: 'cStatu',
    label: '状态',
    align: 'center' as const,
    width: 70,
  },
  {
    prop: 'cAuth',
    label: '权限',
    align: 'center' as const,
    width: 60,
  },
  {
    prop: 'cType',
    label: '模式',
    align: 'center' as const,
    width: 60,
  },
];
/* 比赛数据-end */

/* 分页器-start */
const pagination = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 10,
  currentChange: (data: number) => {
    console.log(data);
  },
});
/* 分页器-end */

/* 数据初始化 */
watch(
  () => teamData?.value,
  async () => {
    if (teamData?.value.tId) {
      getContestData();
    }
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss" scoped>
#teamContest {
  .contest-display {
    /* 表格样式修改 */
    :deep(.el-table__row) {
      cursor: pointer;
      .cell {
        padding: 0 5px;
      }
    }
    /* 名称文本 */
    .name {
      font-weight: bold;
    }
    /* 描述文本 */
    .description {
      color: var(--el-text-color-secondary);
    }
  }
}
</style>
