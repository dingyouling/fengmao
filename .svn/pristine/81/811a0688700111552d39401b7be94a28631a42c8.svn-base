<template>
  <div>
    <header class="trains-color">
      <router-link class="f24 back back1" to="/index/trains/serve"></router-link>
      <h1 class="f40 tc category cf">手机号核验</h1>
    </header>
    <div class="second mt50" v-show="toCheckShow">
      <p class="f28 c8e pd">发送短信 <span class="cb">999</span>到<span class="cb">12306</span>获取验证码，并填写到输入框内，有效时间10分钟。</p>
      <div class="line100 f32 pd bb bgf mt50">
        <span class="label">手机号 : </span>
        <input type="text" name="mobileNo" v-model="mobileNo">
      </div>
      <div class="line100 f32 pd bb bgf">
        <span class="label">验证码 : </span>
        <input type="text" name="captcha" v-model="captcha">
      </div>
    </div>
    <div class="third mt50 line60" v-show="!toCheckShow">
      <div class="pd">
          <p class="f32 c33">您已通过核验，无需重复核验</p>
          <p class="f28 c66">您的手机号 <span class="cb checkedPhone">{{loginData?loginData.mobileNo:''}}</span>已通过核验。如未更换手机号则不需要重新核验。</p>
      </div>
      <!-- <a class="cb tr pd f24 line60">更换手机号</a> -->
    </div>
    <div class="log trains-color tc cf f32" @click="toCheckPhone">{{toCheckShow?'提交':'返回'}}</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { alert } from '../../../util/tool.js'
import _trains from '../../../fetch/trains.js'
import router from '../../../router/'
export default{
  data() {
    return {
      toCheckShow: false,
      mobileNo: '',
      captcha: ''
    }
  },
  mounted() {
    if (this.loginData.mobileStatus === 1) {
      this.toCheckShow = false
    } else {
      this.toCheckShow = true
    }
  },
  computed: {
    ...mapGetters([
      'loginData'
    ])
  },
  methods: {
    toCheckPhone() {
      if (this.toCheckShow) {
        if (!(/^1(3[0-9]|4[579]|5[0-9]|7[013678]|8[0-9])\d{8}$/.test(this.mobileNo) && this.mobileNo.length === 11)) {
          alert('请输入需要核验的手机号！')
          return false
        }
        if (this.captcha && this.captcha.length !== 6) {
          alert('请输入6位验证码！')
          return false
        }
        if (this.loginData) {
          if (this.mobileNo === this.loginData.mobileNo) {
            return true
          } else {
            var params = {
              mobileNo: this.mobileNo,
              captcha: this.captcha,
              token: this.loginData.token
            }
            _trains.phoneCheck(params).then(res => {
              console.log(res)
              if (res.result.requestId) {
                this.loginData.requestId = res.result.requestId
                this.$route.dispatch('setLoginToken', this.loginData)
              } else {
                alert(res.errDesc)
              }
            }).catch(error => {
              console.log(error)
            })
          }
        }
      } else {
        router.push({path: '/index/trains/serve'})
      }
    }
  }
}
</script>
<style>
.bgf3{
  background-color: #f2f7ff;
}
.line60{
  line-height: .5rem;
}
.line100{
  line-height: 1rem;
}
.form{
  margin-top: .5rem;
}
.bb{
  border-bottom: 1px solid #f2f7ff;
}
.mb{
  margin-bottom: .1rem;
}
input{
  width: 5rem;
}
.log,.reg{
  width:6.9rem;
  line-height:.8rem;
  display: block;
  margin: .3rem auto .1rem;
  border-radius: .4rem;
  border:1px solid #03a9f4;
}
.label{
  width:1.3rem;
  display: inline-block;
}
.cb{
  color:#03A9F4;
}
.bgb{
  background: #03A9F4;
}
.tr{
  text-align: right;
  display: block;
}

.mt50{
  margin-top: .5rem;
}

.third>div{
  padding-left: 1.8rem;
  height:1.8rem;
  padding-top: .2rem;
  background: url("../../../assets/images/trains/yz_ok.png") no-repeat .6rem center;
  background-color: #fff;
  -webkit-background-size: .7rem;
  background-size: .7rem;;
}
.third>a{
  display: block;
}
</style>