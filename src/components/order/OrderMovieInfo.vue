<template>
  <div class="ordermoviein bgf3">
    <header class="bgr cf">
      <a href="javascript:history.back();" class="f24 back back1" @click="clearInter()"></a>
      <h1 class="f40 tc" v-if="$route.query.orderStatus == 1 || $route.query.orderStatus == 6">支付订单</h1>
      <h1 class="f40 tc" v-else>电影票详情</h1>
    </header>
    <div class="content">
      <div class="clearfix movie_ti bgf">
        <div class="fl movie_img1">
          <img :src="dataInfo.poster" alt="">
        </div>
        <div class="fl f22 movie_text c66">
          <div class="f32 bold">
            <span>{{dataInfo.filmName}}</span>
            <span class="f20">({{dataInfo.language}})</span>
          </div>
          <div>{{dataInfo.cinemaName}}--{{dataInfo.hallName}}</div>
          <div>{{dataInfo.seatNo}}</div>
          <div class="co">{{dataInfo.showTime}}</div>
        </div>
      </div>

      <div class="f28 bgf pd c66" id="ticketNum" v-show="$route.query.orderStatus == 5">
        <div>取票号：{{dataInfo.printCode}}</div>
        <div>验证码：{{dataInfo.verifyCode}}</div>
        <div>取票点：影院取票</div>
      </div>

      <div class="bgf pd tc">
        <div class="f24" id="pay_time" v-show="$route.query.orderStatus == 1">
          <div>支付剩余时间</div>
          <div ref="time"></div>
        </div>
        <div class="f28" id="pay_info">
          <div>影票总价：
            <span class="bold">{{dataInfo.origPrice}}元</span>
          </div>
          <div v-show="$route.query.orderStatus == 5">实际支付：
            <span class="bold">{{dataInfo.totalPrice}}元</span>
          </div>
          <div>订单编号：
            <span class="bold">{{$route.query.orderCode}}</span>
          </div>
          <div v-show="dataInfo.orderDiscountAmount > 0">优惠券抵扣：
            <span class="bold">{{dataInfo.orderDiscountAmount}}元</span>
          </div>
          <div>手机号码：
            <span class="bold">{{dataInfo.mobile}}</span>
          </div>
        </div>
      </div>
      <div class="f36 bgf pd">
        <div>
          <a :href="'tel:'+dataInfo.tel" class="phone">
            <div class="fl bold">{{dataInfo.cinemaName}}</div>
            <div class="fr"></div>
          </a>
        </div>
        <div id="address" class="f32 address" style="height: auto;line-height: .5rem;">{{dataInfo.address}}</div>
      </div>
      <div class="pd" style="margin-top:.5rem;">
        <p class="button bgd f32 cf tc" v-show="$route.query.orderStatus == 6">已取消</p>
        <p class="button bgr f32 cf tc" v-show="$route.query.orderStatus == 1" @click="subInfo">立即支付</p>
      </div>
    </div>
  </div>
</template>

<script>
import _order from '../../fetch/order'
import router from '../../router'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      dataInfo: [],
      t: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions([
      'savePayData'
    ]),
    init() {
      _order.movieOrderInfo({
        orderCode: this.$route.query.orderCode
      }).then(res => {
        this.dataInfo = res.result
        if (this.$route.query.orderStatus === 1) {
          this.time()
        }
      })
    },
    time() {
      let _this = this
      let time = Math.floor((new Date(this.dataInfo.orderTime) - new Date()) / 1000) + 900
      let m = Math.floor(time / 60)
      let s = Math.floor(time % 60)
      this.$refs.time.innerHTML = m + ':' + s
      clearInterval(_this.t)
      _this.t = setInterval(function() {
        m = Math.floor(time / 60)
        s = Math.floor(time % 60)
        time--
        _this.$refs.time.innerHTML = m + ':' + s
        if (time < 0) {
          clearInterval(_this.t)
          console.log('跳转')
          router.push({ path: '/order/movie' })
        }
      }, 1000)
    },
    clearInter() {
      clearInterval(this.t)
    },
    subInfo() {
      this.clearInter()
      let data = {
        typeClass: 'recharge',
        origPrice: this.dataInfo.origPrice,
        discountPrice: this.$route.query.discountPrice,
        sonBusiType: 9,
        orderCode: this.$route.query.orderCode
      }
      console.log(data)
      this.savePayData(data)
      router.push({ path: '/pay' })
    }
  }
}
</script>

<style scoped>
.ordermoviein {
  height: 100%;
}

.movie_ti .f20 {
  font-weight: normal;
}

.movie_img1 img {
  width: 1.3rem;
  height: 1.7rem;
}

.content {
  line-height: .5rem;
}

.content>div {
  padding: .3rem;
  margin-bottom: .1rem;
}

.movie_img1 {
  margin-right: .3rem;
}

.content .f36 {
  padding: 0 .3rem;
}

.content .f36>div {
  height: .8rem;
  line-height: .8rem;
}

.content .f36>div:first-child {
  border-bottom: 1px solid #e5e5e5;
}

.phone .fr {
  border-left: solid 1px #ccc;
  width: 1rem;
  height: .5rem;
  margin-top: .2rem;
  background: url(../../assets/images/movie/phone.png) center no-repeat;
  -webkit-background-size: .37rem .37rem;
  background-size: .37rem .37rem;
}

.address {
  background: url(../../assets/images/movie/address.png) left center no-repeat;
  padding-left: .4rem;
  -webkit-background-size: .19rem .31rem;
  background-size: .19rem .31rem;
}

.address div {
  background: url(../../assets/images/movie/right.png) right center no-repeat;
  -webkit-background-size: .1rem .19rem;
  background-size: .1rem .19rem;
}
</style>
