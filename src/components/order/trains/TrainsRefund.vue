<template>
  <div class="trainsrefund bgf3">
    <header class="trains-color">
      <a href="javascript:history.back();" class="f24 back back1"></a>
      <h1 class="f40 tc category cf">火车票订单</h1>
    </header>
    <p class="refund_info pd f24">如以换取纸质车票，须携带有效身份证件到车站退票窗口办理退票后，再来此进行退票操作。</p>

    <!--乘客信息开始-->
    <div class="traveller pd bgf ">
      <div class="line100">
        <p class="f32">乘客信息</p>
        <p class="f28" id="ticketNo">取票号：{{dataList.ticketNo}}</p>
      </div>
      <div class="bb">
        <div class="line60">
          <p class="f32 c33" id="passengerName">{{dataList.passengerName}}</p>
          <p class="f24 c8e" id="passengerType">{{passengerTypeStr[dataList.passengerType]}}</p>
        </div>
        <div class="line60">
          <p class="f28 c33" id="seatClass">{{dataList.seatClassStr}}{{dataList.seatNo}}</p>
          <p class="f32 cb" id="price">￥{{dataList.ticketPrice}}</p>
        </div>
        <div class="line60 mb">
          <p class="f28 cb" id="statusStr">{{ticketStatusStr[dataList.ticketStatus]}}</p>
        </div>
      </div>
    </div>
    <!--乘客信息结束-->

    <!--费用明细开始-->
    <div class="bgf pd mt2">
      <p class="f32 c33 line100 bb">费用明细</p>
      <div>
        <div class="clearfix f28 line60">
          <p class="fl c8e">车票 : </p>
          <p class="fr c33" id="ticketPrice">￥{{Number(dataList.ticketPrice)}}</p>
        </div>
        <div class="clearfix f28 line60">
          <p class="fl c8e">预计手续费 : </p>
          <p class="fr c33" id="fee">￥{{Number(ticketRefundFee)}}</p>
        </div>
        <div class="clearfix f28 line60 bb" v-show="dataList.insurePrice > 0">
          <p class="fl c8e">保险 : </p>
          <p class="fr c33" id="insurePrice">￥{{Number(dataList.insurePrice)}}</p>
        </div>
        <div class="clearfix f28 line60">
          <p class="fl c8e">预计退还金额 : </p>
          <p class="fr cb" id="refundPrice">￥{{Number(dataList.ticketPrice) - Number(ticketRefundFee) + Number(dataList.insurePrice)}}</p>
        </div>
      </div>
    </div>
    <!--费用明细结束-->
    <a href="javascript:;" class="log trains-color tc cf f32" @click="refund">确定退票</a>

    <div class="pd c8e f24" style="line-height: .38rem; margin-top: .5rem;">
      <p class="">温馨提示：</p>
      <p class=""> 1.如您已在车站退票，则预计手续费有误差，退票金额以实际到账金额为准</p>
      <p class=""> 2.退票金额预计会在15个工作日返环至您付款账户。</p>
      <p class=""> 3.优惠券抵扣金额不予退还。</p>
      <p class=""> 4.如参与支付优惠活动，实际退款以到账金额为准。</p>
    </div>
  </div>
</template>

<script>
import _order from '../../../fetch/order'
import router from '../../../router'

export default {
  data() {
    return {
      dataList: '',
      ticketRefundFee: 0,
      passengerTypeStr: ['', '成人票', '儿童票', '学生票'],
      ticketStatusStr: ['', '未出票', '出票中', '出票失败', '出票成功', '申请改签中', '改签待确认', '支付中', '支付失败', '改签中', '改签成功', '退票中', '退票成功']
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      _order.trainsOrderChangeInfo({
        ticketId: this.$route.query.ticketId,
        type: 2
      }).then(res => {
        console.log(res)
        this.dataList = res.result
        this.ticketRefundFee = this.getTicketRefundFee(res.result.trainDate, res.result.ticketPrice)
        console.log(this.ticketRefundFee)
      })
    },
    getTicketRefundFee(time, money1) {
      let x1 = new Date(time.replace(/-/g, '/')).getTime()   // 乘车时间
      let x2 = new Date().getTime()        // 当前时间
      // 当前时间和乘车时间差
      let leadtime = Math.floor((x1 - x2) / 3600000)
      // 预计扣款
      let cutMoney
      let money = parseFloat(money1)
      if (leadtime < 24) {
        // 不足24小时
        cutMoney = money * 0.2
      } else if (leadtime >= 24 && leadtime < 48) {
        // 24小时至48小时
        cutMoney = money * 0.1
      } else if (leadtime >= 48 && leadtime < 360) {
        // 48小时至15天
        cutMoney = money * 0.05
      } else if (leadtime >= 360) {
        // 15天以上
        return 0
      }
      if ((cutMoney % 1).toFixed(2) < 0.25) {
        cutMoney = Math.floor(cutMoney / 1)
      } else if ((cutMoney % 1).toFixed(2) < 0.75 && (cutMoney % 1).toFixed(2) >= 0.25) {
        cutMoney = Math.floor(cutMoney / 1) + 0.5
      } else if ((cutMoney % 1).toFixed(2) >= 0.75) {
        cutMoney = Math.floor(cutMoney / 1) + 1
      }
      if (cutMoney < 2) {
        cutMoney = 2
      }
      // 返回预扣款金额
      return cutMoney
    },
    refund() {
      _order.refundTicket({
        ticketId: this.$route.query.ticketId
      }).then(res => {
        router.push({ path: '/order/trains/refundsuccess' })
      })
    }
  }
}
</script>

<style scoped>
.trainsrefund {
  height: 100%;
}

.traveller>div:first-child {
  padding-left: .45rem;
  background: url(../../../assets/images/trains/traveller.png) no-repeat left center;
  -webkit-background-size: .34rem;
  background-size: .34rem;
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
  border-top: 1px solid #E6E6E6;
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

.bgf3 {
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

.tc>img {
  width: 2.5rem;
  margin: 1rem auto .1rem;
}
</style>
