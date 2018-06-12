<template>
  <div class="movieinfo">
    <header class="bgr cf">
      <a href="javascript:history.back();" class="f24 back back1"></a>
      <h1 class="f40 tc">影片名</h1>
    </header>
    <div class="content content1">
      <div class="clearfix movie_ti bgf">
        <div class="fl movie_img1">
          <img v-if="$route.query.poster!=''" :src="$route.query.poster" alt="">
          <img v-else src="../../../assets/images/movie/movie_default.jpg" alt="">
        </div>
        <div class="fl f26 movie_text">
          <div class="f32 bold">{{$route.query.name}}</div>
          <div>上映时间：
            <span>{{$route.query.publishDate}}</span>
          </div>
          <div>影片类型：
            <span>{{$route.query.showTypes}}</span>
          </div>
          <div>{{$route.query.type}}</div>
          <div>{{$route.query.country}}/{{$route.query.duration}}分钟</div>
        </div>
      </div>
      <div class="f30 bgf movie_photo">
        <a href="javascript:;" class="clearfix pd">
          <div class="fl">精彩剧照</div>
        </a>
        <div class="movie_img clearfix">
          <img v-for="(val,index) in $route.query.stills.split(',')" :key="index" :src="val" alt="">
        </div>
      </div>
      <div class="f30 pd bgf movie_tinfo">
        <div class="f34 bold">影片详情</div>
        <div>导演：{{$route.query.director}}</div>
        <div>演员：{{$route.query.cast}}</div>
        <div class="f26">{{$route.query.intro}}</div>
      </div>
      <div class="cf f34 button bgr tc" id="getTicket" @click="toCinema">立即购票</div>
    </div>
  </div>
</template>

<script>
import router from '../../../router'

export default {
  methods: {
    toCinema() {
      router.push({ path: '/index/movie', query: { filmCode: this.$route.query.code } })
    }
  }
}
</script>

<style scoped>
header {
  border-bottom: 1px solid #DB3C38;
}

.movie_ti .bold {
  margin-bottom: .1rem;
}

.content {
  padding-bottom: .9rem;
}

.content>div {
  margin-bottom: .2rem;
}

a {
  display: block;
}

.movie_img {
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  font-size: 0;
  -webkit-overflow-scrolling: touch;
}

::-webkit-scrollbar {
  height: 0!important
}

.movie_img img {
  /* 	width: 1.8rem; */
  /* 	height: 2.3rem; */
  max-width: 1.8rem;
  max-height: 1.8rem;
  margin: 0 .3rem .2rem 0;
  display: inline-block;
  position: relative;
}

.movie_img img:first-child {
  margin-left: .3rem;
}

.content1 .button {
  border-radius: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  margin-bottom: 0;
}

.movie_ti {
  padding: .5rem 0.3rem;
  line-height: .4rem;
}

.movie_text {
  width: 4.4rem;
}

.movie_img1 {
  margin-right: .5rem;
}

.movie_img1 img {
  width: 2rem;
  height: 2.7rem;
}

.movie_photo {
  padding: .3rem 0;
}

.movie_photo a {
  line-height: .6rem;
}

.movie_tinfo {
  line-height: .5rem;
}

.movie_tinfo .f26 {
  height: 2.5rem;
  overflow-y: scroll;
}

.movie_tinfo_false .f26 {
  height: auto;
}

.movie_tinfo .f34 {
  line-height: .6rem;
}

.movie_tinfo .bold {
  margin: .2rem 0;
}

.movie_jt {
  height: .44rem;
  background: #fff url(../../../assets/images/movie/bottom.png) center center no-repeat;
  -webkit-background-size: .2rem .2rem;
  background-size: .2rem .2rem;
}

.mask_swiper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 1);
  display: none;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-container img {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
