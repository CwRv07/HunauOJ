/*
 * @Author: ND_LJQ
 * @Date: 2022-07-16 12:05:45
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-07-16 12:08:19
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

export const selectPermission = (data: number) => {
  return OLPRequest({
    url: MODULE_URL + `/permission/${data}`,
    method: 'GET',
  });
};
