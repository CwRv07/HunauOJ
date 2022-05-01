/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-01 15:13:32
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-01 17:30:16
 * @Description: 用户Store模块
 * @Email: Rv_Jiang@outlook.com
 */
import { USER_ROLE } from '@/utils/constants';
import storage from '@/utils/storage';
import { Module } from 'vuex';

export const user: Module<unknown, unknown> = {
  namespaced: true,
  state: {
    userInfo: storage.get('userInfo'),
    token: storage.get('token'),
    /* 
    loginFailNum: 0,
    unreadMessage:{
      comment:0,
      reply:0,
      like:0,
      sys:0,
      mine:0,
    }  
    */
  },
  getters: {
    userInfo: (state: any) => state.userInfo || {},
    token: (state: any) => state.token || '',

    /* 权限判断-start */
    // 判断当前用户是否可身份验证
    isAuthenticated: (state: any, getters: any): boolean => {
      return !!getters.token;
    },
    // 判断当前用户是否具有普通用户权限
    isUser: (states: any, getters: any): boolean => {
      const roleList = getters.userInfo.roleList;
      if (getters.isAuthenticated && roleList) {
        return roleList.includes(USER_ROLE.USER) || roleList.includes(USER_ROLE.ADMIN) || roleList.includes(USER_ROLE.PROBLEM_ADMIN) || roleList.includes(USER_ROLE.SUPER_ADMIN);
      }
      return false;
    },
    // 判断当前用户是否具有管理员权限
    isAdmin: (state: any, getters: any): boolean => {
      const roleList = getters.userInfo.roleList;
      if (getters.isAuthenticated && roleList) {
        return roleList.includes(USER_ROLE.ADMIN) || roleList.includes(USER_ROLE.PROBLEM_ADMIN) || roleList.includes(USER_ROLE.SUPER_ADMIN);
      }
      return false;
    },
    // 判断当前用户是否具有问题管理员权限
    isProblemAdmin: (state: any, getters: any): boolean => {
      const roleList = getters.userInfo.roleList;
      if (getters.isAuthenticated && roleList) {
        return roleList.includes(USER_ROLE.PROBLEM_ADMIN) || roleList.includes(USER_ROLE.SUPER_ADMIN);
      }
      return false;
    },
    // 判断当前用户是否具有超级管理员权限
    isSuperAdmin: (state: any, getters: any): boolean => {
      const roleList = getters.userInfo.roleList;
      if (getters.isAuthenticated && roleList) {
        return roleList.includes(USER_ROLE.SUPER_ADMIN);
      }
      return false;
    },
    /* 权限判断-end */
  },
  mutations: {},
  actions: {
    /* 用户信息修改-start */
    // 修改用户信息
    setUserInfo({ commit }, userInfo): void {
      commit('setUserInfo', userInfo);
    },
    // 清空用户信息和token
    clearUserInfoAndToken({ commit }): void {
      commit('clearUserInfoAndToken');
    },
    /* 用户信息修改-end */
  },
};

export default user;
