import {
  COM_LOADING_STATUS,
  COM_NAV_STATUS,
  COM_SHOW_TOAST,
  COM_SHOW_SUCCESS,
  COM_SHOW_FAIL,
  COM_TOAST_MSG,
  COM_SHOW_ALERT,
  COM_ALERT_MSG,
  COM_ME_USABLEBANK,
  COM_ME_CURRENCYBANKAMOUNT,
  COM_INDEX_PROD
} from '../types'
import _me from '../../fetch/me'
import _prod from '../../fetch/prod'

const state = {
  loading: false,
  showToast: false,
  leftNavStatus: false,
  showSuccess: true,
  showFail: false,
  toastMsg: '操作成功',
  showTimePicker: false,
  alertMsg: '退出登录',
  showAlert: false,
  usableBank: 0,
  currencyBankAmount: 0,
  indexProd: []
}

const actions = {
  setLoadingState({ commit }, status) {
    commit(COM_LOADING_STATUS, status)
  },
  setNavState({ commit }, status) {
    commit(COM_NAV_STATUS, status)
  },
  showToast({ commit }, status) {
    commit(COM_SHOW_TOAST, status)
  },
  showSuccess({ commit }, status) {
    commit(COM_SHOW_SUCCESS, status)
  },
  showFail({ commit }, status) {
    commit(COM_SHOW_FAIL, status)
  },
  toastMsg({ commit }, str) {
    commit(COM_TOAST_MSG, str)
  },
  showAlert({ commit }, status) {
    commit(COM_SHOW_ALERT, status)
  },
  alertMsg({ commit }, str) {
    commit(COM_ALERT_MSG, str)
  },
  getUsablebank: ({ commit }) => {
    commit(COM_ME_USABLEBANK)
  },
  getCurrencybankamount: ({ commit }) => {
    commit(COM_ME_CURRENCYBANKAMOUNT)
  },
  getIndexProd: ({ commit }) => {
    commit(COM_INDEX_PROD)
  }
}

const getters = {
  loading: state => state.loading,
  showToast: state => state.showToast,
  showAlert: state => state.showAlert,
  alertMsg: state => state.alertMsg,
  showSuccess: state => state.showSuccess,
  showFail: state => state.showFail,
  toastMsg: state => state.toastMsg,
  usableBank: state => state.usableBank,
  currencyBankAmount: state => state.currencyBankAmount,
  indexProd: state => state.indexProd
}

const mutations = {
  [COM_LOADING_STATUS](state, status) {
    state.loading = status
  },

  [COM_SHOW_TOAST](state, status) {
    state.showToast = status
  },

  [COM_SHOW_SUCCESS](state, status) {
    state.showSuccess = status
  },

  [COM_SHOW_FAIL](state, status) {
    state.showFail = status
  },

  [COM_TOAST_MSG](state, str) {
    state.toastMsg = str
  },

  [COM_NAV_STATUS](state, status) {
    state.leftNavStatus = status
  },

  [COM_SHOW_ALERT](state, status) {
    state.showAlert = status
  },
  [COM_ALERT_MSG](state, str) {
    state.alertMsg = str
  },
  [COM_ME_USABLEBANK](state) {
    _me.personal().then(res => {
      state.usableBank = res.result.usableBank
    }).catch(error => {
      console.log(error)
    })
  },
  [COM_ME_CURRENCYBANKAMOUNT](state) {
    _me.bank().then(res => {
      state.currencyBankAmount = res.result.currencyBankAmount
    }).catch(error => {
      console.log(error)
    })
  },
  [COM_INDEX_PROD](state) {
    _prod.getPro({
      prodPrice: 100,
      channel: 4,
      prodType: 1
    }).then(res => {
      state.indexProd = res.result
    }).catch(error => {
      console.log(error)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
