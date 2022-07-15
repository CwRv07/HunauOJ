/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 18:29:33
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-07-15 18:43:25
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */
import { MODULE_URL } from '.';
import OLPRequest from '@/network/request';

interface insertUserInfoParams {
  // 头像地址
  avatar: string;
  // 班级
  course: string;
  // 邮箱
  email: string;
  // 性别
  gender: string;
  // 昵称
  nickname: string;
  // 密码
  password: string;
  // 学校
  school: string;
  // 状态 0不可用, 1 可用
  status: number;

  username: string;
}

export const insertUser = (data: insertUserInfoParams) => {
  return OLPRequest({
    url: MODULE_URL + `/selectUserByUsername`,
    method: 'POST',
    data,
  });
};
