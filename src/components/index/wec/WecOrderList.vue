<template>
  <div class="lis">
    <header class="bgf head">
      <router-link to="/index/wec" class="f24 back"></router-link>
      <h1 class="f40 tc">查询结果</h1>
    </header>
    <div class="content" v-if="!noData">
      <div class="wec_tit bgf">
        <div class="cb f36">应缴账单</div>
      </div>
      <div class="pd bgf">
        <div id="bills">
          <div class="dc_sub_3">
            <div class="clearfix">
              <span class="f30 c66 fl">缴费单位</span>
              <span class="f28 c99 fr">{{$route.query.unitName}}</span>
            </div>
            <div class="clearfix">
              <span class="f30 c66 fl">户号</span>
              <span class="f28 c99 fr">{{$route.query.account}}</span>
            </div>
            <div class="clearfix">
              <span class="f30 c66 fl">本次欠费</span>
              <span class="f28 c99 fr">{{dataList[chooseIndex].balance}}元</span>
            </div>
            <div class="clearfix">
              <span class="f30 c66 fl">可用余额</span>
              <span class="f28 cb fr">{{dataList[chooseIndex].balanceAmount}}元</span>
            </div>
            <div class="clearfix">
              <span class="f30 c66 fl">账期</span>
              <select class="f28 fr co" style="line-height: .4rem;" @change="changeMonth" ref="chooseMonth">
                <option :value="val" v-for="(val,index) in monthArr" :key="index">{{val}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="clearfix dc_sub_4 f26">
          <ul class="fr clearfix" id="stock">
            <li class="fl">线上猫币
              <span class="co">{{usableBank}}</span>元</li>
            <li class="fl">通用猫币
              <span class="cb">{{currencyBankAmount}}</span>元</li>
          </ul>
        </div>
        <button class="button cf f36 tc bgo dc_btn" @click="subInfo">立即缴费</button>
      </div>
    </div>
    <div v-else class="wec_list_no f32 tc c8e">
      <img src="../../../assets/images/order/dingdan.png" alt="">
      <p>当前无欠费或无最新订单~</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import _wec from '../../../fetch/wec'
import router from '../../../router'

export default {
  data() {
    return {
      noData: true,
      dataList: [],
      monthArr: [],
      chooseIndex: 0
    }
  },
  computed: {
    ...mapGetters([
      'currencyBankAmount',
      'usableBank'
    ])
  },
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions([
      'savePayData'
    ]),
    init() {
      _wec.queryBalance({
        account: this.$route.query.account,
        unitId: this.$route.query.unitId
      }).then(res => {
        if (res.result.length > 0) {
          this.dataList = res.result
          this.noData = false
          for (var i = 0; i < res.result.length; i++) {
            this.monthArr.push(res.result[i].payMentDay)
          }
        } else {
          this.noData = true
        }
      }).catch(error => {
        console.log(error)
        this.noData = true
      })
    },
    changeMonth() {
      for (var i = 0; i < this.dataList.length; i++) {
        if (this.dataList[i].payMentDay === this.$refs.chooseMonth.value) {
          this.chooseIndex = i
        }
      }
    },
    subInfo() {
      let subInfo = {
        typeClass: 'recharge',
        cardId: 0
      }
      subInfo['sonBusiType'] = this.$route.query.sonBusiType
      subInfo['cardNumber'] = this.dataList[this.chooseIndex].account
      subInfo['origPrice'] = this.dataList[this.chooseIndex].balance
      subInfo['discountPrice'] = Math.floor(this.dataList[this.chooseIndex].balance * this.dataList[this.chooseIndex].discount / 10) / 100
      subInfo['unitId'] = this.$route.query.unitId
      subInfo['lifeParams'] = {
        payMentDay: this.dataList[this.chooseIndex].payMentDay,
        contentId: this.dataList[this.chooseIndex].contentId,
        contractNo: this.dataList[this.chooseIndex].contractNo
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

<style scoped>
.wec_tit>div {
  border-bottom: solid 1px #ccc;
  padding-left: .6rem;
  background: #fff url(../../../assets/images/wec/wec_list.png) 0 center no-repeat;
  -webkit-background-size: .3rem .33rem;
  background-size: .3rem .33rem;
}

.wec_tit {
  padding-left: .3rem;
  line-height: 1.2rem;
}

.dc_sub_3 {
  padding: .1rem 0 .3rem 0;
  border-bottom: 1px solid #E6E6E6;
}

.dc_sub_3>div {
  margin: .15rem 0;
}

.dc_sub_4 {
  margin: .4rem 0;
}

.dc_sub_4 li:first-child {
  border-right: solid 1px #ccc;
  padding-right: .2rem;
  margin-right: .2rem;
}

.wec_list_no img {
  width: 3.6rem;
  height: 3.6rem;
  margin: 2rem auto .2rem;
}
</style>
