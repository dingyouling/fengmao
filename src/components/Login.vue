<template>
  <div class="login" v-show="isLogin">
    <div class="logo"></div>
    <div class="phone">
      <input type="text" class="f32" placeholder="请输入手机号/用户名" name="phone" v-model="phone">
    </div>
    <div class="pass">
      <input type="password" class="f32" placeholder="请输入密码" name="pass" v-model="pass">
    </div>
    <div class="pd clearfix f26 clearfix">
      <router-link to="/reg/yzm" class="co f26 pd fl">手机验证码登录</router-link>
      <router-link to="/reg/forget" class="co f26 pd fr">忘记密码? </router-link>
    </div>
    <div class="button cf f36 tc bgo dc_btn" @click="subInfo">登录</div>
    <router-link to="/reg/reg" class="button co f36 tc bgf dc_btn">新用户注册</router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import * as tools from '../util/checkParams'
import { alert } from '../util/tool'

export default {
  data() {
    return {
      phone: '',
      pass: ''
    }
  },
  computed: {
    isLogin() {
      if (this.$route.path === '/login') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    ...mapActions({
      dlLoginSub: 'dlLoginSub'
    }),
    subInfo() {
      if (!tools.isMobile(this.phone)) {
        alert('手机号码格式不正确')
        return false
      }
      if (tools.isEmpty(this.pass)) {
        alert('密码不能为空')
        return false
      }
      let data = {
        deputyLoginAccount: 'o1oU2wOaBV5s7BD1FHgR9RtcupxA',
        loginAccount: this.phone,
        password: this.pass
      }
      this.dlLoginSub(data)
    }
  }
}
</script>

<style scoped>
body {
  background: #fff;
}

.logo {
  width: 100%;
  height: 5rem;
  background: url("../assets/images/login/logo.png") center no-repeat;
  -webkit-background-size: 2.02rem;
  background-size: 2.02rem;
  ;
}

.phone,
.pass {
  width: 6.3rem;
  height: .7rem;
  margin: .2rem auto .4rem;
  border-bottom: 1px solid #dedfe0;
  padding-left: .9rem;
  position: relative;
}

.phone {
  background: url("../assets/images/login/phone.png") .2rem center no-repeat;
  -webkit-background-size: .3rem;
  background-size: .3rem;
  ;
}

.pass {
  background: url("../assets/images/login/pass.png") .2rem center no-repeat;
  -webkit-background-size: .3rem;
  background-size: .3rem;
  ;
}

.phone>input,
.pass>input {
  position: absolute;
  width: 4.3rem;
  height: .68rem;
}

.dc_btn {
  width: 6rem;
  margin: .3rem auto;
  height: .8rem;
  line-height: .8rem;
  background: linear-gradient(to right, #ff795c, #ffad75);
  -webkit-border-radius: .4rem;
  -moz-border-radius: .4rem;
  border-radius: .4rem;
}

div.bgo {
  margin-top: 1rem;
}

a.dc_btn.co {
  background: #fff;
  border: solid #ff795c 1px;
  margin-bottom: 1rem;
}
</style>

