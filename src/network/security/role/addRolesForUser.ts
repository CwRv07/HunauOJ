/*
 * @Author: ND_LJQ
 * @Date: 2022-07-16 11:43:23
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 19:37:43
 * @Description:为用户添加角色
 * @Email: ndliujunqi@outlook.com
 */
import { BASE_URL } from '..';
import OLPRequest from '@/network/request';

interface addRolesForUserParams {
  // 要增加的角色ID集合，测试形式：5,6,7...
  roleIds: Array<number>;
  // 要增加的用户ID
  userId: string;
}

export const addRolesForUserParams = (data: addRolesForUserParams) => {
  return OLPRequest({
    url: BASE_URL + `/roleUser`,
    method: 'PUT',
    data,
  });
};
