import { fetch } from './api.js'

export default {
  // 油卡登录状态
  getLoginStatus(params) {
    return fetch('/API/oil/accountIsLogin', params)
  },
  // 获取油卡账号列表
  getOilAccountList(params) {
    return fetch('/API/oil/findOilAccountPage', params)
  },
  // 同步账号信息
  updateOilAccount(params) {
    return fetch('/API/oil/updateOilAccount', params)
  },
  // 删除油卡列表登录信息
  delOilAccount(params) {
    return fetch('/API/oil/delOilAccount', params)
  },
  // 油卡账号登录
  signInGasInfo(params) {
    return fetch('/API/oil/signInGasInfo', params)
  },
  // 油卡账号注册
  signUpGasInfo(params) {
    return fetch('/API/oil/signUpGasInfo', params)
  },
  // 提交验证码
  sendVerificationCode(params) {
    return fetch('/API/oil/sendVerificationCode', params)
  },
  // 修改备注名
  updateAccountInfo(params) {
    return fetch('/API/oil/updateAccountInfo', params)
  },
  // 提交绑卡
  bindGasCard(params) {
    return fetch('/API/oil/bindGasInfo', params)
  }
}
