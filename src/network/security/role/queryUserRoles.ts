/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 19:29:20
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 19:30:27
 * @Description:查询用户角色
 * @Email: ndliujunqi@outlook.com
 */
import { BASE_URL } from '..';
import OLPRequest from '@/network/request';

export const addRolesForUserParams = (id: number) => {
  return OLPRequest({
    url: BASE_URL + `/roleUser/${id}`,
    method: 'GET',
  });
};
