/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 19:45:01
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 10:31:13
 * @Description:查询角色权限
 * @Email: ndliujunqi@outlook.com
 */
import { BASE_URL } from '..';
import OLPRequest from '@/network/request';

export const queryRolePermissionsById = (roleId: number) => {
  return OLPRequest({
    url: BASE_URL + `/permissionRole/${roleId}`,
    method: 'GET',
  });
};
