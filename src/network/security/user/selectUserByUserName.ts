/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 18:16:14
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-07-15 18:26:58
 * @Description:通过用户名查询用户信息
 * @Email: ndliujunqi@outlook.com
 */

import { MODULE_URL } from '.';
import OLPRequest from '../../request';

export const selectUserByUserName = (data: string) => {
  return OLPRequest({
    url: MODULE_URL + `/selectUserByUsername/${data}`,
  });
};
