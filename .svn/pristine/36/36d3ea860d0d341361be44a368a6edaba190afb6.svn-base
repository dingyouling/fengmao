<template>
  <div class="ordermovie">
    <header class="bgr cf">
      <router-link to="/order" class="f24 back back1"></router-link>
      <h1 class="f40 tc">电影票订单</h1>
    </header>
    <div class="content">
      <div>
        <div>
          <ul class="clearfix f26 bold tc bgf c66 bdb" id="film_order_tab">
            <li class="fl" :class="{cr:subInfo.queryType==0}" @click="changeTab(0)">全部</li>
            <li class="fl" :class="{cr:subInfo.queryType==1}" @click="changeTab(1)">待付款</li>
            <li class="fl" :class="{cr:subInfo.queryType==2}" @click="changeTab(2)">成功订单</li>
          </ul>
          <div id="order_list" ref="orderList" v-show="dataList.length>0">
            <Scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
              <div class="bgf" v-for="(val,index) in dataList" :key="index">
                <router-link :to="{path:'/order/movieInfo',query:{orderCode:val.orderCode,orderStatus:val.orderStatus}}" v-if="val.orderStatus !== 1">
                  <div class="clearfix movie_ti bgf bdb">
                    <div class="fl movie_img1"><img :src="val.poster" alt=""></div>
                    <div class="fl f26 movie_text c66">
                      <div class="f32 bold">
                        <span>{{val.filmName}}({{val.seatNum}}张)</span>
                      </div>
                      <div class="clearfix">
                        <div class="fl">{{val.cinemaName}}</div>
                        <div class="fr f28">{{orderStatusStr[val.orderStatus]}}</div>
                      </div>
                      <div>{{val.orderTime}}</div>
                    </div>
                  </div>
                  <div class="f24 bdb clearfix movie_order_status bgf">
                    <div class="fl c66">总额
                      <span class="f36 co">{{val.totalPrice}}元</span>
                    </div>
                  </div>
                </router-link>
                <div v-else>
                  <div class="clearfix movie_ti bgf bdb">
                    <div class="fl movie_img1"><img :src="val.poster" alt=""></div>
                    <div class="fl f26 movie_text c66">
                      <div class="f32 bold">
                        <span>{{val.filmName}}({{val.seatNum}}张)</span>
                      </div>
                      <div class="clearfix">
                        <div class="fl">{{val.cinemaName}}</div>
                        <div class="fr f28">{{orderStatusStr[val.orderStatus]}}</div>
                      </div>
                      <div>{{val.orderTime}}</div>
                    </div>
                  </div>
                  <div class="f24 bdb clearfix movie_order_status bgf">
                    <div class="fl c66">总额
                      <span class="f36 co">{{val.totalPrice}}元</span>
                    </div>
                    <div class="fr">
                      <a href="javascript:;" class="co fl" @click="orderCancel(val.orderCode)">取消订单</a>
                      <router-link :to="{path:'/order/movieInfo',query:{orderCode:val.orderCode,orderStatus:val.orderStatus}}" class="bgo cf fl">立即付款</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </Scroll>
          </div>
          <div style="width:3.7rem;height:5rem;margin:1rem auto;position:absolute;top:1rem;left:50%;margin-left:-1.85rem;z-index:99;" v-show="dataList.length==0">
            <img style="width:100%;height:3.7rem;margin-bottom: .3rem;" src="../../assets/images/order/dingdan.png" alt="">
            <p class="f30 c8e tc">您还没有任何订单~</p>
          </div>
        </div>
      </div>
    </div>
    <v-dialog :dialogMsg="'确定要取消？'" @confirm="confirm" @cancal="cancal" v-show="dislogShow"></v-dialog>
  </div>
</template>

<script>
import Scroll from '@/components/Scroll'
import _order from '../../fetch/order'
import { alert } from '../../util/tool'
import Dialog from '../../components/Dialog'

export default {
  data() {
    return {
      dataList: [],
      isLase: false,
      scrollData: {
        noFlag: false // 暂无更多数据显示
      },
      subInfo: {
        lastOrderId: 0,
        queryType: 0
      },
      orderStatusStr: ['', '未付款', '付款中', '出票中', '出票失败', '已完成', '已取消'],
      dislogShow: false
    }
  },
  components: {
    Scroll,
    'v-dialog': Dialog
  },
  mounted() {
    this.$refs.orderList.style.height = document.documentElement.clientHeight - document.querySelector('header.bgr').clientHeight - document.querySelector('#film_order_tab').clientHeight + 'px'
    this.getData()
  },
  methods: {
    changeTab(index) {
      this.subInfo.queryType = index
      this.subInfo.lastOrderId = 0
      this.dataList = []
      this.getData()
    },
    onRefresh(done) {      // 下拉刷新
      this.subInfo.lastOrderId = 0
      this.dataList = []
      this.getData()
      done()
    },
    onInfinite(done) {
      if (!this.isLast) {
        this.subInfo.lastOrderId = this.dataList[this.dataList.length - 1].orderId
        this.getData()
      } else {
        alert('暂无更多')
      }
      done()
    },
    getData() {
      this.isLast = false
      _order.movieOrder(this.subInfo).then(res => {
        for (var i = 0; i < res.result.length; i++) {
          this.dataList.push(res.result[i])
        }
        if (res.result.length === 0) {
          this.isLast = true
          alert('暂无更多')
        }
      })
    },
    orderCancel(orderCode) {
      this.dislogShow = true
      this.orderCode = orderCode
    },
    cancal() {
      this.dislogShow = false
      this.orderCode = ''
    },
    confirm() {
      _order.orderCancel({
        orderCode: this.orderCode
      }).then(res => {
        alert('取消成功')
        this.subInfo.lastOrderId = 0
        this.dataList = []
        this.cancal()
        this.getData()
      })
    }
  }
}
</script>

<style scoped>
ul>li {
  width: 33.33%;
  line-height: .72rem;
}

ul>li.cr {
  border-bottom: 1px solid #DB3C38;
}

.bdb {
  border-bottom: 1px solid #e5e5e5;
}

.movie_ti {
  padding: .5rem 0.3rem;
  line-height: .4rem;
}

.no_list img {
  margin: 0 auto;
  width: 3.7rem;
}

.no_list p {
  width: 3.7rem;
  margin: .2rem auto;
}

.movie_img1 img {
  width: 1rem;
  height: 1.4rem;
}

.movie_img1 {
  margin-right: .3rem;
}

.movie_order_status a {
  height: .5rem;
  line-height: .5rem;
  padding: 0 .2rem;
  border-radius: 5px;
}

.movie_order_status a:first-child {
  margin-right: .2rem;
}

.movie_order_status {
  padding: .1rem .3rem;
}

.movie_order_status span {
  margin-left: .2rem;
}

.movie_order_list {
  padding: .2rem .3rem;
  line-height: .4rem;
}

.movie_text {
  width: 5.5rem;
}

#order_list {
  position: relative;
}
</style>
