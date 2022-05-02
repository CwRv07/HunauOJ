/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-02 07:15:42
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-02 08:13:49
 * @Description: mapGetters
 * @Email: Rv_Jiang@outlook.com
 */
import useMapper from './useMapper';
import { mapGetters } from 'vuex';

// function useGetters(mapper: string[] | { [key: string]: any }): any;
// function useGetters(mapper: string[] | { [key: string]: any }, namespace?: string): any;

function useGetters(namespace: string, mapper: string[] | { [key: string]: any }) {
  return useMapper(mapGetters, namespace, mapper);
}
export default useGetters;
