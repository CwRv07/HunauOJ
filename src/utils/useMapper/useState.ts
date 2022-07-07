/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-02 07:14:54
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-02 08:03:55
 * @Description: mapState
 * @Email: Rv_Jiang@outlook.com
 */
import useMapper from './useMapper';
import { mapState } from 'vuex';

const useState = (namespace: string, mapper: string[] | { [key: string]: any }) => {
  return useMapper(mapState, namespace, mapper);
};

export default useState;
