<template>
  <div class="me">
    <div v-show="isShow">
      <header class="cf">
        <router-link to="/me/information" class="icon_news"></router-link>
        <router-link to="/me/set" class="icon_person cf f32">设置</router-link>
        <router-link :to="{path:'/me/set',query:userInfo}" class="icon_person cf f32">设置</router-link>
        <h1 class="f40 tc gas_recharge_hd">个人中心</h1>
      </header>
      <div class="content">
        <div class="bgo cf person_bg">
          <!--用户信息-->
          <div class="f30 person_user clearfix">
            <img src="../assets/images/person/person_img.png" alt="" class="fl">
            <div class="fr person_news">
              <div class="f36" id="uname">{{userInfo.userName}}</div>
              <div class="f28"><img src="../assets/images/person/phone_bg.png">
                <span id="userPhone">{{userInfo.mobile}}</span>
              </div>
            </div>
          </div>
        </div>

        <!--子导航内容-->
        <div class="mb_total bgf mb_10 f32">
          <div class="pd lh_88 bdb">我的猫币</div>
          <div class="clearfix tc">
            <div class="fl">
              <p class="mb-amt">{{(parseFloat(personal.noReturnBank) + parseFloat(personal.usableBank)).toFixed(2)}}</p>
              <p class="f24">总额</p>
            </div>
            <div class="fl">
              <p class="mb-amt">{{personal.usableBank}}</p>
              <p class="f24">可用</p>
            </div>
            <div class="fl">
              <p class="mb-amt">{{personal.noReturnBank}}</p>
              <p class="f24">未到账</p>
            </div>
          </div>
        </div>
        <div class="person_pane clearfix tc bgf mb_10">
          <router-link to="/me/mb" class="tourl fl">
            <img src="../assets/images/person/person_icon1.png">
            <div>猫币账单</div>
          </router-link>
          <router-link to="/me/preorder" class="tourl fl">
            <img src="../assets/images/person/person_icon2.png">
            <div>预购订单</div>
          </router-link>
          <router-link to="/order" class="tourl fl">
            <img src="../assets/images/person/person_icon3.png">
            <div>充值订单</div>
          </router-link>
          <router-link to="/me/card" class="tourl fl">
            <img src="../assets/images/person/person_icon4.png">
            <div>卡包</div>
          </router-link>
        </div>
        <div class="person_list f32">
          <router-link to="/me/coupon/valid" class="person_icon5">
            <div>我的卡券</div>
          </router-link>
          <a href="http://m.ifengmao.com/web/share.do" class="person_icon6">
            <div>邀请好友</div>
          </a>
          <router-link to="/me/about" class="person_icon7">
            <div>关于风猫</div>
          </router-link>
          <a href="tel:400-158-5193" class="person_icon8">
            <div>客服电话</div>
          </a>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import _me from '../fetch/me'

