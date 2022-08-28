/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 18:16:14
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 12:02:01
 * @Description:通过用户id查询用户信息
 * @Email: ndliujunqi@outlook.com
 */

import { MODULE_URL } from '.';
import OLPRequest from '../../request';

export const selectUserByUserId = (id: number) => {
  return OLPRequest({
    url: MODULE_URL + `/${id}`,
    method: 'GET',
  });
};
