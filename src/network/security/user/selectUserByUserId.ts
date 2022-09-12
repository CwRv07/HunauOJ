/*
 * @Author: ND_LJQ
 * @Date: 2022-07-15 18:16:14
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-09-04 15:24:30
 * @Description:通过用户id查询用户信息
 * @Email: ndliujunqi@outlook.com
 */

import Model from '.';
import OLPRequest from '../../request';

const queryUserByUserId = (id: number) => {
  return OLPRequest({
    url: Model.MODULE_URL + `/${id}`,
    method: 'GET',
  })
    .then(res => {
      if (res.code == 200) {
        return res.data.nickname;
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export default queryUserByUserId;
