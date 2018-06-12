<template>
  <div class="information">
    <div v-show="isShow">
      <header class="bgf">
        <router-link to="/me" class="f24 back"></router-link>
        <h1 class="f40 tc">消息中心</h1>
      </header>
      <div class="content" ref="content">
        <Scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
          <div class="dc" v-for="(val,index) in dataList" :key="index">
            <router-link :to="{path:'/me/information/notice',query:val}" class="ul bgf clearfix" v-if="val.busiType == 0">
              <!-- 系统消息 -->
              <div><img src="../../assets/images/person/information_icon2.png" alt=""></div>
              <div>
                <div class="f32">{{val.title}}</div>
                <div class="clearfix f24 c8e">
                  <div class="fl order_num">{{val.content}}</div>
                  <div class="fl">{{val.time}}</div>
                </div>
              </div>
            </router-link>
            <router-link :to="'/me/preorder/preorderinfo?orderCode='+val.msgSource" class="ul bgf clearfix" v-if="val.busiType == 1">
              <!-- 预购订单 -->
              <div><img src="../../assets/images/person/information_icon1.png" alt=""></div>
              <div>
                <div class="f32">{{val.title}}</div>
                <div class="clearfix f24 c8e">
                  <div class="fl order_num">{{val.content}}</div>
                  <div class="fl">{{val.time}}</div>
                </div>
              </div>
            </router-link>
            <router-link :to="'/order/info?orderCode='+val.msgSource" class="ul bgf clearfix" v-if="val.busiType == 2">
              <!-- 充值订单 -->
              <div><img src="../../assets/images/person/information_icon1.png" alt=""></div>
              <div>
                <div class="f32">{{val.title}}</div>
                <div class="clearfix f24 c8e">
                  <div class="fl order_num">{{val.content}}</div>
                  <div class="fl">{{val.time}}</div>
                </div>
              </div>
            </router-link>
            <router-link :to="'/order/trains/info?returnUrl='+$route.path+'&orderCode='+val.msgSource" class="ul bgf clearfix" v-if="val.busiType == 8">
              <!-- 火车票订单 -->
              <div><img src="../../assets/images/person/information_icon1.png" alt=""></div>
              <div>
                <div class="f32">{{val.title}}</div>
                <div class="clearfix f24 c8e">
                  <div class="fl order_num">{{val.content}}</div>
                  <div class="fl">{{val.time}}</div>
                </div>
              </div>
            </router-link>
          </div>
        </Scroll>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import _me from '../../fetch/me'
import { alert } from '../../util/tool'
import Scroll from '@/components/Scroll'

export default {
  data() {
    return {
      dataList: [],
      isLase: false,
      scrollData: {
        noFlag: false // 暂无更多数据显示
      },
      subInfo: {
        msgType: 1,
        lastMsgId: 0
      }
    }
  },
  computed: {
    isShow() {
      if (this.$route.path === '/me/information') {
        return true
      }
      return false
    }
  },
  components: {
    Scroll
  },
  mounted() {
    this.$refs.content.style.height = document.documentElement.clientHeight - document.querySelector('header.bgf').clientHeight + 'px'
    this.getData()
  },
  methods: {
    getData() {
      this.isLast = false
      _me.information(this.subInfo).then(res => {
        for (var i = 0; i < res.result.length; i++) {
          this.dataList.push(res.result[i])
        }
        if (res.result.length === 0) {
          this.isLast = true
          alert('暂无更多')
        }
      })
    },
    onRefresh(done) {      // 下拉刷新
      this.subInfo.lastMsgId = 0
      this.dataList = []
      this.getData()
      done()
    },
    onInfinite(done) {
      if (!this.isLast) {
        this.subInfo.lastMsgId = this.dataList[this.dataList.length - 1].msgId
        this.getData()
      } else {
        alert('暂无更多')
      }
      done()
    }
  }
}
</script>

<style scoped>
.content {
  position: relative;
}

.content .dc {
  position: relative;
  margin: .2rem 0;
  position: relative;
  top: 0;
  left: 0;
}

.dc a {
  line-height: .5rem;
  display: block;
  padding: .3rem;
  display: flex;
}

.ul>div:first-child {
  width: .8rem;
  margin-right: .2rem;
}

.ul img {
  width: .8rem;
  height: .8rem;
  margin-right: .2rem;
}

.order_num {
  width: 3.2rem;
  height: .4rem;
  overflow: hidden;
}

.del {
  height: 100%;
  width: 1rem;
  position: absolute;
  top: 0;
  right: -1rem;
  padding: .5rem 0;
  line-height: .4rem;
}
</style>
