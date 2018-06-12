<template>
  <div class="banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="aa" v-for="(val,index) in dataList" :key="index">
        <a :href="val.bodyUrl"><img :src="val.noticeContent" alt=""></a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import _prod from '../../../fetch/prod'

export default {
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        direction: 'horizontal',
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        loop: true
      },
      dataList: []
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  // you can find current swiper instance object like this, while the notNextTick property value must be true
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
    this.getImg()
  },
  methods: {
    getImg() {
      _prod.getBanner({
        noticeType: 4
      }).then(res => {
        this.dataList = res.result
      })
    }
  }
}
</script>

<style>
.banner {
  height: 3rem;
  overflow: hidden;
}

.swiper-pagination-bullet {
  width: .4rem;
  height: .04rem;
  background-color: #fc5b32;
}
</style>
