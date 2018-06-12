import { fetch } from './api.js'

export default {
  // 登录提交
  wxLogin(params) {
    return fetch('/wx/login', params)
  },
  // 获取验证码
  getAuthCode(params) {
    return fetch('/API/getAuthCode', params)
  },
  // 快速登录
  fastLogin(params) {
    return fetch('/API/fastUserLogin', params)
  },
  // 忘记密码
  forgetPass(params) {
    return fetch('/API/userUpdatePwd', params)
  },
  // 注册提交
  wxReg(params) {
    return fetch('/wx/userRegister', params)
  }
}
