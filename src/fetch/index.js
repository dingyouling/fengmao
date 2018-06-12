import { fetch } from './api.js'

export default {
  // 获取产品列表
  findProdList(params) {
    return fetch('/API/prod/findProdList', params)
  }
}
