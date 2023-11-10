import axios from 'axios'
import { requestType, requestMethod } from './type'

const service = axios.create({
  timeout: 10000,
  baseURL: 'https://netease-cloud-music-api-ochre-iota-91.vercel.app',
  withCredentials: true,
})

service.interceptors.response.use((data) => {
  return data.data
})

const request: requestType & requestMethod = (url, method, data, config) => {
  return service({
    url,
    method,
    [method.toLocaleLowerCase() === 'get' ? 'params' : 'data']: data,
    ...config,
  })
}
request.get = (url, data, config) => {
  return request(url, 'get', data, config)
}
request.post = (url, data, config) => {
  return request(url, 'post', data, config)
}
request.delete = (url, data, config) => {
  return request(url, 'delete', data, config)
}
request.patch = (url, data, config) => {
  return request(url, 'patch', data, config)
}

export default request