export default {
  data() {
    return {
      userInfo: {},
      personal: {}
    }
  },
  computed: {
    isShow() {
      if (this.$route.path === '/me') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    getData() {
      let _this = this
      _me.getUserInfo().then(res => {
        _this.userInfo = res.result
      }).catch(error => {
        console.log(error)
      })
      _me.personal().then(res => {
        _this.personal = res.result
        localStorage.personal = JSON.stringify(res.result)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
.me {
  background: #f3f3f3;
  height: 100%;
  overflow: scroll;
}

header {
  background: #ffad75;
  border: 1px solid #ffad75;
}

.icon_person {
  background: none;
  right: 0;
  left: .3rem;
  top: 0;
  width: .8rem;
  height: 100%;
}

.lh_88 {
  line-height: .88rem;
}

.mb_10 {
  margin-bottom: .1rem;
}

.bdb {
  border: solid #f3f3f3 1px;
}

.icon_news {
  background: url(../assets/images/person/information_icon.png) center no-repeat;
  -webkit-background-size: .4rem .4rem;
  background-size: .4rem .4rem;
}

.person_bg {
  background: linear-gradient(to bottom, #ffad75 0%, #ff795c 100%);
}

.person_user {
  padding: 0.47rem 0 .47rem .3rem;
}

.person_user img {
  width: 16%;
  height: auto;
  border-radius: 50%;
}

.person_news {
  line-height: .4rem;
  width: 80%;
}

.person_news .f36 {
  border-bottom: solid #fff 1px;
  line-height: .7rem;
}

.person_news .f28 {
  line-height: .5rem;
}

.person_user .fr img {
  margin-right: 0;
  width: .18rem;
  display: inline-block;
  vertical-align: middle;
  margin-right: .2rem;
  height: auto;
  border-radius: 0;
}

.person_account ul {
  width: 50%;
  margin: 0 auto;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  padding-top: .4rem;
}

.person_account ul li {
  width: .4rem;
  height: .8rem;
  flex: 1;
  padding-top: .5rem;
}

.person_account ul li.active span {
  width: .4rem;
  display: inline-block;
  border-bottom: 2px solid #ff6953;
}

.to_purchase>a {
  display: block;
}

.person_list .fr {
  padding-right: .3rem;
}

.mb_icon .my_mb {
  padding-left: .5rem;
  margin-right: .2rem;
}

.mb_icon .fr {
  border: 1px solid #fc5b32;
  line-height: .6rem;
  padding: 0 .2rem;
  border-radius: 3px;
  margin-top: .2rem;
}

.person_list>a {
  height: 1.02rem;
  display: block;
  line-height: 1.02rem;
  padding-left: .9rem;
  margin: 0 0 .1rem 0;
  border-bottom: solid #f3f3f3 1px;
}

.person_list div {
  margin-right: .3rem;
  background: url(../assets/images/common/right.png) right center no-repeat;
  -webkit-background-size: .17rem .3rem;
  background-size: .17rem .3rem;
}

.content {
  height: 100%;
  overflow-y: scroll;
}

.person_icon5 {
  background: #fff url(../assets/images/person/person_icon5.png) .3rem center no-repeat;
  -webkit-background-size: .34rem .34rem;
  background-size: .34rem .34rem;
}

.person_icon6 {
  background: #fff url(../assets/images/person/person_icon6.png) .3rem center no-repeat;
  -webkit-background-size: .34rem .34rem;
  background-size: .34rem .34rem;
}

.person_icon7 {
  background: #fff url(../assets/images/person/person_icon7.png) .3rem center no-repeat;
  -webkit-background-size: .34rem .34rem;
  background-size: .34rem .34rem;
}

.person_icon8 {
  background: #fff url(../assets/images/person/person_icon8.png) .3rem center no-repeat;
  -webkit-background-size: .34rem .34rem;
  background-size: .34rem .34rem;
}

.mb_total .fl {
  width: 33.33%;
  line-height: .4rem;
  padding: .2rem 0;
}

.mb_total img {
  width: .5rem;
  height: .5rem;
  margin: .2rem .4rem 0 0;
}

.person_pane {
  padding: .2rem 0;
  line-height: .5rem;
}

.person_pane .fl {
  width: 25%;
}

.person_pane img {
  height: .45rem;
  width: auto;
  margin: 0 auto;
}

.mb_notback>div {
  padding: .3rem;
}

.mb_notback>div:first-child {
  border-bottom: 1px solid #ccc;
}

.person_set_list>div {
  padding: 0 .3rem 0 .9rem;
  line-height: 1.02rem;
  border-bottom: 1px solid #f3f3f3;
}

.person_set_list>div.person_set_icon1 {
  padding: .2rem .3rem .2rem .3rem;
}

.mask_wrap {
  background: #f3f3f3;
  height: 100%;
  width: 100%;
  position: fixed;
  top: .88rem;
  z-index: 1000;
  display: none;
}
</style>

