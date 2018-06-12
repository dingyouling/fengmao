<template>
  <div class="cityLis">
    <header class="bgf head">
      <a href="javascript:history.back();" class="f24 back"></a>
      <h1 class="f40 tc">城市选择</h1>
    </header>
    <div class="aaa">
      <Sort @setListItem="setItem" :sortList="dataList"></Sort>
    </div>
  </div>
</template>
  
<script>
import Sort from '../../Sort'
import { mapActions } from 'vuex'
import _wec from '../../../fetch/wec'

export default {
  data() {
    return {
      dataList: []
    }
  },
  components: {
    Sort
  },
  mounted() {
    _wec.getLifeCity({
      busiType: 2
    }).then(res => {
      this.dataList = res.result
    })
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
  