<template>
  <div class="payview">
    <header class="bgf">
      <router-link :to="returnUrl" class="f24 back"></router-link>
      <h1 class="f40 tc">提交订单</h1>
    </header>
    <div class="pd">
      <div class="dc_sub_1 tc c33 f36" id="title">{{titleArr[getPayData.sonBusiType]}}</div>
      <div class="dc_sub_2 f50 c00 tc">
        <span id="payAmountStr">{{payAmount}}</span>
      </div>
      <div class="dc_sub_status f28 cb tc">等待付款</div>
      <div class="dc_sub_3">
        <div class="clearfix">
          <span class="f30 c66 fl">商品说明</span>
          <span class="f28 c99 fr" id="info" v-show="!isPro">账号{{getPayData.cardNumber}}{{titleArr[getPayData.sonBusiType]}}{{getPayData.origPrice}}元</span>
          <span class="f28 c99 fr" id="info" v-show="isPro">{{getPayData.prodDesc}}{{titleArr[getPayData.sonBusiType]}}{{getPayData.origPrice}}元</span>
        </div>
      </div>
      <router-link tag="div" :to="'/me/coupon/valid?busiType='+busiType" class="dc_sub_6 c66 f28 clearfix" v-show="!isPro">
        <div class="fl">卡券 : </div>
        <div class="fr">
          <span class="cr">{{getPayData.discountAmount ? '-'+getPayData.discountAmount : '选择卡券'}}</span>
        </div>
      </router-link>
      <div class="list-block media-list">
        <ul>
          <li class="pay_mb" v-show="isShowMb">
            <label class="label-checkbox item-content clearfix" v-show="!isPro">
              <div class="fl"><img src="../assets/images/person/mb_tx.png" alt=""></div>
              <div class="item-inner fl">
                <div class="item-subtitle f30">可用猫币（剩余
                  <span class="balance_mb">{{usableBank}}</span>元）</div>
                <div class="item-text f28 c66">使用猫币支付时，不享受优惠</div>
              </div>
              <input name="my-radio" type="radio" @change="inputChange('mb')">
              <div class="item-media fr">
                <i class="icon icon-form-checkbox radio-click"></i>
              </div>
            </label>
          </li>
          <!--不可选-->
          <li class="pay_mb" v-show="!isShowMb">
            <label class="label-checkbox item-content clearfix" v-show="!isPro">
              <div class="fl"><img src="../assets/images/person/person_img1.png" alt=""></div>
              <div class="item-inner fl">
                <div class="item-subtitle f30">可用猫币（剩余
                  <span class="balance_mb">{{usableBank}}</span>元）</div>
                <div class="item-text f28 c66">使用猫币支付时，不享受优惠</div>
              </div>
              <div class="bgo f30">
                <router-link to="/purchase" class="cf">立即预购</router-link>
              </div>
            </label>
          </li>
          <li class="pay_online" v-show="isShowWx">
            <label class="label-checkbox item-content clearfix">
              <div class="fl"><img src="../assets/images/purchase/wx.png" alt=""></div>
              <div class="item-inner fl" style="margin-top:.15rem;">
                <div class="item-subtitle f30">微信支付</div>
              </div>
              <div class="f24 co fl buyFeeStr" v-if="buyFeeObj.poundageType == 1">
                <span v-show="buyFeeObj.poundageValue > 0">手续费{{buyFeeObj.poundageValue/100}}元</span>
                <span v-show="buyFeeObj.poundageValue < 0">奖励{{Math.abs(buyFeeObj.poundageValue/100)}}元</span>
              </div>
              <div class="f24 co fl buyFeeStr" v-else-if="buyFeeObj.poundageType == 2">
                <span v-show="buyFeeObj.poundageValue > 0">手续费{{buyFeeObj.poundageValue/10000}}%</span>
                <span v-show="buyFeeObj.poundageValue < 0">奖励{{Math.abs(buyFeeObj.poundageValue/10000)}}%</span>
              </div>
              <input name="my-radio" type="radio" @change="inputChange('wx')">
              <div class="item-media fr">
                <i class="icon icon-form-checkbox radio-click"></i>
              </div>
            </label>
          </li>
          <!--不可选-->
          <li class="pay_online" v-show="!isShowWx">
            <label class="label-checkbox item-content clearfix">
              <div class="fl"><img src="../assets/images/purchase/wx_h.png" alt=""></div>
              <div class="item-inner fl" style="margin-top:.15rem;">
                <div class="item-subtitle f30">微信支付</div>
              </div>
              <input name="my-radio" type="radio" disabled="disabled">
              <div class="item-media fr">
                <i class="icon icon-form-checkbox"></i>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <div class="pay pd f40 bgf">
        <p>应付:
          <span id="payAmount">{{payAmount}}</span>元
          <span class="buyfee f20 c8e" ref="buyFee"></span>
        </p>
        <a class="fr bgo cf tc" id="wxpay" @click="subPayInfo">立即支付</a>
      </div>
      <Pass @sendPassword="sendPassword" @hidePassBox="hidePassBox" v-show="isShowPassBox"></Pass>
      <v-dialog v-show="dialogShow" :dialogMsg="'您还未设置支付密码，现在去设置？'" @confirm="dialogConfirm" @cancel="dialogShow=false"></v-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import router from '../router'

