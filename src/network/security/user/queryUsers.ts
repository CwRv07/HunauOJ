/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 12:28:10
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 17:16:36
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */

import { BASE_URL } from '..';
import OLPRequest from '@/network/request';

interface queryUsersParams {
  loginInfo: {
    password: string;
    username: string;
  };
  pageNum: number;
  pageSize: number;
  //	头像地址
  avatar?: string;
  // 班级
  course?: string;
  // 邮箱
  email?: string;
  // 性别
  gender?: string;
  // 学校
  school?: string;
  // 状态 0不可用, 1 可用
  status?: number;

  nickname?: string;

  password?: string;

  username?: string;

  commonUserInfo?: {
    avatar: string;
    course: string;
    gender: string;
    nickname: string;
    school: string;
    token: string;
    uid: number;
  };
}

export const queryUsers = (data: queryUsersParams) => {
  return OLPRequest({
    url: BASE_URL + '/users',
    method: 'GET',
    data,
  });
};
