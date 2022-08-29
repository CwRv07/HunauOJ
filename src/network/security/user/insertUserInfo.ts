/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 18:29:33
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 14:48:22
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

const addUser = (data: insertUserInfoParams) => {
  return OLPRequest({
    url: BASE_URL + '/useradd',
    method: 'POST',
    data,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export default addUser;
