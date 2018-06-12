<template>
  <div class="movie">
    <div v-show="isShow">
      <header class="bgr cf">
        <router-link to="/index" class="f24 back back1"></router-link>
        <router-link to="/index/movie/moviecity" class="f40 sel cf f26" id="city-name">{{city.name}}</router-link>
        <h1 class="f28 tc gas_recharge_hd">
          <ul class="clearfix">
            <li class="fl" :class="{active:type == 'movie'}" @click="type = 'movie'">影片</li>
            <li class="fl" :class="{active:type == 'cinema'}" @click="type = 'cinema'">影院</li>
          </ul>
        </h1>
      </header>
      <div class="content" v-show="type == 'movie'">
        <div class="f28 cr tc bgf film-type">
          <ul class="clearfix">
            <li class="fl" :class="{active:isHot}" @click="changeType(true)">正在热映</li>
            <li class="fl" :class="{active:!isHot}" @click="changeType(false)">即将上映</li>
          </ul>
        </div>
        <div ref="filmList" class="bgf3" style="position:relative;">
          <!--热映-->
          <Scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
            <div class="movie_solding">
              <div class="clearfix movie_ti bgf" v-show="isHot" v-for="(val,index) in hotDataList" :key="index">
                <router-link :to="{ path: '/index/movie/movieinfo', query: val}">
                  <div class="fl movie_img1"><img v-if="val.poster!=''" :src="val.poster" alt=""><img v-else src="../../assets/images/movie/movie_default.jpg" alt=""></div>
                  <div class="fl f24 movie_text c66">
                    <div class="f32 bold">
                      <span>{{val.name}}</span>
                      <span class="f20 bgt cf">{{val.showTypes.substr(0,9)}}</span>
                    </div>
                    <div>{{val.type}}</div>
                    <div class="co">{{val.intro.substr(0,16)}} . . .</div>
                  </div>
                  <a class="movie_presold f24 cb bold">购票</a>
                </router-link>
              </div>
              <div class="clearfix movie_ti bgf" v-show="!isHot" v-for="(val,index) in willDataList" :key="index">
                <div class="fl movie_img1"><img :src="val.poster" alt=""></div>
                <div class="fl f24 movie_text c66">
                  <div class="f32 bold">
                    <span>{{val.name}}</span>
                    <span class="f20 bgt cf">{{val.showTypes.substr(0,16)}}</span>
                  </div>
                  <div>{{val.type}}</div>
                  <div class="co">{{val.intro.substr(0,16)}} . . .</div>
                </div>
                <a class="movie_presold f24 cb bold">购票</a>
              </div>
            </div>
          </Scroll>
        </div>
      </div>
      <div class="content" style="padding-top: .9rem;" v-show="type == 'cinema'">
        <div class="movie_sel_all">
          <div class="f26 movie_sel bgf c66">
            <div class="tc" id="city_area" @click="getCounty">{{getCountyData.chooseIndex>-1?getCountyData.dataList[getCountyData.chooseIndex].countyName:'区域'}}</div>
          </div>
          <div class="mask" v-show="getCountyData.isShow">
            <div class="movie_sel_li f24 bgf">
              <div id="city-area-list" style="height: 8rem; overflow: auto;">
                <div :class="{cr:getCountyData.chooseIndex == -1}" @click="chooseCounty('-1')">全市</div>
                <div v-for="(val,index) in getCountyData.dataList" :key="index" :class="{cr:getCountyData.chooseIndex == index}" @click="chooseCounty(index)">{{val.countyName}}</div>
              </div>
            </div>
          </div>
        </div>
        <div id="city_cinema" ref="cinemaList" class="bgf3" style="position:relative;">
          <Scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
            <div class="f24 c66 pd bgf movie_ti" v-for="(val,index) in cinemaDataList" :key="index" @click="toCinemaInfo(val)">
              <div class="f30 c00">{{val.name}}</div>
              <div class="clearfix">
                <span class="cr fl">{{val.minPrice}}元起</span>
                <span class="fr">{{(val.distance / 1000).toFixed(2)}}m</span>
              </div>
              <div>{{val.address}}</div>
            </div>
          </Scroll>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Scroll from '@/components/Scroll'
import _movie from '../../fetch/movie'
import { alert } from '../../util/tool'
import router from '../../router'

