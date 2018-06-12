<template>
  <div class="couponinfo">
    <header class="bgf">
      <a href="javascript:history.back();" class="f24 back"></a>
      <h1 class="f40 tc">我的卡券</h1>
    </header>
    <div class="contain">
      <div class="box">
        <div class="box_logo"><img src="../../assets/images/coupon/icon_coupon_iv.png" alt=""></div>
        <p class="f40 c33 tc">{{$route.query.couponName}}</p>
        <div class="box_time">
          <p class="f28 c8e tc">有效期</p>
          <p class="f28 c8e tc">{{$route.query.beginTime}}</p>
          <p class="f28 c8e tc">至</p>
          <p class="f28 c8e tc">{{$route.query.expireTime}}</p>
          <router-link :to="busiTypeUrl[$route.query.busiType]" class="f32 cf tc">立即使用</router-link>
        </div>
        <div class="box_notice">
          <p class="f28 c8e">注意事项 : </p>
          <p class="f28 c8e">仅限{{busiTypeStr[$route.query.busiType]}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      busiTypeStr: {
        '3,2': '话费流量',
        '2': '话费流量',
        '3': '话费流量',
        '4': '油卡充值',
        '5': '生活缴费',
        '6': '游戏点卡充值',
        '7': '电影票',
        '8': '火车票'
      },
      busiTypeUrl: {
        '3,2': '/index/phone/hf',
        '2': '/index/phone/hf',
        '3': '/index/phone/ll',
        '4': '/index/oil/zsh',
        '5': '/index/wec',
        '6': '/index/game',
        '7': '/index/movie',
        '8': '/index/trains'
      }
    }
  },
  mounted() {
    console.log(this.$route.query)
  }
}
</script>
  
<style scoped>
.couponinfo {
  background: #fb5c5f;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 1rem;
}

.box {
  width: 6.9rem;
  height: 8.9rem;
  background: url("../../assets/images/coupon/coupon_bg.png") no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  margin: 1rem auto;
  position: relative;
  padding-top: 1px;
}

.box_logo {
  width: 1.4rem;
  height: 1.4rem;
  position: absolute;
  top: -.7rem;
  left: 50%;
  margin-left: -.7rem;
  border: 1px solid #dedfe0;
  border-radius: 50%;
  background-color: #fff;
}

.box_logo img {
  width: .7rem;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.box .f40 {
  margin-top: 1.3rem;
}

.box_time {
  margin-top: 1.4rem;
}

.box_time p {
  line-height: .4rem;
}

.box_time a {
  width: 2.5rem;
  line-height: .6rem;
  border-radius: 5px;
  background: #fb5c5f;
  display: block;
  margin: .8rem auto 0;
}

.box_notice {
  margin-top: .7rem;
  margin-left: .2rem;
}

.box_notice p:nth-of-type(2) {
  margin-top: .2rem;
  margin-left: .5rem;
}
</style>
  
