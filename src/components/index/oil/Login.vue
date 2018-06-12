<template>
  <div class="oilLogin">
    <header class="bgf pd">
      <router-link to="/index/oil/oillogin/olist" class="f24 back"></router-link>
      <router-link to="/index/oil/oillogin/oreg" class="f24 fr">注册</router-link>
      <h1 class="f40 tc">登录</h1>
    </header>
    <nav class="line100 tc f32 bgf">
      <div :class="{active:data.chargeType == 1}" @click="data.chargeType = 1">
        <span>中石油</span>
      </div>
      <div :class="{active:data.chargeType == 2}" @click="data.chargeType = 2">
        <span>中石化</span>
      </div>
    </nav>

    <div class="login zsh" v-show="data.chargeType == 2">
      <div class="line100 pd bgf">
        <span class="f32 c66">用户名</span>
        <input type="text" class="f24" maxlength="18" placeholder="请输入用户名" name="phone" v-model="data.loginName">
      </div>
      <div class="line100 pd bgf">
        <span class="f32 c66">密码</span>
        <input type="password" class="f24" maxlength="14" placeholder="请输入密码" name="pass" v-model="data.loginPwd">
      </div>
    </div>
    <div class="login zsy" v-show="data.chargeType == 1">
      <div class="line100 pd bgf">
        <span class="f32 c66">用户名</span>
        <input type="text" class="f24" maxlength="18" placeholder="请输入用户名" name="phone" v-model="data.loginName">
      </div>
      <div class="line100 pd bgf">
        <span class="f32 c66">密码</span>
        <input type="password" class="f24" maxlength="14" placeholder="请输入密码" name="pass" v-model="data.loginPwd">
      </div>
    </div>
    <div class="line100 pd bgf f24 c8e" v-show="!isAgree">
      <input type="checkbox" @click="isAgree = true">
      <span>我已阅读并同意</span>《
      <a href="help/mz_agreement.html" class="f24 c8e">服务免责条款</a>和
      <a href="help/oil_agreement.html" class="f24 c8e">充值协议</a>》
    </div>
    <div class="line100 pd bgf f24 c8e agree" v-show="isAgree">
      <input type="checkbox" @click="isAgree = false">
      <span>我已阅读并同意</span>《
      <a href="help/mz_agreement.html" class="f24 c8e">服务免责条款</a>和
      <a href="help/oil_agreement.html" class="f24 c8e">充值协议</a>》
    </div>
    <div class="pd">
      <button class="button f32 tc cf orange-color" id="charge_btn" @click="subInfo">登录</button>
    </div>
  </div>
</template>

<script>
import { isEmpty } from '../../../util/checkParams'
import _oil from '../../../fetch/oil'
import { alert } from '../../../util/tool'
import routers from '../../../router'

export default {
  data() {
    return {
      isAgree: false,
      data: {
        chargeType: 1,
        loginName: '',
        loginPwd: ''
      }
    }
  },
  methods: {
    subInfo() {
      if (isEmpty(this.data.loginName)) {
        alert('用户名不能为空')
        return false
      }
      if (isEmpty(this.data.loginPwd)) {
        alert('密码不能为空')
        return false
      }
      if (this.isAgree === false) {
        alert('请先阅读服务免责条款和充值协议')
        return false
      }
      _oil.signInGasInfo(this.data).then(res => {
        console.log(res)
        alert('登录成功')
        routers.push({ path: '/index/oil/oillogin/olist' })
      }).catch(error => {
        console.log(error)
        console.log(111111)
        console.log(error.data.errDesc)
        if (error.data.errDesc === '当前账号已登录，无需重复登录') {
          routers.push({ path: '/index/oil/oillogin/olist' })
        }
      })
    }
  }
}
</script>

<style scoped>
nav.line100 {
  display: flex;
  justify-content: space-between;
}

nav>div {
  width: 50%;
}

nav .active span {
  display: inline-block;
  padding: 0 .2rem;
  color: #fc5b32;
  border-bottom: 1px solid #fc5b32;
}

.line100 {
  line-height: 1rem;
  border-bottom: 1px solid#f3f3f3;
  position: relative;
}

.line100 .c66 {
  width: 1rem;
  display: inline-block;
}

.button {
  border-radius: 1rem;
  margin-top: 1rem;
}

.line100.c8e {
  padding-left: .9rem;
  background-image: url("../../../assets/images/common/pay_no.png");
  background-repeat: no-repeat;
  background-position: .3rem center;
  -webkit-background-size: .4rem;
  background-size: .4rem;
}

.line100.agree {
  padding-left: .9rem;
  background-image: url("../../../assets/images/common/pay_yes.png");
  background-repeat: no-repeat;
  background-position: .3rem center;
  -webkit-background-size: .4rem;
  background-size: .4rem;
}

input[type='checkbox'] {
  position: absolute;
  width: 0.4rem;
  height: .4rem;
  top: .3rem;
  left: .3rem;
}

input[type='text'],
input[type='password'] {
  width: 5.5rem;
}

.mt {
  margin-top: .1rem;
}

.yzm {
  position: absolute;
  padding: .1rem .2rem;
  border-radius: .5rem;
  border: 1px solid #ff805f;
  line-height: .28rem;
  right: .3rem;
  top: .3rem;
  color: #ff805f;
}

.ts {
  margin-top: .5rem;
  line-height: .32rem;
}
</style>
