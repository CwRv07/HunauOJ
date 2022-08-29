/*
 * @Author: ND_LJQ
 * @Date: 2022-07-17 09:41:37
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 13:24:11
 * @Description:用户注销
 * @Email: ndliujunqi@outlook.com
 */

import { BASE_URL } from '..';
import OLPRequest from '@/network/request';

export const userLogout = (token: string) => {
  return OLPRequest({
    url: BASE_URL + '/logout',
    method: 'POST',
    headers: {
      token,
    },
  });
};
