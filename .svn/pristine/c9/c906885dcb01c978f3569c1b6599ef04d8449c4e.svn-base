<template>
  <div class="trainsrefundinfo">
    <header class="trains-color">
      <a href="javascript:history.back();" class="f24 back back1"></a>
      <h1 class="f40 tc category cf">退款详情</h1>
    </header>
    <p class="refund_info pd f24">预计在3-15个工作日内退款至原支付账号</p>
    <div class="pd" id="refund_box">
      <div class="box bgf" v-for="(val,index) in dataList" :key="index">
        <div class="line100 bb clearfix pd f32">
          <p class="c33 fl">{{val.changeDesc}}</p>
          <p class="cb fr">￥{{val.orderChangeAmount}}</p>
        </div>
        <div class="flue">
          <div>
            <p class="f32">退款受理中</p>
            <div class="flue_middle"></div>
            <div class="flue_bottom"></div>
          </div>
          <div>
            <p class="f32">退款完成</p>
            <p class="f20 c8e">{{val.changeTime}}</p>
            <div class="flue_top"></div>
            <div class="flue_middle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import _order from '../../../fetch/order'

export default {
  data() {
    return {
      dataList: ''
    }
  },
  computed: {
    ...mapGetters([
      'getOrderCode'
    ])
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      _order.refundInfo({
        orderCode: this.getOrderCode
      }).then(res => {
        this.dataList = res.result
      })
    }
  }
}
</script>

<style scoped>
.trainsrefundinfo {
  height: 100%;
  background: #f2f7ff;
}

.bb {
  border-bottom: 1px solid #f2f7ff;
}

.line100 {
  line-height: 1rem;
}

.refund_info {
  background-color: #fff8e1;
  padding: .15rem .3rem;
}

.box {
  border-radius: 5px;
  margin: .2rem auto .1rem;
}

.flue>div {
  padding: .1rem 0 .1rem 1rem;
  position: relative;
}

.flue_top {
  width: .02rem;
  height: .34rem;
  position: absolute;
  top: 0;
  left: .41rem;
  background: #03A9F4;
}

.flue_middle {
  width: .24rem;
  height: .24rem;
  position: absolute;
  top: 50%;
  margin-top: -.13rem;
  background: #03A9F4;
  left: .3rem;
  border-radius: 50%;
}

.flue_bottom {
  width: .02rem;
  height: .26rem;
  position: absolute;
  bottom: 0;
  left: .41rem;
  background: #03A9F4;
}

#container .loading {
  font-size: .24rem;
  text-align: center;
  margin: 0 auto .2rem;
}
</style>
