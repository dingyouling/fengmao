<template>
  <div class="trainschange bgf3">
    <header class="trains-color">
      <router-link :to="'/order/trains/info?orderCode='+getOrderCode" class="f24 back back1 not_used_common"></router-link>
      <h1 class="f40 tc category cf">火车票订单</h1>
    </header>
    <div class="time_info time_info1 bgf bb">
      <p class="f36 c33">
        <span>{{dataList.fromStation}}</span>
        <span>{{dataList.trainNo}}</span>
        <span>{{dataList.toStation}}</span>
      </p>
      <p class="f50 c33 line100" v-if="dataList.arrivalDate">
        <span>{{dataList.trainDate.split(' ')[1].split(':').slice(0,2).join(':')}}</span>
        <span>{{dataList.arrivalDate.split(' ')[1].split(':').slice(0,2).join(':')}}</span>
      </p>
      <p class="f30 c33" v-if="dataList.arrivalDate">
        <span>{{new Date(dataList.trainDate).getMonth()+1}}月{{new Date(dataList.trainDate).getDate()}}日星期{{week[new Date(dataList.trainDate).getDay()]}}</span>
        <a class="tc f24">列车时刻</a>
        <span>{{new Date(dataList.arrivalDate).getMonth()+1}}月{{new Date(dataList.arrivalDate).getDate()}}日星期{{week[new Date(dataList.arrivalDate).getDay()]}}</span>
      </p>
    </div>
    <div class="traveller pd bgf mt2">
      <div class="line100">
        <p class="f32">乘客信息</p>
        <p class="f28">取票号:{{dataList.ticketNo}}</p>
      </div>
      <div class="bb">
        <div class="line60">
          <p class="f32 c33">{{dataList.passengerName}}</p>
          <p class="f24 c8e">{{passengerTypeStr[dataList.passengerType]}}</p>
        </div>
        <div class="line60">
          <p class="f28 c33">{{dataList.seatClassStr}} {{dataList.seatNo}}</p>
          <p class="f32 cb">￥{{dataList.ticketPrice}}</p>
        </div>
        <div class="line60 mb">
          <p class="f28 cb">{{ticketStr[dataList.ticketStatus]}}</p>
          <div class="f26" v-show="type == 2">
            <a href="javascript:;" @click="toChangeInfo('1')">查看改签单</a>
          </div>
          <div class="f26" v-show="type == 1">
            <a href="javascript:;" @click="toChangeInfo('2')">查看原单</a>
            <router-link v-if="dataList.ticketStatus == 4" :to="'/order/trains/refund?ticketId='+dataList.ticketId">退票</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="ensure mt2 bgf pd" v-show="dataList.insurePrice > 0">
      <router-link to="/order/trains/ensure" style="display:block;width:100%;">
        <div class="line50 fl">
          <p class="f32 c33">行程保障</p>
          <p class="f24 c8e">每人 ￥{{dataList.insurePrice}}</p>
        </div>
        <div class="line100 cb f32 fr">￥{{dataList.insurePrice}}
          <span class="c33"> &gt; </span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import _order from '../../../fetch/order'

export default {
  data() {
    return {
      dataList: '',
      type: 1,
      week: ['', '一', '二', '三', '四', '五', '六', '日'],
      passengerTypeStr: ['', '成人票', '儿童票', '学生票'],
      ticketStr: ['', '未出票', '出票中', '出票失败', '出票成功', '申请改签中', '改签待确认', '支付中', '支付失败', '改签中', '改签成功', '退票中', '退票成功']
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
      _order.trainsOrderChangeInfo({
        ticketId: this.$route.query.ticketId,
        type: this.type
      }).then(res => {
        this.dataList = res.result
      })
    },
    toChangeInfo(type) {
      this.type = type
      this.init()
    }
  }
}
</script>

<style>
.trainschange {
  height: 100%;
  background: #f2f7ff;
}

.cb {
  color: #03A9F4;
}

.line100 {
  line-height: 1rem;
}

.line60 {
  line-height: .6rem;
}

.line50 {
  line-height: .5rem;
}

.mb {
  margin-bottom: .1rem;
}

.mt2 {
  margin-top: .1rem;
}

.bb {
  border-bottom: 1px solid #f2f7ff;
}

.time_info {
  padding: .4rem .3rem .2rem;
}

.time_info>p,
.refund,
.traveller>.line100,
.traveller .line60,
.ensure,
.coupon>div {
  display: flex;
  justify-content: space-between;
}

.coupon>div {
  border-top: 1px solid #f2f7ff;
}

.time_info>p>a {
  width: 2.08rem;
  height: .5rem;
  background: url("../../../assets/images/trains/time.png");
  -webkit-background-size: cover;
  background-size: cover;
  line-height: .5rem;
}

.refund>p:last-child {
  padding-right: .3rem;
  background: url("../../../assets/images/trains/right.png") no-repeat right center;
  -webkit-background-size: .17rem;
  background-size: .17rem;
}

.traveller>div:first-child {
  padding-left: .45rem;
  background: url("../../../assets/images/trains/traveller.png") no-repeat left center;
  -webkit-background-size: .34rem;
  background-size: .34rem;
}

.traveller a {
  padding: .05rem .2rem;
  border-radius: .5rem;
  border: 1px solid #03A9F4;
  margin-left: .2rem;
}

.ensure {
  padding-left: 1rem;
  background: url("../../../assets/images/trains/ensure.png") .3rem center no-repeat;
  -webkit-background-size: .4rem;
  background-size: .4rem;
  background-color: #fff;
}

.bgf>.ensure {
  padding-left: 1rem;
  background: url("../../../assets/images/trains/ticket.png") .3rem center no-repeat;
  -webkit-background-size: .4rem;
  background-size: .4rem;
  background-color: #fff;
}

.dizhi>div:first-child {
  width: 1.7rem;
}

.dizhi>div:last-child {
  width: 5rem;
}
</style>
