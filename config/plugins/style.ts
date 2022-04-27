/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 17:18:28
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-04-27 17:18:28
 * @Description: styleImport配置
 *               优化vite-plugin-style-import插件
 * @Email: Rv_Jiang@outlook.com
 */
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
export function configStyleImportPlugin() {
  return createStyleImportPlugin({ resolves: [ElementPlusResolve()] })
}