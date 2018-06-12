<template>
  <div class="movieorder bgf">
    <header class="bgr">
      <a href="javascript:history.back();" class="f24 back back1" @click="clearInter()"></a>
      <h1 class="f40 tc cf">订单确认</h1>
    </header>
    <div class="tc bgf3 f24" style="padding:.2rem 0;">
      <span class="co" id="cutdown" ref="time">18:00</span>
    </div>
    <div class="movie_info m20">
      <div class="bb pd">
        <div class="f32 c33 td li60">{{orderInfo.filmName}}</div>
        <div class="co f26 li40">{{orderInfo.showTime}} ({{orderInfo.language}})</div>
        <div class="f26 c33 li40">{{orderInfo.cinemaName}} {{orderInfo.hallName}}</div>
        <div class="f26 c33 li40 pb">{{orderInfo.seatNo}}</div>
      </div>
      <div class="bb f26 li60 pd pt clearfix pb">
        <p class="f26 fl">票价 :</p>
        <p class="fr co f22 price">{{$route.query.discountPrice}}</p>
      </div>
    </div>
    <div class="movie_tg m20">
      <div class="f26 pd bb li60">退改签须知</div>
      <p class="f24 c99 li40 pd pt">不可改签</p>
      <p class="f24 c99 li40 pd pb">不可退款</p>
    </div>
    <div class="movie_phone">
      <div class="pd f28 li60 bb">手机号 : <input type="text" readonly placeholder="" :value="orderInfo.mobile"></div>
      <div class="f24 c99 pd pt pb li40 m40">购票成功后将收到取票码短信</div>
    </div>
    <div class="movie_price pd">
      <div class="f24 li80">还需支付
        <span class="f40 cr bold price">{{$route.query.discountPrice}}</span> 元</div>
      <a href="javascript:void(0);" class="button cf bgr f32 tc" @click="subInfo()">确认支付</a>
    </div>
    <div class="tc bgf sub_1 f24">
      <span class="co">请仔细核对，出票后不支持退票或更换场次</span>
    </div>
  </div>
</template>

<script>
import _movie from '../../../fetch/movie'
import router from '../../../router'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      orderInfo: {},
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
      _movie.movieInfo({
        orderCode: this.$route.query.orderCode
      }).then(res => {
        console.log(res)
        this.orderInfo = res.result
        this.getTime()
      })
    },
    getTime() {
      let _this = this
      let time = Math.floor((new Date(this.orderInfo.orderTime) - new Date()) / 1000) + 900
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
          router.push({ path: '/index/movie' })
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
        origPrice: this.orderInfo.origPrice,
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
.sub_1 {
  padding: .2rem 0;
}

.sub_1>span {
  padding-left: .4rem;
  background: url("../../../assets/images/movie/order_sub_1.png") left center no-repeat;
  -webkit-background-size: .25rem;
  background-size: .25rem;
}

.li60 {
  line-height: .6rem;
}

.li40 {
  line-height: .4rem;
}

.li80 {
  line-height: .8rem;
}

.bb {
  border-bottom: 1px solid #dedfe0;
}

.pb {
  padding-bottom: .1rem;
}

.pt {
  padding-top: .1rem;
}

.m20 {
  border-bottom: .2rem solid #f6f6f6;
}

.m40 {
  border-bottom: .4rem solid #f6f6f6;
}
</style>
