/*
 * @Author: ND_LJQ
 * @Date: 2022-07-16 10:41:09
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 11:02:52
 * @Description:角色接口
 * @Email: ndliujunqi@outlook.com
 */
import { BASE_URL } from '..';
export const MODULE_URL = BASE_URL + '/role';

import { addRolesForUser } from './addRolesForUser';
import { deleteRoleById } from './deleteRole';
import { deleteRolesForUser } from './deleteRolesForUser';
import { insertRole } from './insertRole';
import { queryListRole } from './listRole';
import { queryUserRoles } from './queryUserRoles';
// import {} from './selectRoleById';
import { updateRole } from './updateRole';

const RoleAPI = {
  addRolesForUser,
  deleteRoleById,
  deleteRolesForUser,
  insertRole,
  queryListRole,
  queryUserRoles,
  updateRole,
};

export default RoleAPI;
