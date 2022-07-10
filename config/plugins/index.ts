/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 17:03:17
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-07-10 17:12:26
 * @Description: 优化vite.config.ts在根目录创建结构
 * @Email: Rv_Jiang@outlook.com
 */
import vue from '@vitejs/plugin-vue';

// setup name 增强插件
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
// 为打包后的文件提供传统浏览器兼容性支持
import legacy from '@vitejs/plugin-legacy';
// Vite 的依赖预优化
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';
// 压缩插件
import { configCompressPlugin } from './compress';
// 图片压缩
import { configImageminPlugin } from './imagemin';
// Element Plus 按需导入插件
import { configStyleImportPlugin } from './style';
// API自动导入 && 自动导入插件
import { configAutoImportPlugin, configVueComponentsPlugin } from './unplugin';

export function createVitePlugins(isBuild: boolean) {
  const plugins = [
    vue(),
    // setup name 增强插件
    vueSetupExtend(),
    // 为打包后的文件提供传统浏览器兼容性支持
    legacy({
      // 以 IE11以上（不兼容IE11） 为目标时，您还需要regenerator-runtime
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    PkgConfig(),
    OptimizationPersist(),
  ];
  if (isBuild) {
    // vite-plugin-compress
    plugins.push(configCompressPlugin());
    // vite-plugin-imagemin
    plugins.push(configImageminPlugin());
  }
  // vite-plugin-style-import
  // plugins.push(configStyleImportPlugin());
  // unplugin-auto-import
  plugins.push(configAutoImportPlugin());
  // unplugin-vue-components
  plugins.push(configVueComponentsPlugin());
  return plugins;
}
