/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-01 18:56:23
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-07-07 10:37:23
 * @Description: 公开路由表
 * @Email: Rv_Jiang@outlook.com
 */
import { RouteRecordRaw } from 'vue-router';
const stateRouter: RouteRecordRaw[] = [
  /* 首页-start */
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: () => import('@/views/index/index.vue'),
    meta: { title: 'index' },
  },
  /* 首页-end */
  /* notFound匹配路由-start */
  {
    path: '/:pathMatch(.*)*',
    props: {
      cause: 404,
    },
    redirect: '/notFound',
  },
  {
    path: '/notFound',
    component: () => import('@/views/notFound/notFound.vue'),
    meta: { title: 'notFound' },
  },
  /* notFound匹配路由-end */
  /* problems-start */
  {
    path: '/problem',
    component: () => import('@/views/problem/problem.vue'),
    meta: { title: 'problem' },
    children: [],
  },
  {
    path: '/problems/:id',
    component: () => import('@/views/problemDetail/problemDetail.vue'),
    meta: { title: 'problemEdit' },
    children: [],
  },
  /* problems-end */
  /* team-start */
  {
    path: '/team',
    component: () => import('@/views/team/team.vue'),
    meta: { title: 'team' },
    children: [],
  },
  {
    path: '/team/:id',
    component: () => import('@/views/teamDetail/teamDetail.vue'),
    meta: { title: 'teamDetail' },
    children: [],
  },
  /* team-end */
  /* competition-start */
  {
    path: '/competition',
    component: () => import('@/views/competition/competition.vue'),
    meta: { title: 'competition' },
    children: [],
  },
  {
    path: '/competition/:id',
    component: () => import('@/views/competitionDetail/competitionDetail.vue'),
    meta: { title: 'competitionDetail' },
    children: [],
  },
  /* competition-end */
  /* 以下为测试路由 */
  {
    path: '/markdownTest',
    component: () => import('@/views/markdownTest/markdownTest.vue'),
  },
  {
    path: '/test',
    component: () => import('@/views/test/test.vue'),
  },
];

export default stateRouter;
