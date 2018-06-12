<template>
  <div class="cityLis">
    <header class="bgf head">
      <a href="javascript:history.back();" class="f24 back"></a>
      <h1 class="f40 tc">城市选择</h1>
    </header>
    <div class="aaa bgf">
      <Sort @setListItem="setItem" :sortList="dataList"></Sort>
    </div>
  </div>
</template>
  
<script>
import Sort from '../../Sort'
import { mapActions } from 'vuex'
import { cityCodeNameArr } from '../../../assets/js/citys'

export default {
  computed: {
    dataList() {
      return cityCodeNameArr.result
    }
  },
  components: {
    Sort
  },
  mounted() {
    document.getElementsByClassName('aaa')[0].style.height = (document.documentElement.clientHeight - document.getElementsByClassName('head')[0].offsetHeight) + 'px'
  },
  methods: {
    ...mapActions([
      'setSortList',
      'setChooseItem'
    ]),
    setItem(data) {
      this.setChooseItem(data)
      location.herf = history.back()
    }
  }
}
</script>
  
<style>

</style>
  