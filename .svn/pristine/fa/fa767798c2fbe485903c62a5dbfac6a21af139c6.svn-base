<template>
  <div class="pre-order">
    <div v-show="isShow">
      <header class="bgf">
        <router-link to="/me" class="f24 back"></router-link>
        <h1 class="f40 tc">预购订单</h1>
      </header>
      <div class="line100 clearfix f24 bgf pd" style="position:relative;z-index:99;">
        <div class="fl">共
          <span class="co f28">{{dataList.length}}</span>笔</div>
        <div class="fr">{{beginTime}} 至 {{endTime}}
          <span class="seller co" @click="calendarShow = !calendarShow">筛选</span>
        </div>
      </div>
      <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
        <div class="pd bgf" style="margin-top:-.3rem;position:relative;z-index:98;" v-show="calendarShow">
          <calendar :range="calendar2.range" :zero="calendar2.zero" :lunar="calendar2.lunar" :value="calendar2.value" :begin="calendar2.begin" :end="calendar2.end" @select="calendar2.select" @empty="calendar2.empty"></calendar>
        </div>
      </transition>
      <div class="bgf datalist" style="position:absolute;top:2rem;left:0;width:100%;z-index:0;">
        <router-link :to="'/me/preorder/preorderinfo?giveId='+val.giveId" tag="div" class="pd" v-for="(val,index) in dataList" :key="index">
          <p class="f30">{{val.principal}}元预购
            <span class="f24 co">{{val.totalTimes}}期</span>
          </p>
          <div class="clearfix c8e f24">
            <p class="fl">预购详情: 每月到账{{val.amount}}元</p>
            <p class="fr">{{val.createTime}}</p>
          </div>
        </router-link>
      </div>
      <router-link to="/me/preorder/preorderflow" class="clickflow bgo cf tc f28">查看预购到账流水</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Calendar from '../Calendar'

import _me from '../../fetch/me'

export default {
  data() {
    return {
      beginTime: '2016-8-18',
      endTime: '',
      calendar2: {
        display: '',
        range: true,
        value: [], // 默认日期
        lunar: false, // 显示农历
        zero: true,
        select: (begin, end) => {
          let _this = this
          this.calendar2.value = [begin, end]
          this.calendar2.display = begin.join('/') + ' ~ ' + end.join('/')
          this.beginTime = begin.join('-')
          this.endTime = end.join('-')
          this.getDate()
          let t = setTimeout(function() {
            _this.calendarShow = false
            console.log(111111)
            clearTimeout(t)
          }, 1000)
        },
        empty: (begin) => {
          this.calendar2.value = [begin]
          this.calendar2.display = begin.join('/')
          this.beginTime = begin.join('-')
        }
      },
      calendarShow: false,
      dataList: []
    }
  },
  components: {
    Calendar
  },
  computed: {
    isShow() {
      if (this.$route.path === '/me/preorder') {
        return true
      }
      return false
    }
  },
  created() {
    this.endTime = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
    this.calendar2.value = [[new Date().getFullYear(), (new Date().getMonth() + 1), new Date().getDate()], [new Date().getFullYear(), (new Date().getMonth() + 1), new Date().getDate()]]
  },
  mounted() {
    this.getDate()
  },
  methods: {
    getDate() {
      _me.getPreOrder({
        beginTime: this.beginTime + ' 0:0:0',
        endTime: this.endTime + ' 23:59:59'
      }).then(res => {
        this.dataList = res.result
      })
    }
  }
}
</script>

<style scoped>
.line100 {
  line-height: 1rem;
}

.seller {
  padding: .1rem .2rem;
  border: 1px solid #ff6953;
  border-radius: 1rem;
  margin-left: .1rem;
}

.datalist {
  margin-top: .2rem;
}

.datalist>div {
  padding: .2rem .3rem;
  border-bottom: 1px solid #f3f3f3;
}

.datalist p {
  line-height: .4rem;
}

.datalist p.f30 span {
  padding: .05rem .1rem;
  border-radius: .5rem;
  border: 1px solid #ff6953;
}

.clickflow {
  line-height: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
