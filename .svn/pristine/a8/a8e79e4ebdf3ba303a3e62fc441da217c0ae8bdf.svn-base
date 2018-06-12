<template>
  <div class="card">
    <div v-show="isShow">
      <header class="bgf">
        <router-link to="/me" class="f24 back"></router-link>
        <h1 class="f40 tc">我的卡包</h1>
      </header>
      <div class="dyl_card_nav f28 tc c99 bgf">
        <ul class="clearfix" id="card_type">
          <li v-for="(val,index) in typeStr" :key="index" :class="{active:typeIndex == index}" @click="changeType(index)">{{val}}</li>
        </ul>
      </div>
      <div class="c99 dyl_card_add f26 tc bgf" id='card_add_box'>
        <router-link :to="'/me/card/cardadd?typeindex='+typeIndex"></router-link>
        <p id='card_add_p'>新增</p>
      </div>
      <div class="datalis">
        <div v-for="(val,index) in dataList" :key="index">
          <!-- 火车票 -->
          <div class="dyl_gas_card_infor pd clearfix bgf" v-if="typeIndex == 4">
            <div class="dyl_gas_card_nn fl c33" style="padding-left: 0;">
              <div class="dyl_gas_card_name f32" style="line-height: .6rem;">{{val.passengerName}}({{passengerTypeStr[val.passengerType]}})
                <span class="f28" v-if="val.canBuyNow == 1" style="color:#6FBB72;margin-left: .2rem;">已通过</span>
                <span class="f28 c8e" v-else-if="val.canBuyNow == 2" @click="showNotice">待核验</span>
              </div>
              <div class="dyl_gas_card_cnum f28">{{val.idCard}}</div>
            </div>
            <div class="dyl_card_rewrite fr clearfix">
              <a href="javascript:void(0);" class="dyl_rewrite fl" @click="toInfo(val)"></a>
              <a href="javascript:void(0);" class="dyl_del fl" @click="delTrainsPerson(index)"></a>
            </div>
          </div>
          <!-- 水电煤、游戏账号 -->
          <div class="dyl_gas_card_infor pd clearfix bgf" v-else-if="typeIndex == 2 || typeIndex == 3">
            <div class="dyl_gas_card_type fl bgo" v-if="val.cardType == 2"><img src="../../assets/images/card/yxdk_water@2x.png" alt=""></div>
            <div class="dyl_gas_card_type fl bgo" v-else-if="val.cardType == 3"><img src="../../assets/images/card/yxdk_ele@2x.png" alt=""></div>
            <div class="dyl_gas_card_type fl bgo" v-else-if="val.cardType == 4"><img src="../../assets/images/card/yxdk_coal@2x.png" alt=""></div>
            <div class="dyl_gas_card_type fl bgf" v-else-if="val.cardType == 5"><img src="../../assets/images/card/yxdk_qb@2x.png" alt=""></div>
            <div class="dyl_gas_card_type fl bgf" v-else-if="val.cardType == 7"><img src="../../assets/images/card/yxdk_wy@2x.png" alt=""></div>
            <div class="dyl_gas_card_type fl bgf" v-else-if="val.cardType == 8"><img src="../../assets/images/card/yxdk_wow@2x.png" alt=""></div>
            <div class="dyl_gas_card_nn fl c33">
              <div class="dyl_gas_card_name f28">{{val.note}}</div>
              <div class="dyl_gas_card_cnum f24">{{val.cardNumber}}</div>
              <div class="dyl_gas_card_unit f20 c66" v-show="typeIndex == 2">缴费单位：{{val.unitName}}</div>
            </div>
            <div class="dyl_card_rewrite fr clearfix">
              <a href="javascript:void(0);" class="dyl_rewrite fl" v-show="typeIndex == 3" @click="toInfo(val)"></a>
              <a href="javascript:void(0);" rel="2149" class="dyl_del fl card_del" @click="delCard(index)"></a>
            </div>
          </div>
          <!-- 手机号码、油卡卡号 -->
          <div class="dyl_gas_card_infor pd clearfix bgf" v-else-if="typeIndex == 0 || typeIndex == 1">
            <div class="dyl_gas_card_type fl bgo cf f24 tc" v-if="val.unitName=='中国石油'">中石油</div>
            <div class="dyl_gas_card_type fl bgo cf f24 tc" v-else-if="val.unitName=='中国石化'">中石化</div>
            <div class="dyl_gas_card_type fl bgo cf f24 tc" v-else>{{val.note.charAt(0) || val.cardNumber.charAt(0)}}</div>
            <div class="dyl_gas_card_nn fl c33">
              <div class="dyl_gas_card_name f32">{{val.note}}</div>
              <div class="dyl_gas_card_cnum f28">{{val.cardNumber}}</div>
            </div>
            <div class="dyl_card_rewrite fr clearfix">
              <a href="javascript:void(0);" class="dyl_rewrite fl" @click="toInfo(val)"></a>
              <a href="javascript:void(0);" rel="28" class="dyl_del fl card_del" @click="delCard(index)"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="showNotice" v-show="showNoticeFlag">
      实名制身份核验待核验的乘客，暂无法进行网上购票。需携带有效证件前往购票乘客核验通过后即可网上购票。
    </div>
  </div>
