<template>
  <div class="bindCard">
    <header class="pd bgf">
      <router-link to="/index/oil/oillogin/olist" class="f24 back"></router-link>
      <h1 class="f40 tc category">绑定油卡</h1>
    </header>
    <div class="line100 pd bgf">
      <span class="f28 c66">真实姓名: </span>
      <input type="text" class="f28" placeholder="请输入您的姓名" v-model="data.name">
    </div>
    <div class="line100 pd bgf">
      <span class="f28 c66">证件类型: </span>
      <input type="text" class="f28 c33" value="身份证" readonly>
    </div>
    <div class="line100 pd bgf">
      <span class="f28 c66">证件号码: </span>
      <input type="text" class="f28" placeholder="请输入您的证件号码" v-model="data.certNo">
    </div>
    <div class="line100 pd bgf">
      <span class="f28 c66">加油卡号: </span>
      <input type="text" class="f28" placeholder="请输入您的加油卡号" v-model="data.gasCardNo">
    </div>
    <div class="line100 pd bgf">
      <span class="f28 c66">手机号码: </span>
      <input type="text" class="f28" placeholder="请输入您的开卡时的手机号码" v-model="data.phoneNo">
    </div>

    <div class="pd">
      <button class="button f32 tc cf orange-color" id="charge_btn" @click="subInfo">绑定</button>
    </div>
    <div class="f24 c8e pd ts">
      <p>温馨提示：</p>
      <p>1.加油卡绑定功能仅支持多用户卡主卡、单用户卡绑定。</p>
      <p>2.短信验证码将发送至加油卡系统登记的手机号码。</p>
      <p>3.如用户接收手机验证短信失败，请核对办理加油卡时登记的手机号码是否正确， 如手机号码登记错误，可持相关证件到售卡充值网点办理资料变更。</p>
      <p>4.如用户加油卡已失效，请解绑旧卡，绑定新卡。</p>
    </div>

  </div>
</template>

<script>
import { alert } from '../../../util/tool'
import * as tools from '../../../util/checkParams'
import _oil from '../../../fetch/oil'
import router from '../../../router'

export default {
  data() {
    return {
      data: {
        accountId: 0,
        certNo: '',
        certType: 1,
        chargeType: 1,
        gasCardNo: '',
        name: '',
        phoneNo: ''
      }
    }
  },
  methods: {
    subInfo() {
      this.data.accountId = this.$route.query.accountId
      this.data.chargeType = this.$route.query.chargeType
      if (tools.isEmpty(this.data.name)) {
        alert('请输入姓名')
        return false
      }
      if (tools.isEmpty(this.data.certNo)) {
        alert('请输入证件号码')
        return false
      }
      if (tools.isEmpty(this.data.gasCardNo)) {
        alert('请输入油卡卡号')
        return false
      }
      if (tools.isEmpty(this.data.phoneNo)) {
        alert('请输入开卡时的手机号码')
        return false
      }
      _oil.bindGasCard(this.data).then(res => {
        router.push({ path: '/index/oil/oillogin/subinfo', query: { businessId: res.result.businessId, eventId: res.result.eventId, type: 'bk' } })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.line100 {
  line-height: 1rem;
  border-bottom: 1px solid#f3f3f3;
  position: relative;
}

.button {
  border-radius: 1rem;
  margin-top: 1rem;
}

.ts {
  margin-top: .5rem;
  line-height: .32rem;
}

.line100 .c66 {
  width: 1.5rem;
  display: inline-block;
}

input[type='text'],
input[type='password'] {
  width: 5rem;
}
</style>
