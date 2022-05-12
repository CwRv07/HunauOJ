/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-01 18:56:23
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-11 17:01:40
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
    name: 'index',
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
    name: 'notFound',
    component: () => import('@/views/notFound/notFound.vue'),
    meta: { title: 'notFound' },
  },
  /* notFound匹配路由-end */
  /* problems-start */
  {
    path: '/problems',
    name: 'problems',
    component: () => import('@/views/problems/problems.vue'),
    meta: { title: 'problems' },
    children: [],
  },
  /* problems-end */
  {
    path: '/markdownTest',
    name: 'markdown',
    component: () => import('@/views/markdownTest/markdownTest.vue'),
  },
];

export default stateRouter;
