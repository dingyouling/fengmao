<template>
  <div class="preorderfl">
    <header class="bgf">
      <a href="javascript:history.back();" class="f24 back"></a>
      <h1 class="f40 tc">预购到账流水</h1>
    </header>
    <div class="content">
      <div class="pur_flow_infor bgf tc">
        <div class="clearfix pd">
          <img src="../../assets/images/person/mb_tx.png" alt="" class="fl">
          <div class="fl f36">总预购金额：
            <span class="f40" id="totalPreAmount">{{personal.totalPreAmount}}</span>
          </div>
        </div>
        <ul class="f32 clearfix c66">
          <li class="fl">
            <div>已到账</div>
            <div id="hasReturnBank">{{(personal.totalPreAmount - personal.noReturnBank).toFixed(2)}}</div>
          </li>
          <li class="fl">
            <div>未到账</div>
            <div id="noReturnBank">{{personal.noReturnBank}}</div>
          </li>
          <li class="fl">
            <div>下月到账</div>
            <div id="nextGiveAmount">{{personal.nextMonthBank}}</div>
          </li>
        </ul>
      </div>
      <div style="position:relative;" ref="content">
        <Scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
          <div class="datalist" v-for="(val,index) in dataList" :key="index">
            <div class="f24 c66 list_month pd" v-if="index===0 || val.giveMonth !== dataList[index-1].giveMonth">{{val.giveMonth}}</div>
            <router-link tag="div" :to="'/me/preorder/preorderinfo?giveId='+val.preOrderId" class="box pd bgf">
              <div class="clearfix" v-if="val.giveType === 1">
                <p class="f30 fl">到账</p>
                <p class="fr cb">-{{val.giveAmount}}</p>
              </div>
              <div class="clearfix" v-else-if="val.giveType === 2">
                <p class="f30 fl">预购套餐</p>
                <p class="fr co">+{{val.giveAmount}}</p>
              </div>
              <div class="clearfix c8e">
                <p class="fl">{{val.giveTime}}</p>
                <p class="fr">剩余{{val.surplusAmount}}</p>
              </div>
            </router-link>
          </div>
        </Scroll>
      </div>
    </div>
  </div>
</template>

<script>
import _me from '../../fetch/me'
import Scroll from '@/components/Scroll'
import { alert } from '../../util/tool'

export default {
  data() {
    return {
      page: 1,
      dataList: [],
      personal: {},
      scrollData: {
        noFlag: false // 暂无更多数据显示
      },
      isLast: false
    }
  },
  components: {
    Scroll
  },
  mounted() {
    this.getData()
    this.personal = JSON.parse(localStorage.personal)
    this.$refs.content.style.height = document.documentElement.clientHeight - this.$el.querySelector('header.bgf').clientHeight - this.$el.querySelector('.pur_flow_infor').clientHeight - 20 + 'px'
  },
  methods: {
    getData() {
      this.isLast = false
      _me.getPreOrderFlow({
        page: this.page
      }).then(res => {
        if (!res.result.foot) {
          this.isLast = true
          alert('暂无更多')
          return false
        }
        for (var i = 0; i < res.result.foot.length; i++) {
          this.dataList.push(res.result.foot[i])
        }
      })
    },
    onRefresh(done) {      // 下拉刷新
      this.page = 1
      this.dataList = []
      this.getData()
      done()
    },
    onInfinite(done) {
      if (!this.isLast) {
        this.page++
        this.getData()
      } else {
        alert('暂无更多')
      }
      done()
    }
  }
}
</script>

<style scoped>
.pur_flow_infor img {
  width: .6rem;
  height: .6rem;
  margin-right: .3rem;
}

.pur_flow_infor>div {
  border-bottom: 1px solid #ccc;
  padding: .2rem 0.3rem;
}

.pur_flow_infor ul {
  padding: .2rem 0;
}

.pur_flow_infor li {
  width: 33.33%;
  border-right: 1px solid #ccc;
  line-height: .6rem;
}

.datalist .box {
  padding: .14rem .3rem;
  border-bottom: 1px solid #f3f3f3;
}

.list_month {
  line-height: .5rem;
}
</style>
