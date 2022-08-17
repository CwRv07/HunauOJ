/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 18:02:56
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 18:18:44
 * @Description:根据id删除权限
 * @Email: ndliujunqi@outlook.com
 */
import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

export const selectPermission = (id: number) => {
  return OLPRequest({
    url: MODULE_URL + `/${id}`,
    method: 'DELETE',
  });
};
