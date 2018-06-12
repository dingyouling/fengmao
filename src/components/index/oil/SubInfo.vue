<template>
  <div class="subinfo">
    <div v-for="(val,index) in descInfo" :key="index" v-show="val.type == $route.query.type">
      <header class="pd bgf">
        <a href="javascript:history.back();" class="f24 back"></a>
        <h1 class="f40 tc category">{{val.title}}</h1>
      </header>
      <div class="line100 pd bgf">
        <span class="f28 c66">{{val.typeStr}}</span>
        <input type="text" class="f28" :placeholder="val.place" v-model="verificationCode">
      </div>
      <div class="pd">
        <button class="button f32 tc cf orange-color" id="charge_btn" @click="subInfo">{{val.btnStr}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import _oil from '../../../fetch/oil'
import * as tools from '../../../util/checkParams'
import { alert } from '../../../util/tool'
import routers from '../../../router'

export default {
  data() {
    return {
      descInfo: [
        {
          type: 'zc',
          title: '注册',
          btnStr: '提交',
          place: '请输入您的验证码',
          typeStr: '验证码'
        },
        {
          type: 'bz',
          title: '修改备注',
          btnStr: '保存',
          place: '请输入您的备注名',
          typeStr: '备注名'
        },
        {
          type: 'bk',
          title: '绑卡',
          btnStr: '提交',
          place: '请输入您的验证码',
          typeStr: '验证码'
        }
      ],
      verificationCode: ''
    }
  },
  methods: {
    subInfo() {
      if (tools.isEmpty(this.verificationCode)) {
        alert('请输入信息')
        return false
      }
      let routerInfo = this.$route.query
      if (routerInfo.type === 'zc') {
        _oil.sendVerificationCode({
          businessCode: 'register',
          businessId: routerInfo.businessId,
          eventId: routerInfo.eventId,
          verificationCode: this.verificationCode
        }).then(res => {
          alert('注册成功')
          routers.push({ path: '/index/oil/oillogin/olist' })
        }).catch(error => {
          console.log(error)
        })
      } else if (routerInfo.type === 'bk') {

      } else if (routerInfo.type === 'bz') {
        _oil.updateAccountInfo({
          accountId: routerInfo.accountId,
          aliasName: this.verificationCode
        }).then(res => {
          alert('修改成功')
          routers.push({ path: '/index/oil/oillogin/olist' })
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style scoped>
.line100 .c66 {
  width: 1rem;
  display: inline-block;
}

.line100 {
  line-height: 1rem;
  border-bottom: 1px solid#f3f3f3;
  position: relative;
}

.button {
  border-radius: 1rem;
  margin-top: 1rem;
}
</style>
