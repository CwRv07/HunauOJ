/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-01 15:16:19
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-02 09:00:18
 * @Description: 常量库
 * @Email: Rv_Jiang@outlook.com
 */

// 用户权限常量
export enum USER_ROLE {
  // VISTOR: 'vistor', // 游客
  USER = '__user', // 普通用户
  ADMIN = '__admin', // 正式管理员
  PROBLEM_ADMIN = '__probleam_admin', // 问题管理员
  SUPER_ADMIN = '__root', // 超级管理员
}
