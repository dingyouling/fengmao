<template>
  <div class="trains">
    <div v-show='isShow'>
      <header class="trains-color cf">
        <router-link to="/index" class="f24 back back1"></router-link>
        <h1 class="f40 tc">火车票</h1>
      </header>
      <div class="pd trains_wrap">
        <div>
          <img src="../../assets/images/trains/trains_banner.png" >
        </div>
        <div class="trains_con bgf">
          <!-- 出发地、目的地 -->
          <div class="trains_site clearfix">
            <router-link class="fl bdb" :to="{ name: '火车站', params: { stationType: 'fromStation=' + fromStation, x: 'x=' + toStation }}">
              <div class="f24 c8e">出发地</div>
              <div class="f44">{{fromStation}}</div>
            </router-link>
            <router-link class="fr bdb" :to="{ name: '火车站', params: { stationType: 'toStation=' + toStation }}">
              <div class="c8e f24 tr">目的地</div>
              <div class="f44 tr">{{toStation}}</div>
            </router-link>
            <div class="trains_site_change" @click="exchangeStation">
              <img src="../../assets/images/trains/trains_icon04@2x.png" alt="">
            </div>
          </div>
          <!-- 出发日期 -->
          <div class="bdb trains_date">
            <div class="f24 c8e">
              <div>出发日期</div>
            </div>
            <div class="f36">
              <router-link class="clearfix" :to="{ name: '火车日期', params: { nowDate: 'nowDate=' + trainDate.date }}">
                <div class="fl">{{trainDate.date}}</div>
                <div class="fr">{{trainDate.weekDay}}</div>
              </router-link>
            </div>
          </div>
          <!-- 条件筛选 -->
          <div class="clearfix trains_sel">
            <div class="f24 c8e clearfix fl">
              <p class="fl">只看高铁/动车</p>
              <label class="label-switch fr">
                <input type="checkbox">
                <div class="checkbox" @click="isFast=!isFast"></div>
              </label>
            </div>
            <div class="f24 c8e clearfix fr">
              <p class="fl">只看学生票</p>
              <label class="label-switch fr">
                <input type="checkbox">
                <div class="checkbox" @click="isStudents=!isStudents"></div>
              </label>
            </div>
          </div>
          <!-- 确认查询 -->
          <div class="trains_check">
            <a class="trains-color cf tc f32" @click="searchTrains">开始查询</a>
          </div>
          <!-- 行程历史 -->
          <div class="trains_hist">
            <span class="c8e" v-for="(item, index) in initStations" v-if="index<initStations.length-1">{{item}}</span>
            <span @click="clearHis" v-show="clearflag">清除历史</span>
          </div>
        </div>
      </div>
      <Tab></Tab>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from './trains/Tab.vue'
import { mapGetters } from 'vuex'
import router from '../../router'
export default {
  data() {
    return {
      trainsDay: '',
      isFast: false,
      isStudents: false,
      sevenDay: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      clearflag: true,
      trainLines: []
    }
  },
  components: {
    Tab
  },
  computed: {
    ...mapGetters([
      'fromStation',
      'toStation',
      'trainDate',
      'hisFromTo'
    ]),
    isShow() {
      let routeLength = this.$route.path.split('/').length
      return routeLength === 3
    },
    initStations() {
      if (this.hisFromTo !== null && this.hisFromTo !== '') {
        return this.hisFromTo.split(',')
      }
    }
  },
  mounted() {
    this.getNowDate()
    if (localStorage.getItem('historyTrainLine') === null || localStorage.getItem('historyTrainLine').length <= 1) {
      this.clearflag = false
    }
  },
  methods: {
    getNowDate() {
      const nowDate = new Date()
      const year = nowDate.getFullYear()
      var weekDay
      let month = nowDate.getMonth() + 1
      if (month < 10) {
        month = '0' + month
      }
      let day = nowDate.getDate()
      if (day < 10) {
        day = '0' + day
      }
      weekDay = this.sevenDay[nowDate.getDay()]
      this.$store.dispatch('setTrainDate', {date: year + '-' + month + '-' + day, weekDay: weekDay})
    },
    exchangeStation() {
      const exStation = this.fromStation
      this.$store.dispatch('setFromStation', this.toStation)
      this.$store.dispatch('setToStation', exStation)
    },
    searchTrains() {
      // 缓存历史记录
      var trainLine = this.fromStation + '-' + this.toStation
      var cacheTrainLine = ''
      var cacheTrainLineStr = localStorage.getItem('historyTrainLine')
      if (cacheTrainLineStr !== null && cacheTrainLineStr !== '') {
        cacheTrainLine = cacheTrainLineStr
      }
      if ((',' + cacheTrainLine + ',').indexOf(',' + trainLine + ',') < 0) {
        cacheTrainLine = trainLine + ',' + cacheTrainLine
      }
      if (cacheTrainLine.substring(0, cacheTrainLine.length - 1).split(',').length > 5) {
        cacheTrainLine = cacheTrainLine.substring(cacheTrainLine.indexOf(',') + 1, cacheTrainLine.length)
      }
      this.clearflag = true
      localStorage.setItem('historyTrainLine', cacheTrainLine)
      this.$store.dispatch('saveFromTo', cacheTrainLine)
      let trainsInfo = {
        fromStation: this.fromStation,
        toStation: this.toStation,
        trainDate: this.trainDate.date,
        weekDay: this.trainDate.weekDay,
        ticketType: this.isStudents ? 2 : 1,
        isFast: this.isFast ? 2 : 1
      }
      this.$store.dispatch('saveTrainData', trainsInfo)
      router.push(this.$route.path + '/trainsList')
    },
    clearHis() {
      localStorage.removeItem('historyTrainLine')
      this.clearflag = false
      this.$store.dispatch('saveFromTo', '')
    }
  }
}
</script>

