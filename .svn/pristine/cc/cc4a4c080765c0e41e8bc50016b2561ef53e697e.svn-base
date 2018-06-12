<template>
  <div class="reg">
    <!--快速登录  -->
    <div v-show="isReg">
      <header class="bgf">
        <router-link to="/login" class="f24 back"></router-link>
        <h1 class="f40 tc">{{title}}</h1>
      </header>
      <div class="pd input bgf">
        <div class="f32 borderb phone">
          <span class="c66">手机号:</span>
          <input type="number" class="f28" placeholder="请输入手机号" name="phone" oninput="if(value.length>11)value=value.slice(0,11)" v-model="phone">
          <div></div>
        </div>
        <div class="f32 yzm">
          <span class="c66">验证码:</span>
          <input type="text" class="f28" placeholder="请输入验证码" name="yzm" v-model="autocode">
          <div class="tc f32 co" id="btn-fast-register" @click="getCode">{{yzmStr}}</div>
        </div>
      </div>
      <div class="pd input bgf" v-show="isPass">
        <div class="f32 yzm">
          <span class="c66">密码:</span>
          <input type="password" class="f28" placeholder="请设定密码(6-18位数字和字母组合)" name="pass" v-model="pass">
        </div>
      </div>

      <div class="pd xy" v-show="isProtocol">
        <!-- <a href="agreement_wx.html" class="f24 co fr">《相关协议》</a>
              <div class="fr xy_img" active="false">
                <img src="../assets/images/common/checkbox.png" alt="">
              </div> -->
      </div>
      <div class="pd">
        <div class="button cf f36 tc bgo dc_btn" id="fast_login" @click="subInfo">{{btnStr}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { alert } from '../util/tool'
import * as tools from '../util/checkParams'

export default {
  data() {
    return {
      title: '',
      isPass: false,
      isProtocol: false,
      btnStr: '',
      type: 0,
      phone: '',
      autocode: '',
      pass: '',
      yzmStr: '点击获取验证码'
    }
  },
  computed: {
    isReg() {
      if (this.$route.path.indexOf('/reg/') >= 0) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    let type = this.$route.params.type
    if (type === 'yzm') {
      this.title = '手机验证码登录'
      this.btnStr = '登录'
      this.isPass = false
      this.isProtocol = false
      this.type = 7
    } else if (type === 'forget') {
      this.title = '忘记密码'
      this.btnStr = '完成'
      this.isPass = true
      this.isProtocol = false
      this.type = 2
    } else if (type === 'reg') {
      this.title = '注册'
      this.btnStr = '完成'
      this.isPass = true
      this.isProtocol = true
      this.type = 1
    }
  },
  methods: {
    ...mapActions({
      'dlGetAutocode': 'dlGetAutocode',
      'dlFastLogin': 'dlFastLogin',
      'dlForgetPass': 'dlForgetPass',
      'dlRegSub': 'dlRegSub'
    }),
    getCode() {
      var _this = this
      if (!tools.isMobile(_this.phone)) {
        alert('手机号码格式不正确')
        return
      }
      if (!_this.flag) {
        _this.flag = true
        let time = 60
        _this.yzmStr = time + 's后重试'
        var t = setInterval(function() {
          time--
          _this.yzmStr = time + 's后重试'
          if (time < 1) {
            _this.yzmStr = '点击获取验证码'
            _this.flag = false
            clearInterval(t)
          }
        }, 1000)
        let data = {
          mobile: _this.phone,
          verCodeType: _this.type
        }
        this.dlGetAutocode(data)
      }
    },
    subInfo() {
      if (tools.isEmpty(this.autocode)) {
        alert('验证码不为空')
        return false
      }
      if (this.type === 1) {          // 注册
        if (tools.isEmpty(this.pass)) {
          alert('密码不为空')
          return false
        }
        let data = {
          deputyLoginAccount: localStorage.OPENID,
          loginAccount: this.phone,
          password: this.pass,
          verifyCode: this.autocode
        }
        this.dlRegSub(data)
      } else if (this.type === 2) {    // 忘记密码
        if (tools.isEmpty(this.pass)) {
          alert('密码不为空')
          return false
        }
        let data = {
          action: 'reset',
          pwdType: 'login',
          mobile: this.phone,
          newPassword: this.pass,
          verifyCode: this.autocode,
          appType: 'C'
        }
        this.dlForgetPass(data)
      } else if (this.type === 7) {    // 快速登录
        let data = {
          deputyLoginAccount: localStorage.OPENID,
          mobile: this.phone,
          verifyCode: this.autocode
        }
        this.dlFastLogin(data)
      }
    }
  }
}
</script>

<style scoped>
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
  width: 5rem;
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
  border: 1px solid #ff795c;
  border-radius: .4rem;
  line-height: .65rem;
}

.button {
  margin: .2rem auto 1rem;
  background: linear-gradient(to right, #ff795c, #ffad75);
  border-radius: .8rem;
}

.cc {
  background-color: #ffa58e;
}

.xy {
  height: .8rem;
  line-height: .8rem;
}

.xy>div {
  width: .3rem;
  height: .3rem;
  border-radius: 50%;
  border: 1px solid #fc5b32;
  margin-top: .25rem;
  margin-right: .1rem;
}

.xy img {
  width: .16rem;
  margin: .05rem auto;
  display: none;
}

.input span {
  display: inline-block;
  width: 1.2rem;
}
</style>

