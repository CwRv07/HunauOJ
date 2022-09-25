/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-01 18:56:23
<<<<<<< HEAD
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-09-25 17:37:40
=======
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-09-16 10:24:08
>>>>>>> f9cb8eb67be8b743821f9e0eebddaf71e152ffcc
 * @Description: 公开路由表
 * @Email: Rv_Jiang@outlook.com
 */
import { RouteRecordRaw } from 'vue-router';
import teamRouter from './teanRouter';

const stateRouter: RouteRecordRaw[] = [
  /* 首页-start */
  {
    path: '/oj',
    redirect: '/index',
  },
  {
    path: '/index',
    component: () => import('@/views/frontEnd/index/index.vue'),
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
    component: () => import('@/views/frontEnd/notFound/notFound.vue'),
    meta: { title: 'notFound' },
  },
  /* notFound匹配路由-end */
  /* problems-start */
  {
    path: '/problem',
    component: () => import('@/views/frontEnd/problem/problem.vue'),
    meta: { title: 'problem' },
    children: [],
  },
  {
    path: '/problem/:id',
    component: () => import('@/views/frontEnd/problemDetail/problemDetail.vue'),
    meta: { title: 'problemEdit' },
    children: [],
  },
  /* problems-end */
  /* team-start */
  {
    path: '/team',
    component: () => import('@/views/frontEnd/team/team.vue'),
    meta: { title: 'team' },
    children: [],
  },
  {
    path: '/team/:id',
    component: () => import('@/views/frontEnd/teamDetail/teamDetail.vue'),
    meta: { title: 'teamDetail' },
    children: teamRouter,
  },
  /* team-end */
  /* competition-start */
  {
    path: '/competition',
    component: () => import('@/views/frontEnd/competition/competition.vue'),
    meta: { title: 'competition' },
    children: [],
  },
  {
    path: '/competition/:id',
    component: () => import('@/views/frontEnd/competitionDetail/competitionDetail.vue'),
    meta: { title: 'competitionDetail' },
    children: [],
  },
  /* competition-end */
  /* 以下为测试路由 */
  {
    path: '/markdownTest',
    component: () => import('@/views/frontEnd/markdownTest/markdownTest.vue'),
  },
  {
    path: '/user',
    component: () => import('@/views/frontEnd/userHome/userHome.vue'),
  },
];

export default stateRouter;
