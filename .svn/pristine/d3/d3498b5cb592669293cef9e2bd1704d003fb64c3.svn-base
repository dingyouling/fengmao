<template>
  <div class="mb">
    <header class="bgf">
      <router-link to="/me" class="f24 back back1"></router-link>
      <h1 class="f40 tc cf">可用猫币</h1>
      <a href="javascript:void(0);" class="c33 f30 sel cf" @click="selShow=true">筛选</a>
    </header>
    <div class="dyl_content bgf">
      <div class="flow_total bgo cf clearfix tc">
        <div class="flow_remain_unpaid">
          <span class="f60">{{usableBank}}元</span>
          <span class="f24">可用猫币</span>
        </div>
      </div>
      <div id="data_list" ref="datalist" v-show="!noData">
        <Scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
          <ul>
            <li class="dyl_flow_li bgf" v-for="(val,index) in dataList" :key="index" @click="toLink(val)">
              <router-link :to="'/me/preorder/preorderinfo?orderCode='+val.orderCode" v-if="val.changeType == 1">
                <div class="f30 clearfix flow_up">
                  <div class="fl">
                    <span class="hiden_text">{{val.orderName}}</span>
                    <span class="f20">
                      {{String(val.orderName).match(/\u5206(\d*)\u671f/) != null ? '第'+ String(val.orderName).match(/\u7b2c(\d*)\u671f/)[1] + '/' + String(val.orderName).match(/\u5206(\d*)\u671f/)[1] + '期' : '立即到账'}}
                    </span>
                  </div>
                  <div class="fr co" v-if="val.changeValue>0">+{{val.changeValue}}元</div>
                  <div class="fr cb" v-if="val.changeValue<0">{{val.changeValue}}元</div>
                </div>
                <div class="clearfix f24">
                  <div class="fl c8e">{{val.billTime}}</div>
                  <div class="fr clearfix clearfix">
                    <p class="fl">{{val.afterValue}}</p>
                  </div>
                </div>
              </router-link>
              <router-link :to="'/order/trains/info?returnUrl='+$route.path+'&orderCode='+val.formerOrderCode" v-else-if="val.changeType == 8">
                <!-- 冲账 -->
                <div class="f30 clearfix flow_up">
                  <div class="fl">
                    <span class="hiden_text">{{val.orderName}}</span>
                    <span class="f20">冲账</span>
                  </div>
                  <div class="fr co" v-if="val.changeValue>0">+{{val.changeValue}}元</div>
                  <div class="fr cb" v-if="val.changeValue<0">{{val.changeValue}}元</div>
                </div>
                <div class="clearfix f24">
                  <div class="fl c8e">{{val.billTime}}</div>
                  <div class="fr clearfix clearfix">
                    <p class="fl">{{val.afterValue}}</p>
                  </div>
                </div>
              </router-link>
              <div v-else-if="val.changeType == 9">
                <!-- 活动 -->
                <div class="f30 clearfix flow_up">
                  <div class="fl">
                    <span class="hiden_text">{{val.orderName}}</span>
                    <span class="f20">活动</span>
                  </div>
                  <div class="fr co" v-if="val.changeValue>0">+{{val.changeValue}}元</div>
                  <div class="fr cb" v-if="val.changeValue<0">{{val.changeValue}}元</div>
                </div>
                <div class="clearfix f24">
                  <div class="fl c8e">{{val.billTime}}</div>
                  <div class="fr clearfix clearfix">
                    <p class="fl">{{val.afterValue}}</p>
                  </div>
                </div>
              </div>
              <router-link :to="'/order/trains/info?returnUrl='+$route.path+'&orderCode='+val.orderCode" v-else-if="val.changeType == 2 && val.rechargeType == 9">
                <!-- 火车票订单 -->
                <div class="f30 clearfix flow_up">
                  <div class="fl">
                    <span class="hiden_text">{{val.orderName}}</span>
                    <span class="f20">{{rechargeStr[val.rechargeType-1]}}</span>
                  </div>
                  <div class="fr co" v-if="val.changeValue>0">+{{val.changeValue}}元</div>
                  <div class="fr cb" v-if="val.changeValue<0">{{val.changeValue}}元</div>
                </div>
                <div class="clearfix f24">
                  <div class="fl c8e">{{val.billTime}}</div>
                  <div class="fr clearfix clearfix">
                    <p class="fl">{{val.afterValue}}</p>
                  </div>
                </div>
              </router-link>
              <router-link :to="'/order/info?orderCode='+val.orderCode" v-else>
                <div class="f30 clearfix flow_up">
                  <div class="fl">
                    <span class="hiden_text">{{val.orderName}}</span>
                    <span class="f20">{{rechargeStr[val.rechargeType-1]}}</span>
                  </div>
                  <div class="fr co" v-if="val.changeValue>0">+{{val.changeValue}}元</div>
                  <div class="fr cb" v-if="val.changeValue<0">{{val.changeValue}}元</div>
                </div>
                <div class="clearfix f24">
                  <div class="fl c8e">{{val.billTime}}</div>
                  <div class="fr clearfix clearfix">
                    <p class="fl">{{val.afterValue}}</p>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </Scroll>
      </div>
    </div>
    <div class="index_sel" v-show="selShow">
      <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
        <div class="sel_box bgf" style="left: 20%;" v-show="selShow">
          <div class="f24 c33 pd sel_nav line40">
            <span>日期选择</span>
            <calendar :range="calendar2.range" :zero="calendar2.zero" :lunar="calendar2.lunar" :value="calendar2.value" :begin="calendar2.begin" :end="calendar2.end" @select="calendar2.select" @empty="calendar2.empty"></calendar>
          </div>
          <div class="co f24 pd line80 dc-content">
            选择范围 ：{{calendar2.display}}
          </div>
          <div class="sel_item pd clearfix marb100">
            <p class="f24 c33">筛选类型</p>
            <div class="f24 tc c33 bgf3 fl" @click="data.actionType=0; data.busiType=0;" :class="{active:data.actionType==0&&data.busiType==0}">全部</div>
            <div class="f24 tc c33 bgf3 fl" @click="data.actionType=0; data.busiType=1;" :class="{active:data.busiType==1}">话费</div>
            <div class="f24 tc c33 bgf3 fl" @click="data.actionType=0; data.busiType=2;" :class="{active:data.busiType==2}">流量</div>
            <div class="f24 tc c33 bgf3 fl" @click="data.actionType=0; data.busiType=3;" :class="{active:data.busiType==3}">加油卡</div>
            <div class="f24 tc c33 bgf3 fl" @click="data.actionType=0; data.busiType=4;" :class="{active:data.busiType==4}">水</div>
            <div class="f24 tc c33 bgf3 fl" @click="data.actionType=0; data.busiType=5;" :class="{active:data.busiType==5}">电</div>
            <div class="f24 tc c33 bgf3 fl" @click="data.actionType=0; data.busiType=6;" :class="{active:data.busiType==6}">煤</div>
            <div class="f24 tc c33 bgf3 fl" @click="data.actionType=0; data.busiType=7;" :class="{active:data.busiType==7}">游戏点卡</div>
            <div class="f24 tc c33 bgf3 fl" @click="data.actionType=0; data.busiType=8;" :class="{active:data.busiType==8}">电影票</div>
            <div class="f24 tc c33 bgf3 fl" @click="data.actionType=0; data.busiType=9;" :class="{active:data.busiType==9}">火车票</div>
            <div class="f24 tc c33 bgf3 fl" @click="data.actionType=7; data.busiType=0;" :class="{active:data.actionType==7}">活动</div>
          </div>
          <div class="sel_sub clearfix">
            <div class="fl f32 tc co" id="selReset" @click="reset">重置</div>
            <div class="fl f32 tc bgo cf" id="selects" @click="search">筛选</div>
          </div>
        </div>
      </transition>
      <div class="close" @click="selShow=false"></div>
    </div>
    <div style="width:3.7rem;height:5rem;margin:1rem auto;position:absolute;top:3rem;left:50%;margin-left:-1.85rem;z-index:99;" v-show="noData">
      <img style="width:100%;height:3.7rem;margin-bottom: .3rem;" src="../../assets/images/order/dingdan.png" alt="">
      <p class="f30 c8e tc">您还没有任何信息~</p>
    </div>
  </div>
