/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-01 18:56:23
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-05-10 20:27:46
 * @Description: 公开路由表
 * @Email: Rv_Jiang@outlook.com
 */
import { RouteRecordRaw } from 'vue-router';
const stateRouter: RouteRecordRaw[] = [
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
  /* notFound匹配路由 */
  // {
  //   path: '/:pathMatch(.*)*',
  //   props: {
  //     cause: 404,
  //   },
  //   redirect: '/notFound',
  // },
  {
    path: '/notFound',
    name: 'notFound',
    component: () => import('@/views/notFound/notFound.vue'),
    meta: { title: 'notFound' },
  },
  {
    path: '/markdownTest',
    name: 'markdown',
    component: () => import('@/views/markdownTest/markdownTest.vue'),
  },
];

export default stateRouter;
