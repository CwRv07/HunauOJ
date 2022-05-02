/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 15:56:16
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-02 11:16:37
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { UserConfig, ConfigEnv } from 'vite';
import { createVitePlugins, createViteBuild } from './config';
// 路径别名
const path = require('path');
// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  return {
    plugins: createVitePlugins(isBuild),
    build: createViteBuild(isBuild),
    resolve: {
      // 配置路径别名
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `
          //   @use "@/assets/styles/element/index.scss" as *;
          // `,
          additionalData: `
            @use "@/assets/styles/element/index.scss" as *;
          `,
        },
      },
    },
  };
};
