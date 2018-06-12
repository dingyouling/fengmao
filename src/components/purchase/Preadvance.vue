<template>
  <div class="preadvance">
    <header class="bgf">
      <router-link to="/purchase/prebusiness" class="f24 back"></router-link>
      <h1 class="f40 tc">预购</h1>
    </header>
    <div class="bgf predict">
      <div class="f32 bgo cf all_in tc">您每月需要{{data.prodPrice}}元的缴费开销</div>
    </div>
    <div class="pd clearfix bgf3 f36 bdl_w">
      <div class="bdl">
        建议您购买以下预购
      </div>
    </div>
    <div id="prod_list">
      <div class="need_list bgf" v-for="(val,index) in prodList" :key="index">
        <div class="need_list_up clearfix">
          <div class="fl">
            <span class="fval.givingNum c66">{{val.givingNum}}个月</span>
            <span class="f40 co">省{{Math.ceil((data.prodPrice - (data.prodPrice / (100 + parseInt(val.givingPercent)) * 100)) / data.prodPrice * 100)}}%</span>
          </div>
          <div class="fl">
            <span class="f32">每月省
              <span class="co">{{(data.prodPrice - Math.ceil(data.prodPrice / (100 + parseInt(val.givingPercent)) * 10000) / 100).toFixed(2)}}元</span>总共省
              <span class="co">{{(data.prodPrice * val.givingNum - Math.ceil(data.prodPrice * val.givingNum / (100 + parseInt(val.givingPercent)) * 10000) / 100).toFixed(2)}}元</span>
            </span>
            <span class="f22 c66">预购{{val.givingNum}}个月共需
              <span class="co">{{Math.ceil(data.prodPrice * val.givingNum / (100 + parseInt(val.givingPercent)) * 10000) / 100}}元</span>每月只需
              <span class="co">{{Math.ceil(data.prodPrice / (100 + parseInt(val.givingPercent)) * 10000) / 100}}元</span>
            </span>
          </div>
        </div>
        <div class="compare_all clearfix">
          <div class="fl f32">
            <div class="compare_up clearfix">
              <div class="fl">正常缴费</div>
              <div class="bgb fl"></div>
            </div>
            <div class="compare_down clearfix">
              <div class="fl">风猫{{val.givingNum}}期</div>
              <div class="bgo fl" :style="{width : 100 / (100 + val.givingPercent) * 2.49 +'rem'}"></div>
              <!-- <div class="fl co f24">省1254</div> -->
            </div>
          </div>
          <div class="fr">
            <button class="button bgf f40 co" @click="subInfo(index)">立即预购</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _prod from '../../fetch/prod'
import router from '../../router'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      data: {
        page: 1,
        channel: 4,
        prodPrice: 0,
        prodType: 1
      },
      prodList: []
    }
  },
  mounted() {
    this.data.prodPrice = this.$route.query.amount
    _prod.getPro(this.data).then(res => {
      this.prodList = res.result
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    ...mapActions([
      'savePayData'
    ]),
    subInfo(index) {
      console.log(index)
      let subInfo = {
        typeClass: 'purchase',
        origPrice: this.data.prodPrice,
        discountPrice: this.data.prodPrice,
        prodCode: this.prodList[index].prodCode,
        sonBusiType: 0,
        prodDesc: this.prodList[index].prodDesc
      }
      this.savePayData(subInfo)
      router.push({ path: '/pay' })
    }
  }
}
</script>

<style scoped>
.bdl {
  border-left: solid 2px #fc5b32;
  padding-left: .1rem;
}

.bdl_w {
  padding: .2rem .3rem;
}

.purchase_type {
  margin: .2rem 0;
}

.purchase_type>div {
  padding: 0 .3rem;
  height: .6rem;
  line-height: .6rem;
  border-radius: 0 .3rem .3rem 0;
}

.predict {
  padding: .2rem 0;
}

.all_in {
  width: 5.2rem;
  height: .6rem;
  line-height: .6rem;
  border-radius: .3rem;
  margin: 0 auto;
}

.need_list {
  padding: .2rem;
  margin-bottom: .2rem;
}

.need_list_up div>span {
  display: block;
}

.need_list_up {
  border-bottom: 1px solid #e5e5e5;
  padding: .2rem;
}

.need_list_up .fl:first-child {
  border-right: 1px solid #e5e5e5;
  padding-right: .2rem;
  margin-right: .2rem;
}

.button {
  border: 1px solid #fc5b32;
  height: .7rem;
  line-height: .6rem;
  width: 2.68rem;
  margin-top: .1rem;
  border: 1px solid #fc5b32;
}

.compare_all {
  padding-top: .25rem;
  line-height: .5rem;
}

.compare_all>div:first-child {
  width: 4.2rem;
}

.compare_up .bgb {
  height: .2rem;
  width: 2.49rem;
  margin-top: .15rem;
}

.compare_up>div:first-child,
.compare_down>div:first-child {
  width: 1.4rem;
}

.compare_down .bgo {
  height: .2rem;
  width: 1.53rem;
  margin-top: .15rem;
}

.compare_down .co {
  margin-left: .1rem;
}
</style>
