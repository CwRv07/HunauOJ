/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 18:04:26
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 13:25:50
 * @Description:返回所有权限
 * @Email: ndliujunqi@outlook.com
 */
import { BASE_URL } from '..';
import OLPRequest from '@/network/request';

interface permissionsListParams {
  // 页码
  pageNum: number;
  // 每页数量
  pageSize: number;
}

export const queryPermissionList = (data: permissionsListParams) => {
  return OLPRequest({
    url: BASE_URL + `/permissions`,
    method: 'GET',
    data,
  });
};
