/*
 * @Author: ND_LJQ
 * @Date: 2022-05-02 07:58:08
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2022-05-02 11:04:09
 * @Description:对axios进行二次封装
 * @Email: ndliujunqi@outlook.com
 */

import axios, { AxiosResponse } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { RequestConfig, RequestInterceptors } from './type';

class Request {
  //axios实例
  instance!: AxiosInstance;

  // 拦截器对象
  interceptorsObj?: RequestInterceptors;

  //类拦截器
  // 拦截器的执行顺序为实例请求→类请求→实例响应→类响应
  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;
    // 实例请求拦截器
    this.instance.interceptors.request.use(this.interceptorsObj?.requestInterceptors, this.interceptorsObj?.requestInterceptorsCatch);

    // 全局请求拦截器
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log('全局请求拦截器');
        return res;
      },
      (err: any) => err
    );

    //使用实例响应拦截器
    this.instance.interceptors.response.use(this.interceptorsObj?.responseInterceptors, this.interceptorsObj?.responseInterceptorsCatch);

    // 全局响应拦截器保证最后执行
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('全局响应拦截器');
        //只返回响应中所需要的data数据
        return res.data;
      },
      (err: any) => err
    );
  }

  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
      }
      this.instance
        .request<any, T>(config)
        .then(res => {
          // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors<T>(res);
          }
          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
}

export default Request;
