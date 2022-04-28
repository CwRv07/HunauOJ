/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 15:56:16
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-04-27 18:10:48
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { createApp } from 'vue';
import App from './App.vue';
// 解决API自动导入插件VSCode报错问题的插件
import 'vue-global-api';
// vue-router@4
import router from '@/router';
// vuex@4
import store from '@/store';

createApp(App).use(router).use(store).mount('#app');
