/*
 * @Author: Rv_Jiang
 * @Date: 2022-04-27 17:17:47
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-04-28 16:31:09
 * @Description: imagemin配置
 *               优化vite-plugin-imagemin插件
 * @Email: Rv_Jiang@outlook.com
 */
import viteImagemin from 'vite-plugin-imagemin';
export function configImageminPlugin() {
  const plugin = viteImagemin({
    gifsicle: {
      optimizationLevel: 7,
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 7,
    },
    mozjpeg: {
      quality: 20,
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4,
    },
    svgo: {
      plugins: [
        {
          name: 'removeViewBox',
        },
        {
          name: 'removeEmptyAttrs',
          active: false,
        },
      ],
    },
  });
  return plugin;
}
