/*
 * @Author: ND_LJQ
 * @Date: 2022-05-02 07:58:08
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-09-04 11:15:20
 * @Description:封装请求方法
 * @Email: ndliujunqi@outlook.com
 */

import Request from './request';
import type { RequestConfig } from './type';
import type { AxiosResponse } from 'axios';

interface OLPRequestConfig<T> extends RequestConfig {
  data?: T;
}

export interface OLPResponse<T> {
  code: number;
  message: string;
  data: T;
}
const request = new Request({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: config => config,
    // 响应拦截器
    responseInterceptors: result => {
      // if (result.status === 200 && result.data.code !== 200) {
      //   return Promise.reject(result);
      // }
      return result;
    },
  },
});
/**
 * @description: OLPRequest函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {OLPRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const OLPRequest = <D, T = any>(config: OLPRequestConfig<D>) => {
  const { method = 'GET' } = config;
  if (method === 'get' || method === 'GET') {
    config.params = config.data;
  }
  return request.request<OLPResponse<T>>(config);
};

// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url);
};
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest();
};

export default OLPRequest;
