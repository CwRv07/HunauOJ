/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 11:44:44
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 11:01:46
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import { BASE_URL } from '..';
export const MODULE_URL = BASE_URL + '/user';

import { deleteUserById } from './deleteUser';
import { fuzzyQueryUsers } from './fuzzyQueryUsers';
import { addUser } from './addUserInfo';
import { queryUsers } from './queryUsers';
import { queryUserByUserId } from './queryUserByUserId';
import { updateUserInfo } from './updateUserInfo';

const UserAPI = {
  deleteUserById,
  fuzzyQueryUsers,
  addUser,
  queryUsers,
  queryUserByUserId,
  updateUserInfo,
};

export default UserAPI;
