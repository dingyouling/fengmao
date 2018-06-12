<template>
  <div class="zsy pd">
    <div class="dyl_gas_nums clearfix">
      <div class="dyl_gas_recharge_num fl">
        <input type="text" placeholder="请输入加油卡卡号" class="c33 num zshCardNo autoHandleCardNo" v-model="cardNumber" id="cardNumber">
      </div>
      <router-link :to="'/choosecard?cardType=1&subCardType=1&returnUrl='+$route.path" class="dyl_gas_recharge_chioce fr"></router-link>
    </div>
    <!--库存-->
    <div class="dyl_gas_inventory f26 clearfix">
      <div class="dyl_gas_inventory1 fl">可用猫币
        <span class="co" id="ty_stock">{{usableBank}}元</span>
      </div>
      <div class="dyl_gas_inventory2 fr">分销商库存
        <span class="cb" id="xs_stock">{{currencyBankAmount}}元</span>
      </div>
    </div>
    <!--产品-->
    <div class="dyl_row clearfix" id="gas_list">
      <div class="dyl_gas_c33 tc fl bz gas flag" @click="chooseIndex=index" v-for="(val, index) in zsyInfo" :key="index" :class="{active:chooseIndex==index}">
        <div v-show="val.isAnyAmount === 1" @click="freeFocus=false">
          <h3 class="f30">{{val.origPrice}}</h3>
          <p class="f22">售价{{val.discountPrice}}元</p>
        </div>
        <div v-show="val.isAnyAmount === 2" @click="focus" class="focus dc" :class="{active: freeFocus}">
          <h3>
            <input type="number" v-model="freeAmount" class="integer anyNum tc" @blur="blur" placeholder="输入面值" oninput="if(value.length>4)value=value.slice(0,4)">
          </h3>
          <p class="f22 co">售价:{{(freeAmount * val.discount).toFixed(2)}}元</p>
        </div>
      </div>
    </div>
    <!-- 索要发票 -->
    <div class="recharge_bill">
      <!-- 如果输入面值则样式是这个 -->
      <div class="fl f32">需要发票</div>
      <div class="fr f24 c8e">
        <p class="fl">{{freeFocus?'在圈存时加油站可提供发票':'固定金额不提供发票'}}</p>
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
    <div class="dyl_gas_recharge_button clearfix">
      <button class="button f30 tc cf orange-color bz" id="charge_btn" @click="subInfo">充值</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { alert } from '../../../util/tool'
import * as tools from '../../../util/checkParams'
import router from '../../../router'

export default {
  data() {
    return {
      freeAmount: '',
      chooseIndex: -1,
      freeFocus: false,
      isAgree: false,
      cardNumber: ''
    }
  },
  computed: {
    ...mapGetters([
      'zsyInfo',
      'usableBank',
      'currencyBankAmount'
    ])
  },
  mounted() {
    this.getZsyInfo()
    if (this.$route.query.cardNumber) {
      this.cardNumber = this.$route.query.cardNumber
    }
  },
  methods: {
    ...mapActions([
      'getZsyInfo',
      'savePayData'
    ]),
    focus() {
      this.freeFocus = true
    },
    blur() {
      if (!this.freeAmount > 0) {
        this.freeFocus = false
        this.chooseIndex = -1
      }
    },
    subInfo() {
      if (!tools.isZsy(this.cardNumber)) {
        alert('请输入正确的中石油卡号')
        return false
      }
      if (this.chooseIndex < 0) {
        alert('请选择产品')
        return false
      }
      if (!this.isAgree) {
        alert('请先阅读服务免责条款和充值协议')
        return false
      }
      let subInfo = {
        typeClass: 'recharge',
        cardId: 0,
        sonBusiType: 3
      }
      subInfo['cardNumber'] = this.cardNumber
      subInfo['prodCode'] = this.zsyInfo[this.chooseIndex].prodCode
      if (this.zsyInfo[this.chooseIndex].isAnyAmount === 2) {
        if (this.freeAmount >= this.zsyInfo[this.chooseIndex].numLimit.split('-')[0] && (this.zsyInfo[this.chooseIndex].numLimit.split('-')[1] - this.freeAmount >= 0)) {
          subInfo['prodNum'] = this.freeAmount
          subInfo['discountPrice'] = (this.freeAmount * this.zsyInfo[this.chooseIndex].discount).toFixed(2)
          subInfo['origPrice'] = this.freeAmount
        } else {
          alert('充值范围' + this.zsyInfo[this.chooseIndex].numLimit)
          return false
        }
      } else if (this.zsyInfo[this.chooseIndex].isAnyAmount === 1) {
        subInfo['prodNum'] = 0
        subInfo['discountPrice'] = this.zsyInfo[this.chooseIndex].discountPrice
        subInfo['origPrice'] = this.zsyInfo[this.chooseIndex].origPrice
      }
      // 号箱选择
      if (this.$route.query.cardId) {
        subInfo['cardId'] = this.$route.query.cardId
      }
      this.savePayData(subInfo)
      router.push({ path: '/pay' })
    }
  }
}
</script>
