<template>
  <div class="oillogin">
    <div class="dyl_content pd" v-show="isShow">
      <!--油卡登录开始-->
      <div class="gas_login">
        <div class="line100 clearfix" v-show="loginStatus == 2">
          <div class="fl f28">您还没有登录账号还不能充值</div>
          <div class="fr f32">
            <span class="masker">去登录</span>
          </div>
        </div>
        <div v-show="loginStatus == 1">
          <router-link to="/index/oil/oillogin/olist" class="line100 clearfix">
            <div class="fl f28">{{oilInfo.loginName}}
              <span class="masker f24">{{oilInfo.oilType == 1 ? '中石油' : '中石化'}}</span>
            </div>
            <div class="fr f24 c8e _masker">账号卡号管理</div>
          </router-link>
          <div class="line100 clearfix">
            <div class="fl f28 c8e">充值卡号</div>
            <div class="fr f40 c33" id="loginCordNo">{{oilInfo.cardNo}}</div>
          </div>
        </div>
      </div>
      <!--油卡登录结束-->
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
        <div class="dyl_gas_c33 tc fl bz gas flag" @click="chooseIndex=index" v-for="(val,index) in dataList" :key="index" :class="{active:chooseIndex==index}">
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
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import _oil from '../../../fetch/oil'
import { alert } from '../../../util/tool'
import router from '../../../router'

export default {
  data() {
    return {
      freeAmount: '',
      chooseIndex: -1,
      freeFocus: false,
      loginStatus: 2,
      oilInfo: {
        cardNo: '',
        oilType: 2,
        loginName: ''
      },
      dataList: [],
      isAgree: false
    }
  },
  computed: {
    ...mapGetters([
      'usableBank',
      'currencyBankAmount',
      'newZshInfo',
      'newZsyInfo'
    ]),
    isShow() {
      if (this.$route.path.split('/').length === 4) {
        return true
      }
      return false
    }
  },
  mounted() {
    this.getInfo()
  },
  watch: {
    $route() {
      this.getInfo()
    }
  },
  methods: {
    ...mapActions([
      'getNewZsh',
      'getNewZsy',
      'savePayData'
    ]),
    getInfo() {
      this.getNewZsh()
      this.getNewZsy()
      this.getLoginStatus()
      if (this.$route.query.cardNo) {
        this.oilInfo.cardNo = this.$route.query.cardNo
        this.oilInfo.oilType = this.$route.query.oilType
        this.oilInfo.loginName = this.$route.query.loginName
      }
      if (this.$route.query.oilType === 1) {
        this.dataList = this.newZsyInfo
      } else {
        this.dataList = this.newZshInfo
      }
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
    getLoginStatus() {
      _oil.getLoginStatus().then(res => {
        this.loginStatus = res.result.loginStatus
      })
    },
    subInfo() {
      if (!this.$route.query.cardNo) {
        alert('请选择要充值的卡号')
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
      subInfo['cardNumber'] = this.$route.query.cardNo
      subInfo['prodCode'] = this.dataList[this.chooseIndex].prodCode
      if (this.dataList[this.chooseIndex].isAnyAmount === 2) {
        if (this.freeAmount >= this.dataList[this.chooseIndex].numLimit.split('-')[0] && (this.dataList[this.chooseIndex].numLimit.split('-')[1] - this.freeAmount >= 0)) {
          subInfo['prodNum'] = this.freeAmount
          subInfo['discountPrice'] = (this.freeAmount * this.dataList[this.chooseIndex].discount).toFixed(2)
          subInfo['origPrice'] = this.freeAmount
        } else {
          alert('充值范围' + this.dataList[this.chooseIndex].numLimit)
          return false
        }
      } else if (this.dataList[this.chooseIndex].isAnyAmount === 1) {
        subInfo['prodNum'] = 0
        subInfo['discountPrice'] = this.dataList[this.chooseIndex].discountPrice
        subInfo['origPrice'] = this.dataList[this.chooseIndex].origPrice
      }
      this.savePayData(subInfo)
      router.push({ path: '/pay' })
    }
  }
}
</script>

<style scoped>
.oillogin {
  height: 100%;
}

.line100 {
  border-bottom: 1px solid #e5e5e5;
}

.masker {
  padding: .1rem .2rem;
  border: 1px solid #fc5b32;
  border-radius: .5rem;
  color: #fc5b32;
  margin-left: .2rem;
}

._masker {
  padding-right: .3rem;
  background: url(../../../assets/images/common/right.png) no-repeat center right;
  -webkit-background-size: .17rem;
  background-size: .17rem;
}
</style>
