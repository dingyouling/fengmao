import { fetch } from './api.js'

export default {
  // 获取用户订单数和金额
  getUserOrderNum(params) {
    return fetch('/API/getUserAndSubUserRechargeInfo', params)
  },
  // 用户订单查询
  searchOrder(params) {
    return fetch('/API/user/recharge/query', params)
  },
  // 订单详情页
  orderInfo(params) {
    return fetch('/API/user/recharge/detail', params)
  },
  // 电影票订单
  movieOrder(params) {
    return fetch('/API/film/orderList', params)
  },
  // 电影票订单详情
  movieOrderInfo(params) {
    return fetch('/API/film/orderDtl', params)
  },
  // 取消订单
  orderCancel(params) {
    return fetch('/API/order/cancel', params)
  },
  // 火车票订单分页查询
  trainsOrderList(params) {
    return fetch('/API/train/ticket/findOrderPaging', params)
  },
  // 火车票订单详情
  trainsOrderInfo(params) {
    return fetch('/API/train/ticket/orderDtl', params)
  },
  // 取消改签
  cancelChangeTicket(params) {
    return fetch('/API/train/ticket/cancelChangeTicket', params)
  },
  // 查看原改签单
  trainsOrderChangeInfo(params) {
    return fetch('/API/train/ticket/ticketChangeDtl', params)
  },
  // 取消火车票订单
  cancelTrainsOrder(params) {
    return fetch('/API/train/ticket/cancelOrder', params)
  },
  // 火车票退票
  refundTicket(params) {
    return fetch('/API/train/ticket/applyRefundOrder', params)
  },
  // 退款详情
  refundInfo(params) {
    return fetch('/API/train/ticket/refundDtl', params)
  },
  // 保险列表
  ensureList(params) {
    return fetch('/API/train/ticket/insure/queryList', params)
  },
  // 退保险
  ensureRefund(params) {
    return fetch('/API/train/ticket/insure/refund', params)
  }
}
