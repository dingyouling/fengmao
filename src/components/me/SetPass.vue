<template>
  <div class="setpassinde">
    <div v-show="isShow">
      <header class="bgf">
        <!-- <router-link to="/me/set/setpass" class="f24 back"></router-link> -->
        <a href="javascript:history.back();" class="f24 back"></a>
        <h1 class="f40 tc">设置支付密码</h1>
      </header>
      <div class="pd input bgf">
        <div class="f32 borderb phone">
          <span class="c66">新密码:</span>
          <input type="password" id="nowPwd" class="f32" placeholder="支付密码" v-model="payInfo.nowPwd">
          <div></div>
        </div>
        <div class="f32 borderb phone">
          <span class="c66">确认密码:</span>
          <input type="password" id="confirmNewPwd" class="f32" placeholder="确认支付密码" v-model="payInfo.confirmNewPwd">
          <div></div>
        </div>
        <div class="f32 yzm">
          <span class="c66">验证码:</span>
          <input type="text" id="verifyCode" class="f32" placeholder="请输入验证码" v-model="payInfo.verifyCode">
          <div class="tc f32 co tc" id="btn-yzm" @click="getAutoCode" v-show="autoCodeFlag">点击获取验证码</div>
          <div class="tc f32 c8e tc" id="btn-yzm1" @click="getAutoCode" v-show="!autoCodeFlag" ref="time">再次获取(60)</div>
        </div>
      </div>
      <div class="pd">
        <a href="javascript:;" class="button cf f36 tc bgo dc_btn" id="btn-submit" @click="subPayInfo">确认</a>
      </div>
    </div>
    <div v-show="!isShow">
      <header class="bgf">
        <router-link to="/me/set/setpass" class="f24 back"></router-link>
        <h1 class="f40 tc">修改登录密码</h1>
      </header>
      <div class="content">
        <div class="bgf">
          <input type="password" id="old_password" placeholder="请输入原密码" class="pd bgf c33 f36" v-model="dlInfo.oldPassword">
        </div>
        <div class="bgf">
          <input type="password" id="new_password" placeholder="请输入新密码" class="pd bgf c33 f36" v-model="dlInfo.newPassword">
        </div>
        <div class="bgf">
          <input type="password" id="new_again_password" placeholder="再次输入新密码" class="pd bgf c33 f36" v-model="dlInfo.confirmPassword">
        </div>
        <div class="pd">
          <button class="button bgo f40 cf" id="btn_submit" @click="subDlInfo">确认修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _me from '../../fetch/me'
import _login from '../../fetch/login'
import * as tools from '../../util/checkParams'
import { alert } from '../../util/tool'
import router from '../../router'

export default {
  data() {
    return {
      dlInfo: {
        action: 'update',
        pwdType: 'login',
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      autoCodeFlag: true,
      payInfo: {
        nowPwd: '',
        confirmNewPwd: '',
        mobile: '',
        verifyCode: ''
      }
    }
  },
  computed: {
    isShow() {
      if (this.$route.params.type === 'zf') {
        return true
      }
      return false
    }
  },
  methods: {
    subDlInfo() {
      if (tools.isEmpty(this.dlInfo.oldPassword)) {
        alert('请输入旧密码')
        return false
      }
      if (tools.isEmpty(this.dlInfo.newPassword)) {
        alert('请输入新密码')
        return false
      }
      if (this.dlInfo.newPassword !== this.dlInfo.confirmPassword) {
        alert('两次密码不一致')
        return false
      }
      _me.userUpdatePwd(this.dlInfo).then(res => {
        alert('修改成功')
        localStorage.clear()
        router.push({ path: '/login' })
      })
    },
    getAutoCode() {
      let _this = this
      if (this.autoCodeFlag) {
        this.autoCodeFlag = false
        let time = 60
        this.$refs.time.innerHTML = '再次获取(' + time + ')'
        let t = setInterval(function() {
          time--
          _this.$refs.time.innerHTML = '再次获取(' + time + ')'
          if (time < 0) {
            clearInterval(t)
            _this.autoCodeFlag = true
          }
        }, 1000)
        _login.getAuthCode({
          mobile: localStorage.mobile,
          verCodeType: 3
        }).then(res => {
          alert(res.errDesc)
        }).catch(error => {
          console.log(error)
        })
      }
    },
    subPayInfo() {
      if (tools.isEmpty(this.payInfo.nowPwd)) {
        alert('请输入支付密码')
        return false
      }
      if (this.payInfo.nowPwd !== this.payInfo.confirmNewPwd) {
        alert('两次支付密码不一致')
        return false
      }
      if (tools.isEmpty(this.payInfo.verifyCode)) {
        alert('请输入验证码')
        return false
      }
      this.payInfo.mobile = localStorage.mobile
      _me.updatePayPass(this.payInfo).then(res => {
        alert('修改成功')
        location.href = history.back()
      })
    }
  }
}
</script>

<style scoped>
input {
  height: 1rem;
  line-height: 1rem;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.content {
  line-height: 1rem;
  padding-top: .2rem;
}

.content>div {
  border-top: 1px solid #ccc;
  line-height: 1rem;
  height: 1rem;
  position: relative;
}

.button {
  margin: .2rem 0;
}

.input {
  border-bottom: 1px solid #dedfe0;
}

.input>div {
  height: 1rem;
  position: relative;
}

.borderb {
  border-bottom: 1px solid #dedfe0;
}

.input input {
  height: .98rem;
  line-height: .98rem;
}

.phone>div {
  position: absolute;
  top: 0;
  right: .2rem;
  height: 1rem;
}

.yzm>div {
  width: 2.5rem;
  height: .65rem;
  position: absolute;
  top: .15rem;
  right: 0;
  border-radius: .4rem;
  line-height: .65rem;
}

#btn-yzm {
  border: 1px solid #ff795c;
}

#btn-yzm1 {
  border: 1px solid #dedfe0;
}

.button {
  margin: .2rem auto 1rem;
  background: linear-gradient(to right, #ff795c, #ffad75);
  border-radius: .8rem;
}

.cc {
  background-color: #ffa58e;
}

.input span {
  display: inline-block;
  width: 1.5rem;
}
</style>
