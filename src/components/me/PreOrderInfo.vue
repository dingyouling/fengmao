<template>
  <div class="preorderinfo">
    <header class="bgf">
      <a href="javascript:history.back();" class="f24 back" id="back"></a>
      <h1 class="f40 tc">预购详情</h1>
    </header>

    <!--预购详情开始-->
    <div class="flow_info_2 bgf">
      <div class="f36 co pd mt1" id="prodName">{{head.prodName}}</div>
      <div class="pd pdb1 mt1">
        <p class="f28 c33 clearfix">
          <span class="fl">预购详情 : </span>
          <span class="fr" id="everyAmount">每月到账{{head.everyAmount}}</span>
        </p>
        <p class="f28 c33 clearfix">
          <span class="fl">订购时间 : </span>
          <span class="fr" id="buyTime">{{head.buyTime}}</span>
        </p>
        <p class="f28 c33 clearfix">
          <span class="fl">下月到账时间 : </span>
          <span class="fr" id="nextGiveTime">{{head.nextGiveTime}}</span>
        </p>
        <p class="f28 c33 clearfix">
          <span class="fl">购买价格 : </span>
          <span class="fr" id="buyAmount">{{head.onliePayAmount}}元</span>
        </p>
        <p class="f28 c8e tr" id="onliePayAmount"></p>
        <p class="f28 c33 clearfix">
          <span class="fl">订单编号 : </span>
          <span class="fr" id="orderCode">{{head.orderCode}}</span>
        </p>
      </div>
      <div id="data-list">
        <div class="pd clearfix bgf3">
          <p class="f32 c33 fl">到账时间</p>
          <p class="f32 c33 fl tc">到账金额</p>
          <p class="f32 c33 fr tr">累积到账</p>
        </div>
        <div class="pd clearfix" v-for="(val,index) in foot" :key="index">
          <p class="f32 c8e fl">{{val.giveTime.split(' ')[0]}}</p>
          <p class="f32 c8e fl tc">+{{val.giveAmount}}</p>
          <p class="f32 c8e fr tr">{{val.addGiveAmount}}元</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import _me from '../../fetch/me'

export default {
  data() {
    return {
      head: {},
      foot: []
    }
  },
  mounted() {
    this.getDate()
  },
  methods: {
    getDate() {
      if (this.$route.query.orderCode) {
        _me.getPreOrderInfo({
          orderCode: this.$route.query.orderCode
        }).then(res => {
          this.head = res.result.head
          this.foot = res.result.foot
        })
      } else if (this.$route.query.giveId) {
        _me.getPreOrderInfo({
          giveId: this.$route.query.giveId
        }).then(res => {
          this.head = res.result.head
          this.foot = res.result.foot
        })
      }
    }
  }
}
</script>
  
<style scoped>
.flow_info_1>.pd>p {
  height: 1rem;
  line-height: 1rem;
  width: 45%;
}

.flow_info_1>.pd {
  position: relative;
}

.flow_info_1>.pd>div {
  height: .5rem;
  width: .02rem;
  position: absolute;
  top: .25rem;
  left: 50%;
}

.flow_info_2>.co {
  border-bottom: 1px solid #DEDFE0;
  line-height: .8rem;
}

.flow_info_2>.pd>p {
  line-height: .5rem;
}

.flow_info_2>div>.pd>p {
  width: 33.333333%;
}

.flow_info_2>div>.pd>.c33 {
  line-height: .96rem;
}

.flow_info_2>div>.pd>.c8e {
  line-height: .8rem;
}


.order_info_status {
  border: none;
}

.mb3 {
  margin-bottom: .1rem;
}

.pdb1 {
  padding-bottom: .1rem;
}

.pdt3 {
  padding-top: 1px;
}

.mt4 {
  margin-top: .4rem;
}

.mt1 {
  margin-top: .1rem;
}

.flow_info_4>.c00 {
  line-height: .6rem;
}

.flow_info_4>.c33 {
  line-height: .5rem;
}

.tr {
  text-align: right;
}

.f28 {
  line-height: .4rem;
}
</style>
  