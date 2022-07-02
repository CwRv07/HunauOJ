/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-01 18:56:23
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-07-02 10:26:47
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
    path: '/problems',
    component: () => import('@/views/problems/problems.vue'),
    meta: { title: 'problems' },
    children: [],
  },
  {
    path: '/problems/:id',
    component: () => import('@/views/problemDetail/problemDetail.vue'),
    meta: { title: 'problemEdit' },
    children: [],
  },
  /* problems-end */
  {
    path: '/team',
    component: () => import('@/views/team/team.vue'),
    meta: { title: 'team' },
    children: [],
  },
  {
    path: '/markdownTest',
    component: () => import('@/views/markdownTest/markdownTest.vue'),
  },
];

export default stateRouter;