</template>

<script>
import _me from '../../fetch/me'
import router from '../../router'
import { alert } from '../../util/tool'

export default {
  data() {
    return {
      typeStr: ['手机号', '油卡', '水电煤', '游戏账号', '火车票'],
      typeArr: ['6', '1', '2,3,4', '5,7,8', '10'],
      passengerTypeStr: ['', '成人', '儿童', '学生'],
      typeIndex: 0,
      dataList: [],
      showNoticeFlag: false,
      t: ''
    }
  },
  computed: {
    isShow() {
      if (this.$route.path === '/me/card') {
        return true
      }
      return false
    }
  },
  mounted() {
    if (this.$route.query.typeindex) {
      this.typeIndex = this.$route.query.typeindex
    }
    this.getData()
  },
  watch: {
    $route(to, from) {
      if (this.$route.query.typeindex) {
        this.typeIndex = this.$route.query.typeindex
      }
      this.getData()
    }
  },
  methods: {
    getData() {
      if (Number(this.typeIndex) === 4) {   // 火车票
        _me.getTrainsCard().then(res => {
          localStorage.trainsPerson = JSON.stringify(res.result)
          this.dataList = res.result
        })
      } else {
        _me.getCard({
          cardType: this.typeArr[this.typeIndex],
          page: 1,
          pageSize: 30
        }).then(res => {
          this.dataList = res.result
        })
      }
    },
    changeType(index) {
      this.typeIndex = index
      this.getData()
    },
    toInfo(val) {
      let item = val
      item.typeindex = this.typeIndex
      router.push({ path: '/me/card/cardadd', query: item })
    },
    delCard(index) {
      _me.delCard({
        cardId: this.dataList[index].cardId
      }).then(res => {
        this.dataList.splice(index, 1)
        alert('删除成功')
      })
    },
    delTrainsPerson(index) {
      _me.delTrainsPerson({
        contactId: this.dataList[index].contactId
      }).then(res => {
        this.dataList.splice(index, 1)
        alert('删除成功')
      })
    },
    showNotice() {
      let _this = this
      clearTimeout(this.t)
      this.showNoticeFlag = true
      this.t = setTimeout(function() {
        _this.showNoticeFlag = false
        clearTimeout(_this.t)
      }, 5000)
    }
  }
}
</script>

<style>
.dyl_card_nav {
  border-bottom: solid 1px #dedfe0;
}

.dyl_card_nav li {
  float: left;
  height: .7rem;
  width: 20%;
  line-height: .7rem;
}

.dyl_card_nav li.active {
  background: #fc5b32;
  color: #fff;
}

.dyl_card_add {
  margin-top: .2rem;
  padding: .3rem 0;
  line-height: .5rem;
  border-top: 1px solid #dedfe0;
  border-bottom: 1px solid #dedfe0;
}

.dyl_card_add a {
  background: url(../../assets/images/card/jia_mos@2x.png) center center no-repeat;
  -webkit-background-size: .41rem .41rem;
  background-size: .41rem .41rem;
  display: block;
  height: .41rem;
  width: .41rem;
  margin: 0 auto;
}

.dyl_gas_card_infor {
  padding: .35rem .3rem;
  margin-bottom: .2rem;
}

.dyl_card_rewrite {
  margin-top: .3rem;
}

.dyl_card_rewrite a {
  display: block;
  width: .3rem;
  height: .3rem;
}

.dyl_rewrite {
  background: url(../../assets/images/card/card_rewrite.png) 0 0 no-repeat;
  -webkit-background-size: .3rem .3rem;
  background-size: .3rem .3rem;
  margin-right: .2rem;
}

.dyl_del {
  background: url(../../assets/images/card/card_del.png) 0 0 no-repeat;
  -webkit-background-size: .3rem .3rem;
  background-size: .3rem .3rem;
}

.dyl_gas_card_type {
  border-radius: 50%;
  width: .9rem;
  height: .9rem;
  line-height: .9rem;
}

.dyl_gas_card_nn {
  padding-left: .3rem;
}

.dyl_gas_card_name .c8e {
  margin-left: .2rem;
  background: url(../../assets/images/trains/help.png) no-repeat right center;
  -webkit-background-size: .24rem;
  background-size: .24rem;
  padding-right: .3rem;
}

.showNotice {
  width: 4rem;
  height: 3rem;
  color: #fff;
  padding: .2rem;
  font-size: .3rem;
  line-height: .5rem;
  text-align: justify;
  border-radius: 10px;
  background: rgba(0, 0, 0, .7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
