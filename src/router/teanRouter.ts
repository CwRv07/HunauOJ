import { RouteRecordRaw } from 'vue-router';
const teamRouter: RouteRecordRaw[] = [
  {
    path: 'index',
    component: () => import('@/views/frontEnd/teamDetail/components/teamIndex.vue'),
    meta: { title: 'teamIndex' },
  },
  {
    path: 'member',
    component: () => import('@/views/frontEnd/teamDetail/components/teamMember.vue'),
    meta: { title: 'teamIndex' },
  },
  {
    path: 'contest',
    component: () => import('@/views/frontEnd/teamDetail/components/teamContest.vue'),
    meta: { title: 'teamIndex' },
  },
];

export default teamRouter;
