import {
  DL_LOGIN_SUB,
  DL_GET_AUTOCODE,
  DL_FORGET_PASS,
  DL_LOGIN_PHONE,
  DL_REG_SUB
} from '../types'
import _login from '../../fetch/login'
import {
  alert
} from '../../util/tool'
import router from '../../router'
import store from '../../store'

const actions = {
  dlLoginSub: ({ commit }, params) => {
    commit(DL_LOGIN_SUB, params)
  },
  dlGetAutocode: ({ commit }, params) => {
    commit(DL_GET_AUTOCODE, params)
  },
  dlFastLogin: ({ commit }, params) => {
    commit(DL_LOGIN_PHONE, params)
  },
  dlForgetPass: ({ commit }, params) => {
    commit(DL_FORGET_PASS, params)
  },
  dlRegSub: ({ commit }, params) => {
    commit(DL_REG_SUB, params)
  }
}

const mutations = {
  [DL_LOGIN_SUB](state, params) {
    _login.wxLogin(params).then(res => {
      localStorage.mobile = params.loginAccount
      localStorage.OPENID = params.deputyLoginAccount
      alert('登录成功')
      store.dispatch('getUsablebank')
      store.dispatch('getCurrencybankamount')
      router.push({ path: '/index' })
    }).catch(error => {
      console.log(error)
    })
  },
  [DL_GET_AUTOCODE](state, params) {
    _login.getAuthCode(params).then(res => {
      if (res.success) {
        alert(res.errDesc)
      }
    }).catch(error => {
      console.log(error)
    })
  },
  [DL_LOGIN_PHONE](state, params) {
    store.dispatch('setLoadingState', true)
    _login.fastLogin(params).then(res => {
      store.dispatch('setLoadingState', false)
      store.dispatch('getUsablebank')
      store.dispatch('getCurrencybankamount')
      router.push({ path: '/index' })
    }).catch(error => {
      console.log(error)
    })
  },
  [DL_FORGET_PASS](state, params) {
    store.dispatch('setLoadingState', true)
    _login.forgetPass(params).then(res => {
      store.dispatch('setLoadingState', false)
      store.dispatch('getUsablebank')
      store.dispatch('getCurrencybankamount')
      router.push({ path: '/index' })
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  },
  [DL_REG_SUB](state, params) {
    store.dispatch('setLoadingState', true)
    _login.wxReg(params).then(res => {
      store.dispatch('setLoadingState', false)
      store.dispatch('getUsablebank')
      store.dispatch('getCurrencybankamount')
      router.push({ path: '/index' })
    }).catch(error => {
      console.log(error)
    })
  }
}

export default {
  actions,
  mutations
}
