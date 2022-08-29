/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 19:25:16
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 10:45:50
 * @Description:为用户移除角色
 * @Email: ndliujunqi@outlook.com
 */
import { BASE_URL } from '..';
import OLPRequest from '@/network/request';

interface deleteRolesForUserParams {
  // 要删除的角色ID集合，测试形式：5,6,7...
  roleIds: Array<number>;
  // 目标用户ID
  userId: string;
}

export const deleteRolesForUser = (data: deleteRolesForUserParams) => {
  return OLPRequest({
    url: BASE_URL + `/roleUser`,
    method: 'DELETE',
    data,
  });
};
