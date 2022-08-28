/*
 * @Author: ND_LJQ
 * @Date: 2022-07-16 11:53:10
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 10:46:58
 * @Description:查询角色列表
 * @Email: ndliujunqi@outlook.com
 */
import { BASE_URL } from '..';
import OLPRequest from '@/network/request';

interface selectListRoleParams {
  pageNum: number;
  pageSize: number;
  roleName?: string;
}

export const queryListRole = (data: selectListRoleParams) => {
  return OLPRequest({
    url: BASE_URL + `/roles`,
    method: 'GET',
    data,
  });
};
