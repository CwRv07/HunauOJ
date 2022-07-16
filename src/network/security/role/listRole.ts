/*
 * @Author: ND_LJQ
 * @Date: 2022-07-16 11:53:10
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-07-16 12:00:12
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */
import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

interface selectListRoleParams {
  pageNum: number;
  pageSize: number;
  roleName?: string;
}

export const selectListRole = (data: selectListRoleParams) => {
  return OLPRequest({
    url: MODULE_URL + `/roles/${data.pageNum}/${data.pageSize}`,
    method: 'GET',
  });
};
