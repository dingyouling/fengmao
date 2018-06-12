<template>
  <div id="order">
    <div v-show="isShow">
      <header class="bgf">
        <h1 class="f40 tc">订单</h1>
      </header>
      <div class="list_mune clearfix bgf">
        <div class="f28 fl tc" v-for="(val,index) in titleArr" :key="index">
          <span :class="{active: index==chooseIndex}" @click="changeData(index)">{{val}}</span>
        </div>
      </div>
      <div class="list_money">
        <div class="fl f28 cf tc">
          <p><img src="../assets/images/order/list_money1.png" alt="">
            <span>订单数</span>
          </p>
          <p>
            <span class="f60 order_recharge_count">{{orderNum}}</span> 笔</p>
          <div class="border"></div>
        </div>
        <div class="fl f28 cf tc">
          <p><img src="../assets/images/order/list_money2.png" alt="">
            <span>总额</span>
          </p>
          <p>
            <span class="f60 order_recharge_count">{{orderAmount}}</span> 元</p>
        </div>
      </div>
      <div class="list_nav bgf">
        <router-link :to="'/order/trains?beginTime='+beginTime+'&endTime='+endTime+'&returnListUrl='+$route.path" class="f28 c33 tc fl">
          <img src="../assets/images/order/list_10@2x.png" alt="">
          <p>火车票</p>
        </router-link>
        <router-link :to="'/order/item/1?beginTime='+beginTime+'&endTime='+endTime" class="f28 c33 tc fl">
          <img src="../assets/images/order/list_02@2x.png" alt="">
          <p>话费订单</p>
        </router-link>
        <router-link :to="'/order/item/2?beginTime='+beginTime+'&endTime='+endTime" class="f28 c33 tc fl">
          <img src="../assets/images/order/list_03@2x.png" alt="">
          <p>流量订单</p>
        </router-link>
        <router-link :to="'/order/item/7?beginTime='+beginTime+'&endTime='+endTime" class="f28 c33 tc fl">
          <img src="../assets/images/order/list_04@2x.png" alt="">
          <p>游戏点卡订单</p>
        </router-link>
        <router-link :to="'/order/item/4?beginTime='+beginTime+'&endTime='+endTime" class="f28 c33 tc fl">
          <img src="../assets/images/order/list_05@2x.png" alt="">
          <p>水费订单</p>
        </router-link>
        <router-link :to="'/order/item/5?beginTime='+beginTime+'&endTime='+endTime" class="f28 c33 tc fl">
          <img src="../assets/images/order/list_06@2x.png" alt="">
          <p>电费订单</p>
        </router-link>
        <router-link :to="'/order/item/6?beginTime='+beginTime+'&endTime='+endTime" class="f28 c33 tc fl">
          <img src="../assets/images/order/list_07@2x.png" alt="">
          <p>煤费订单</p>
        </router-link>
        <router-link :to="'/order/item/3?beginTime='+beginTime+'&endTime='+endTime" class="f28 c33 tc fl">
          <img src="../assets/images/order/list_08@2x.png" alt="">
          <p>油卡订单</p>
        </router-link>
        <router-link :to="'/order/movie?beginTime='+beginTime+'&endTime='+endTime" class="f28 c33 tc fl">
          <img src="../assets/images/order/list_09@2x.png" alt="">
          <p>电影票订单</p>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import _order from '../fetch/order'
