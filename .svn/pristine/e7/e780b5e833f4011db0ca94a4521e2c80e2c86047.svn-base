import { fetch } from './api.js'

export default {
  // 查询相应的火车车次
  findTrainByStation(params) {
    return fetch('API/train/query/findTrainByStation', params)
  },
  // 查询相应的列车时刻表
  findTrainStopStation(params) {
    return fetch('API/train/query/findTrainStopStation', params)
  },
  // 查询代购模式下的常用旅客
  findContactList(params) {
    return fetch('API/train/contact/findList', params)
  },
  // 查询自购模式下的常用旅客
  railwayTraveler(params) {
    return fetch('API/train/railway/queryTraveler', params)
  },
  // 下订单
  orderConfirm(params) {
    return fetch('API/order/confirm', params)
  },
  // 查询保险列表
  findInsurances(params) {
    return fetch('API/train/query/findInsurances', params)
  },
  // 登录12306
  railwayLogin(params) {
    return fetch('API/train/railway/login', params)
  },
  // 退出12306
  railwayLogout(params) {
    return fetch('API/train/railway/logout', params)
  },
  // 查询占座状态
  getOrderStatus(params) {
    return fetch('API/train/ticket/getOrderStatus', params)
  },
  // 查询占座状态
  ticketOrderDtl(params) {
    return fetch('API/train/ticket/orderDtl', params)
  },
  // 支付详情接口
  rechargeDetail(params) {
    return fetch('API/user/recharge/detail', params)
  },
  // 手机号校验
  phoneCheck(params) {
    return fetch('API/train/railway/verifyMobile', params)
  },
  // 添加12306旅客
  modifyTraveler(params) {
    return fetch('API/train/railway/modifyTraveler', params)
  },
  // 查看改签单/原单
  ticketChangeDtl(params) {
    return fetch('API/train/ticket/ticketChangeDtl', params)
  },
  // 改签
  applyChangeTicket(params) {
    return fetch('API/train/ticket/applyChangeTicket', params)
  },
  // 查看改签信息
  getChangeTicketInfo(params) {
    return fetch('API/train/ticket/getChangeTicketInfo', params)
  },
  // 取消订单接口
  cancelOrder(params) {
    return fetch('API/train/ticket/cancelOrder', params)
  },
  // 取消改签
  cancelChangeTicket(params) {
    return fetch('API/train/ticket/cancelChangeTicket', params)
  },
  // 改签确认
  confirmChangeTicket(params) {
    return fetch('API/train/ticket/confirmChangeTicket', params)
  }
}
