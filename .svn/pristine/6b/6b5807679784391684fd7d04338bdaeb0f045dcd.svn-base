<template>
  <div class="gamesub">
    <header class="bgf">
      <router-link to="/index/game" class="f24 back"></router-link>
      <h1 class="f40 tc">{{titleArr[$route.query.rechargeType - 1]}}充值</h1>
    </header>
    <div class="dyl_content pd">
      <input type="hidden" name="cardId" value="0">
      <div class="dyl_gas_nums clearfix">
        <div class="dyl_gas_recharge_num fl">
          <input type="text" name="cardNumber" placeholder="请输入充值账号" class="c33" v-model="cardNumber">
        </div>
        <router-link :to="'/choosecard?cardType=5&returnUrl='+$route.path+'&rechargeType='+$route.query.rechargeType" class="dyl_gas_recharge_chioce fr" v-show="parseInt($route.query.rechargeType) - 4 < 1"></router-link>
        <!-- <a href="javascript:void(0);" id="search"></a> -->
      </div>
      <div id="wow" v-show="$route.query.rechargeType == 6">
        <div class="dyl_wow_only clearfix c33">
          <div class="fl f22">
            <p :class="{active:only}" @click="chooseOnly"></p>
            <span>该账号下只有一个魔兽账号</span>
          </div>
        </div>
        <div class="dyl_myaccount" id="children_account" v-show="!only">
          <input type="text" name="cardNumberChildren" placeholder="请输入游戏账号" class="bz" v-model="wowCardNumber">
        </div>
      </div>
      <div class="dyl_gas_inventory f26 clearfix">
        <div class="dyl_gas_inventory1 fl">可用猫币
          <span class="co" id="ty_stock">{{usableBank}}元</span>
        </div>
        <div class="dyl_gas_inventory2 fr">分销商库存
          <span class="cb" id="xs_stock">{{currencyBankAmount}}元</span>
        </div>
      </div>
      <div class="dyl_row clearfix" id="gas_list">
        <div class="dyl_gas_c33 tc fl bz gas flag" @click="chooseIndex=index" v-for="(val, index) in gameInfo" :key="index" :class="{active:chooseIndex==index}">
          <div v-show="val.isAnyAmount === 1" @click="freeFocus=false">
            <h3 class="f30">{{val.origPrice}}</h3>
            <p class="f22">售价{{val.discountPrice}}元</p>
          </div>
          <div v-show="val.isAnyAmount === 2" @click="focus" class="focus dc" :class="{active: freeFocus}">
            <h3>
              <input type="number" v-model="freeAmount" class="integer anyNum tc" @blur="blur" placeholder="输入面值" oninput="if(value.length>4)value=value.slice(0,5)">
            </h3>
            <p class="f22 co">售价:{{(freeAmount * val.discount).toFixed(2)}}元</p>
          </div>
        </div>
      </div>
      <div class="dyl_cf_area tc f26 clearfix co" id="lol" hidden="" style="display: block;" v-show="lolOptions.length>0">
        <select class="fl co" ref="lolUnits">
          <option v-for="(val,index) in lolOptions" :key="index" :value="val.unitId">{{val.unitName}}</option>
        </select>
      </div>
      <div class="dyl_cf_area tc f26 clearfix co" id="lol" hidden="" style="display: block;" v-show="cfOptions.length>0">
        <select class="fl co" ref="cfOptions" @change="cfOptionValue">
          <option v-for="(val,index) in cfOptions" :key="index" :value="val.unitId">{{val.unitName}}</option>
        </select>
        <select class="fl co" ref="cfNextOptions">
          <option v-for="(val,index) in cfNextOptions" :key="index" :value="val.unitId">{{val.unitName}}</option>
        </select>
      </div>
      <div class="dyl_gas_recharge_button clearfix">
        <button class="button f36 tc cf bgo bz" id="save_recharge" @click="subInfo">充值</button>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex'

import _prod from '../../../fetch/prod'
import _wec from '../../../fetch/wec'