export default {
  components: {
    Scroll
  },
  data() {
    return {
      type: 'movie',
      isHot: true,
      city: {
        name: '上海市',
        pin: 'shanghaishi',
        regionId: '310100'
      },
      scrollData: {
        noFlag: false // 暂无更多数据显示
      },
      getFilmParams: {
        cinemaCode: '',
        lastFilmId: 0,
        queryType: 1
      },
      getCinemaParams: {
        cityCode: '310100',
        countyCode: '',
        filmCode: '',
        latitude: 31.230416,
        longitude: 121.473701,
        page: 1,
        pageSize: 10
      },
      cinemaDataList: [],
      hotDataList: [],
      willDataList: [],
      isLast: false,
      getCountyData: {
        dataList: [],
        chooseIndex: -1,
        isShow: false
      }
    }
  },
  computed: {
    ...mapGetters([
      'chooseItem'
    ]),
    isShow() {
      if (this.$route.path === '/index/movie') {
        return true
      }
      return false
    }
  },
  watch: {
    chooseItem(data) {
      this.init()
    },
    type(data) {
      if (data === 'cinema') {
        this.getCinemaData()
      }
    },
    $route() {
      this.init()
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (this.$route.query.filmCode) {
        this.getCinemaParams.filmCode = this.$route.query.filmCode
        this.type = 'cinema'
      } else {
        this.type = 'movie'
        this.getCinemaParams.filmCode = ''
      }
      if (this.chooseItem.regionId) {
        this.city = this.chooseItem
      }
      this.getHotFilmData()
      this.$refs.filmList.style.height = document.documentElement.clientHeight - this.$el.querySelector('header.bgr').clientHeight - this.$el.querySelector('.film-type').clientHeight - 2 + 'px'
      this.$refs.cinemaList.style.height = document.documentElement.clientHeight - this.$el.querySelector('header.bgr').clientHeight - this.$el.querySelector('.film-type').clientHeight - 2 + 'px'
      _movie.getCityList({
        cityCode: this.city.regionId
      }).then(res => {
        this.getCountyData.dataList = res.result
      })
      this.getCountyData.isShow = false
    },
    changeType(aa) {
      this.hotDataList = []
      this.willDataList = []
      this.getFilmParams.lastFilmId = 0
      this.isHot = aa
      if (aa) {
        this.getHotFilmData()
      } else {
        this.getWillFilmData()
      }
    },
    getHotFilmData() {
      this.getFilmParams.queryType = 1
      this.isLast = false
      _movie.getFilmList(this.getFilmParams).then(res => {
        for (let i = 0; i < res.result.length; i++) {
          this.hotDataList.push(res.result[i])
        }
        if (res.result.length === 0) {
          this.isLast = true
          alert('暂无更多')
        }
      })
    },
    getWillFilmData() {
      this.getFilmParams.queryType = 2
      this.isLast = false
      _movie.getFilmList(this.getFilmParams).then(res => {
        for (let i = 0; i < res.result.length; i++) {
          this.willDataList.push(res.result[i])
        }
        if (res.result.length === 0) {
          this.isLast = true
          alert('暂无更多')
        }
      })
    },
    getCinemaData() {
      let _this = this
      navigator.geolocation.getCurrentPosition(function(pos) {
        _this.getCinemaParams.latitude = pos.coords.latitude
        _this.getCinemaParams.longitude = pos.coords.longitude
      })
      _this.isLast = false
      _this.getCinemaParams.cityCode = _this.city.regionId
      _movie.getCinemaList(_this.getCinemaParams).then(res => {
        for (let i = 0; i < res.result.length; i++) {
          _this.cinemaDataList.push(res.result[i])
        }
        if (res.result.length === 0) {
          _this.isLast = true
          alert('暂无更多')
        }
      })
    },
    onRefresh(done) {      // 下拉刷新
      if (this.type === 'movie') {
        this.hotDataList = []
        this.willDataList = []
        this.getFilmParams.lastFilmId = 0
        if (this.isHot) {
          this.getHotFilmData()
        } else {
          this.getWillFilmData()
        }
      } else if (this.type === 'cinema') {
        this.cinemaDataList = []
        this.getCinemaParams.page = 1
        this.getCinemaData()
      }
      done()
    },
    onInfinite(done) {
      if (!this.isLast) {
        if (this.type === 'movie') {
          if (this.isHot) {
            this.getFilmParams.lastFilmId = this.hotDataList[this.hotDataList.length - 1].filmId
            this.getHotFilmData()
          } else {
            this.getFilmParams.lastFilmId = this.willDataList[this.willDataList.length - 1].filmId
            this.getWillFilmData()
          }
        } else if (this.type === 'cinema') {
          this.getCinemaParams.page++
          this.getCinemaData()
        }
      } else {
        alert('暂无更多')
      }
      done()
    },
    getCounty() {
      _movie.getCityList({
        cityCode: this.getCinemaParams.cityCode
      }).then(res => {
        this.getCountyData.dataList = res.result
      })
      this.getCountyData.isShow = true
    },
    chooseCounty(index) {
      this.cinemaDataList = []
      this.getCinemaParams.page = 1
      this.getCountyData.chooseIndex = index
      if (index === '-1') {
        this.getCinemaParams.countyCode = ''
      } else {
        this.getCinemaParams.countyCode = this.getCountyData.dataList[this.getCountyData.chooseIndex].countyCode
      }
      this.getCinemaData()
      this.getCountyData.isShow = false
    },
    toCinemaInfo(val) {
      let data = {
        cinemaId: val.code,
        filmCode: this.getCinemaParams.filmCode,
        cinemaName: val.name,
        cinemaAddress: val.address
      }
      router.push({ path: '/index/movie/cinemainfo', query: data })
    }
  }
}
</script>

