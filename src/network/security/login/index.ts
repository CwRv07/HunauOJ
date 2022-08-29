/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 11:11:47
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 13:58:06
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import { bindUser } from './bindUser';
import { userLogin } from './login';
import { userLogout } from './logout';
import { renderUser } from './render';

const LoginAPI = {
  bindUser,
  userLogin,
  userLogout,
  renderUser,
};
const MODULE_URL = '/hunauojSecurity/security';
export default { LoginAPI, MODULE_URL };
