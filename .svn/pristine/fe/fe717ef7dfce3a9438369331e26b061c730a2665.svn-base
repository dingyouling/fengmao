<template>
	<div class="orderCountdown f32">
		<header class="trains-color cf">
        <a href="javascript:history.back();" class="f24 back back1"></a>
        <h1 class="tc f36">订单信息{{$route.query.trainDate ? '(改签)' : ''}}</h1>
    </header>
    <div class="cf trains-color trains_case">
    	<div class="clearfix pd df">
    		<div class="fl">{{ chooseTrain.fromStation }}</div>
    		<div class="fl tc">{{ chooseTrain.trainNo }}</div>
    		<div class="fl tr">{{ chooseTrain.toStation }}</div>
    	</div>
    	<div class="clearfix pd f50">
    		<div class="fl">{{ chooseTrain.fromTime }}</div>
    		<div class="fr">{{ chooseTrain.toTime }}</div>
    	</div>
    	<div class="clearfix pd df">
    		<div class="fl">{{ chooseTrain.fromTime }}</div>
    		<div class="fl f24 tc">
    			<router-link to="/index/trains/timeTable" class="trains_time cf">列车时刻</router-link>
    		</div>
    		<div class="fl tr">{{ chooseTrain.toTime }}</div>
    	</div>
    </div>
    <div class="pd">
    	<!-- 支付时间倒计时 -->    
    	<div class="pay_time cf tc f28" v-show="countDown">
    		支付剩余时间
    		<span class="cl">{{parseInt(countDownTime / 60)}}</span>
    		分
    		<span class="cl">{{parseInt(countDownTime % 60)}}</span>
    		秒
    	</div>
    	<!-- 占座效果 -->    
    	<div class="trains_schedule" v-show="!countDown">
    		<div class="clearfix">
    			<div class="trains-color fl" :style="{width: orderStatusType === 1 ? process + '%' : '100%'}"></div>
    			<p class="cf tc f28">{{orderStatusType === 1 ? '占座进度' + process + '%' : orderStatus[orderStatusType]}}</p>
    		</div>
    	</div>
    	<!-- 乘客信息 -->    
    	<div class="bgf bdra">
    		<div class="bdb">
    			<div class="clearfix">
    				<div class="fl">
    					<img src="../../../assets/images/trains/trains_icon20@2x.png" alt=""></div>
    				<div class="fl">乘客信息</div>
    			</div>
    		</div>
    		<div class="bdb" v-for="(val, index) in ticketList">
    			<div>
    				<div class="clearfix">
    					<div class="fl">{{val.passengerName}}</div>
    					<div class="fr f24 c8e">{{passengerType[val.passengerType]}}票</div>
    				</div>
    				<div class="clearfix">
    					<div class="fl">{{val.seatClassStr}}</div>
    					<div class="fr cl">￥{{val.ticketPrice}}</div>
    				</div>
    				<div class="clearfix">
    					<div class="fl">{{insureStatus[val.insureStatus]}}</div>
    					<div class="fr c8e f24">{{ticketStatus[val.ticketStatus]}}</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div class="clearfix bgf pd bdra h100" v-show="totalInsurePrice !== '0.00'">
    		<div class="fl">
    			<img src="../../../assets/images/trains/trains_icon15@2x.png" alt=""></div>
    		<div class="fl">
    			<p>行程保障</p>
    			<p class="f24 c8e">每人￥{{(totalInsurePrice / this.ticketList.length).toFixed(2)}}</p>
    		</div>
    		<div class="cl fr lh88">￥{{totalInsurePrice}}</div>
    	</div>
    </div>
    <div class="pay_sub tc clearfix" v-show="countDown">
    	<div class="bgf fl" @click="cancelOrder">{{$route.query.ticketId ? '取消改签' : '取消订单'}}</div>
    	<a class="bgl cf fl" @click="toPaytrains">立即支付</a>
    </div>
    <div class="tc clearfix cf pay_sx" v-show="reFresh">
      <div class="bgl">刷新订单</div>
    </div>
    <v-dialog v-show="dialogShow" :dialogMsg="'取消3次后，您当天将不可以购票！'" @confirm="dialogConfirm" @cancel="dialogShow=false"></v-dialog>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import router from '../../../router/'
