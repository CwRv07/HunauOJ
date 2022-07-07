/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-02 07:17:32
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-02 07:58:50
 * @Description: 对Vuex中mapper封装
 * @Email: Rv_Jiang@outlook.com
 */

import { computed } from 'vue';
import store from '@/store';

export default function useMapper(
  mapperFn: (...args: any) => any,
  namespace: string,
  mapper: string[] | { [key: string]: any }
) {
  let storeFns: { [key: string]: any };
  if (namespace) {
    storeFns = mapperFn(namespace, mapper);
  } else {
    storeFns = mapperFn(mapper);
  }

  const storeState: { [key: string]: any } = {};
  Object.keys(storeFns).forEach(key => {
    const fn = storeFns[key].bind({ $store: store });
    storeState[key] = computed(fn);
  });

  return storeState;
}
