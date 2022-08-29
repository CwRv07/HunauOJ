/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 10:03:52
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 14:41:29
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

export const BASE_URL = '/hunauojSecurity/security';

import Login from './login/index';
import Permission from './permission/index';
import Role from './role/index';
import User from './user/index';

const SecurityAPI = {
  Login,
  Permission,
  Role,
  User,
};

export default SecurityAPI;
