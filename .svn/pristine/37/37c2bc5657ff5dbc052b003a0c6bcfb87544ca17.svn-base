<template>
  <div class="trainsRefundSucce">
    <header class="trains-color">
      <router-link :to="'/order/trains/info?orderCode='+getOrderCode" class="f24 back back1"></router-link>
      <h1 class="f40 tc category cf">火车票订单</h1>
    </header>

    <div class="tc">
      <img src="../../../assets/images/trains/refund_succeed.png" alt="">
      <p class="f32 line100">恭喜您，申请退款成功！</p>
    </div>

    <router-link :to="'/order/trains/info?orderCode='+getOrderCode" class="log tc cb f32">返回订单详情</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getOrderCode'
    ])
  }
}
</script>

<style scoped>
.refund_info {
  background-color: #fff8e1;
  padding: .15rem .3rem;
}

.log {
  width: 6.9rem;
  line-height: .8rem;
  display: block;
  margin: .3rem auto .1rem;
  border-radius: .4rem;
  border: 1px solid #03a9f4;
}

.cb {
  color: #03a9f4;
}

.tc>img {
  width: 2.5rem;
  margin: 1rem auto .1rem;
}

.line100 {
  line-height: 1rem;
}
</style>
