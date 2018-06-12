import {
  SAVE_PAY_DATA,
  SET_PAY_DATA,
  SET_COUPON
} from '../types'

const state = {
  data: {}
}

const actions = {
  savePayData: ({ commit }, params) => {
    commit(SAVE_PAY_DATA, params)
  },
  setPayData: ({ commit }) => {
    commit(SET_PAY_DATA)
  },
  setCoupon: ({ commit }, params) => {
    commit(SET_COUPON, params)
  }
}

const mutations = {
  [SAVE_PAY_DATA](state, params) {
    state.data = params
    localStorage.payData = JSON.stringify(state.data)
  },
  [SET_PAY_DATA](state) {
    state.data = JSON.parse(localStorage.payData)
  },
  [SET_COUPON](state, params) {
    if (!state.data.payAmount) {
      state.data = JSON.parse(localStorage.payData)
    }
    state.data.discountAmount = params.discountAmount
    state.data.couponIds = params.recId
    localStorage.payData = JSON.stringify(state.data)
  }
}

const getters = {
  getPayData: state => state.data
}

export default {
  state,
  actions,
  mutations,
  getters
}
