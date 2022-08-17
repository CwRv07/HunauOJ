/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 12:28:10
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 16:58:06
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import { BASE_URL } from '..';
import OLPRequest from '@/network/request';

export const queryUsers = () => {
  return OLPRequest({
    url: BASE_URL + '/users',
    method: 'GET',
  });
};
