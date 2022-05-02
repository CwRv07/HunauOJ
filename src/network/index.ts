/*
 * @Author: ND_LJQ
 * @Date: 2022-05-02 07:58:08
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-05-02 11:03:55
 * @Description:封装请求方法
 * @Email: ndliujunqi@outlook.com
 */

import { AxiosResponse } from 'axios';
import Request from './request';
import type { RequestConfig } from './request/type';

interface OLPRequestConfig<T> extends RequestConfig {
  data?: T;
}

interface OLPResponse<T> {
  code: number;
  message: string;
  data: T;
}
const request = new Request({
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: config => config,
    // 响应拦截器
    responseInterceptors: result => {
      return result;
    },
  },
});
const OLPRequest = <D, T = any>(config: OLPRequestConfig<D>) => {
  const { method = 'GET' } = config;
  if (method === 'get' || method === 'GET') {
    config.params = config.data;
  }
  return request.request<OLPResponse<T>>(config);
};

export default OLPRequest;
