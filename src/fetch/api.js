import axios from 'axios'
import qs from 'qs'
import * as tools from '../util/checkParams'
import router from '../router'
import store from '../store/index.js'

import {
  toast,
  alert
} from '../util/tool'

// axios 配置
axios.defaults.timeout = 20000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = '/apis/d-app'

// POST传参序列化
axios.interceptors.request.use((config) => {
  store.dispatch('setLoadingState', true)
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  store.dispatch('setLoadingState', false)
  toast('参数错误', 'fail')
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  setTimeout(function() {
    store.dispatch('setLoadingState', false)
  }, 200)
  if (!tools.isEmpty(res.data.errDesc) && res.data.errCode === '40001') {
    alert(res.data.errDesc)
  }
  if (!res.data.success) {
    if (res.data.errDesc === '缺少必要的参数或未登陆') {
      alert(res.data.errDesc)
      router.push({ path: '/login' })
    }
    return Promise.reject(res)
  }
  return res
}, (error) => {
  store.dispatch('setLoadingState', false)
  toast('网络异常', 'fail')
  return Promise.reject(error)
})

export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        if (err.data.errDesc === '缺少必要的参数或未登陆') {
          alert('请重新登录')
        } else {
          alert(err.data.errDesc)
        }
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