</template>

<script>
import Scroll from '../../components/Scroll'
import Calendar from '../../components/Calendar'
import _me from '../../fetch/me'
import { alert } from '../../util/tool'

export default {
  data() {
    return {
      scrollData: {
        noFlag: false // 暂无更多数据显示
      },
      dataList: [],
      data: {
        page: 1,
        beginTime: '',
        endTime: '',
        billType: 1,
        actionType: 0,
        billSubtype: 0,
        busiType: 0
      },
      isLast: false,
      noData: false,
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
      rechargeStr: ['话费流量', '话费流量', '加油卡', '生活缴费', '生活缴费', '生活缴费', '游戏点卡', '电影票', '火车票'],
      usableBank: 0
    }
  },
  components: {
    Scroll,
    Calendar
  },
  mounted() {
    this.getData()
    this.getUsAbleBank()
    this.$refs.datalist.style.height = document.documentElement.clientHeight - this.$el.querySelector('header.bgf').clientHeight - this.$el.querySelector('.flow_total').clientHeight + 'px'
  },
  methods: {
    getData() {
      this.isLast = false
      _me.getMbFlow(this.data).then(res => {
        this.noData = false
        if (res.result.length === 0) {
          this.isLast = true
          alert('暂无更多')
          if (this.dataList.length === 0) {
            this.noData = true
          }
          return false
        }
        for (var i = 0; i < res.result.length; i++) {
          this.dataList.push(res.result[i])
        }
      })
    },
    getUsAbleBank() {
      _me.personal().then(res => {
        this.usableBank = res.result.usableBank
      })
    },
    onRefresh(done) {      // 下拉刷新
      this.data.page = 1
      this.dataList = []
      this.getData()
      done()
    },
    onInfinite(done) {
      if (!this.isLast) {
        this.data.page++
        this.getData()
      } else {
        alert('暂无更多')
      }
      done()
    },
    toLink(item) {
      console.log(item)
    },
    reset() {
      this.calendar2.value = []
      this.calendar2.display = ''
      this.data.actionType = 0
      this.data.busiType = 0
      this.data.beginTime = ''
      this.data.endTime = ''
    },
    search() {
      this.selShow = false
      if (this.calendar2.value.length === 1) {
        this.data.beginTime = this.calendar2.value[0][0] + '-' + this.calendar2.value[0][1] + '-' + this.calendar2.value[0][2] + ' 0:0:0'
        this.data.endTime = this.calendar2.value[0][0] + '-' + this.calendar2.value[0][1] + '-' + this.calendar2.value[0][2] + ' 23:59:59'
      } else if (this.calendar2.value.length === 2) {
        this.data.beginTime = this.calendar2.value[0][0] + '-' + this.calendar2.value[0][1] + '-' + this.calendar2.value[0][2] + ' 0:0:0'
        this.data.endTime = this.calendar2.value[1][0] + '-' + this.calendar2.value[1][1] + '-' + this.calendar2.value[1][2] + ' 23:59:59'
      }
      this.data.page = 1
      this.dataList = []
      this.getData()
    },
    calendarShowAll() {
      this.calendar2.value = []
      this.calendar2.display = ''
    }
  }
}
</script>

