/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 18:29:33
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 10:58:55
 * @Description:增加用户
 * @Email: ndliujunqi@outlook.com
 */
import { BASE_URL } from '..';
import OLPRequest from '@/network/request';

interface insertUserInfoParams {
  // 昵称
  nickname: string;
  // 密码
  password: string;
  // 用户名
  username: string;
}
const headeradd = '';

export const addUser = (data: insertUserInfoParams) => {
  return OLPRequest({
    url: BASE_URL + '/useradd',
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
