/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 15:56:16
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-04-28 15:38:57
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
    };
};
