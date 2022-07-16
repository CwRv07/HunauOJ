/*
 * @Author: ND_LJQ
 * @Date: 2022-07-16 11:43:23
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-07-16 11:51:38
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */
import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

interface addRolesForUserParams {
  roleIds: Array<number>;
  userId: string;
}

export const addRolesForUserParams = (data: addRolesForUserParams) => {
  return OLPRequest({
    url: MODULE_URL + `/roleForUser`,
    method: 'POST',
    data,
  });
};
