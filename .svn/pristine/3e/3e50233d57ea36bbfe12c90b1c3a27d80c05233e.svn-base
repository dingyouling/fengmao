<template>
  <div class="choosecard bgf3">
    <header class="bgf">
      <a href="javascript:history.back();" class="f24 back"></a>
      <h1 class="f40 tc">账号选择</h1>
    </header>
    <div class="datalis">
      <div v-for="(val,index) in dataList" :key="index" @click="toRecharge(val)">
        <!-- 水电煤、游戏账号 -->
        <div class="dyl_gas_card_infor pd clearfix bgf" v-show="val.cardType == 2 || val.cardType == 3 || val.cardType == 4 || val.cardType == 5 || val.cardType == 7 || val.cardType == 8">
          <div class="dyl_gas_card_type fl bgo" v-if="val.cardType == 2"><img src="../assets/images/card/yxdk_water@2x.png" alt=""></div>
          <div class="dyl_gas_card_type fl bgo" v-else-if="val.cardType == 3"><img src="../assets/images/card/yxdk_ele@2x.png" alt=""></div>
          <div class="dyl_gas_card_type fl bgo" v-else-if="val.cardType == 4"><img src="../assets/images/card/yxdk_coal@2x.png" alt=""></div>
          <div class="dyl_gas_card_type fl bgf" v-else-if="val.cardType == 5"><img src="../assets/images/card/yxdk_qb@2x.png" alt=""></div>
          <div class="dyl_gas_card_type fl bgf" v-else-if="val.cardType == 7"><img src="../assets/images/card/yxdk_wy@2x.png" alt=""></div>
          <div class="dyl_gas_card_type fl bgf" v-else-if="val.cardType == 8"><img src="../assets/images/card/yxdk_wow@2x.png" alt=""></div>
          <div class="dyl_gas_card_nn fl c33">
            <div class="dyl_gas_card_name f28">{{val.note}}</div>
            <div class="dyl_gas_card_cnum f24">{{val.cardNumber}}</div>
            <div class="dyl_gas_card_unit f20 c66" v-show="val.cardType == 2 || val.cardType == 3 || val.cardType == 4">缴费单位：{{val.unitName}}</div>
          </div>
        </div>
        <!-- 手机号码、油卡卡号 -->
        <div class="dyl_gas_card_infor pd clearfix bgf" v-show="val.cardType == 1 || val.cardType == 6">
          <div class="dyl_gas_card_type fl bgo cf f24 tc" v-if="val.unitName=='中国石油'">中石油</div>
          <div class="dyl_gas_card_type fl bgo cf f24 tc" v-else-if="val.unitName=='中国石化'">中石化</div>
          <div class="dyl_gas_card_type fl bgo cf f24 tc" v-else>{{val.note.charAt(0) || val.cardNumber.charAt(0)}}</div>
          <div class="dyl_gas_card_nn fl c33">
            <div class="dyl_gas_card_name f32">{{val.note}}</div>
            <div class="dyl_gas_card_cnum f28">{{val.cardNumber}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _me from '../fetch/me'
import router from '../router'

export default {
  data() {
    return {
      dataList: [],
      subInfo: {}
    }
  },
  mounted() {
    this.subInfo.cardType = this.$route.query.cardType
    this.subInfo.subCardType = this.$route.query.subCardType
    this.getData()
  },
  methods: {
    getData() {
      _me.getCard(this.subInfo).then(res => {
        this.dataList = res.result
      })
    },
    toRecharge(val) {
      let data = {
        cardNumber: val.cardNumber,
        unitName: val.unitName,
        unitId: val.unitId,
        cardId: val.cardId,
        cardType: val.cardType
      }
      if (this.$route.query.cardType === '5') {
        data['rechargeType'] = this.$route.query.rechargeType
      }
      router.push({ path: this.$route.query.returnUrl, query: data })
    }
  }
}
</script>

<style scoped>
.choosecard {
  height: 100%;
}

.dyl_card_nav {
  border-bottom: solid 1px #dedfe0;
}

.dyl_card_nav li {
  float: left;
  height: .7rem;
  width: 20%;
  line-height: .7rem;
}

.dyl_card_nav li.active {
  background: #fc5b32;
  color: #fff;
}

.dyl_card_add {
  margin-top: .2rem;
  padding: .3rem 0;
  line-height: .5rem;
  border-top: 1px solid #dedfe0;
  border-bottom: 1px solid #dedfe0;
}

.dyl_card_add a {
  background: url(../assets/images/card/jia_mos@2x.png) center center no-repeat;
  -webkit-background-size: .41rem .41rem;
  background-size: .41rem .41rem;
  display: block;
  height: .41rem;
  width: .41rem;
  margin: 0 auto;
}

.dyl_gas_card_infor {
  padding: .35rem .3rem;
  margin-bottom: .2rem;
}

.dyl_card_rewrite {
  margin-top: .3rem;
}

.dyl_card_rewrite a {
  display: block;
  width: .3rem;
  height: .3rem;
}

.dyl_rewrite {
  background: url(../assets/images/card/card_rewrite.png) 0 0 no-repeat;
  -webkit-background-size: .3rem .3rem;
  background-size: .3rem .3rem;
  margin-right: .2rem;
}

.dyl_del {
  background: url(../assets/images/card/card_del.png) 0 0 no-repeat;
  -webkit-background-size: .3rem .3rem;
  background-size: .3rem .3rem;
}

.dyl_gas_card_type {
  border-radius: 50%;
  width: .9rem;
  height: .9rem;
  line-height: .9rem;
}

.dyl_gas_card_nn {
  padding-left: .3rem;
}
</style>
