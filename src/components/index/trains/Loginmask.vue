<template>
	<div class="loginMask">
		<div class="box_train_login_out changeAccount" @click.stop="hide">
    	<ul class="bgf f28 tc">
    		<li class="trains-color cf">账号选择</li>
    		<li class="train_account_change" @click.stop="showAccountBox = false" @click="changeCount">切换12306账号</li>
    		<li class="train_account_logout cr" @click.stop="logOut">退出12306登录</li>
    	</ul>
    </div>
	</div>
</template>

<script>
import _trains from '../../../fetch/trains.js'
import router from '../../../router/'
import { mapGetters } from 'vuex'
export default{
  props: {
    pageMsg: String
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'loginData'
    ])
  },
  methods: {
    logOut() {
      _trains.railwayLogout({token: this.loginData.token}).then(res => {
        sessionStorage.removeItem('loginData')
        this.$store.dispatch('clearLoginToken', null)
        this.hide()
      }).catch(error => {
        console.log(error)
        if (error.data.errDesc === '12306账户未登录' || error.data.errDesc === '12306账户登录过期') {
          sessionStorage.removeItem('loginData')
          this.$store.dispatch('clearLoginToken', null)
          this.hide()
        }
      })
    },
    hide() {
      this.$emit('hideLoginBox', true)
    },
    changeCount() {
      this.hide()
      router.push({path: '/index/trains/loginTrain', query: {pageType: this.pageMsg}})
    }
  }
}
</script>

<style>
.changeAccount {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.changeAccount>ul {
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: 0;
  left: 0;
}
.changeAccount>ul>li {
  line-height: 1rem;
  border-bottom: 1px solid #dedfe0;
  padding: 0 .3rem;
}
</style>