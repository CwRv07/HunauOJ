/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 17:34:19
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 17:38:08
 * @Description:删除角色
 * @Email: ndliujunqi@outlook.com
 */

import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

export const deleteRole = (id: number) => {
  return OLPRequest({
    url: MODULE_URL + `/${id}`,
    method: 'DELETE',
  });
};
