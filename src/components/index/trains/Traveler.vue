<template>
  <div>
    <header class="trains-color">
      <router-link class="f24 back back1" :to="{path: '/index/trains/serve'}"></router-link>
      <h1 class="f40 tc category cf">12306旅客</h1>
    </header>
    <div class="bgf2">
      <router-link class="cb f28 add_btn tc" :to="{path: '/me/card/cardadd', query: {typeindex: '4', isLogin: true}}">
        <img src="../../../assets/images/trains/add_contact.png" alt="">
        <span>增加12306常用旅客</span>
      </router-link>
      <div class="person_box bgf" v-for="(val, index) in travelerList">
        <div class="person_item bb">
          <p class="f32 c33">{{val.passengerName}}</p>
          <p class="f28 c66">{{val.certNo.substring(0, 5) + '******' + val.certNo.substring(15, 18)}}</p>
          <div class="cb f28">{{val.checkStatus === 1 ? '已校验' : '未通过'}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _trains from '../../../fetch/trains.js'
import { mapGetters } from 'vuex'
export default{
  data() {
    return {
      travelerList: []
    }
  },
  computed: {
    ...mapGetters([
      'loginData'
    ])
  },
  mounted() {
    this.getTraveler()
  },
  methods: {
    getTraveler() {
      _trains.railwayTraveler(this.loginData).then(res => {
        this.travelerList = res.result.travelerList
      }).catch(error => {
        console.log(error.data.errDesc)
      })
    }
  }
}
</script>
<style scoped>
.add_btn {
    width: 4rem;
    line-height: .6rem;
    border: 1px solid #03a9f4;
    display: block;
    margin: 0 auto .4rem;
    border-radius: .7rem;
}

.add_btn img {
    width: .3rem;
    display: inline-block;
    vertical-align: middle;
}

.person_item {
    background: url("../../../assets/images/trains/12306@2x.png") no-repeat .3rem center;
    -webkit-background-size: .4rem;
    background-size: .4rem;
    padding: .2rem .3rem .2rem 1rem;
    position: relative;
}

.person_item a{
    position: absolute;
    height: .4rem;
    width: .4rem;
    top: .4rem;
    left: .3rem;
}

.person_item > div {
    position: absolute;
    top: .4rem;
    right: .3rem;
}

.bb {
    border-bottom: 1px solid #f2f7ff;
}

.bgf2{
  background-color: #f2f7ff;
  padding-top: .4rem;
}
</style>