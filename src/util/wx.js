import { fetch } from '../fetch/api'

export const wxConfig = {
  isLogin: true,
  isJssdk: false,
  appId: 'wx5f2fb2207f78bf6e',
  scope: 'snsapi_base',
  openidUrl: 'http://a.91tou.com/json/openid',
  jssdkUrl: 'http://a.91tou.com/json/jssdk'
}

export function init(json) {
  if (isWxBrowser()) {
    console.log('微信浏览器')
    localStorage.setItem('OPENID', JSON.stringify({ openid: 'o1oU2wOaBV5s7BD1FHgR9RtcupxA' }))
    console.log(localStorage.OPENID)
    console.log(!!localStorage.getItem('OPENID'))
    if (!localStorage.getItem('OPENID')) {
      console.log(localStorage.OPENID)
      var code = getUrlValue('code')
      console.log(!!code)
      if (!code) {
        wxJump(json.appId, json.scope)
        // other(json)
      } else {
        getOpenid(json.openidUrl, code)
      }
    } else {
      // other(json);
    }
  } else {
    console.log('不是微信浏览器')
    wxJump(json.appId, json.scope)
  }
}

// 是否为微信浏览器
export function isWxBrowser() {
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.indexOf('micromessenger') > -1) {
    return true
  } else {
    return false
  }
}

// 微信发送回调请求
export function wxJump(appid, scope) {
  var param = 'appid=' + appid
  param += '&redirect_uri=localhost:8093/#/index'
  param += '&response_type=code'
  param += '&scope=' + scope
  param += '&state=123#wechat_redirect'
  console.log(param)
  // window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?' + param
}

// 获取地址栏参数
export function getUrlValue(key) {
  var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

// 根据地址栏参数code判断是否从新获取openid
export function getOpenid(url, code) {
  // util.myAjax(url, { code: code }, false, function (data) {
  //   if (data.errorCode === 200) {
  //     localStorage.setItem('OPENID', JSON.stringify({ openid: data.json }))
  //   }
  // })
  console.log(url + code)
  fetch(url, {
    code: code
  }).then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error)
  })
}
