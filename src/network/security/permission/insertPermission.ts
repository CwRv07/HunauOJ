/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 17:45:07
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 13:31:21
 * @Description:新增权限
 * @Email: ndliujunqi@outlook.com
 */

import MODULE_URL from '.';
import OLPRequest from '@/network/request';

interface insertPermissionParams {
  // 权限描述
  description: string;
  // 权限名称
  permissionName: string;
  // 权限路径
  url: string;
}

export const insertPermission = (data: insertPermissionParams) => {
  return OLPRequest({
    url: MODULE_URL + '',
    method: 'POST',
    data,
  });
};
