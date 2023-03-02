import HYRequestClass from '@/service/request/request'
import { BASE_URL, TIME_OUT } from '@/service/config/config'
import { HYRequestConfig } from '@/service/request/type'
const NetRequest = new HYRequestClass({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    responseSuccessFn: (config) => {
      return config
    },
    responseFailureFn: (error) => {
      return error
    },
    // 使用HYRequestConfig类型覆盖 解决类型不匹配问题
    requestSuccessFn: (config: HYRequestConfig) => {
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestFailureFn: (error) => {
      return error
    }
  }
})
export { NetRequest }
