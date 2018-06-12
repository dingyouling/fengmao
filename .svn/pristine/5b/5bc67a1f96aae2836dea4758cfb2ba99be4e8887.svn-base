import {
  OIL_ZSH_INFO,
  OIL_ZSY_INFO,
  OIL_NEW_ZSH_INFO,
  OIL_NEW_ZSY_INFO
} from '../types'
import _prod from '../../fetch/prod'

const state = {
  zshInfo: [],
  zsyInfo: [],
  newZshInfo: [],
  newZsyInfo: []
}

const actions = {
  getZshInfo: ({ commit }) => {
    commit(OIL_ZSH_INFO)
  },
  getZsyInfo: ({ commit }) => {
    commit(OIL_ZSY_INFO)
  },
  getNewZsh: ({ commit }) => {
    commit(OIL_NEW_ZSH_INFO)
  },
  getNewZsy: ({ commit }) => {
    commit(OIL_NEW_ZSY_INFO)
  }
}

const mutations = {
  [OIL_ZSH_INFO](state) {
    _prod.getOilProd({
      oilType: 2,
      oilRechargeMode: 1
    }).then(res => {
      state.zshInfo = res.result
    })
  },
  [OIL_ZSY_INFO](state) {
    _prod.getOilProd({
      oilType: 1,
      oilRechargeMode: 1
    }).then(res => {
      state.zsyInfo = res.result
    })
  },
  [OIL_NEW_ZSH_INFO](state) {
    _prod.getOilProd({
      oilType: 2,
      oilRechargeMode: 2
    }).then(res => {
      state.newZshInfo = res.result
    })
  },
  [OIL_NEW_ZSY_INFO](state) {
    _prod.getOilProd({
      oilType: 1,
      oilRechargeMode: 2
    }).then(res => {
      state.newZsyInfo = res.result
    })
  }
}

const getters = {
  zshInfo: state => state.zshInfo,
  zsyInfo: state => state.zsyInfo,
  newZshInfo: state => state.newZshInfo,
  newZsyInfo: state => state.newZsyInfo
}

export default {
  state,
  actions,
  mutations,
  getters
}
