/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 17:54:02
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 13:29:23
 * @Description:根据id修改权限
 * @Email: ndliujunqi@outlook.com
 */
import MODULE_URL from '.';
import OLPRequest from '@/network/request';

interface updatePermissionParams {
  // 权限id
  pid: number;
  // 权限描述
  description: string;
  // 权限名称
  permissionName: string;
  // 权限路径
  url: string;
}

export const updatePermissionById = (data: updatePermissionParams) => {
  return OLPRequest({
    url: MODULE_URL + '',
    method: 'PUT',
    data,
  });
};
