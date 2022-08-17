/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 15:56:16
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-08-17 11:48:48
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */
import { UserConfig, loadEnv, ConfigEnv } from 'vite';
import { createVitePlugins, createViteServer, createViteBuild } from './config';
// 路径别名
const path = require('path');
// 环境变量工具引入
import { wrapperEnv } from './config/utils';

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  //环境变量-全局路径
  const env = loadEnv(mode, process.cwd());
  const viteEnv = wrapperEnv(env);
  const { VITE_PUBLIC_PATH } = viteEnv;
  return {
    base: VITE_PUBLIC_PATH,
    plugins: createVitePlugins(isBuild),
    // server: createViteServer(viteEnv),
    build: createViteBuild(isBuild),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'server.xxpure.ren:9527',
    //       changeOrigin: true,
    //       rewrite: path => path.replace(/^\/api/, ''),
    //     },
    //   },
    // },
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
