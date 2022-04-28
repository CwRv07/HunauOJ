/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 17:18:28
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-04-28 17:04:21
 * @Description: styleImport配置
 *               优化vite-plugin-style-import插件
 * @Email: Rv_Jiang@outlook.com
 */
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import';
export function configStyleImportPlugin() {
  return createStyleImportPlugin({ resolves: [ElementPlusResolve()] });
}
