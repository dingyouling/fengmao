<template>
  <div class="coupon">
    <div v-show="isShow">
      <header class="bgf">
        <router-link :to="returnUrl" class="f24 back"></router-link>
        <h1 class="f40 tc">我的卡券</h1>
      </header>
      <div class="top">
        <div class="pd20" v-show="isUn">
          <Scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
            <div href="javascript:;" class="box pd" v-for="(val,index) in validDataList" :key="index" @click="subInfo(val)">
              <div class="box_top pd clearfix">
                <div class="box_left fl">
                  <img src="../../assets/images/coupon/icon_coupon_iv.png" alt="">
                  <p class="f24 c8e tc">抵用券</p>
                </div>
                <div class="box_cen fl">
                  <p class="f32 c33">{{val.couponName}}</p>
                  <p class="c8e f24">限{{val.beginTime}}至</p>
                  <p class="c8e f24">{{val.expireTime}}使用</p>
                </div>
                <div class="box_right fr">
                  <p class="f40 tr">￥{{val.discountAmount}}</p>
                  <p class="f20 tr c8e">满{{val.useStartAmount}}可用</p>
                </div>
              </div>
              <div class="box_mid"></div>
              <div class="box_bottom c8e f28 pd">限{{busiTypeStr[val.busiType]}}使用</div>
            </div>
          </Scroll>
        </div>
        <div v-show="!isUn">
          <Scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
            <div v-for="(val,index) in unvalidDataList" :key="index" class="box pd" :class="val.useTime == '' ? 'isExpire' : 'isUse'" @click="subInfo(val)">
              <div class="box_top pd clearfix">
                <div class="box_left fl"><img src="../../assets/images/coupon/gray@2x.png" alt="">
                  <p class="f24 c8e tc">抵用券</p>
                </div>
                <div class="box_cen fl">
                  <p class="f32 c33">{{val.couponName}}</p>
                  <p class="c8e f24">限{{val.beginTime}}至</p>
                  <p class="c8e f24">{{val.expireTime}}使用</p>
                </div>
                <div class="box_right fr">
                  <p class="f40 tr" style="color:#8e8e8e;">￥{{val.discountAmount}}</p>
                  <p class="f20 tr c8e">满{{val.useStartAmount}}可用</p>
                </div>
              </div>
              <div class="box_mid"></div>
              <div class="box_bottom c8e f28 pd">限{{busiTypeStr[val.busiType]}}使用</div>
            </div>
          </Scroll>
        </div>
        <router-link :style="{opacity: isUnUrl ? 1 : 0 }" to="/me/coupon/unvalid" id="noCoupon" class="tc c8e">查看无效卡券</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import _me from '../../fetch/me'
import Scroll from '@/components/Scroll'
import { alert } from '../../util/tool'
import router from '../../router'

