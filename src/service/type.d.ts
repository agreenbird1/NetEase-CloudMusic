import type { Method, AxiosRequestConfig } from 'axios'

export type ResponseData = {
  code: number
}

export type BaseData<T> = {
    data: T
}

// 总方法的声明
export type requestType = <T = any>(
  url: string,
  method: Method,
  data?: unknown,
  config?: AxiosRequestConfig // 配置其他
) => Promise<ResponseData<T>>

// 单独方法的声明
export type requestMethodType = <T = any>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig // 配置其他
) => Promise<T & ResponseData>

// 直接生成每一个对应的简单的方法
export type requestMethod = {
  [k in 'get' | 'post' | 'delete' | 'patch']: requestMethodType
}
