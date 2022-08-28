/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 11:11:47
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 10:23:00
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */
import { BASE_URL } from '..';
export const MODULE_URL = BASE_URL;
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

export default LoginAPI;