<style scoped>
header {
  background: #ffad75;
  border: 0;
}

.flow_total {
  height: 2.2rem;
  background: linear-gradient(to bottom, #ffad75 0%, #ff795c 100%);
  position: relative;
  top: 0;
  left: 0;
  z-index: 222;
}

.flow_total span {
  display: block;
}

.flow_total .flow_remain_unpaid {
  border: 0;
  height: 2.02rem;
  padding: .4rem 0;
}

.flow_total .flow_remain_unpaid .f40 {
  font-size: 1rem;
}

.dyl_flow_li .flow_up .hiden_text {
  display: block;
  max-width: 3.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dyl_flow_li .flow_up span.f20 {
  color: #ff6953;
  border: 1px solid #ff6953;
  border-radius: 10px;
  padding: 0 .2rem;
  position: absolute;
  right: -1.5rem;
  top: 0;
}

.dyl_flow_li {
  border-bottom: solid 1px #f3f3f3;
  padding: .2rem .3rem;
}

.dyl_flow_li .flow_up .fl {
  max-width: 4.6rem;
  position: relative;
}

#data_list {
  position: relative;
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
  padding-top: .3rem;
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

.dc-content {
  line-height: .6rem;
}

.marb100 {
  margin-bottom: 1.2rem;
}
</style>
