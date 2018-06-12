<template>
  <div class="trainsensure">
    <header class="trains-color">
      <a href="javascript:history.back();" class="f24 back back1 not_used_common"></a>
      <h1 class="f40 tc category cf">行程保障</h1>
    </header>
    <div class="box" v-for="(val,index) in dataList" :key="index">
      <div class="box_item bgf line80">
        <div class="f32 c33">
          <span>承保人姓名 : {{val.passengerName}} </span>
          <span>￥{{val.insurePrice}}</span>
        </div>
        <div class="f28 c33">
          <span>保险名称 : {{val.insureName}}</span>
        </div>
        <div class="f28 c33">
          <span>保险描述 : {{val.insureDesc}}</span>
        </div>
        <div class="f28 c8e">
          <span>保单号 : {{val.insureBillNo}}</span>
        </div>
        <div class="f28 c8e">
          <span>保单公司 : {{val.merchantName}}</span>
          <div>
            <span class="f32 c33">{{insureStatusStr[val.insureStatus]}}</span>
            <span class="refund cb" @click="ensureRefund(val.passengerId)" v-if="val.insureStatus == 2">退保</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _order from '../../../fetch/order'
import { mapGetters } from 'vuex'
import { alert } from '../../../util/tool'

export default {
  data() {
    return {
      dataList: [],
      insureStatusStr: ['', '购保中', '购保成功', '购保失败', '退保中', '退保成功']
    }
  },
  computed: {
    ...mapGetters([
      'getOrderCode'
    ])
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      _order.ensureList({
        orderCode: this.getOrderCode
      }).then(res => {
        this.dataList = res.result
      })
    },
    ensureRefund(passengerId) {
      _order.ensureRefund({
        passengerId: passengerId
      }).then(res => {
        alert('退保成功')
        this.init()
      })
    }
  }
}
</script>

<style scoped>
.trainsensure {
  height: 100%;
  background: #f3f3f3;
}

.box_item {
  margin: .1rem auto;
  padding: .2rem .3rem;
}

.box_item>div {
  display: flex;
  justify-content: space-between;
}

.line80 {
  line-height: .6rem;
}

.cb {
  color: #03A9F4;
}

.refund {
  border: 1px solid #03A9F4;
  border-radius: .5rem;
  padding: .06rem .2rem;
  margin-left: .2rem;
}
</style>
