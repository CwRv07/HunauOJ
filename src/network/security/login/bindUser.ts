/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 11:07:34
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 13:25:56
 * @Description:第三方账户的绑定，要把前面的发送过去的uuid和source返回过来
 * @Email: ndliujunqi@outlook.com
 */

import { BASE_URL } from '..';
import OLPRequest from '@/network/request';

interface bindParams {
  password: string;
  username: string;
  source?: string;
  uuid?: string;
}

export const bindUser = (data: bindParams) => {
  return OLPRequest({
    url: BASE_URL + '/aliLogin',
    method: 'GET',
    data,
  });
};
