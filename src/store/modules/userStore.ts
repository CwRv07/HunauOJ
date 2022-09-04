/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-01 15:13:32
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-09-04 14:03:22
 * @Description: 用户Store模块
 * @Email: Rv_Jiang@outlook.com
 */
import { USER_ROLE } from '@/utils/constants';
import storage from '@/utils/storage';
import { Module } from 'vuex';

interface UserInfo {
  uid: string;
  token: string;
}

export const userStore: Module<unknown, unknown> = {
  namespaced: true,
  state: {
    userId: storage.get('userId'),
    token: storage.get('token'),
  },
  getters: {
    userId: (state: any) => state.userId || '',
    token: (state: any) => state.token || '',

    /* 权限判断-start */
    // 判断当前用户是否可身份验证
    isAuthenticated: (state: any, getters: any): boolean => {
      return !!getters.token;
    },
    /* 权限判断-end */
  },
  mutations: {
    setToken(state: any, token: string) {
      state.token = token;
      storage.set('token', token);
    },
    setUId(state: any, uId: string) {
      state.userId = uId;
      storage.set('userId', uId);
    },
  },
  actions: {
    /* 用户信息修改-start */
    // 修改用户信息
    setUserInfo({ commit }, userInfo: UserInfo): void {
      commit('setToken', userInfo.token);
      commit('setUId', userInfo.uid);
    },
    // 清空用户信息和token
    clearUserInfo({ commit }): void {
      commit('clearUserInfo');
    },

    setToken({ commit }, token: string): void {
      commit('setToken', token);
    },
    setUId({ commit }, uid: string): void {
      commit('setUId', uid);
    },
    /* 用户信息修改-end */
  },
};

export default userStore;
