/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 17:52:12
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-04-27 17:52:12
 * @Description: 
 * @Email: Rv_Jiang@outlook.com
 */
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
const routerHistory = createWebHistory()
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
const router = createRouter({
  history: routerHistory,
  routes: [
  ]
})
 
export default router