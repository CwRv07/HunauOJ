/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 18:09:50
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-01 17:44:40
 * @Description: Vuex配置文件
 * @Email: Rv_Jiang@outlook.com
 */
import { createStore } from 'vuex';

// 动态获取Store模块
const modulesFiles = import.meta.globEager('./modules/*.ts');
const modules: any = {};
Object.keys(modulesFiles).forEach(item => {
  const moduleName = item.replace(/^\.\/modules\/(.*)\.\w+$/, '$1');
  modules[moduleName] = modulesFiles[item].default;
});
console.log(modules);

// 创建一个新的 store 实例
export default createStore({
  modules,
});
