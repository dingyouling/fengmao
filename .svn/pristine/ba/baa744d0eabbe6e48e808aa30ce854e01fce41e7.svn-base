<template>
  <div class="orderitem">
    <header class="bgf">
      <router-link to="/order" class="f24 back"></router-link>
      <h1 class="f40 tc">{{titleArr[$route.params.type - 1]}}</h1>
      <a href="javascript:void(0);" class="c33 f40 sel" @click="selShow=true">筛选</a>
    </header>
    <Scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData" v-show="!noData">
      <div class="pd aaa">
        <div class="order_index_item" v-for="(val,index) in dataList" :key="index">
          <div class="order_index_item_img">
            <img v-if="val.rechargeType == 1" src="../../assets/images/order/hf.png" alt="">
            <img v-if="val.rechargeType == 2" src="../../assets/images/order/ll.png" alt="">
            <img v-if="val.rechargeType == 3" src="../../assets/images/order/yk.png" alt="">
            <img v-if="val.rechargeType == 4" src="../../assets/images/order/sf.png" alt="">
            <img v-if="val.rechargeType == 5" src="../../assets/images/order/df.png" alt="">
            <img v-if="val.rechargeType == 6" src="../../assets/images/order/mq.png" alt="">
            <img v-if="val.rechargeType == 7" src="../../assets/images/order/dk.png" alt="">
            <img v-if="val.rechargeType == 8" src="../../assets/images/order/dy.png" alt="">
            <img v-if="val.rechargeType == 9" src="../../assets/images/order/hc.png" alt="">
          </div>
          <div class="order_index_item_1 f28 bgf pd tr">
            <div class="cf">支付时间 :{{val.payTime}}</div>
          </div>
          <router-link :to="'/order/info?orderCode='+val.orderCode" class="order_index_item_2 clearfix">
            <div class="c33 f36 clearfix">
              <p class="fl p">{{val.prodName}}</p>
              <p class="fr co">￥{{val.totalPrice}}</p>
            </div>
            <div class="f28 c8e">充值账号 :
              <span>{{val.cardNumber}}</span>
            </div>
            <div class="f28 c8e clearfix ">
              <span class="fl">备注名 :
                <span>{{val.notes}}</span>
              </span>
              <span class="fr f32 co">{{val.rechargeStatusStr}}</span>
            </div>
          </router-link>
        </div>
      </div>
    </Scroll>
    <div class="index_sel" v-show="selShow">
      <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
        <div class="sel_box bgf" style="left: 20%;" v-show="selShow">
          <div class="sel_item pd">
            <p class="f24 c33">请输入充值
              <span>账</span>号</p>
            <input class="tc" id="cardNumber" v-model="subInfo.cardNumber">
          </div>
          <div class="f24 c33 pd sel_nav line40">
            <span>日期选择</span>
            <div class="sel_nav_item bgf3">
              <p class="cf tc bgo" v-show="!calendarShow" @click="calendarShow=true">全部</p>
              <p class="cf tc bgo" v-show="calendarShow" @click="calendarShowAll" style="left:33.33%;">按天</p>
            </div>
            <calendar v-show="calendarShow" :range="calendar2.range" :zero="calendar2.zero" :lunar="calendar2.lunar" :value="calendar2.value" :begin="calendar2.begin" :end="calendar2.end" @select="calendar2.select" @empty="calendar2.empty"></calendar>
          </div>
          <div class="co f24 pd line80 dc-content" v-show="calendar2.value.length > 0">
            选择范围 ：{{calendar2.display}}
          </div>
          <div class="sel_item pd clearfix marb100">
            <p class="f24 c33">订单状态</p>
            <div class="f24 tc c33 bgf3 fl" @click="subInfo.rechargeStatus = 0" :class="{active:subInfo.rechargeStatus == 0}">全部</div>
            <div class="f24 tc c33 bgf3 fl" @click="subInfo.rechargeStatus = 1" :class="{active:subInfo.rechargeStatus == 1}">充值中</div>
            <div class="f24 tc c33 bgf3 fl" @click="subInfo.rechargeStatus = 2" :class="{active:subInfo.rechargeStatus == 2}">充值成功</div>
            <div class="f24 tc c33 bgf3 fl" @click="subInfo.rechargeStatus = 3" :class="{active:subInfo.rechargeStatus == 3}">充值失败</div>
          </div>
          <div class="sel_sub clearfix">
            <div class="fl f32 tc co" id="selReset" @click="reset">重置</div>
            <div class="fl f32 tc bgo cf" id="selects" @click="search">筛选</div>
          </div>
        </div>
      </transition>
      <div class="close" @click="selShow=false"></div>
    </div>
    <div style="width:3.7rem;height:5rem;margin:1rem auto;position:absolute;top:1rem;left:50%;margin-left:-1.85rem;z-index:99;" v-show="noData">
      <img style="width:100%;height:3.7rem;margin-bottom: .3rem;" src="../../assets/images/order/dingdan.png" alt="">
      <p class="f30 c8e tc">您还没有任何信息~</p>
    </div>
  </div>
</template>
  
<script>
import Scroll from '@/components/Scroll'
import Calendar from '@/components/Calendar'

import _order from '../../fetch/order'

import { alert } from '../../util/tool'

