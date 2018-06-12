import { fetch } from './api.js'

export default {
  // 预购产品
  getPro(params) {
    return fetch('/API/prod/findProdList', params)
  },
  // 话费颗粒
  getHfProd(params) {
    return fetch('/API/findTelProductList', params)
  },
  // 流量颗粒
  getLlProd(params) {
    return fetch('/API/findFlowProductList', params)
  },
  // 油卡颗粒
  getOilProd(params) {
    return fetch('/API/oil/prod', params)
  },
  // 游戏点卡颗粒
  getGameProd(params) {
    return fetch('/API/virtual/prod', params)
  },
  // 获取banner
  getBanner(params) {
    return fetch('/API/notice', params)
  }
}
