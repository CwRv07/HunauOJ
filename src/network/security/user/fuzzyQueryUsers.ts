/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 12:05:47
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 14:09:08
 * @Description:模糊查询用户
 * @Email: ndliujunqi@outlook.com
 */

import MODULE_URL from '.';
import OLPRequest from '@/network/request';

interface fuzzyQueryParams {
  pageNum: number;
  pageSize: number;
  course?: string;
  nickname?: string;
  school?: string;
  username?: string;
}

const fuzzyQueryUsers = (data: fuzzyQueryParams) => {
  return OLPRequest({
    url: MODULE_URL + `/like`,
    method: 'GET',
    data,
  });
};

export default fuzzyQueryUsers;
