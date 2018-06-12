<template>
  <div class="serve">
    <header class="trains-color">
	    <router-link to="/index/trains" class="f24 back back1"></router-link>
	    <h1 class="f40 tc category cf">火车服务</h1>
		</header>
		<div class="banner"></div>
		<div class="f32 c33">
			<p class="line80 pd">12306服务</p>
			<a class="line100 pd clearfix bgf bb isLogin" @click="toLogin">
			  <img src="../../../assets/images/trains/icon07@2x.png" alt="" class="fl">
			  <p class="fl">{{loginData ? '已登录账号：' + loginData.accountName.substring(0, 2) + '****' + loginData.accountName.substring(loginData.accountName.length-3, loginData.accountName.length) : '未登录'}}</p>
			  <div class="fr"></div>
			</a>
			<a class="line100 pd clearfix bgf bb" @click="toTraveler">
			  <img src="../../../assets/images/trains/icon08@2x.png" alt="" class="fl">
			  <p class="fl">12306常用旅客</p>
			  <div class="fr"></div>
			</a>
			<a class="line100 pd clearfix bgf bb" @click="toPhonecheck">
			  <img src="../../../assets/images/trains/icon09@2x.png" alt="" class="fl">
			  <p class="fl">手机号核验</p>
			  <div class="fr"></div>
			</a>
		</div>
    <Loginmask v-show="showAccountBox" @hideLoginBox="hideLoginBox" :page-msg="'serve'"></Loginmask>
  </div>
</template>

<script>
import router from '../../../router/'
import Loginmask from './Loginmask.vue'
import {
  mapGetters,
  mapActions
} from 'vuex'
export default{
  data() {
    return {
      showAccountBox: false
    }
  },
  computed: {
    ...mapGetters([
      'loginData'
    ])
  },
  components: {
    Loginmask
  },
  methods: {
    ...mapActions({
      setLoginData: 'setLoginData'
    }),
    toLogin() {
      if (this.loginData) {
        this.showAccountBox = true
      } else {
        router.push({path: '/index/trains/loginTrain', query: {pageType: 'serve'}})
      }
    },
    hideLoginBox() {
      this.showAccountBox = false
    },
    toTraveler() {
      if (this.loginData) {
        router.push({path: '/index/trains/traveler'})
      } else {
        router.push({path: '/index/trains/loginTrain', query: {pageType: 'serve'}})
      }
    },
    toPhonecheck() {
      if (this.loginData) {
        router.push({path: '/index/trains/phoneCheck'})
      } else {
        router.push({path: '/index/trains/loginTrain', query: {pageType: 'serve'}})
      }
    }
  }
}
</script>

<style scoped>
.bgf3{
  background-color: #f2f7ff;
}
.line100{
  line-height: 1rem;
}
.line80{
  line-height: .8rem;
}
.bb{
  border-bottom: 1px solid #f3f3f3;
}
input{
  width: 5rem;
}
.banner{
  width:7.5rem;
  height:3rem;
  background: url("../../../assets/images/trains/server_banner.png") no-repeat center;
  -webkit-background-size:cover;
  background-size:cover;
}
a.line100{
  display: block;
  height:1rem;
}
a.line100>div{
  width:.17rem;
  height:.3rem;
  margin-top: .34rem;
  background: url("../../../assets/images/trains/right.png");
  -webkit-background-size:cover;
  background-size:cover;
}
a.line100>img{
  width:auto;
  height:.35rem;
  margin-top: .3rem;
  margin-right: .2rem;
}
.changeAccount{
  width:100%;
  height:100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  top:0;left:0;
  z-index:9999;
  display: none;
}
.changeAccount>ul{
  width:100%;
  height:3rem;
  position: absolute;
  bottom:0;
  left:0;
}
.changeAccount>ul>li{
  line-height: 1rem;
  border-bottom: 1px solid #dedfe0;
  padding:0 .3rem;
}
.cr{
  color:#F44A3D;
}
</style>