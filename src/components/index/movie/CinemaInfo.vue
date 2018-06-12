<template>
  <div class="cinemainfo bgf">
    <header class="bgr">
      <a href="javascript:history.back();" class="f24 back back1"></a>
      <h1 class="f40 tc cf cinema_name">{{$route.query.cinemaName}}</h1>
    </header>
    <div class="pd area_info">
      <div class="f32">
        <span class="cinema_name">{{$route.query.cinemaName}}</span>
        <span class="co" id="cinema_score"></span>
      </div>
      <div class="f24 c66" id="cinema_address">{{$route.query.cinemaAddress}}</div>
    </div>

    <!--影片轮播开始-->
    <div class="pd bgf3">
      <swiper :options="swiperOption" ref="mySwiper" class="banner">
        <!-- 这部分放你要渲染的那些内容 -->
        <swiper-slide v-for="(val,index) in filmList" :key="index">
          <img v-if="val.poster.indexOf('.')>-1" :src="val.poster">
          <img v-else src="../../../assets/images/movie/movie_default.jpg" dc="11">
        </swiper-slide>
      </swiper>
    </div>
    <!--影片轮播结束-->

    <div class="info">
      <div class="sj"></div>
      <div class="movie_title f30 tc c33 bb">{{filmList[chooseFilmIndex].name}}</div>
      <div class="movieDate">
        <ul class="time-line bb">
          <li class="showday" v-for="(val,index) in cinemaSort" :key="index" :class="{active:chooseCinemaIndex == index}" @click="chooseCinemaIndex = index">
            <a>{{val.name}}</a>
          </li>
        </ul>
      </div>
      <div class="info_box" v-if="cinemaSort.length>0">
        <div class="info_item pd bb" v-for="(val,index) in cinemaSort[chooseCinemaIndex].arr" :key="index">
          <div class="info_item_1 fl">
            <div class="info_item_1_t">
              <p class="f34 fl">{{new Date(val.showTime).getHours()}}:{{new Date(val.showTime).getMinutes()>9?new Date(val.showTime).getMinutes():'0'+new Date(val.showTime).getMinutes()}}</p>
              <p class="f22 fl">{{val.language}}</p>
              <p class="f34 cr fl">{{val.discountPrice}}元
                <span class="f20 cutOff">
                  <span class="bgo cf">优惠</span>{{(val.origPrice-val.discountPrice).toFixed(2)}}元</span>
              </p>
            </div>
            <div class="c66 f22 info_item_1_b">
              <p class="fl">{{val.duration}}分钟</p>
              <p class="fl">{{val.hallName}}</p>
              <p class="fl middle_line">影院价：{{val.stdPrice}}元</p>
            </div>
          </div>
          <!-- <router-link :to="{path:'/index/movie/movieseat',query:val}" class="info_item_2 fr cr f30">购票</router-link> -->
          <a href="javascript:;" @click="toInfo(val)" class="info_item_2 fr cr f30">购票</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import _movie from '../../../fetch/movie'
