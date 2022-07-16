/*
 * @Author: ND_LJQ
 * @Date: 2022-07-16 11:24:40
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-07-16 11:29:13
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

export const insertRoleParams = (data: string) => {
  return OLPRequest({
    url: MODULE_URL + `/role`,
    method: 'POST',
    data,
  });
};
