<template>
  <div id="purchase">
    <div v-show="isShow">
      <header class="bgf">
        <h1 class="f40 tc">预购</h1>
      </header>
      <router-link to="/purchase/prebusiness" class="banner">
        <img src="../assets/images/purchase/banner.png" alt="">
      </router-link>
      <div class="bgf">
        <Rule @ruleData="getRuleData" :sendRuleData="ruleData"></Rule>
        <div class="pd pur_result f32 c8e">
          <input class="tc fl f40 c8e number1 num" name="first_screen" type="text" v-model="ruleData" placeholder="请输入预购金额">元
        </div>
      </div>
      <div>
        <div class="pd clearfix bgf3 f36 bdl_w">
          <div class="bdl">
            建议您购买以下预购
          </div>
        </div>
        <div class="bgf">
          <div class="box clearfix">
            <div class="flag fl mr" v-for="(val,index) in prodList" :class="{'active':index==chooseIndex,'new':index<2}" :key="index" prodCode="" @click="chooseProd(index)">
              <h5 class="tc f26">赠送{{val.givingPercent}}%</h5>
              <p class="tc f20">{{val.givingNum}}期到账</p>
            </div>
          </div>
          <p class="tc f30">分 {{prodList[chooseIndex].givingNum}} 期到账 立即到账一期</p>
          <p class="tc f30 line60">充 {{ruleData}} 元奖励 {{prodList[chooseIndex].givingPercent * ruleData / 100}} 元实得 {{parseFloat(prodList[chooseIndex].givingPercent * ruleData / 100) + parseFloat(ruleData)}} 元</p>
        </div>
        <div class="clearfix line60 bgf pd detail" @click="getDate">
          <p class="f30 c66 fl">预购收益明细</p>
          <p class="f28 co fr" id="charge_dtl"> {{Math.floor((parseFloat(prodList[chooseIndex].givingPercent * ruleData / 100) + parseFloat(ruleData)) * 100 / (prodList[chooseIndex].givingNum))/100}} 元/月* {{prodList[chooseIndex].givingNum}} 个月= {{parseFloat(prodList[chooseIndex].givingPercent * ruleData / 100) + parseFloat(ruleData)}} 元</p>
        </div>
      </div>
      <div class="detail_info" v-show="showDate">
        <div class="bgf">
          <p class="f30 c33 bold tc line90">月到账明细
            <span class="close" @click="hideDate">×</span>
          </p>
          <div class="f28 clearfix bgo pd cf">
            <p class="fl line60">到账金额</p>
            <p class="fr line60">到账时间</p>
          </div>
          <div class="detail_info_box pd">
            <div class="detail_info_item clearfix f24 borderb" v-for="(val,index) in dateData" :key="index">
              <p class="fl line60">
                <span class="co f30">{{val.amount}}元</span> ({{index + 1}}/{{prodList[chooseIndex].givingNum}})</p>
              <p class="fr line60">{{val.time}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="pay pd f40 bgf">
        <p>应付:{{ruleData}}元</p>
        <a href="javascript:void(0);" class="fr bgo cf tc" id="prebuy_sub" @click="subInfo">立即支付</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Rule from './purchase/purchase/Rule'
import _prod from '../fetch/prod'
import { alert } from '../util/tool'
import router from '../router'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      ruleData: 1000,
      prodList: [{
        amount: 0,
        busiId: 3,
        givingNum: 24,
        givingPercent: 28,
        limitAmount: 0,
        prodCode: 'DISTR_24MON_0701005_C',
        prodDesc: '奖励28%  分24期返还-商城',
        prodId: 1127,
        prodName: '奖励28%  分24期返还-商城',
        prodStatus: '1',
        prodTitle: '奖励28%  分24期返还-商城'
      }],
      chooseIndex: 0,
      dateData: [],
      showDate: false
    }
  },
  computed: {
    isShow() {
      if (this.$route.path === '/purchase') {
        return true
      } else {
        return false
      }
    }
  },
  components: {
    Rule
  },
  mounted() {
    this.getProd()
  },
  watch: {
    ruleData() {
      if (this.ruleData > 100000) {
        alert('最大金额为100000')
        this.ruleData = 100000
      }
    }
  },
  methods: {
    ...mapActions([
      'savePayData'
    ]),
    getRuleData(data) {
      this.ruleData = data
    },
    getProd() {
      let data = {
        page: 1,
        prodPrice: 100,
        channel: 4,
        prodType: 1
      }
      _prod.getPro(data).then(res => {
        this.prodList = res.result
      }).catch(error => {
        console.log(error)
      })
    },
    chooseProd(index) {
      this.chooseIndex = index
    },
    getDate() {
      this.dateData = []
      this.showDate = true
      let time = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
      }
      for (var i = 0; i < this.prodList[this.chooseIndex].givingNum; i++) {
        var data = {}
        var newtime = {
          year: time.year,
          month: time.month,
          day: time.day
        }
        if (time.month + i > 12 && time.month + i <= 24) {
          newtime.month = time.month + i - 12
          newtime.year = time.year + 1
        } else if (time.month + i > 24) {
          newtime.month = time.month + i - 24
          newtime.year = time.year + 2
        } else {
          newtime.month = time.month + i
        }
        if (newtime.month === 4 || newtime.month === 6 || newtime.month === 9 || newtime.month === 11) {
          if (newtime.day > 30) {
            newtime.day = 30
          }
        } else if (newtime.month === 2) {
          if (newtime.year % 4 === 0 && newtime.day > 29) {
            newtime.day = 29
          } else if (newtime.year % 4 !== 0 && newtime.day > 28) {
            newtime.day = 28
          }
        }
        newtime.month = newtime.month > 9 ? newtime.month : '0' + newtime.month
        newtime.day = newtime.day > 9 ? newtime.day : '0' + newtime.day
        if (i === 0) {
          data.time = '立即到账'
          data.amount = (parseFloat(this.ruleData * (100 + this.prodList[this.chooseIndex].givingPercent) / 100) - Math.floor(this.ruleData * (100 + this.prodList[this.chooseIndex].givingPercent) / 100 / this.prodList[this.chooseIndex].givingNum * 100) / 100 * (this.prodList[this.chooseIndex].givingNum - 1)).toFixed(2)
        } else {
          data.time = newtime.year + '-' + newtime.month + '-' + newtime.day
          data.amount = Math.floor(this.ruleData * (100 + this.prodList[this.chooseIndex].givingPercent) / 100 / this.prodList[this.chooseIndex].givingNum * 100) / 100
        }
        this.dateData.push(data)
      }
    },
    hideDate() {
      this.showDate = false
    },
    subInfo() {
      let subInfo = {
        typeClass: 'purchase',
        origPrice: this.ruleData,
        discountPrice: this.ruleData,
        prodCode: this.prodList[this.chooseIndex].prodCode,
        sonBusiType: 0,
        prodDesc: this.prodList[this.chooseIndex].prodDesc
      }
      this.savePayData(subInfo)
      router.push({ path: '/pay' })
    }
  }
}
</script>