export default {
  data() {
    return {
      titleArr: ['话费订单', '流量订单', '加油卡订单', '水费订单', '电费订单', '煤费订单', '游戏点卡订单'],
      scrollData: {
        noFlag: false // 暂无更多数据显示
      },
      subInfo: {
        page: 1,
        userId: 0,
        rechargeStatus: 0,
        rechargeType: 1,
        cardNumber: '',
        pageSize: 10,
        beginTime: '',
        endTime: ''
      },
      dataList: [],
      isLase: false,
      calendar2: {
        display: '',
        range: true,
        value: [], // 默认日期
        lunar: false, // 显示农历
        zero: true,
        select: (begin, end) => {
          this.calendar2.value = [begin, end]
          this.calendar2.display = begin.join('/') + ' ~ ' + end.join('/')
        },
        empty: (begin) => {
          this.calendar2.value = [begin]
          this.calendar2.display = begin.join('/')
        }
      },
      selShow: false,
      calendarShow: false,
      noData: false
    }
  },
  components: {
    Scroll,
    Calendar
  },
  mounted() {
    this.subInfo.beginTime = this.$route.query.beginTime
    this.subInfo.endTime = this.$route.query.endTime
    this.subInfo.rechargeType = this.$route.params.type
    this.getData()
  },
  methods: {
    getData() {
      this.isLast = false
      _order.searchOrder(this.subInfo).then(res => {
        for (var i = 0; i < res.result.length; i++) {
          this.dataList.push(res.result[i])
        }
        this.noData = false
        if (res.result.length === 0) {
          this.isLast = true
          alert('暂无更多')
          if (this.dataList.length === 0) {
            this.noData = true
          }
        }
      })
    },
    onRefresh(done) {      // 下拉刷新
      this.subInfo.page = 1
      this.dataList = []
      this.getData()
      done()
    },
    onInfinite(done) {
      if (!this.isLast) {
        this.subInfo.page++
        this.getData()
      } else {
        alert('暂无更多')
      }
      done()
    },
    reset() {
      this.calendar2.value = []
      this.calendar2.display = ''
      this.subInfo.cardNumber = ''
      this.subInfo.rechargeStatus = 0
      this.subInfo.beginTime = ''
      this.subInfo.endTime = ''
      this.calendarShow = false
    },
    search() {
      this.selShow = false
      if (this.calendar2.value.length === 1) {
        this.subInfo.beginTime = this.calendar2.value[0][0] + '-' + this.calendar2.value[0][1] + '-' + this.calendar2.value[0][2] + ' 0:0:0'
        this.subInfo.endTime = this.calendar2.value[0][0] + '-' + this.calendar2.value[0][1] + '-' + this.calendar2.value[0][2] + ' 23:59:59'
      } else if (this.calendar2.value.length === 2) {
        this.subInfo.beginTime = this.calendar2.value[0][0] + '-' + this.calendar2.value[0][1] + '-' + this.calendar2.value[0][2] + ' 0:0:0'
        this.subInfo.endTime = this.calendar2.value[1][0] + '-' + this.calendar2.value[1][1] + '-' + this.calendar2.value[1][2] + ' 23:59:59'
      }
      this.subInfo.page = 1
      this.dataList = []
      this.getData()
    },
    calendarShowAll() {
      this.calendarShow = false
      this.calendar2.value = []
      this.calendar2.display = ''
    }
  }
}
</script>
  
<style scoped>
.aaa {
  margin-top: 1.5rem;
}

.line80 {
  line-height: .8rem;
}

.order_index_item {
  margin-top: .7rem;
  position: relative;
}

.order_index_item_1 {
  width: 100%;
  border-radius: 5px 5px 0 0;
  line-height: .8rem;
  background: linear-gradient(to right, #FFAC75, #FF6953);
}

.tr {
  text-align: right;
}

.order_index_item_img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  position: absolute;
  top: -.5rem;
  left: .3rem;
}

.order_index_item_img img {
  width: 1rem;
}

.order_index_item_2 {
  display: block;
  padding: .2rem .3rem;
  background: #fff;
  border-radius: 0 0 5px 5px;
}

.order_index_item_2 .p {
  width: 4.5rem;
}

.order_index_item_2 .f28 {
  margin-top: .1rem;
}

.order_index_item_2 .f28>.fl {
  width: 4.5rem;
}

.index_sel {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, .7)
}

.index_sel .close {
  width: 20%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.sel_box {
  width: 80%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 100%;
  overflow: scroll;
}

.calendar .view {
  margin: 0 auto;
}

.calendar-hd {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.sel_box>p {
  margin-top: .2rem;
}

.sel_item {
  border-top: 1px solid #E6E6E6;
  padding-top: .2rem;
  margin-bottom: .2rem;
}

.sel_item>.tc {
  width: 1.4rem;
  line-height: .6rem;
  border-radius: .6rem;
  margin-top: .3rem;
  margin-right: .3rem;
}

.sel_item>.tc.active {
  color: #fff;
  background: linear-gradient(to right, #FFAC75, #FF6953);
}

.sel_sub {
  width: 80%;
  position: fixed;
  bottom: 0;
  line-height: 1rem;
  z-index: 2;
}

.sel_sub>div {
  width: 50%;
}

.sel_sub>div:nth-child(1) {
  background: #ffe7e3;
}

.marb100 {
  margin-bottom: 1.2rem;
}

.sel_item>input {
  font-size: .24rem;
  border: 1px solid #F3F3F3;
  width: 100% !important;
  margin: .1rem auto;
  background: #F3F3F3;
}

.sel_nav {
  position: relative;
  padding-bottom: .3rem;
}

.sel_nav_item {
  width: 1.2rem;
  height: .4rem;
  border-radius: .4rem;
  position: absolute;
  top: 0;
  right: .3rem;
}

.sel_nav_item>p {
  width: .8rem;
  line-height: .4rem;
  border-radius: .4rem;
  position: absolute;
  top: 0;
  left: 0;
}

.calendar-dialog-body {
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 2px;
  z-index: 10001;
}
</style>
  