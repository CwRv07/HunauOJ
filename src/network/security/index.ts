/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 10:03:52
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 11:13:44
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

export const BASE_URL = '/hunauojSecurity/security';

import LoginAPI from './login/index';
import PermissionAPI from './permission/index';
import RoleAPI from './role/index';
import UserAPI from './user/index';

const SecurityAPI = {
  LoginAPI,
  PermissionAPI,
  RoleAPI,
  UserAPI,
};

export default SecurityAPI;
