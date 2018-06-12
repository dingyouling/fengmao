<template>
  <div class="phone">
    <header class="bgf">
      <router-link to="/" class="f24 back"></router-link>
      <h1 class="f40 tc">话费流量充值</h1>
      <a href="static/help/phone_help.html" class="dyl_help"></a>
    </header>
    <div class="dyl_phone_tab cb f36 tc clearfix">
      <ul>
        <router-link tag="li" class="fl dyl_phone_fee" to="/index/phone/hf" active-class="active">充话费</router-link>
        <router-link tag="li" class="fl dyl_phone_fee" to="/index/phone/ll" active-class="active">充流量</router-link>
      </ul>
    </div>
    <div class="dyl_content pd">
      <!--模块-->
      <div class="dyl_gas_nums clearfix">
        <div class="dyl_gas_recharge_num fl">
          <input type="number" placeholder="请输入手机号" class="c33 num" v-model="phone" id="cardNumber" oninput="if(value.length>11)value=value.slice(0,11)">
        </div>
        <!-- <a id="search" class="dyl_gas_recharge_chioce fr"></a> -->
        <router-link :to="'/choosecard?cardType=6&returnUrl='+$route.path" class="dyl_gas_recharge_chioce fr"></router-link>
      </div>
      <!--库存-->
      <div class="dyl_gas_inventory f26 clearfix">
        <!-- ajax填充数据 -->
        <div class="dyl_gas_inventory1 fl">可用猫币
          <span class="co" id="ty_stock">{{usableBank}}元</span>
        </div>
        <div class="dyl_gas_inventory2 fr">分销商库存
          <span class="cb" id="xs_stock">{{currencyBankAmount}}元</span>
        </div>
      </div>
      <!--产品-->
      <div class="dyl_row clearfix" id="gas_list" v-show="$route.params.type === 'hf'">
        <div class="dyl_gas_c33 tc fl bz gas flag" v-for="(val, index) in hfProdList" :key="index" :class="{active:chooseIndex==index}" @click="chooseLl(index)">
          <h3 class="f30">{{val.prodName}}</h3>
          <p class="f22">售价{{val.prodPrice}}元</p>
        </div>
      </div>
      <div class="dyl_row clearfix" id="gas_list" v-show="$route.params.type === 'll'">
        <div class="dyl_gas_c33 tc fl bz gas flag" v-for="(val, index) in llProdList" :key="index" :class="{active:chooseIndex==index}" @click="chooseLl(index)">
          <h3 class="f30">{{val.flowAmount}}</h3>
          <p class="f22">售价{{val.prodPrice}}元</p>
        </div>
      </div>
      <!-- 充值按钮 -->
      <div class="dyl_gas_recharge_button clearfix">
        <button class="button f36 tc cf bgo bz" id="charge_btn" @click="subPayInfo">充值</button>
      </div>
    </div>
  </div>
</template>

<script>
import _me from '../../fetch/me'
import _prod from '../../fetch/prod'
import { alert } from '../../util/tool'
import { mapGetters, mapActions } from 'vuex'
import router from '../../router'

