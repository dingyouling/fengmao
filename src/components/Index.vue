<template>
  <div id="index">
    <div v-show="isShow">
      <header class="bgf">
        <h1 class="f40 tc">首页</h1>
      </header>
      <Banner></Banner>
      <Tab></Tab>
      <Product></Product>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from '@/components/index/index/Banner'
import Tab from '@/components/index/index/Tab'
import Product from '@/components/index/index/Product'
import { mapActions } from 'vuex'

export default {
  components: {
    Banner,
    Tab,
    Product
  },
  computed: {
    isShow() {
      let routeLength = this.$route.path.split('/').length
      return routeLength === 2
    }
  },
  mounted() {
    this.getIndexProd()
  },
  methods: {
    ...mapActions({
      'getIndexProd': 'getIndexProd'
    })
  }
}
</script>

<style scoped>
body {
  background: #f3f3f3;
}

#index {
  height: 100%;
  overflow: scroll;
}
</style>

