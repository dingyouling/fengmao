<template>
  <div class="game">
    <div v-show="isShow">
      <header class="bgf">
        <router-link to="/" class="f24 back"></router-link>
        <h1 class="f40 tc">游戏点卡</h1>
      </header>
      <div class="game_index_box bgf" id="game_type">
        <router-link to="/index/game/sub?rechargeType=1" class="game_index_item pd">
          <img src="../../assets/images/game/qb.png" alt="" class="fl">
          <span class="f32 fl">Q币</span>
          <div></div>
        </router-link>
        <router-link to="/index/game/sub?rechargeType=2" class="game_index_item pd">
          <img src="../../assets/images/game/lol.png" alt="" class="fl">
          <span class="f32 fl">英雄联盟</span>
          <div></div>
        </router-link>
        <router-link to="/index/game/sub?rechargeType=3" class="game_index_item pd">
          <img src="../../assets/images/game/dnf.png" alt="" class="fl">
          <span class="f32 fl">地下城与勇士</span>
          <div></div>
        </router-link>
        <router-link to="/index/game/sub?rechargeType=4" class="game_index_item pd">
          <img src="../../assets/images/game/cf.png" alt="" class="fl">
          <span class="f32 fl">穿越火线</span>
          <div></div>
        </router-link>
        <router-link to="/index/game/sub?rechargeType=5" class="game_index_item pd">
          <img src="../../assets/images/game/wy.png" alt="" class="fl">
          <span class="f32 fl">网易一卡通</span>
          <div></div>
        </router-link>
        <router-link to="/index/game/sub?rechargeType=6" class="game_index_item pd">
          <img src="../../assets/images/game/wow.png" alt="" class="fl">
          <span class="f32 fl">魔兽世界</span>
          <div></div>
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
      if (this.$route.path === '/index/game') {
        return true
      }
      return false
    }
  }
}
</script>

<style>
.game_index_item {
  height: 1.3rem;
  border-bottom: 1px solid #f3f3f3;
  line-height: 1.3rem;
  display: block;
}

.game_index_item>img {
  width: .9rem;
  margin-top: .2rem;
}

.game_index_item>div {
  width: .17rem;
  background: url("../../assets/images/game/right.png") center no-repeat;
  float: right;
  height: 100%;
  -webkit-background-size: .17rem;
  background-size: .17rem;
}

.game_index_item>span {
  margin-left: .3rem;
}
</style>