export default {
  data() {
    return {
      phone: '',
      hfProdList: [{ 'prodCode': 'PRODSC10', 'originalPriceStr': '10.00', 'originalPrice': '10.00', 'prodName': '10元', 'prodPrice': '8.50', 'prodPriceStr': '8.50', 'prodId': 1111, 'prodDesc': '10元话费商城' }, { 'prodCode': 'PROD1000000204_C', 'originalPriceStr': '30.00', 'originalPrice': '30.00', 'prodName': '30元', 'prodPrice': '25.50', 'prodPriceStr': '25.50', 'prodId': 1086, 'prodDesc': '30元话费-商城' }, { 'prodCode': 'PROD1000000193_C', 'originalPriceStr': '50.00', 'originalPrice': '50.00', 'prodName': '50元', 'prodPrice': '42.50', 'prodPriceStr': '42.50', 'prodId': 1089, 'prodDesc': '50元话费-商城' }, { 'prodCode': 'PROD1000000194_C', 'originalPriceStr': '100.00', 'originalPrice': '100.00', 'prodName': '100元', 'prodPrice': '85.00', 'prodPriceStr': '85.00', 'prodId': 1088, 'prodDesc': '100元话费-商城' }, { 'prodCode': 'PROD1000000195_C', 'originalPriceStr': '200.00', 'originalPrice': '200.00', 'prodName': '200元', 'prodPrice': '170.00', 'prodPriceStr': '170.00', 'prodId': 1087, 'prodDesc': '200元话费-商城' }, { 'prodCode': 'PROD1000000268_C', 'originalPriceStr': '500.00', 'originalPrice': '500.00', 'prodName': '500元', 'prodPrice': '425.00', 'prodPriceStr': '425.00', 'prodId': 1084, 'prodDesc': '500元话费-商城' }],
      llProdList: [{ 'prodCode': 'PROD1000000190_C', 'amount': 500, 'originalPriceStr': '30.00', 'prodAttrName': '10086', 'originalPrice': '30.00', 'prodPrice': '30.00', 'prodPriceStr': '30.00', 'prodId': 1092, 'prodDesc': '移动500M流量-商城', 'flowAmount': '500M' }, { 'prodCode': 'PROD1000000189_C', 'amount': 150, 'originalPriceStr': '20.00', 'prodAttrName': '10086', 'originalPrice': '20.00', 'prodPrice': '20.00', 'prodPriceStr': '20.00', 'prodId': 1093, 'prodDesc': '移动150M流量-商城', 'flowAmount': '150M' }, { 'prodCode': 'PROD1000000188_C', 'amount': 70, 'originalPriceStr': '10.00', 'prodAttrName': '10086', 'originalPrice': '10.00', 'prodPrice': '10.00', 'prodPriceStr': '10.00', 'prodId': 1094, 'prodDesc': '移动70M流量-商城', 'flowAmount': '70M' }, { 'prodCode': 'PROD1000000186_C', 'amount': 30, 'originalPriceStr': '5.00', 'prodAttrName': '10086', 'originalPrice': '5.00', 'prodPrice': '5.00', 'prodPriceStr': '5.00', 'prodId': 1095, 'prodDesc': '移动30M流量-商城', 'flowAmount': '30M' }, { 'prodCode': 'PROD1000000230_C', 'amount': 10, 'originalPriceStr': '3.00', 'prodAttrName': '10086', 'originalPrice': '3.00', 'prodPrice': '3.00', 'prodPriceStr': '3.00', 'prodId': 1101, 'prodDesc': '移动10M流量-商城', 'flowAmount': '10M' }],
      chooseIndex: -1
    }
  },
  computed: {
    ...mapGetters([
      'usableBank',
      'currencyBankAmount'
    ])
  },
  mounted() {
    this.getType(this.$route.params.type)
    if (this.$route.query.cardNumber) {
      this.phone = this.$route.query.cardNumber
    }
  },
  watch: {
    $route(to, from) {
      this.chooseIndex = -1
      this.getType(to.params.type)
    },
    phone(val) {
      if (val.length === 11 && this.$route.params.type === 'll') {      // 获取流量颗粒
        _me.getPhoneArea({ mobile: this.phone }).then(res => {
          _prod.getLlProd({
            mobile: this.phone,
            operator: res.result.province + res.result.cardCode
          }).then(res => {
            this.llProdList = res.result
          }).catch(error => {
            console.log(error)
          })
        }).catch(error => {
          console.log(error)
        })
      }
    }
  },
  methods: {
    ...mapActions([
      'savePayData'
    ]),
    getType(type) {
      if (type === 'hf') {        // 请求话费颗粒
        _prod.getHfProd().then(res => {
          this.hfProdList = res.result
        }).catch(error => {
          console.log(error)
        })
      }
    },
    chooseLl(index) {
      if (this.phone.length < 11) {
        alert('请输入手机号码')
      } else {
        this.chooseIndex = index
      }
    },
    subPayInfo() {
      let data = {
        typeClass: 'recharge',
        cardNumber: this.phone
      }
      if (this.$route.params.type === 'hf') {
        data['prodCode'] = this.hfProdList[this.chooseIndex].prodCode
        data['origPrice'] = this.hfProdList[this.chooseIndex].originalPrice
        data['discountPrice'] = this.hfProdList[this.chooseIndex].prodPrice
        data['sonBusiType'] = 1
      } else if (this.$route.params.type === 'll') {
        data['prodCode'] = this.llProdList[this.chooseIndex].prodCode
        data['origPrice'] = this.llProdList[this.chooseIndex].originalPrice
        data['discountPrice'] = this.llProdList[this.chooseIndex].prodPrice
        data['sonBusiType'] = 2
      }
      // 号箱选择
      if (this.$route.query.cardId) {
        data['cardId'] = this.$route.query.cardId
      }
      this.savePayData(data)
      router.push({ path: '/pay' })
    }
  }
}
</script>