<style scoped>
.trains{
  height: 100%;
}
::-webkit-scrollbar{height:0!important}
.pd{
  line-height: .5rem;
}
.label-switch {
  display: inline-block;
  vertical-align: middle;
  width: .8rem;
  border-radius: 0.25rem;
  height: .5rem;
  position: relative;
  cursor: pointer;
  -webkit-align-self: center;
  align-self: center;
  margin: .25rem 0 0 .2rem;
}
.label-switch .checkbox {
  width: .8rem;
  border-radius: 0.25rem;
  height: .5rem;
  background: #e5e5e5;
  z-index: 0;
  margin: 0;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  border: none;
  cursor: pointer;
  position: relative;
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
}
.label-switch .checkbox:before {
  content: ' ';
  position: absolute;
  left: 0.02rem;
  top: 0.02rem;
  width:.76rem;
  border-radius: 0.25rem;
  height:.46rem;
  background: #fff;
  z-index: 1;
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.label-switch .checkbox:after {
  content: ' ';
  height: .46rem;
  width: .46rem;
  border-radius: 1.4rem;
  background: #fff;
  position: absolute;
  z-index: 2;
  top: 0.02rem;
  left: 0.02rem;
  box-shadow: 0 0.01rem 0.03rem rgba(0, 0, 0, 0.4);
  -webkit-transform: translateX(0px);
  transform: translateX(0px);
  -webkit-transition-duration: 300ms;
  transition-duration: 300ms;
}
.label-switch input[type="checkbox"]:checked + .checkbox {
    background: #03a9f4;
}
.label-switch input[type="checkbox"] {
  display: none;
}
.label-switch input[type="checkbox"]:checked + .checkbox:before {
  -webkit-transform: scale(0);
  transform: scale(0);
}
.label-switch input[type="checkbox"]:checked + .checkbox:after {
  -webkit-transform: translateX(.29rem);
  transform: translateX(.29rem);
}
.trains_site{
  position: relative;
}
.trains_site_change{
  width:2rem;
  height:1.5rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform:translateX(-50%);
  -webkit-transform:translateX(-50%);
}
.trains_site img{
  width: .41rem;
  height: .41rem;
  margin:.5rem auto;
}
.trains_site .f44{
  line-height: .6rem;
  margin-bottom: .2rem;
  height:.6rem;
}
.trains_wrap > div{
  margin:.3rem 0;
}
.trains_con{
  box-shadow: 2px 2px 5px #b4e0f8;
  padding: .3rem;
  border-radius: 10px;
}
.trains_site > a{
  display: block;
  width: 40%;
}
.bdb{
  border-bottom: solid #dedfe0 1px;
}
.trains_date{
  padding: .3rem 0;
}
.trains_sel p{
  line-height: 1rem;
}
.trains_check a{
  display: block;
  height: .8rem;
  width: 6rem;
  margin: .2rem auto .5rem;
  line-height: .8rem;
  border-radius: .4rem;
}
.trains_hist{
  height: .5rem;
  position: relative;
  width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}
.trains_hist > span{
  margin-right: .3rem;
}
</style>