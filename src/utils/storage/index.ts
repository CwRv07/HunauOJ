/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-01 15:27:46
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-01 17:37:55
 * @Description: Storage工具封装类
 * @Email: Rv_Jiang@outlook.com
 */
const storage = window.localStorage;

export default {
  /**
   * @description: save value to localStorage
   * @param {string} key
   * @param {unknown} val
   * @return {*}
   */
  set(key: string, val: unknown): void {
    storage.setItem(key, JSON.stringify(val));
  },

  /**
   * @description: get value by localStorage
   * @param {string} key
   * @return {*}
   */
  get(key: string): unknown {
    return JSON.parse(storage.getItem(key) || 'null');
  },

  /**
   * @description: remove key from localStorage
   * @param {string} key
   * @return {*}
   */
  remove(key: string): void {
    storage.removeItem(key);
  },

  /**
   * @description: clear the localStorage
   * @param {*}
   * @return {*}
   */
  clearAll(): void {
    storage.clear();
  },
};
