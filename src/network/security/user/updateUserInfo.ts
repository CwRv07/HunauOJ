/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 11:44:37
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-28 14:10:31
 * @Description:更新用户
 * @Email: ndliujunqi@outlook.com
 */

import MODULE_URL from '.';
import OLPRequest from '@/network/request';

interface updateUserParam {
  // 用户id
  uid: number;
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

const updateUserInfo = (data: updateUserParam) => {
  return OLPRequest({
    url: MODULE_URL + '',
    method: 'PUT',
    data,
  });
};

export default updateUserInfo;
