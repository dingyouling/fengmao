<template>
  <div class="setpass">
    <div v-show="isShow">
      <header class="bgf">
        <router-link to="/me/set" class="f24 back"></router-link>
        <h1 class="f40 tc">账号与安全</h1>
      </header>
      <div class="person_list f30">
        <router-link to="/me/set/setpass/zf" class="bgf">
          <div>修改支付密码</div>
        </router-link>
        <router-link to="/me/set/setpass/dl" class="bgf">
          <div>修改登录密码</div>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    isShow() {
      if (this.$route.path === '/me/set/setpass') {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
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
  background: url(../../assets/images/common/right.png) right center no-repeat;
  -webkit-background-size: .17rem .3rem;
  background-size: .17rem .3rem;
}
</style>
