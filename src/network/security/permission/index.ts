/*
 * @Author: ND_LJQ
 * @Date: 2022-07-16 10:40:56
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 10:33:20
 * @Description:权限接口
 * @Email: ndliujunqi@outlook.com
 */
import { BASE_URL } from '..';
export const MODULE_URL = BASE_URL + '/permission';

import { addPermissionsForRole } from './addPermissionsForRole';
import { deletePermissionById } from './deletePermission';
import { deletePermissionsForRole } from './deletePermissionsForRole';
import { insertPermission } from './insertPermission';
import { queryPermissionList } from './permissionList';
import { queryPermissionById } from './queryPermissionById';
import { queryRolePermissionsById } from './queryRolePermissionsById';
import { updatePermissionById } from './updatePermission';

const PermissionAPI = {
  addPermissionsForRole,
  deletePermissionById,
  deletePermissionsForRole,
  insertPermission,
  queryPermissionList,
  queryPermissionById,
  queryRolePermissionsById,
  updatePermissionById,
};

export default PermissionAPI;