import _trains from '../../../fetch/trains.js'
import Dialog from '../../Dialog'
export default{
  data() {
    return {
      payShow: false,
      passengerType: ['', '成人', '儿童', '学生'],
      orderStatus: ['', '占座中', '占座成功', '占座失败', '支付中', '支付失败', '出票中', '出票失败', '出票成功', '已取消'],
      ticketStatus: ['', '未出票', '出票中', '出票失败', '出票成功', '申请改签中', '改签待确认', '支付中', '支付失败', '改签中', '-改签成功', '退票中', '退票成功'],
      insureStatus: ['不含保险', '购保中', '购保成功', '购保失败', '退保中', '退保成功'],
      ticketList: [],
      totalInsurePrice: '0.00',
      insurePrice: '0.00',
      orderStatusType: 1,
      countDown: false,
      nowTime: '',
      updateTime: '',
      createTime: '',
      countDownTime: '',
      orderCode: '',
      changeOrderStatus: 1,
      dialogShow: false,
      reFresh: true
    }
  },
  components: {
    'v-dialog': Dialog
  },
  created() {
  },
  computed: {
    ...mapGetters([
      'chooseTrain',
      'process',
      'paytimeRemain'
    ])
  },
  mounted() {
    if (this.$route.query.ticketId) {
      console.log(this.$route.query.ticketId)
      this.orderCode = this.$route.query.orderCode
    } else {
      this.orderCode = this.$route.query.orderCode
    }
    this.getProessTimeout()
    this.getOrderStatusTimeout()
    this.ticketOrderDtl()
  },
  methods: {
    // 更改进度
    getProess() {
      if (this.process < 98) {
        this.$store.dispatch('setProcess')
      } else {
        clearTimeout(this.localTimer)
      }
    },
    // 进度条定时器
    getProessTimeout() {
      this.getProess()
      if (this.$route.path.indexOf('orderCountdown') !== -1) {
        let _this = this
        this.localTimer = setTimeout(() => {
          _this.getProessTimeout()
        }, 1000)
      } else {
        clearTimeout(this.localTimer)
      }
    },
    // 请求占座结果
    getOrderStatus() {
      console.log('获取订单状态')
      if (this.$route.query.ticketId) {
        _trains.getChangeTicketInfo({ticketId: this.$route.query.ticketId}).then(res => {
          console.log(res.result.ticketStatus)
          if (res.result.ticketStatus === 6) {
            clearTimeout(this.localTimer)
            clearTimeout(this.requstTimer)
            this.changeOrderStatus = res.result.ticketStatus
            this.orderStatusType === 1
            this.reFresh = false
            this.ticketOrderDtl()
          }
          console.log('w' + this.orderStatusType)
        }).catch(error => {
          console.log(error)
        })
      } else {
        _trains.getOrderStatus({orderCode: this.orderCode}).then(res => {
          this.orderStatusType = res.result.orderstatus
          if (res.result.orderstatus !== 1) {
            this.payShow = true
            this.countDown = true
            this.reFresh = false
            clearTimeout(this.localTimer)
            clearTimeout(this.requstTimer)
            this.ticketOrderDtl()
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    // 请求占座结果定时器
    getOrderStatusTimeout() {
      this.getOrderStatus()
      if (this.$route.path.indexOf('orderCountdown') !== -1) {
        let _this = this
        this.requstTimer = setTimeout(() => {
          _this.getOrderStatusTimeout()
        }, 3000)
      } else {
        clearTimeout(this.requstTimer)
      }
    },
    // 支付时间倒计时
    payTimeFuc() {
      console.log('支付时间倒计时' + this.countDownTime)
      this.countDownTime = 15 * 60 - (this.nowTime - this.updateTime)
      if (this.countDownTime <= 0) {
        clearTimeout(this.payTimer)
        router.push({ path: '/order/trains', query: { beginTime: '', endTime: '', returnListUrl: this.$route.path } })
      } else {
        this.nowTime ++
      }
    },
    // 支付时间计算
    payTimeCountDown() {
      this.payTimeFuc()
      if (this.$route.path.indexOf('orderCountdown') !== -1) {
        let _this = this
        this.payTimer = setTimeout(() => {
          _this.payTimeCountDown()
        }, 1000)
      } else {
        this.payTimer = ''
      }
    },
    // 获取占座状态
    ticketOrderDtl() {
      // 购票和改签
      if (!this.$route.query.ticketId) {
        _trains.ticketOrderDtl({orderCode: this.orderCode}).then(res => {
          this.ticketList = res.result.ticketList
          this.totalInsurePrice = res.result.totalInsurePrice
          if (res.result.insurePrice !== undefined) {
            this.insurePrice = res.result.insurePrice
          }
          if (this.orderStatusType === 2) {
            this.countDown = true
            this.reFresh = false
            this.updateTime = new Date(res.result.ticketList[0].updateTime.replace(/-/g, '/')).getTime() / 1000
            this.createTime = res.result.ticketList[0].updateTime
            this.nowTime = new Date().getTime() / 1000
            clearTimeout(this.localTimer)
            clearTimeout(this.requstTimer)
            this.payTimeCountDown()
          }
        }).catch(error => {
          console.log(error)
        })
      } else {
        _trains.ticketChangeDtl({ticketId: this.$route.query.ticketId, type: 1}).then(res => {
          this.ticketList = [{
            passengerName: res.result.passengerName,
            seatClassStr: res.result.seatClassStr,
            passengerType: res.result.passengerType,
            insurePrice: res.result.insurePrice,
            insureStatus: res.result.insureStatus,
            ticketPrice: res.result.ticketPrice,
            ticketStatus: res.result.ticketStatus
          }]
          if (res.result.insurePrice !== undefined) {
            this.insurePrice = res.result.insurePrice
            this.totalInsurePrice = res.result.insurePrice
          }
          if (this.changeOrderStatus === 6) {
            console.log('gaiqiandaiqueren')
            this.countDown = true
            this.reFresh = false
            this.updateTime = new Date(res.result.updateTime.replace(/-/g, '/')).getTime() / 1000
            this.createTime = res.result.updateTime
            this.nowTime = new Date().getTime() / 1000
            this.payTimeCountDown()
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    dialogConfirm() {
      _trains.cancelOrder({orderCode: this.orderCode}).then(res => {
        clearTimeout(this.payTimer)
        router.push({ path: '/order/trains', query: { beginTime: '', endTime: '', returnListUrl: this.$route.path } })
      }).catch(error => {
        console.log(error)
      })
    },
    cancelOrder() {
      if (this.$route.query.trainDate) {
        _trains.cancelChangeTicket({ticketId: this.$route.query.ticketId}).then(res => {
          clearTimeout(this.payTimer)
          alert('取消改签成功！')
          router.push({ path: '/order/trains', query: { beginTime: '', endTime: '', returnListUrl: this.$route.path } })
        }).catch(error => {
          console.log(error)
        })
      } else {
        this.dialogShow = true
      }
    },
    toPaytrains() {
      if (this.$route.query.trainDate) {
        router.push({path: '/index/trains/payTrains', query: {orderCode: this.orderCode, createTime: this.createTime, ticketId: this.$route.query.ticketId, payBusiType: 'payTrainsTicketChange'}})
      } else {
        router.push({path: '/index/trains/payTrains', query: {orderCode: this.orderCode, createTime: this.createTime, payBusiType: 'payTrainsTicket'}})
      }
    }
  }
}
</script>

<style scoped>
header{
	border: 0;
}
.orderCountdown{
	background: #f3f3f3;
	height: 100%;
}
.pay_time{
	background: #37474f url(../../../assets/images/trains/trains_icon11@2x.png) .2rem center no-repeat;
	-webkit-background-size: .28rem .3rem;
	background-size: .3rem;
	height: .6rem;
	line-height: .6rem;
	width: 4rem;
	border-radius: .3rem;
	margin: .3rem auto;
	padding-left: .2rem;
}
.bdb{
	border-bottom: 1px solid #f2f7ff;
}
.bdb > div{
	padding: .3rem;
}
.bdb img{
	width: .27rem;
	margin: .1rem .2rem 0 0;
}
.lh88{
	line-height: .88rem;
}
.h100{
	height: 1rem;
	padding: .1rem .3rem;
}
.h100 img{
	width: .35rem;
	margin: .3rem .2rem 0 0;
}
.bdra{
	border-radius:5px;
	margin: .3rem 0;
}
.pay_sub{
	height: 1rem;
	line-height: 1rem;
	position: fixed;
	left: 0;
	bottom: 0;
}
.pay_sub>.bgl{
	width: 4.3rem;
}
.pay_sub>.bgf{
	width: 3.2rem;
}
.pay_sx{
	height: 1rem;
	line-height: 1rem;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
}
.trains_schedule{
	background: #37474f;
	border-radius: .3rem;
	line-height: .6rem;
	position: relative;
	overflow: hidden;
	margin: .3rem auto;
}
.trains_schedule > div{
	width: 6.9rem;
	height: .6rem;
	display:flex;
	flex-flow:row;
}
.trains_schedule .trains-color{
	width: 0%;
	height: 100%;
	border-radius: .3rem 0 0 .3rem;
}
.trains_schedule p{
	position: absolute;
	width: 100%;
	left: 0;
}
.trains_time{
	width: 2.08rem;
	height: .6rem;
	line-height: .6rem;
	background:url(../../../assets/images/trains/trains_icon13@2x.png) center center no-repeat;
	-webkit-background-size: 2.08rem .5rem;
	background-size: 2.08rem .5rem;
	margin: 0 auto;
	display: block;
}
.trains_case{
	line-height: .7rem;
}
.trains_li_header {
	position: relative;
	top: 0;
}
</style>