import { alert } from '../../../util/tool'
import * as tools from '../../../util/checkParams'

import router from '../../../router'

export default {
  data() {
    return {
      titleArr: ['Q币', '英雄联盟', '地下城与勇士', '穿越火线', '网易一卡通', '魔兽世界'],
      freeAmount: '',
      chooseIndex: -1,
      freeFocus: false,
      gameInfo: [],
      cardNumber: '',
      lolOptions: [],
      cfOptions: [],
      cfNextOptions: [],
      only: false,
      wowCardNumber: ''
    }
  },
  computed: {
    ...mapGetters([
      'usableBank',
      'currencyBankAmount'
    ])
  },
  mounted() {
    this.getProd()
    if (this.$route.query.cardNumber) {
      this.cardNumber = this.$route.query.cardNumber
    }
    if (this.$route.query.rechargeType === '2') {
      _wec.getUnitData({
        busiType: 4,
        unitId: 0
      }).then(res => {
        this.lolOptions = res.result
      })
    }
    if (this.$route.query.rechargeType === '4') {
      _wec.getUnitData({
        busiType: 5,
        unitId: 0
      }).then(res => {
        this.cfOptions = res.result
        _wec.getUnitData({
          busiType: 5,
          unitId: res.result[0].unitId
        }).then(res => {
          this.cfNextOptions = res.result
        })
      })
    }
  },
  methods: {
    ...mapActions([
      'savePayData'
    ]),
    getProd() {
      let _this = this
      _prod.getGameProd({
        rechargeType: _this.$route.query.rechargeType
      }).then(res => {
        this.gameInfo = res.result
      })
    },
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
      if (tools.isEmpty(this.cardNumber)) {
        alert('请输入卡号')
        return false
      }
      if (this.$route.query.rechargeType === '6' && this.only === false && tools.isEmpty(this.wowCardNumber)) {
        alert('请输入游戏账号')
        return false
      }
      if (this.chooseIndex < 0) {
        alert('请选择产品')
        return false
      }
      let data = {
        typeClass: 'recharge',
        cardNumber: this.cardNumber,
        sonBusiType: 4
      }
      data['prodCode'] = this.gameInfo[this.chooseIndex].prodCode
      if (this.gameInfo[this.chooseIndex].isAnyAmount === 2) {
        if (this.freeAmount >= this.gameInfo[this.chooseIndex].numLimit.split(',')[0].split('-')[0] && (this.gameInfo[this.chooseIndex].numLimit.split(',')[0].split('-')[1] - this.freeAmount >= 0)) {
          data['prodNum'] = this.freeAmount
          data['discountPrice'] = (this.freeAmount * this.gameInfo[this.chooseIndex].discount).toFixed(2)
          data['origPrice'] = this.freeAmount
        } else {
          alert('充值范围' + this.gameInfo[this.chooseIndex].numLimit)
          return false
        }
      } else if (this.gameInfo[this.chooseIndex].isAnyAmount === 1) {
        data['prodNum'] = 0
        data['discountPrice'] = this.gameInfo[this.chooseIndex].discountPrice
        data['origPrice'] = this.gameInfo[this.chooseIndex].origPrice
      }

      // LOL
      if (this.$route.query.rechargeType === '2') {
        data['unitId'] = this.$refs.lolUnits.value
      }
      // CF
      if (this.$route.query.rechargeType === '4') {
        data['unitId'] = this.$refs.cfNextOptions.value
      }
      // WOW
      if (this.$route.query.rechargeType === '6') {
        if (this.only) {
          data['cardNumber'] = this.cardNumber + '*' + this.cardNumber
        } else {
          data['cardNumber'] = this.cardNumber + '*' + this.wowCardNumber
        }
      }
      // 号箱选择
      if (this.$route.query.cardId) {
        data['cardId'] = this.$route.query.cardId
      }
      console.log(data)
      this.savePayData(data)
      router.push({ path: '/pay' })
    },
    cfOptionValue() {
      console.log(this.$refs.cfOptions.value)
      _wec.getUnitData({
        busiType: 5,
        unitId: this.$refs.cfOptions.value
      }).then(res => {
        this.cfNextOptions = res.result
      })
    },
    chooseOnly() {
      this.only = !this.only
    }
  }
}
</script>
  