import _me from '../fetch/me'
import _pay from '../fetch/pay'

import { alert } from '../util/tool'
import sha1 from '../assets/js/SHA-1'
import md5 from '../assets/js/md5'

import Pass from './Pass'
import Dialog from './Dialog'

export default {
  data() {
    return {
      subInfo: {
        cardId: 0,
        cardNumber: '',
        prodCode: 'PRODSC10',
        prodNum: 0,
        unitId: 0,
        lifeParams: '',
        couponIds: '',
        discountAmount: 0,
        payType: '',
        payAmount: 0,
        accPayAmount: 10,
        payPwd: '2f393508c2e8db02c4c69111887b9276'
      },
      titleArr: ['预购', '话费充值', '流量充值', '加油卡充值', '游戏点卡充值', '火车票购买', '水费缴纳', '电费缴纳', '燃气费缴纳', '电影票购买'],
      bindStatus: -1,
      payType: '',
      payAmount: 0,
      isShowPassBox: false,
      returnUrl: '',
      busiType: '',
      isPro: false,
      buyFeeObj: {},
      dialogShow: false
    }
  },
  components: {
    Pass,
    'v-dialog': Dialog
  },
  computed: {
    ...mapGetters([
      'getPayData',
      'usableBank',
      'currencyBankAmount'
    ]),
    isShowMb() {
      if (this.usableBank - this.payAmount >= 0) {
        return true
      }
      return false
    },
    isShowWx() {
      if (this.bindStatus === '-1') {
        return true
      } else if (this.bindStatus === 2) {
        if (this.currencyBankAmount - this.payAmount >= 0) {
          return true
        }
      }
      return false
    }
  },
  mounted() {
    this.setSubInfo()
    this.getBindStatus()
    this.getBuyFee()
    console.log(this.getPayData)
  },
  methods: {
    setSubInfo() {
      this.isPro = false
      if (!this.getPayData.cardNumber) {
        this.$store.dispatch('setPayData')
      }
      if (this.getPayData.cardId) {
        this.subInfo.cardId = this.getPayData.cardId
      }
      this.subInfo.cardNumber = this.getPayData.cardNumber
      this.subInfo.prodCode = this.getPayData.prodCode
      this.subInfo.orderCode = this.getPayData.orderCode
      this.payAmount = (this.getPayData.origPrice - this.subInfo.discountAmount).toFixed(2)
      if (this.getPayData.sonBusiType === 1) {
        this.busiType = 3
        this.returnUrl = '/index/phone/hf'
      } else if (this.getPayData.sonBusiType === 2) {
        this.busiType = 2
        this.returnUrl = '/index/phone/ll'
      } else if (this.getPayData.sonBusiType === 3) {
        this.busiType = 4
        this.returnUrl = '/index/oil/zsh'
      } else if (this.getPayData.sonBusiType === 4) {
        this.busiType = 6
        this.returnUrl = '/index/game'
      } else if (this.getPayData.sonBusiType === 5) {
        this.busiType = 8
      } else if (this.getPayData.sonBusiType === 6) {
        this.returnUrl = '/index/wec'
        this.busiType = 5
      } else if (this.getPayData.sonBusiType === 7) {
        this.returnUrl = '/index/wec'
        this.busiType = 5
      } else if (this.getPayData.sonBusiType === 8) {
        this.returnUrl = '/index/wec'
        this.busiType = 5
      } else if (this.getPayData.sonBusiType === 9) {
        this.returnUrl = '/index/movie'
        this.busiType = 7
      } else if (this.getPayData.sonBusiType === 0) {
        this.returnUrl = '/purchase'
        this.isPro = true
      }
      if (this.getPayData.couponIds) {      // 优惠券
        this.subInfo.couponIds = this.getPayData.couponIds
        this.subInfo.discountAmount = this.getPayData.discountAmount
      }
      if (this.getPayData.prodNum) {        // 自定义产品
        this.subInfo.prodNum = this.getPayData.prodNum
      }
      if (this.getPayData.lifeParams) {     // 生活缴费
        this.subInfo.prodCode = 'PROD_LIFE_20161223001'
        this.subInfo.unitId = this.getPayData.unitId
        this.subInfo.lifeParams = JSON.stringify(this.getPayData.lifeParams)
      }
    },
    getBindStatus() {
      _me.getMerchantBasic().then(res => {
        this.bindStatus = res.result.bindStatus
      }).catch(error => {
        console.log(error)
      })
    },
    inputChange(type) {
      this.payType = type
      if (type === 'mb') {
        this.subInfo.accPayAmount = this.getPayData.origPrice - this.subInfo.discountAmount < 0 ? '0.00' : (this.getPayData.origPrice - this.subInfo.discountAmount).toFixed(2)
        this.subInfo.payAmount = 0
        this.subInfo.payType = ''
        this.payAmount = this.getPayData.origPrice - this.subInfo.discountAmount < 0 ? '0.00' : (this.getPayData.origPrice - this.subInfo.discountAmount).toFixed(2)
        this.subInfo.payPoundageAmount = 0
        this.$refs.buyFee.innerHTML = ''
      } else if (type === 'wx') {
        this.subInfo.accPayAmount = 0
        this.subInfo.payType = 'wxJsPay'
        if (this.getPayData.discountPrice - this.subInfo.discountAmount < 0) {
          this.payAmount = '0.00'
          this.subInfo.payAmount = '0.00'
          this.inputChange('mb')
          return false
        } else {
          this.payAmount = (this.getPayData.discountPrice - this.subInfo.discountAmount).toFixed(2)
          this.subInfo.payAmount = (this.getPayData.discountPrice - this.subInfo.discountAmount).toFixed(2)
        }
        if (this.buyFeeObj.poundageType === 1) {
          this.subInfo['payPoundageAmount'] = this.buyFeeObj.poundageValue / 100
        } else if (this.buyFeeObj.poundageType === 2) {
          this.subInfo['payPoundageAmount'] = (this.buyFeeObj.poundageValue / 10000) * this.subInfo.payAmount
        }
        if (this.subInfo.payPoundageAmount > 0 && this.payAmount > 0) {
          this.$refs.buyFee.innerHTML = '手续费: ' + this.subInfo.payPoundageAmount + '元'
        } else if (this.subInfo.payPoundageAmount < 0 && this.payAmount > 0) {
          this.$refs.buyFee.innerHTML = '奖励: ' + Math.abs(this.subInfo.payPoundageAmount) + '元'
        }
      }
    },
    subPayInfo() {
      if (this.payType === 'mb') {
        _pay.userCheck({ action: 3 }).then(res => {
          if (res.result.isSetPayPw === 2) {
            this.dialogShow = true
          } else if (res.result.isSetPayPw === 1) {
            this.isShowPassBox = true
          }
        })
      } else if (this.payType === 'wx') {
        this.subInfo.payPwd = ''
        this.pay()
      } else {
        alert('请选择支付方式')
        return false
      }
    },
    sendPassword(data) {
      this.subInfo.payPwd = md5.md5.hex_md5(sha1.sha1.hex_sha1(data))
      this.isShowPassBox = false
      this.pay()
    },
    hidePassBox() {
      this.isShowPassBox = false
    },
    getBuyFee() {
      let buyFeeParams = {
        terminalType: 1
      }
      buyFeeParams['sonBusiType'] = this.getPayData.sonBusiType
      if (this.getPayData.typeClass === 'recharge') {
        buyFeeParams['busiType'] = 1
      } else if (this.getPayData.typeClass === 'purchase') {
        buyFeeParams['busiType'] = 2
      }
      _pay.findPayChnList(buyFeeParams).then(res => {
        if (this.payAmount >= res.result[0].minPayAmount / 100) {
          this.buyFeeObj = res.result[0]
        }
      }).catch(error => {
        console.log(error)
      })
    },
    pay() {
      if (this.busiType === 7) {     // 电影票
        _pay.orderPay(this.subInfo).then(res => {
          router.push({ path: '/order/movie' })
        })
      } else {
        _pay.pay(this.subInfo).then(res => {
          let params = {}
          params.cardNumber = this.subInfo.cardNumber
          params.totalPrice = res.result.totalPrice
          params.buyFee = this.subInfo.payPoundageAmount
          params.discountAmount = this.subInfo.discountAmount
          params.orderCode = res.result.orderCode
          params.createTime = res.result.submitTime
          params.payTime = res.result.payTime
          params.origPrice = this.getPayData.origPrice
          params.title = this.titleArr[this.getPayData.sonBusiType]
          router.push({ path: '/paysuccess', query: params })
        }).catch(error => {
          console.log(error)
        })
      }
    },
    dialogConfirm() {
      router.push({ path: '/me/set/setpass/zf' })
    }
  }
}
</script>

