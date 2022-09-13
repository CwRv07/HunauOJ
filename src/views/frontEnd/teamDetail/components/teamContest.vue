<template>
  <section id="teamContest">
    <section class="contest-display">{{ contestData }}</section>

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

/* 比赛数据 */
const teamData = inject<Ref<TeamData>>('teamData');

const contestData = reactive<ContestData[]>([]);

watch(
  () => teamData?.value,
  async () => {
    if (teamData?.value.tId) {
      const prarms: ContestListByTeamIdParam = {
        teamId: teamData.value.tId,
        pageNum: pagination.currentPage,
        pageSize: 10,
      };
      const data = await ContestAPI.listByTeamId(prarms);
      console.log(data.records[0]);
      // 比赛数据
      contestData.length = 0;
      contestData.push(...data.records);
      // 分页器
      pagination.currentPage = data.current;
      pagination.total = data.total;
    }
  }
);
// const contestData = computed(async () => {
//   if (teamData?.tId) {
//     const prarms: ContestListByTeamIdParam = {
//       pageNum: pagination.currentPage,
//       pageSize: 10,
//       teamId: teamData.tId,
//     };
//     const data = await ContestAPI.listByTeamId(prarms);
//     console.log(data.records);
//     return data;
//   }
// });

/* 分页器 */
const pagination = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 10,
  currentChange: (data: number) => {
    console.log(data);
  },
});
</script>

<style lang="scss" scoped></style>
