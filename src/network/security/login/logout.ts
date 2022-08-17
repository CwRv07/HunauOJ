/*
 * @Author: ND_LJQ
 * @Date: 2022-07-17 09:41:37
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 17:03:00
 * @Description:用户注销
 * @Email: ndliujunqi@outlook.com
 */

import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

export const userLogout = (token: string) => {
  return OLPRequest({
    url: MODULE_URL + '/logout',
    method: 'POST',
    headers: {
      token,
    },
  });
};
