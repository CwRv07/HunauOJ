/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 11:39:43
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 11:02:09
 * @Description:用户登录
 * @Email: ndliujunqi@outlook.com
 */

import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

interface loginParams {
  username: string;
  password: string;
}

export const userLogin = (data: loginParams) => {
  return OLPRequest({
    url: MODULE_URL + '/login',
    method: 'POST',
    data,
  });
};
