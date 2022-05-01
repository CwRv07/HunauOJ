/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-28 10:19:32
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-05-01 17:53:25
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/index/index.vue';
const routerHistory = createWebHistory();
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const router = createRouter({
  history: routerHistory,
  routes: [{ path: '/', component: Home }],
});

export default router;