export default {
  components: {
    Scroll
  },
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
      validDataList: [],
      unvalidDataList: [],
      isUn: true,
      returnUrl: '/me',
      data: {
        page: 1,
        busiType: 0,
        couponStatus: 1,
        useStatus: 0,
        sceneId: 0,
        pageSize: 10
      },
      scrollData: {
        noFlag: false // 暂无更多数据显示
      },
      isLast: false,
      isUnUrl: false
    }
  },
  watch: {
    $route(to, from) {
      this.validDataList = []
      this.unvalidDataList = []
      this.getType(to)
    }
  },
  mounted() {
    this.getType(this.$route)
    if (this.$route.query.busiType !== '8') {
      this.returnUrl = '/pay'
      this.isUnUrl = false
      this.data.busiType = this.$route.query.busiType
    } else if (this.$route.query.busiType === '8') {
      this.returnUrl = '/index/trains/payTrains?orderCode=' + this.$route.query.orderCode + '&createTime=' + this.$route.query.createTime + '&payBusiType=' + this.$route.query.payBusiType
      this.isUnUrl = false
      this.data.busiType = this.$route.query.busiType
    }
  },
  computed: {
    isShow() {
      console.log(this.$route.path.split('/').length)
      if (this.$route.path.split('/').length === 4) {
        return true
      }
      return false
    }
  },
  methods: {
    getType(routers) {
      this.data.page = 1
      if (routers.params.type === 'unvalid') {
        this.isUn = false
        this.isUnUrl = false
        this.data.couponStatus = 2
        this.unvalidData()
        this.returnUrl = '/me/coupon/valid'
        this.$el.querySelector('.top').style.height = (document.documentElement.clientHeight - this.$el.querySelector('header.bgf').clientHeight - 10) + 'px'
      } else if (routers.params.type === 'valid') {
        this.isUn = true
        this.isUnUrl = true
        this.data.couponStatus = 1
        this.validData()
        this.returnUrl = '/me'
        this.$el.querySelector('.top').style.height = (document.documentElement.clientHeight - this.$el.querySelector('header.bgf').clientHeight - this.$el.querySelector('#noCoupon').clientHeight - 10) + 'px'
      }
    },
    validData() {
      this.isLast = false
      _me.getCouponList(this.data).then(res => {
        for (var i = 0; i < res.result.length; i++) {
          this.validDataList.push(res.result[i])
        }
        if (res.result.length === 0) {
          this.isLast = true
          alert('暂无更多')
        }
      })
    },
    unvalidData() {
      this.isLast = false
      _me.getCouponList(this.data).then(res => {
        for (var i = 0; i < res.result.length; i++) {
          this.unvalidDataList.push(res.result[i])
        }
        if (res.result.length === 0) {
          this.isLast = true
          alert('暂无更多')
        }
      })
    },
    onRefresh(done) {      // 下拉刷新
      this.data.page = 1
      this.validDataList = []
      this.unvalidDataList = []
      if (this.isUn) {
        this.validData()
      } else {
        this.unvalidData()
      }
      done()
    },
    onInfinite(done) {
      if (!this.isLast) {
        this.data.page++
        if (this.isUn) {
          this.validData()
        } else {
          this.unvalidData()
        }
      } else {
        alert('暂无更多')
      }
      done()
    },
    subInfo(item) {
      if (this.$route.query.busiType) {
        if (this.$route.query.busiType === '8') {
          router.push({path: '/index/trains/payTrains', query: {orderCode: this.$route.query.orderCode, createTime: this.$route.query.createTime, payBusiType: this.$route.query.payBusiType, discountAmount: item.discountAmount, recId: item.recId}})
        } else {
          this.$store.dispatch('setCoupon', item)
          router.push({ path: '/pay' })
        }
      } else {
        router.push({ path: '/me/coupon/valid/couponinfo', query: item })
      }
    }
  }
}
</script>

<style scoped>
.top {
  height: 100%;
  position: relative;
}

.coupon {
  height: 100%;
  background: #f3f3f3;
}

#noCoupon {
  display: block;
  line-height: .6rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 100%;
  z-index: 101;
}

.box {
  display: block;
  padding-bottom: .2rem;
  position: relative;
}

.box_top {
  height: 1.8rem;
  border-radius: 5px 5px 0 0;
  background-color: #fff;
  padding-top: 1px;
}

.box_left {
  width: .8rem;
}

.box_left img {
  width: .6rem;
  margin: .6rem auto .14rem;
  display: block;
}

.box_cen {
  max-width: 3.4rem;
  margin-left: .62rem;
}

.box_cen .f32 {
  margin-top: .4rem;
}

.box_cen .f24:nth-of-type(2) {
  margin-top: .2rem;
}

.box_cen .f24 {
  line-height: .34rem;
}

.box_right p:nth-of-type(1) {
  color: #ff1744;
}

.box_right {
  margin-top: .7rem;
}

.box_mid {
  height: .56rem;
  background: url("../../assets/images/coupon/coupon_line.png") no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
}

.box_bottom {
  height: .6rem;
  border-radius: 0 0 5px 5px;
  background-color: #fff;
  line-height: .36rem;
}

.isExpire:after {
  width: 1.3rem;
  height: 1.3rem;
  background: url("../../assets/images/coupon/expire.png") no-repeat center;
  -webkit-background-size: cover;
  background-size: cover;
  position: absolute;
  right: .6rem;
  bottom: .1rem;
  content: "";
}

.isUse:after {
  width: 1.3rem;
  height: 1.3rem;
  background: url("../../assets/images/coupon/user.png") no-repeat center;
  -webkit-background-size: cover;
  background-size: cover;
  position: absolute;
  right: .6rem;
  bottom: .1rem;
  content: "";
}
</style>
