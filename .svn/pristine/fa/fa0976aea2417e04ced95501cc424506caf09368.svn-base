<template>
  <div class="set">
    <div v-show="isShow">
      <header class="bgf">
        <router-link to="/me" class="f24 back"></router-link>
        <h1 class="f40 tc">个人设置</h1>
      </header>
      <div class="content">
        <div class="person_set_list f32">
          <div class="bgf clearfix person_img">
            <div class="fl">头像</div>
            <div class="fr">
              <img src="../../assets/images/person/person_img.png" alt="">
            </div>
          </div>
          <div class="bgf clearfix">
            <div class="fl">用户名</div>
            <div class="fr" id="div_userName">{{user.userName}}</div>
          </div>
          <div class="bgf clearfix">
            <div class="fl">手机</div>
            <div class="fr" id="div_mobile">{{user.bindMobile}}</div>
          </div>
          <router-link tag="div" to="/me/bind" class="bgf clearfix" v-show="recommend.bindStatus == -1">
            <div class="fl">所属分销商</div>
            <div class="fr" id="div_bindStatus">未绑定</div>
          </router-link>
          <div class="bgf clearfix" v-show="recommend.bindStatus == 2">
            <div class="fl">所属分销商</div>
            <div class="fr" id="div_bindStatus">{{recommend.relName}}</div>
          </div>
        </div>
        <div class="person_list f32">
          <router-link to="/me/set/setpass" class="bgf clearfix person_safe">账户与安全
            <div class="fr f26 c8e">修改密码等</div>
          </router-link>
        </div>
        <div class="pd log_out">
          <button class="button f40 bgo cf" @click="loginOut">退出登录</button>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import _me from '../../fetch/me'
import router from '../../router'

export default {
  data() {
    return {
      recommend: [],
      user: {}
    }
  },
  computed: {
    isShow() {
      if (this.$route.path === '/me/set') {
        return true
      }
      return false
    }
  },
  mounted() {
    if (this.$route.query.userName) {
      localStorage.user = JSON.stringify(this.$route.query)
    }
    this.user = JSON.parse(localStorage.user)
    _me.getMerchantBasic().then(res => {
      this.recommend = res.result
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    loginOut() {
      localStorage.clear()
      router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
header {
  border-bottom: 1px solid #ccc;
}

.person_set_list>div {
  padding-left: .3rem;
}

.person_list>div {
  padding: 0 .3rem;
}

.person_list>a {
  padding-left: .3rem;
}

img {
  width: .8rem;
  height: .8rem;
}

.person_img .fr {
  width: .8rem;
  height: .8rem;
  background: #ccc;
  border-radius: 50%;
  margin-top: .11rem;
}

.log_out {
  margin-top: .4rem;
  width: 100%;
}

.person_set_list>div {
  padding: 0 .3rem;
  line-height: 1.02rem;
  border-bottom: 1px solid #f3f3f3;
}

.person_list>a {
  height: 1.02rem;
  display: block;
  line-height: 1.02rem;
  padding-left: .3rem;
  margin: 0 0 .1rem 0;
  border-bottom: solid #f3f3f3 1px;
}

.person_list div {
  margin-right: .3rem;
  background: url(../../assets/images/common/right.png) right center no-repeat;
  -webkit-background-size: .17rem .3rem;
  background-size: .17rem .3rem;
}

.person_list .fr {
  padding-right: .3rem;
}
</style>
