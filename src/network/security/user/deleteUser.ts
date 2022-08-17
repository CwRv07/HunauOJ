/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 11:52:29
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 12:00:54
 * @Description:删除用户
 * @Email: ndliujunqi@outlook.com
 */

import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

export const deleteUser = (id: number) => {
  return OLPRequest({
    url: MODULE_URL + `/${id}`,
    method: 'DELETE',
  });
};
