/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-28 10:19:32
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-04-28 10:21:57
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { createRouter, createWebHistory } from 'vue-router';
const routerHistory = createWebHistory();
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const router = createRouter({
    history: routerHistory,
    routes: [],
});

export default router;
