/*
 * @Author: ND_LJQ
 * @Date: 2022-07-16 11:35:15
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-07-16 11:38:04
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

export const selectRoleById = (data: number) => {
  return OLPRequest({
    url: MODULE_URL + `/role/${data}`,
    method: 'GET',
  });
};