<style scoped>
.payview {
  padding-top: 1px;
}

.pay {
  height: .9rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: .9rem;
}

.pay>a {
  width: 40%;
  position: absolute;
  right: 0;
  bottom: 0;
}

.dc_sub_3 {
  border: none;
  padding-bottom: .1rem;
}

.dc_sub_6 {
  line-height: .7rem;
}

.dc_sub_5 .bgo {
  padding: 0 .1rem;
  line-height: .5rem;
}

.dc_sub_5.disabled .c33 {
  background: url("../assets/images/person/person_img.png") left center no-repeat;
  -webkit-background-size: .4rem;
  background-size: .4rem;
}

.back {
  background: url(../assets/images/common/ykxz_fanhui@2x.png) 0 center no-repeat;
  -webkit-background-size: .17rem .3rem;
  background-size: .17rem .3rem;
}

.content-block-title+.list-block {
  margin-top: .2rem;
}

.list-block ul {
  position: relative;
}

.list-block ul::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: auto;
  right: auto;
  height: 1px;
  width: 100%;
  background-color: #e7e7e7;
  display: block;
  z-index: 15;
  -webkit-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
}

.list-block li {
  position: relative;
}

.list-block .item-content {
  padding: .1rem 0;
  box-sizing: border-box;
  display: block;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

label.label-checkbox input[type="radio"] {
  display: none;
}

.list-block .item-media {
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}

label.label-checkbox input[type="radio"]:checked+.item-media i.icon-form-checkbox {
  border: none;
  background-color: #0894ec;
}

label.label-checkbox i.icon-form-checkbox {
  width: .4rem;
  height: .4rem;
  position: relative;
  border-radius: 1.1rem;
  border: 1px solid #c7c7cc;
  box-sizing: border-box;
}

.icon {
  font-family: "iconfont-sm" !important;
  font-style: normal;
  display: inline-block;
  vertical-align: middle;
  background-size: 100% auto;
  background-position: center;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.list-block li label img {
  width: .4rem;
  height: .4rem;
  margin-right: .2rem;
  margin-top: .2rem;
}

label.label-checkbox input[type="radio"]:checked+.item-media i.icon-form-checkbox::after {
  background: no-repeat center;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E");
  -webkit-background-size: .2rem .2rem;
  background-size: .2rem .2rem;
}

label.label-checkbox i.icon-form-checkbox::after {
  content: ' ';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.list-block .bgo {
  position: absolute;
  right: 0;
  top: .2rem;
  padding: 0 .2rem;
  line-height: .5rem;
}

.list-block .bgo a {
  display: block;
}

.pay_mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 9999;
}

.pay_mask>div {
  width: 5rem;
  height: 1.5rem;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.pay_mask p {
  line-height: .5rem;
}

.pay_mask_pass {
  width: 4.3rem;
  height: .72rem;
  background: url("../assets/images/purchase/input_bg.png") no-repeat center;
  -webkit-background-size: 4.27rem;
  background-size: 4.27rem;
  margin: .1rem auto;
  position: relative;
}

.pay_mask_pass>input {
  background-color: transparent;
  width: 12rem;
  position: absolute;
  top: 0;
  left: -7.5rem;
  opacity: 0;
}

.pay_mask_pass>ul {
  width: 4.27rem;
  height: .72rem;
}

.pay_mask_pass li {
  width: .15rem;
  height: .15rem;
  border-radius: 50%;
  background-color: #333;
  margin: .28rem;
  display: none;
}

.pay_mask>div>span {
  width: .2rem;
  height: .2rem;
  background: url(../assets/images/common/close.png);
  -webkit-background-size: cover;
  background-size: cover;
  position: absolute;
  top: .1rem;
  left: .15rem;
  font-family: "微软雅黑";
}

.dc_sub_6 .fr {
  padding-right: .3rem;
  background: url("../assets/images/common/right.png") no-repeat center right;
  -webkit-background-size: .17rem;
  background-size: .17rem;
}

.dc_sub_6 .cr {
  color: #FF6953;
}

.dc_sub_1 {
  margin-top: .48rem;
}

.buyFeeStr {
  line-height: 0.3rem;
  border: 1px solid rgb(255, 105, 83);
  padding: 0.1rem 0.2rem;
  border-radius: 5px;
  margin-top: 0.06rem;
  margin-left: 0.2rem;
}
</style>
