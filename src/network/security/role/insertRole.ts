/*
 * @Author: ND_LJQ
 * @Date: 2022-07-16 11:24:40
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 14:02:04
 * @Description:新增角色
 * @Email: ndliujunqi@outlook.com
 */

import MODULE_URL from '.';
import OLPRequest from '@/network/request';

export const insertRole = (roleName: string) => {
  return OLPRequest({
    url: MODULE_URL + '',
    method: 'POST',
    data: {
      roleName,
    },
  });
};
