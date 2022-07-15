/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 10:41:04
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-07-15 11:11:06
 * @Description:查询单个用户
 * @Email: ndliujunqi@outlook.com
 */

import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

const selectOjUser = (data: number) => {
  return OLPRequest({
    url: MODULE_URL + `/${data}`,
    method: 'GET',
  });
};

export default selectOjUser;
