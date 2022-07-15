/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 15:56:16
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-07-10 17:17:05
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
    base: './',
    plugins: createVitePlugins(isBuild),
    build: createViteBuild(isBuild),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/public.scss" as *;
          `,
        },
      },
    },
  };
};
