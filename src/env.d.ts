/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-28 16:09:33
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-04-28 16:30:32
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
