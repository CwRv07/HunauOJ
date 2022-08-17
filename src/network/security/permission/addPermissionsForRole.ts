/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 19:34:36
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 19:37:13
 * @Description:为角色添加权限
 * @Email: ndliujunqi@outlook.com
 */

import { BASE_URL } from '..';
import OLPRequest from '@/network/request';

interface addPermissionsForRoleParams {
  // 	要增加的权限ID集合，测试形式：5,6,7...
  permissionIds: Array<number>;
  // 要增加的角色ID
  roleId: string;
}

export const addRolesForUserParams = (data: addPermissionsForRoleParams) => {
  return OLPRequest({
    url: BASE_URL + `/permissionRole`,
    method: 'PUT',
    data,
  });
};
