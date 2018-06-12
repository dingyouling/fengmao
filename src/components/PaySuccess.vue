  <template>
  <div class="paysuccess">
    <header class="bgf">
      <router-link to="/index" class="f24 back co"></router-link>
      <h1 class="f40 tc">支付成功</h1>
    </header>
    <div class="pd">
      <div class="dc_sub_1 tc c33 f36" id="title"></div>
      <div class="dc_sub_2 f50 c00 tc">
        <span id="payAmount">{{$route.query.totalPrice}}</span>
      </div>
      <div class="dc_sub_status f28 cb tc">支付成功</div>
      <div class="dc_sub_3 panel-3">
        <div class="clearfix">
          <span class="f30 c66 fl">商品说明</span>
          <span class="f28 c99 fr" id="info">账号{{$route.query.cardNumber}}{{$route.query.title}}{{$route.query.origPrice}}元</span>
        </div>
        <div class="clearfix">
          <span class="f30 c66 fl">充值卡号</span>
          <span class="f28 c99 fr" id="cardNumber">{{$route.query.cardNumber}}</span>
        </div>
        <div class="clearfix">
          <span class="f30 c66 fl">充值金额</span>
          <span class="f28 cb fr">
            <span id="origPrice">{{$route.query.origPrice}}</span>元</span>
        </div>
        <div class="clearfix" v-show="$route.query.buyFee>0">
          <span class="f30 c66 fl">手续费</span>
          <span class="f28 c8e fr">
            <span id="origPrice">{{$route.query.buyFee}}</span>元</span>
        </div>
        <div class="clearfix" v-show="$route.query.discountAmount>0">
          <span class="f30 c66 fl">优惠券抵扣</span>
          <span class="f28 c8e fr">
            <span id="origPrice">{{$route.query.discountAmount}}</span>元</span>
        </div>
        <div class="clearfix">
          <span class="f30 c66 fl">实付金额</span>
          <span class="f28 co fr">
            <span id="discountPrice">{{$route.query.totalPrice}}</span>元</span>
        </div>
      </div>

      <div class="dc_sub_3 panel-4" style="border:0;">
        <div class="clearfix">
          <span class="f30 c66 fl">订单编码</span>
          <span class="f28 c99 fr" id="orderCode">{{$route.query.orderCode}}</span>
        </div>
        <div class="clearfix">
          <span class="f30 c66 fl">创建时间</span>
          <span class="f28 c99 fr" id="submitTime">{{$route.query.createTime}}</span>
        </div>
        <div class="clearfix">
          <span class="f30 c66 fl">支付时间</span>
          <span class="f28 co fr" id="payTime">{{$route.query.payTime}}</span>
        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
export default {

}
</script>
  
<style scoped>
.dc_sub_1 {
  margin-top: .48rem;
}

.dc_sub_2 {
  margin: .15rem;
}

.dc_sub_3 {
  padding: .1rem 0 .3rem 0;
  border-bottom: 1px solid #E6E6E6;
}

.dc_sub_3>div {
  margin: .15rem 0;
}

.dc_sub_4 {
  margin-top: .4rem;
}

.dc_btn {
  margin: 3.5rem 0 .5rem;
}
</style>
  