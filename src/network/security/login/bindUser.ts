/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 11:07:34
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 11:25:40
 * @Description:第三方账户的绑定，要把前面的发送过去的uuid和source返回过来
 * @Email: ndliujunqi@outlook.com
 */

import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

interface bindParams {
  password: string;
  username: string;
  source?: string;
  uuid?: string;
}

export const bindUser = (data: bindParams) => {
  return OLPRequest({
    url: MODULE_URL + '/aliLogin',
    method: 'GET',
    data,
  });
};
