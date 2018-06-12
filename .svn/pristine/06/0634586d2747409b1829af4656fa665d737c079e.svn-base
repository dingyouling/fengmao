<template>
  <div class="nav" v-show="isShowTabbar">
    <nav class="bar bar-tab f26 tc">
      <router-link v-for="(val, index) in dataList" :key="index" :to="val.name" class="tab-item external" active-class="active">
        <img :src="val.imgUrl" v-show="!val.imgActive" alt="">
        <img :src="val.imgActiveUrl" v-show="val.imgActive" alt="">
        <span class="tab-label">{{val.str}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        {
          name: '/index',
          str: '首页',
          imgUrl: require('../assets/images/common/icon_index1.png'),
          imgActiveUrl: require('../assets/images/common/icon_index.png'),
          imgActive: true
        },
        {
          name: '/purchase',
          str: '预购',
          imgUrl: require('../assets/images/common/icon_purchase1.png'),
          imgActiveUrl: require('../assets/images/common/icon_purchase.png'),
          imgActive: false
        },
        {
          name: '/order',
          str: '订单',
          imgUrl: require('../assets/images/common/icon_list1.png'),
          imgActiveUrl: require('../assets/images/common/icon_list.png'),
          imgActive: false
        },
        {
          name: '/me',
          str: '账户中心',
          imgUrl: require('../assets/images/common/icon_person1.png'),
          imgActiveUrl: require('../assets/images/common/icon_person.png'),
          imgActive: false
        }
      ]
    }
  },
  computed: {
    isShowTabbar() {
      let routePath = this.$route.path
      if (routePath === '/index' || routePath === '/purchase' || routePath === '/order' || routePath === '/me') {
        return true
      }
    }
  },
  mounted() {
    this.checkRoute(this.$route)
  },
  watch: {
    $route(to, from) {
      this.checkRoute(to)
    }
  },
  methods: {
    checkRoute(obj) {
      for (var i = 0; i < this.dataList.length; i++) {
        if (this.dataList[i].name === obj.path) {
          this.dataList[i].imgActive = true
        } else {
          this.dataList[i].imgActive = false
        }
      }
    }
  }
}
</script>

<style>
.bar-tab {
  width: 100%;
  height: .99rem;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #d0d0d0;
  z-index: 10;
  background-color: #fff;
}

.bar-tab .tab-item {
  display: table-cell;
  width: 1%;
  height: .99rem;
  color: #000;
}

.bar-tab .tab-item img {
  margin: 0 auto;
  width: .4rem;
  height: .4rem;
  margin: .1rem auto 0.05rem;
}

.bar .active {
  color: #ff6953;
}
</style>
