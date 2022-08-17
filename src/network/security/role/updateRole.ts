/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 17:25:41
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 18:08:39
 * @Description:修改角色
 * @Email: ndliujunqi@outlook.com
 */
import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

export const updateRoles = (roleName: string, rid: number) => {
  return OLPRequest({
    url: MODULE_URL,
    method: 'PUT',
    data: {
      roleName,
      rid,
    },
  });
};
