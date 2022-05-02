/*
 * @Author: ND_LJQ
 * @Date: 2022-05-02 08:31:42
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-05-02 11:15:51
 * @Description:实例拦截器类的定义
 * @Email: ndliujunqi@outlook.com
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
export interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;

  //响应拦截
  responseInterceptors?: <T = AxiosResponse>(config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}

// 自定义传入的参数
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
}

//取消请求
export interface CancelRequestSource {
  [index: string]: () => void;
}
