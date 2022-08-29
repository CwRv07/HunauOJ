/*
 * @Author: ND_LJQ
 * @Date: 2022-07-16 10:40:56
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 13:59:36
 * @Description:权限接口
 * @Email: ndliujunqi@outlook.com
 */
import { addPermissionsForRole } from './addPermissionsForRole';
import { deletePermissionById } from './deletePermission';
import { deletePermissionsForRole } from './deletePermissionsForRole';
import { insertPermission } from './insertPermission';
// import { queryPermissionList } from './permissionList';
// import { queryPermissionById } from './queryPermissionById';
import { queryRolePermissionsById } from './queryRolePermissionsById';
// import { updatePermissionById } from './updatePermission';

const MODULE_URL = '/hunauojSecurity/security/permission';
const PermissionAPI = {
  addPermissionsForRole,
  deletePermissionById,
  deletePermissionsForRole,
  insertPermission,
  // queryPermissionList,
  // queryPermissionById,
  queryRolePermissionsById,
  // updatePermissionById,
};

export default { PermissionAPI, MODULE_URL };
