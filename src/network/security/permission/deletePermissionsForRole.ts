/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 19:38:46
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 19:42:20
 * @Description:删除角色权限
 * @Email: ndliujunqi@outlook.com
 */
import { BASE_URL } from '..';
import OLPRequest from '@/network/request';

interface deletePermissionsForRoleParams {
  // 	要移除的权限ID集合，测试形式：5,6,7...
  permissionIds: Array<number>;
  // 目标角色ID
  roleId: string;
}

export const addRolesForUserParams = (data: deletePermissionsForRoleParams) => {
  return OLPRequest({
    url: BASE_URL + `/permissionRole`,
    method: 'DELETE',
    data,
  });
};
