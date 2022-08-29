/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 11:44:44
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 14:11:27
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import deleteUserById from './deleteUser';
import fuzzyQueryUsers from './fuzzyQueryUsers';
import addUser from './insertUserInfo';
import queryUsers from './queryUsers';
import queryUserByUserId from './selectUserByUserId';
import updateUserInfo from './updateUserInfo';
const MODULE_URL = '/hunauojSecurity/security/user';
const UserAPI = {
  deleteUserById,
  fuzzyQueryUsers,
  addUser,
  queryUsers,
  queryUserByUserId,
  updateUserInfo,
};

export default { UserAPI, MODULE_URL };