import router from '../../../router'
import { alert } from '../../../util/tool'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        centeredSlides: true,
        slidesPerView: 5,
        slidesPerGroup: 1,
        slideToClickedSlide: true,
        spaceBetween: 8,
        onSlideChangeStart: (swiper) => {
          // alert(swiper.activeIndex) // 切换结束时，告诉我现在是第几个slide
          this.changeFilm(swiper.activeIndex)
        }
      },
      filmList: [{ 'country': '美国', 'code': '051X01662017', 'director': '帕特里克·休斯', 'showTypes': '2D/中国巨幕2D', 'publishDate': '2017-09-22', 'type': '动作/惊险', 'duration': '110', 'cast': '瑞恩·雷诺兹 / 塞缪尔·杰克逊 / 加里·奥德曼 / 萨尔玛·海耶克 / 艾洛蒂·袁', 'filmId': 4981, 'intro': '影片讲述职业杀手（塞缪尔·杰克逊 Samuel L. Jackson 饰）为了解救妻子（萨尔玛·海耶克 Salma Hayek 饰）自愿成为法庭审判一名超级罪犯（加里·奥德曼 Gary Oldman 饰）的关键证人，被警方派重兵护送出庭作证。罪犯为杀人灭口派出 雇佣兵全歼了护送部队。侥幸逃生的女探员（艾洛蒂·袁 Elodie Yung 饰）只能避开警方既定路线请来私人保镖（瑞恩·雷诺兹 Ryan Reynolds 饰）继续护送证人。殊不知二人是多年的死对头，现在却要共同抵抗雇佣兵的截杀和警方的追捕并在24小时之内从英国伦敦抵达荷兰海牙出庭作证。两人冤家聚头火花四溅，为全球观众献上一场爆笑不断的动作大片版“尖峰时刻”。', 'name': '王牌保镖', 'stills': 'http://csp.douyou100.com:9998/csp_resources/201709121540547400.jpg,http://csp.douyou100.com:9998/csp_resources/201709121541009330.jpg,http://csp.douyou100.com:9998/csp_resources/201709121540545950.jpg,http://csp.douyou100.com:9998/csp_resources/201709121541007050.jpg,http://csp.douyou100.com:9998/csp_resources/201709121540530050.jpg,http://csp.douyou100.com:9998/csp_resources/201709121540532790.jpg,http://csp.douyou100.com:9998/csp_resources/201709121540538170.jpg,http://csp.douyou100.com:9998/csp_resources/201709121540535040.jpg', 'poster': 'http://csp.douyou100.com:9998/csp_resources/201709121539339310.jpg' }],
      chooseFilmIndex: 0,
      cinemaSort: [],
      chooseCinemaIndex: 0
    }
  },
  mounted() {
    this.init()
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    init() {
      _movie.getFilmList({
        cinemaCode: this.$route.query.cinemaId,
        lastFilmId: 0,
        queryType: 1,
        page: 1,
        pageSize: 20
      }).then(res => {
        this.filmList = res.result
        for (let i = 0; i < this.filmList.length; i++) {
          if (this.filmList[i].code === this.$route.query.filmCode) {
            this.chooseFilmIndex = i
          }
        }
        this.getCinemaList(this.$route.query.cinemaId, this.filmList[this.chooseFilmIndex].code)
      })
    },
    changeFilm(index) {
      this.chooseCinemaIndex = 0
      this.chooseFilmIndex = index
      this.getCinemaList(this.$route.query.cinemaId, this.filmList[index].code)
    },
    getCinemaList(cinemaCode, filmCode) {
      _movie.showCinemaList({
        cinemaCode: cinemaCode,
        filmCode: filmCode
      }).then(res => {
        this.getCinemaSort(res.result)
      })
    },
    getCinemaSort(arr) {
      let newData = []
      for (let i = 0; i < arr.length; i++) {
        let flag = true
        for (let j = 0; j < newData.length; j++) {
          if (arr[i].showTime.split(' ')[0] === newData[j].name) {
            newData[j].arr.push(arr[i])
            flag = false
          }
        }
        if (flag) {
          let aa = {
            name: arr[i].showTime.split(' ')[0],
            arr: [arr[i]]
          }
          newData.push(aa)
        }
      }
      this.swiper.slideTo(this.chooseFilmIndex, 1000, false)
      this.cinemaSort = newData
    },
    toInfo(val) {
      if (new Date() - new Date(val.stopSellTime) >= 0) {
        alert('该场次已经停止售票')
        return false
      }
      let data = {
        channelShowCode: val.channelShowCode,
        discountPrice: val.discountPrice,
        origPrice: val.origPrice,
        showTime: val.showTime,
        hallName: val.hallName,
        cinemaName: this.$route.query.cinemaName,
        filmInfo: this.filmList[this.chooseFilmIndex].name
      }
      router.push({ path: '/index/movie/movieseat', query: data })
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 2.6rem;
  margin: .3rem auto 0;
}

.area_info>.f32 {
  margin-top: .5rem;
}

.area_info>.f24 {
  margin-top: .2rem;
}

.banner {
  width: 100%;
  height: 2.6rem;
  margin: .3rem auto 0;
}

.swiper-slide {
  height: 1.83rem;
  border: 5px solid #f3f3f3;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: .38rem;
}

.swiper-slide-active {
  border-color: #fff;
  -webkit-transform: scale(1.1) !important;
  -moz-transform: scale(1.1) !important;
  -ms-transform: scale(1.1) !important;
  -o-transform: scale(1.1) !important;
  transform: scale(1.1) !important;
  overflow: hidden;
  border-radius: 3px;
}

.swiper-slide>img {
  height: 100%;
}

.movie_title {
  line-height: .8rem;
}

.bb {
  border-bottom: 1px solid #dedfe0;
}

.info {
  position: relative;
}

.sj {
  border-bottom: .2rem solid #fff;
  border-left: .15rem solid transparent;
  border-right: .15rem solid transparent;
  position: absolute;
  top: -.18rem;
  left: 50%;
  margin-left: -.15rem;
}

ul,
li {
  list-style: none;
}

.time-line {
  overflow-x: scroll;
  white-space: nowrap;
  font-size: 0;
  -webkit-overflow-scrolling: touch;
}

.movieDate {
  margin-top: .2rem;
  background-color: #FFF;
}

.time-line .showday {
  display: inline-block;
  line-height: .4rem;
  padding: .1rem .18rem .1rem;
  border-bottom: .04rem solid #FFF;
}

.time-line .showday.active {
  border-bottom: .04rem solid #DB3C37;
}

.time-line .showday a {
  font-size: .26rem;
  color: #666;
}

.info_box {
  width: 100%;
}

.info_item {
  height: 1.24rem;
  padding: .12rem .3rem;
}

.info_item_1_t,
.info_item_1_b {
  position: relative;
  line-height: .5rem;
  width: 5.5rem;
  height: .5rem;
}

.info_item_1>div>p:nth-of-type(2) {
  position: absolute;
  top: .02rem;
  left: 1.4rem;
}

.info_item_1>div>p:nth-of-type(3) {
  position: absolute;
  top: .02rem;
  right: 0;
}

.info_item_2 {
  padding: .1rem .14rem;
  border: 1px solid #DB3C37;
  border-radius: 5px;
  margin-top: .2rem;
}

.middle_line {
  text-decoration: line-through;
}

.cutOff {
  border: 1px solid #ee9203;
  color: #ee9203;
  border-radius: 2px;
  padding-right: 2px;
  margin-left: 5px;
}

.cutOff .bgo {
  background: #ee9203;
  padding: 0 2px;
}

.info_item_1>div>p:nth-of-type(2) {
  position: absolute;
  top: .02rem;
  left: 1.4rem;
  width: 2rem;
  height: .5rem;
  overflow: hidden;
}
</style>
