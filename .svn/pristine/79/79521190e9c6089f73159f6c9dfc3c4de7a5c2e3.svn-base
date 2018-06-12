import {
  TRAINS_ORDERCODE,
  ORDER_TRAINS_INFO_RETURN_URL,
  ORDER_TRAINS_LIST_RETURN_URL
} from '../types'

const state = {
  orderListReturnUrl: '',
  orderInfoReturnUrl: '',
  orderCode: ''
}

const actions = {
  setOrderListReturnUrl: ({ commit }, params) => {
    commit(ORDER_TRAINS_LIST_RETURN_URL, params)
  },
  setOrderInfoReturnUrl: ({ commit }, params) => {
    commit(ORDER_TRAINS_INFO_RETURN_URL, params)
  },
  setOrderCode: ({ commit }, params) => {
    commit(TRAINS_ORDERCODE, params)
  }
}

const mutations = {
  [ORDER_TRAINS_LIST_RETURN_URL](state, params) {
    state.orderListReturnUrl = params
    localStorage.orderListReturnUrl = params
    console.log(params)
  },
  [ORDER_TRAINS_INFO_RETURN_URL](state, params) {
    state.orderInfoReturnUrl = params
    localStorage.orderInfoReturnUrl = params
  },
  [TRAINS_ORDERCODE](state, params) {
    state.orderCode = params
    localStorage.orderCode = params
  }
}

const getters = {
  getOrderListReturnUrl: (state) => {
    if (!state.orderListReturnUrl) {
      state.orderListReturnUrl = localStorage.orderListReturnUrl
    }
    return state.orderListReturnUrl
  },
  getOrderInfoReturnUrl: (state) => {
    if (!state.orderInfoReturnUrl) {
      state.orderInfoReturnUrl = localStorage.orderInfoReturnUrl
    }
    return state.orderInfoReturnUrl
  },
  getOrderCode: (state) => {
    if (!state.orderCode) {
      state.orderCode = localStorage.orderCode
    }
    return state.orderCode
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
