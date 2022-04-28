/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 17:19:05
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-04-28 21:30:00
 * @Description: unplugin配置
 *               优化unplugin-vue-components和unplugin-auto-import插件
 * @Email: Rv_Jiang@outlook.com
 */
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
export function configAutoImportPlugin() {
  return AutoImport({
    imports: ['vue'],
    resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    // 指定文件生成路径
    dts: 'config/plugins/unplugin/auto-imports.d.ts',
  });
}
export function configVueComponentsPlugin() {
  return Components({
    // 用于搜索组件的目录的相对路径。
    dirs: ['src/components'],
    resolvers: [
      ElementPlusResolver({
        importStyle: 'sass', // 非官方，必要
      }),
    ],
    // 指定文件生成路径
    dts: 'config/plugins/unplugin/components.d.ts',
    // 组件的有效文件扩展名。
    extensions: ['vue'],
    // 允许子目录作为组件的命名空间前缀。
    directoryAsNamespace: false,
    deep: true,
  });
}