<style scoped>
.movie {
  background: #f3f3f3;
}

.movie_ti {
  padding: 0.3rem;
  line-height: .4rem;
}

.sel {
  padding-right: .2rem;
  background: url(../../assets/images/movie/solding.png) right center no-repeat;
  -webkit-background-size: .14rem .09rem;
  background-size: .14rem .09rem;
}

.gas_recharge_hd ul {
  overflow: hidden;
  width: 3.84rem;
  height: .58rem;
  line-height: .58rem;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: .15rem;
}

.gas_recharge_hd ul li {
  width: 50%;
  color: #fff;
  background-color: #c1342f;
}

.gas_recharge_hd ul li.active {
  background-color: #fff;
  color: #c1342f;
}

.content {
  padding-bottom: 0;
}

.content ul {
  width: 6rem;
  margin: 0 auto;
  border-radius: 5px;
  padding: .15rem;
}

.content ul li {
  background: #fff;
  height: .6rem;
  line-height: .6rem;
  width: 50%;
  border: 1px solid #c1342f;
  border-radius: 0 5px 5px 0;
}

.content ul li.active {
  background: #c1342f;
  color: #fff;
}

.content ul li:first-child {
  border-radius: 5px 0 0 5px;
}

.movie_img1 {
  margin-right: .22rem;
}

.movie_img1 img {
  width: 1.15rem;
  height: 1.6rem;
}

.bgt {
  background: #8bb7ce;
  height: .26rem;
  border-radius: 1px;
  padding: 0 .05rem;
}

.movie_ti {
  line-height: .5rem;
  border-top: 1px solid #e5e5e5;
  position: relative;
}

.movie_ti .bold {
  margin-bottom: 0;
}

.movie_presold {
  position: absolute;
  border-radius: 5px;
  border: 1px solid #4587e7;
  height: .5rem;
  padding: 0 .2rem;
  vertical-align: middle;
  right: .3rem;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
}

.movie_solding .movie_presold {
  border: 1px solid #db3c38;
  color: #db3c38;
}

.movie_sel {
  border: 1px solid #e5e5e5;
}

.movie_sel>div {
  line-height: .7rem;
  height: .7rem;
  background: url(../../assets/images/movie/movie_sel.png) 60% center no-repeat;
  -webkit-background-size: .1rem .06rem;
  background-size: .1rem .06rem;
}

.movie_sel_all {
  position: fixed;
  top: .88rem;
  left: 0;
  width: 100%;
  z-index: 100;
}

.movie_sel_li>div>div {
  line-height: .8rem;
  padding-left: .58rem;
  border-bottom: 1px solid #e5e5e5;
}

.mask {
  position: fixed;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  z-index: 100;
  top: 1.58rem;
}
</style>
