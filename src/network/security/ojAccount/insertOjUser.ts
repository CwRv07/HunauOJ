/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 10:09:43
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-07-15 11:10:55
 * @Description:用户注册
 * @Email: ndliujunqi@outlook.com
 */

import { MODULE_URL } from '.';
import OLPRequest from '../../request';

interface insertOjUserParams {
  //vjudge交题的oj名称
  oj: string;
  // vjudge的登录的账号
  username: string;
  // vjudge的登录的密码
  password: string;
}

const userRegister = (data: insertOjUserParams) => {
  return OLPRequest({
    url: MODULE_URL,
    method: 'POST',
    data,
  });
};

export default userRegister;
