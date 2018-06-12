import {
  PROD_WEC_CITYLIST,
  SET_CHOOSE_ITEM
} from '../types'

const state = {
  sortList: [],
  chooseItem: {}
}

const actions = {
  setSortList: ({ commit }, params) => {
    commit(PROD_WEC_CITYLIST, params)
  },
  setChooseItem: ({ commit }, params) => {
    commit(SET_CHOOSE_ITEM, params)
  }
}

const mutations = {
  [PROD_WEC_CITYLIST](state, params) {
    state.sortList = params
  },
  [SET_CHOOSE_ITEM](state, params) {
    state.chooseItem = params
  }
}

const getters = {
  sortList: state => state.sortList,
  chooseItem: state => state.chooseItem
}

export default {
  state,
  actions,
  mutations,
  getters
}