<style scoped>
.dyl_gas_nums {
  border-bottom: solid #ccc 1px;
  position: relative;
  padding: .2rem 0;
}

.dyl_gas_recharge_num,
.dyl_gas_recharge_num input {
  line-height: .8rem;
  font-size: .5rem;
  width: 5.8rem;
}

.dyl_cf_area select {
  padding-left: .2rem;
  font-size: .26rem;
  display: block;
  width: 3.25rem;
  height: .7rem;
  border: 1px solid #fc5b32;
  line-height: .7rem;
  border-radius: 5px;
  margin-right: .2rem;
  background: url(../../../assets/images/game/yxcz_xial@2x.png) 2.9rem center no-repeat;
  -webkit-background-size: .23rem .1rem;
  background-size: .23rem .1rem;
}

.dyl_gas_recharge_chioce {
  background: url(../../../assets/images/game/game_recharge.png) 0 0 no-repeat;
  -webkit-background-size: .69rem .69rem;
  background-size: .69rem .69rem;
  display: block;
  width: .69rem;
  height: .69rem;
  margin-top: .1rem;
}

.dyl_gas_recharge_num input {
  line-height: .8rem;
  font-size: .5rem;
  width: 5.8rem;
}

.dyl_gas_inventory1 {
  background: url(../../../assets/images/gas/kc@2x.png) 0 center no-repeat;
  -webkit-background-size: .3rem .3rem;
  background-size: .3rem .3rem;
  padding-left: .4rem;
}

.dyl_gas_inventory2 {
  background: url(../../../assets/images/gas/mb@2x.png) 0 center no-repeat;
  -webkit-background-size: .3rem .3rem;
  background-size: .3rem .3rem;
  padding-left: .4rem;
}

.dyl_gas_inventory {
  line-height: 1rem;
}

.dyl_gas_c33 {
  width: 30%;
  height: 1.2rem;
  border: 1px solid #ccc;
  border-radius: .1rem;
  margin-bottom: .2rem;
  overflow: hidden;
  margin-right: 3.33%;
  display: block;
  padding: .2rem 0;
}

.dyl_gas_c33.active {
  border: 1px solid #fc5b32;
}

.dyl_gas_c33.active h3,
.dyl_gas_c33.active p {
  color: #fc5b32;
}

.dyl_gas_c33 input {
  line-height: .9rem;
}

.dyl_gas_c33 input {
  width: 100%;
}

.focus.active input {
  line-height: .4rem;
  color: #fc5b32;
}

.focus.active.dyl_gas_c33 {
  border: 1px solid #fc5b32;
}

.focus.active ::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #fc5b32;
}

.focus.active :-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #fc5b32;
}

.focus.active ::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fc5b32;
}

.focus.active :-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #fc5b32;
}

.button.bgo {
  background-color: #ff9600;
  margin-top: .5rem;
}

.dyl_wow_only {
  line-height: .7rem;
}

.dyl_wow_only p {
  width: .26rem;
  height: .26rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: inline-block;
}

.dyl_wow_only .active {
  background: url("../../../assets/images/game/boxcheck.png") no-repeat center;
  background-size: contain;
  border: none;
}

.dyl_wow_only img {
  width: .3rem;
  display: inline-block;
  margin-right: .14rem;
}

label.label-checkbox {
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
  line-height: .25rem;
  margin-right: .2rem;
  padding: .18rem 0;
}

.dyl_myaccount,
.dyl_myaccount input[type="text"] {
  line-height: .8rem;
  line-height: .8rem;
  vertical-align: top;
  width: 100%;
}

.dyl_myaccount input[type="text"] {
  border: 1px solid #999;
  padding: .2rem .1rem;
  line-height: .4rem;
}
</style>
  