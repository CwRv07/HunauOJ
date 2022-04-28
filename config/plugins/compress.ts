/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 17:16:40
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-04-28 16:31:06
 * @Description: gzip配置
 *               优化vite-plugin-compression插件
 * @Email: Rv_Jiang@outlook.com
 */
import compressPlugin from 'vite-plugin-compression';
export function configCompressPlugin(deleteOriginFile = false) {
  return compressPlugin({
    verbose: false, // 是否在控制台输出压缩结果
    disable: false, // 是否禁用
    threshold: 10240, // 文件容量大于这个值进行压缩，它将被压缩，单位为b
    algorithm: 'gzip', // 压缩算法 可选 ['gzip','brotliCompress' ,'deflate','deflateRaw']
    ext: '.gz', // 生成的压缩包后缀
    deleteOriginFile,
  });
}
