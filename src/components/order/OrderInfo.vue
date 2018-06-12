<template>
  <div class="orderinfo">
    <header class="bgf">
      <a href="javascript:history.back();" class="f24 back" id="back"></a>
      <h1 class="f40 tc">订单详情</h1>
    </header>
    <div class="order_info_status" id="rechargeStatus" v-show="orderData.rechargeStatus == 1">
      <div class="border_info_status_box">
        <div class="order_info_status_1 bgo img"></div>
        <div class="order_info_status_2 bgo"></div>
        <div class="order_info_status_3 bgo img"></div>
        <div class="order_info_status_4 bgd"></div>
        <div class="order_info_status_5 bgd"></div>
      </div>
      <div class="border_info_status_wenzi f32">
        <p class="order_info_status_wenzi_1 co">下单成功</p>
        <p class="order_info_status_wenzi_2 co">充值中</p>
        <p class="order_info_status_wenzi_3 c8e">充值成功</p>
      </div>
    </div>
    <div class="order_info_status" id="rechargeStatus" v-show="orderData.rechargeStatus == 2">
      <div class="border_info_status_box">
        <div class="order_info_status_1 bgo img"></div>
        <div class="order_info_status_2 bgo"></div>
        <div class="order_info_status_3 bgo img"></div>
        <div class="order_info_status_4 bgo"></div>
        <div class="order_info_status_5 bgo img"></div>
      </div>
      <div class="border_info_status_wenzi f32">
        <p class="order_info_status_wenzi_1 co">下单成功</p>
        <p class="order_info_status_wenzi_2 co">充值中</p>
        <p class="order_info_status_wenzi_3 co">充值成功</p>
      </div>
    </div>
    <div class="order_info_status" id="rechargeStatus" v-show="orderData.rechargeStatus == 3">
      <div class="border_info_status_box">
        <div class="order_info_status_1 bgo img"></div>
        <div class="order_info_status_2 bgo"></div>
        <div class="order_info_status_3 bgo img"></div>
        <div class="order_info_status_4 bgo"></div>
        <div class="order_info_status_5 bgo img"></div>
      </div>
      <div class="border_info_status_wenzi f32">
        <p class="order_info_status_wenzi_1 co">下单成功</p>
        <p class="order_info_status_wenzi_2 co">充值中</p>
        <p class="order_info_status_wenzi_3 co">充值失败</p>
      </div>
    </div>
    <div class="order_info_status" id="rechargeStatus" v-show="orderData.rechargeStatus == 4">
      <div class="border_info_status_box">
        <div class="order_info_status_1 bgo img"></div>
        <div class="order_info_status_2 bgo"></div>
        <div class="order_info_status_3 bgo img"></div>
        <div class="order_info_status_4 bgd"></div>
        <div class="order_info_status_5 bgd"></div>
      </div>
      <div class="border_info_status_wenzi f32">
        <p class="order_info_status_wenzi_1 co">下单成功</p>
        <p class="order_info_status_wenzi_2 co">付款中</p>
        <p class="order_info_status_wenzi_3">充值成功</p>
      </div>
    </div>
    <div class="order_info_box">
      <div class="order_info_1 c33 pd f36 clearfix">
        <p class="fl">商品</p>
        <p class="fr" id="prodName">{{orderData.prodName}}</p>
      </div>
      <div class="order_info_1 c8e pd f32 clearfix">
        <p class="fl">供应商</p>
        <p class="fr" id="supplier">{{orderData.supplier}}</p>
      </div>
      <div class="order_info_1 c8e pd f32 clearfix">
        <p class="fl" id="rechargeTypeName">充值账号</p>
        <p class="fr" id="carNumber">{{orderData.cardNumber}}</p>
      </div>
    </div>
    <div class="order_info_box">
      <div class="order_info_1 c33 pd f36 clearfix">
        <p class="fl">原价</p>
        <p class="fr" id="origPrice">{{orderData.origPrice}}</p>
      </div>
      <div class="order_info_1 c33 pd f36 clearfix" v-show="orderData.orderDiscountAmount > 0">
        <p class="fl">优惠券抵扣</p>
        <p class="fr" id="orderDiscountAmount">{{orderData.orderDiscountAmount}}</p>
      </div>
      <div class="order_info_1 c33 pd f36 clearfix">
        <p class="fl">成交价</p>
        <p class="fr" id="totalPrice">{{orderData.totalPrice}}</p>
      </div>
      <div class="order_info_1 c8e pd f32 clearfix" v-show="orderData.payPoundageAmount > 0">
        <p class="fl">手续费</p>
        <p class="fr" id="payPoundageAmount">{{orderData.payPoundageAmount}}</p>
      </div>
      <div class="order_info_1 c8e pd f32 clearfix">
        <p class="fl">付款方式</p>
        <p class="fr" id="payType">{{orderData.payType}}</p>
      </div>
      <div class="order_info_1 c8e pd f32 clearfix">
        <p class="fl">下单时间</p>
        <p class="fr" id="payTime">{{orderData.payTime}}</p>
      </div>
      <div class="order_info_1 c8e pd f32 clearfix">
        <p class="fl">订单编号</p>
        <p class="fr" id="orderCode">{{$route.query.orderCode}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import _order from '../../fetch/order'

export default {
  data() {
    return {
      orderData: {}
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      _order.orderInfo({
        orderCode: this.$route.query.orderCode
      }).then(res => {
        console.log(res)
        this.orderData = res.result
      })
    }
  }
}
</script>

<style scoped>
.order_info_status {
  height: 1.5rem;
  border-bottom: .3rem solid #f3f3f3;
}

.order_info_status>.border_info_status_box {
  height: .4rem;
  margin-top: .4rem;
  display: -webkit-flex;
  /* Safari */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
}

.order_info_status_1,
.order_info_status_3,
.order_info_status_5 {
  width: .4rem;
  height: .4rem;
  border-radius: 50%;
}

.order_info_status_2,
.order_info_status_4 {
  width: 1.3rem;
  height: .04rem;
}

.border_info_status_wenzi {
  position: relative;
  margin-top: .2rem;
}

.order_info_status_wenzi_1 {
  position: absolute;
  top: 0;
  left: 1.2rem;
}

.order_info_status_wenzi_2 {
  position: absolute;
  top: 0;
  left: 3.3rem;
}

.order_info_status_wenzi_3 {
  position: absolute;
  top: 0;
  left: 5.1rem;
}

.order_info_box {
  padding-top: .5rem;
  border-top: 1px solid #f3f3f3;
}

.order_info_1 {
  margin-bottom: .4rem;
}

.order_info_btn {
  padding-top: .3rem;
}

.order_info_btn>button {
  border: 1px solid #dedfe0;
}

.img {
  background-image: url(../../assets/images/common/ok.png);
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: .28rem;
  background-size: .28rem;
}
</style>
