/*
 * @Author: ND_LJQ
 * @Date: 2022-07-16 12:05:45
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 19:45:33
 * @Description:返回权限
 * @Email: ndliujunqi@outlook.com
 */

import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

export const queryPermission = (id: number) => {
  return OLPRequest({
    url: MODULE_URL + `/${id}`,
    method: 'GET',
  });
};