<style scoped>
.mr {
  margin-right: 4%;
}

.line90 {
  line-height: .9rem;
}

.borderb {
  border-bottom: 1px solid #e9e9e9;
}

#purchase {
  background: #f3f3f3;
  height: 100%;
}

.pur_result {
  height: 1rem;
  margin-bottom: .2rem;
  line-height: 1rem;
  border-top: 1px solid #E6E6E6;
  border-bottom: 1px solid #E6E6E6;
}

.pur_result>input {
  width: 80%;
  height: .97rem;
}

.bdl {
  border-left: solid 2px #fc5b32;
  padding-left: .1rem;
}

.bdl_w {
  padding: .2rem .3rem;
}

.box {
  padding-top: 1px;
  padding-bottom: 3%;
  margin-left: 4%;
}

.box>div {
  width: 28%;
  padding: .1rem 0;
  border: 1px solid #E6E6E6;
  border-radius: 3px;
  margin-top: 3%;
  position: relative;
}

.box>.active {
  border: 1px solid #fc5b32;
  color: #fc5b32;
}

.line60 {
  line-height: .6rem;
}

.detail {
  border-top: 1px solid #e9e9e9;
}

.detail>.co {
  padding-right: .3rem;
  background: url("../assets/images/purchase/right.png") right center no-repeat;
  -webkit-background-size: .18rem;
  background-size: .18rem;
}

.detail_info {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  /* display: none; */
}

.detail_info>.bgf {
  width: 5.5rem;
  height: 5.2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 5px;
}

.detail_info>.bgf>div>p {
  width: 45%;
  padding-left: .34rem;
}

.detail_info>.bgf>div>p:nth-of-type(1) {
  background: url("../assets/images/purchase/je.png") left center no-repeat;
  -webkit-background-size: .25rem;
  background-size: .25rem;
  ;
}

.detail_info>.bgf>div>p:nth-of-type(2) {
  background: url("../assets/images/purchase/sj.png") left center no-repeat;
  -webkit-background-size: .25rem;
  background-size: .25rem;
  ;
}

.detail_info>.bgf>div>div>p {
  width: 50%;
  text-align: center;
}

.detail_info>.bgf>p>span {
  position: absolute;
  top: 0;
  right: .2rem;
}

.detail_info_box {
  height: 3.7rem;
  overflow-y: scroll;
}

.pay {
  height: .9rem;
  position: fixed;
  bottom: 0.99rem;
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

.new:after {
  content: "NEW";
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  color: #fff;
  font-size: .14rem;
  padding: 0.02rem;
  border-radius: 3px 0;
}
</style>
