/*
 * @Author: ND_LJQ
 * @Date: 2022-08-17 11:23:49
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-08-17 11:33:46
 * @Description:第三方登录的跳转路径，后续会重定向到回调路径，并且会返回第三方用户的id和第三方平台名，后续调用绑定方法要发回来
 * @Email: ndliujunqi@outlook.com
 */

import OLPRequest from '@/network/request';
import { MODULE_URL } from '.';

export const renderUser = () => {
  return OLPRequest({
    url: MODULE_URL + '/render',
    method: 'GET',
  });
};
