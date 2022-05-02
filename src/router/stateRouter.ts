/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-01 18:56:23
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-02 09:04:13
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
  {
    path: '/notFound',
    name: 'notFound',
    component: () => import('@/views/notFound/notFound.vue'),
    meta: { title: 'notFound' },
  },
];

export default stateRouter;
