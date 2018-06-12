import { fetch } from './api.js'

export default {
  // 支付
  pay(params) {
    return fetch('/API/payment', params)
  },
  // 支付手续费
  findPayChnList(params) {
    return fetch('/API/findPayChnList', params)
  },
  // 请求是否设置了支付密码
  userCheck(params) {
    return fetch('/API/user/check', params)
  },
  // 确认订单
  orderConfirm(params) {
    return fetch('/API/order/confirm', params)
  },
  // 确认支付
  orderPay(params) {
    return fetch('/API/order/pay', params)
  }
}