<style scoped>
.dyl_gas_c33.active {
  border: 1px solid #4587e7;
}

.dyl_gas_c33.active h3,
.dyl_gas_c33.active p {
  color: #4587e7;
}

.dyl_gas_recharge_chioce {
  display: block;
  width: .69rem;
  height: .69rem;
  background: url(../../assets/images/phone/phone_recharge1.png) 0 0 no-repeat;
  -webkit-background-size: .69rem .69rem;
  background-size: .69rem .69rem;
  margin-top: .1rem;
}

.dyl_phone_recharge .dyl_gas_recharge_button .button.bgo {
  background-color: #4587e7;
}

.dyl_phone_recharge .dyl_gas_cycle a.active {
  background-color: #4587e7;
  border: 1px solid #4587e7;
}

.dyl_phone_recharge .dyl_gas_cycle select {
  background: url(../../assets/images/phone/phone_recharge4.png) 1.1rem center no-repeat;
  -webkit-background-size: .28rem .25rem;
  background-size: .28rem .25rem;
}

.dyl_phone_tab li {
  border-bottom: solid 2px transparent;
  width: 50%;
}

.dyl_phone_tab li.active {
  border-bottom: solid 2px #4587e7;
}

.dyl_phone_tab {
  border-bottom: 1px solid #dedfe0;
  line-height: .95rem;
}

.dyl_phone_tab li.dyl_phone_fee {
  background: url(../../assets/images/phone/phone_recharge2.png) .8rem center no-repeat;
  -webkit-background-size: .35rem .36rem;
  background-size: .35rem .36rem;
}

.dyl_phone_tab li.dyl_phone_flow {
  background: url(../../assets/images/phone/phone_recharge3.png) .8rem center no-repeat;
  -webkit-background-size: .35rem .36rem;
  background-size: .35rem .36rem;
}

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

.dyl_gas_inventory1 {
  background: url(../../assets/images/gas/kc@2x.png) 0 center no-repeat;
  -webkit-background-size: .3rem .3rem;
  background-size: .3rem .3rem;
  padding-left: .4rem;
}

.dyl_gas_inventory2 {
  background: url(../../assets/images/gas/mb@2x.png) 0 center no-repeat;
  -webkit-background-size: .3rem .3rem;
  background-size: .3rem .3rem;
  padding-left: .4rem;
}

.dyl_gas_inventory {
  line-height: 1rem;
}

#gas_list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.dyl_gas_c33 {
  width: 30%;
  height: 1.2rem;
  border: 1px solid #ccc;
  border-radius: .1rem;
  margin-bottom: .2rem;
  overflow: hidden;
  margin-right: 3.33%;
}

.dyl_gas_c33.nomr {
  margin-right: 0;
}

.dyl_gas_c33 {
  display: block;
  padding: .2rem 0;
}

.dyl_gas_recharge_button #charge_btn {
  margin-top: 1rem;
  border-radius: 1rem;
  background-color: #4587e7;
}
</style>
