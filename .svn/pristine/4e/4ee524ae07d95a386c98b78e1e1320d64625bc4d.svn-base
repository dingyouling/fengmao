<template>
  <div id="app">
    <router-view></router-view>
    <NavHtml></NavHtml>
    <Loading v-show="loading"></Loading>
    <Alert v-show="showAlert"></Alert>
    <Toast v-show="showToast"></Toast>
  </div>
</template>

<script>
import NavHtml from './components/Nav'
import Loading from './components/Loading'
import Alert from './components/Alert'
import Toast from './components/Toast'

import * as wx from './util/wx'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    NavHtml,
    Loading,
    Alert,
    Toast
  },
  computed: {
    ...mapGetters([
      'loading',
      'showToast',
      'showAlert'
    ])
  },
  methods: {
    ...mapActions([
      'getUsablebank',
      'getCurrencybankamount',
      'setLoadingState'
    ])
  },
  mounted() {
    if (!localStorage.mobile) {
      this.$router.push({ path: '/login' })
    }
    this.getCurrencybankamount()
    this.getUsablebank()
    wx.init(wx.wxConfig)
  }
}
</script>

<style>

</style>
