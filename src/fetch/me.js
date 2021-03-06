import { fetch } from './api'

export default {
  // 账户中心填充账号信息
  getUserInfo() {
    return fetch('/API/getUserInfo')
  },
  // 账户中心填充金额  自己的库存
  personal(params) {
    return fetch('/API/customer/personal', params)
  },
  // 分销商库存
  bank() {
    return fetch('/API/merchant/bank')
  },
  // 卡券列表
  getCouponList(params) {
    return fetch('/API/user/couponList', params)
  },
  // 手机号码归属地
  getPhoneArea(params) {
    return fetch('/API/findRechargeLimitWarning', params)
  },
  // 获取上级分销商信息
  getMerchantBasic(params) {
    return fetch('/API/customer/setMerchantBasic', params)
  },
  // 绑定邀请码
  recommendCodeAction(params) {
    return fetch('/API/user/recommendCodeAction', params)
  },
  // 修改登录密码
  userUpdatePwd(params) {
    return fetch('/API/userUpdatePwd', params)
  },
  // 修改支付密码
  updatePayPass(params) {
    return fetch('/API/user/payPw/update', params)
  },
  // 预购订单
  getPreOrder(params) {
    return fetch('/API/findUserPackageInfo', params)
  },
  // 获取预购详情
  getPreOrderInfo(params) {
    return fetch('/API/merchant/pre/dtl', params)
  },
  // 获取预购流水
  getPreOrderFlow(params) {
    return fetch('/API/user/pre/giveList', params)
  },
  // 获取可用猫币流水
  getMbFlow(params) {
    return fetch('/API/user/bill', params)
  },
  // 我的卡包
  getCard(params) {
    return fetch('/API/card/list', params)
  },
  // 增加卡号接口
  addCard(params) {
    return fetch('/API/card/add', params)
  },
  // 更新卡号接口
  updataCard(params) {
    return fetch('/API/card/update', params)
  },
  // 删除卡号接口
  delCard(params) {
    return fetch('/API/card/del', params)
  },
  // 用户消息中心
  information(params) {
    return fetch('/API/user/msg', params)
  },
  // 卡包火车票联系人
  getTrainsCard(params) {
    return fetch('/API/train/contact/findList', params)
  },
  // 学生票学校列表
  getSchoolList(params) {
    return fetch('/API/train/query/findSchoolList', params)
  },
  // 学生票省份列表
  getProvinceList(params) {
    return fetch('/API/train/query/findProvince', params)
  },
  // 车站列表
  getTrainsStations(params) {
    return fetch('/API/train/query/findTrainStationList', params)
  },
  // 修改添加火车票联系人
  updateTrainsPerson(params) {
    return fetch('/API/train/contact/addOrUpdate', params)
  },
  // 删除火车票联系人
  delTrainsPerson(params) {
    return fetch('/API/train/contact/delete', params)
  }
}