export default {
  data() {
    return {
      orderNum: 0,
      orderAmount: 0,
      beginTime: '',
      endTime: '',
      titleArr: ['总计', '今日', '本周', '本月'],
      chooseIndex: 0
    }
  },
  computed: {
    isShow() {
      if (this.$route.path === '/order') {
        return true
      }
      return false
    }
  },
  mounted() {
    this.getOrder()
  },
  methods: {
    getOrder() {
      _order.getUserOrderNum({
        beginTime: this.beginTime,
        endTime: this.endTime
      }).then(res => {
        this.orderNum = res.result.customerRechargeOrderNum
        this.orderAmount = res.result.customerRechargeOrderAmount
      })
    },
    changeData(index) {
      this.chooseIndex = index
      let nowDate = new Date()
      if (index === 1) {
        this.beginTime = nowDate.getFullYear() + '-' + (Number(nowDate.getMonth()) + 1) + '-' + nowDate.getDate() + ' 00:00:00'
        this.endTime = nowDate.getFullYear() + '-' + (Number(nowDate.getMonth()) + 1) + '-' + nowDate.getDate() + ' 23:59:59'
        this.getOrder()
      } else if (index === 2) {
        this.getWeek(nowDate)
      } else if (index === 3) {
        this.getMonth(nowDate)
      } else {
        this.beginTime = ''
        this.endTime = ''
        this.getOrder()
      }
    },
    getWeek(nowDate) {
      let weekFirstDay = new Date(nowDate - (nowDate.getDay() - 1) * 86400000)
      let weekLastDay = new Date((weekFirstDay / 1000 + 6 * 86400) * 1000)
      this.beginTime = weekFirstDay.getFullYear() + '-' + (Number(weekFirstDay.getMonth()) + 1) + '-' + weekFirstDay.getDate() + ' 00:00:00'
      this.endTime = weekLastDay.getFullYear() + '-' + (Number(weekLastDay.getMonth()) + 1) + '-' + weekLastDay.getDate() + ' 23:59:59'
      this.getOrder()
    },
    getMonth(nowDate) {
      let monthFirstDay = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1)
      let nextMonthFirstDay = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 1)
      let monthLastDay = new Date(nextMonthFirstDay - 86400000)
      this.beginTime = monthFirstDay.getFullYear() + '-' + (Number(monthFirstDay.getMonth()) + 1) + '-' + monthFirstDay.getDate() + ' 00:00:00'
      this.endTime = monthLastDay.getFullYear() + '-' + (Number(monthLastDay.getMonth()) + 1) + '-' + monthLastDay.getDate() + ' 23:59:59'
      this.getOrder()
    }
  }
}
</script>

<style scoped>
body {
  padding-bottom: .9rem;
}

#order {
  height: 100%;
}

.list_mune>div {
  width: 25%;
}

.list_mune>div>span {
  line-height: .75rem;
  display: inline-block;
}

.list_mune>div>span.active {
  border-bottom: 5px solid #ff6953;
  color: #ff6953;
}

.list_money {
  width: 7.5rem;
  height: 2.5rem;
  background: url('../assets/images/order/list_bg.png');
  -webkit-background-size: contain;
  background-size: contain;
}

.fxs .list_mune>div.active {
  border: none;
  color: #ff6953;
  position: relative;
}

.fxs .list_mune {
  border-bottom: 1px solid #E6E6E6;
}

.fxs .list_mune>div.active:after {
  content: "";
  border-left: .2rem solid transparent;
  border-right: .2rem solid transparent;
  border-bottom: .3rem solid #fff;
  position: absolute;
  top: -.2rem;
  left: 50%;
  margin-left: -.2rem;
}

.fxs .list_money {
  height: 3rem;
  background: linear-gradient(to top, #FF8C65, #FFAC74);
}

.fxs .tab {
  line-height: .8rem;
}

.fxs .tab>div {
  width: 50%;
}

.fxs .tab>div.active {
  font-size: .36rem;
  position: relative;
}

.fxs .tab .active:after {
  content: "";
  width: 30%;
  height: 100%;
  border-bottom: 3px solid #fff;
  position: absolute;
  top: 0;
  left: 35%;
}

.list_money>.tc {
  width: 50%;
  margin-top: .6rem;
  position: relative;
}

.list_money>div>.border {
  width: 100%;
  height: 50%;
  position: absolute;
  top: 25%;
  left: 0;
  border-right: 1px solid #fff;
}

.list_money p>img {
  width: .26rem;
  vertical-align: center;
  display: inline-block;
  margin-right: .1rem;
}

.list_nav {
  overflow-x: hidden;
}

.list_nav>a {
  width: 33.33%;
  height: 2.4rem;
  display: block;
  padding-top: 1px;
  border-bottom: 1px solid #E6E6E6;
  border-right: 1px solid #E6E6E6;
}

.list_nav>a>img {
  width: .8rem;
  margin: .6rem auto .2rem;
}
</style>
