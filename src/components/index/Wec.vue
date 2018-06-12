<template>
  <div class="wec">
    <div v-show="isShow">
      <header class="bgf" v-show="!isAddCard">
        <router-link to="/" class="f24 back"></router-link>
        <h1 class="f40 tc">生活缴费</h1>
        <router-link :to="'/choosecard?cardType='+(typeIndex+2)+'&returnUrl='+$route.path" class="dyl_help card fr"></router-link>
      </header>
      <div class="content">
        <div class="clearfix f28 co pd">
          <router-link tag="div" to="/index/wec/citylist" class="fr position_text" id="getLocation" ref="getLocation">{{areaStr}}</router-link>
        </div>
        <div class="f28 tc">
          <ul class="clearfix" id="sdm_model">
            <li class="fl" :class="{active:index==typeIndex}" v-for="(val,index) in type" :key="index" @click="changeType(index)">
              <div class="wec_icon">
                <img src="../../assets/images/wec/wec_w.png" alt="" v-show="index==0">
                <img src="../../assets/images/wec/wec_e.png" alt="" v-show="index==1">
                <img src="../../assets/images/wec/wec_c.png" alt="" v-show="index==2">
              </div>
              <div>{{val.desc}}</div>
            </li>
          </ul>
        </div>
        <div class="pd" v-show="options.length>0">
          <!--城市服务商列表-->
          <select name="" id="units" ref="units">
            <option v-for="(val,index) in options" :key="index" :value="val.unitId+'+'+val.unitName" :selected="index==optionIndex?'selected':false">{{val.unitName}}</option>
          </select>
          <!--户号或条形码-->
          <ul class="clearfix user_code tc" style="display: none"></ul>
          <div class="user_id">
            <input type="text" placeholder="请输入户号" id="cardNumber" v-model="account">
            <div id="scanQRCode1" style="display:none;"></div>
          </div>
          <input type="number" placeholder="请输入缴费金额" id="amount" style="display: none">
          <button class="button bgo cf f32" @click="subInfo" v-show="!isAddCard">查询</button>
          <input type="text" placeholder="请输入备注名" v-show="isAddCard" v-model="note">
          <button class="button bgo cf f32" @click="saveInfo" v-show="isAddCard">保存</button>
        </div>
        <div v-show="options.length==0" class="noinfo">
          该城市暂不支持
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import _wec from '../../fetch/wec'
import * as tools from '../../util/checkParams'
import { alert } from '../../util/tool'
import router from '../../router'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      currentCity: '',
      typeIndex: 0,
      type: [
        {
          desc: '水费',
          sonBusiType: 6
        },
        {
          desc: '电费',
          sonBusiType: 7
        },
        {
          desc: '煤费',
          sonBusiType: 8
        }
      ],
      unitData: {
        busiType: 1,
        regionId: 'v2281',
        unitId: 0
      },
      options: [],
      areaStr: '上海市',
      account: '',
      note: '',
      optionIndex: 0
    }
  },
  computed: {
    ...mapGetters([
      'chooseItem'
    ]),
    isShow() {
      if (this.$route.path === '/index/wec' || this.$route.path === '/me/card/cardadd') {
        return true
      }
      return false
    },
    isAddCard() {
      if (this.$route.path === '/me/card/cardadd') {
        return true
      }
      return false
    }
  },
  mounted() {
    if (this.$route.query.unitId) {
      this.changeType(this.$route.query.cardType - 2)
      this.account = this.$route.query.cardNumber
      this.sonBusiType = this.$route.query.cardType - 1 + 5
      this.$refs.units.value = this.$route.query.unitId + '+' + this.$route.query.unitName
    } else {
      this.getUnit()
    }
  },
  watch: {
    $route(to, from) {
      this.getUnit()
    }
  },
  methods: {
    getCityByTxmap(data) {
      if (!this.currentCity) {
        this.currentCity = data.result.ad_info.city
      }
    },
    changeType(index) {
      this.typeIndex = index
      this.unitData.busiType = index + 1
      this.account = ''
      this.getUnit()
    },
    getUnit() {
      if (this.chooseItem.regionId) {
        this.unitData.regionId = this.chooseItem.regionId
        this.areaStr = this.chooseItem.name
      }
      _wec.getUnitData(this.unitData).then(res => {
        this.options = res.result
        if (this.$route.query.unitId) {
          for (let i = 0; i < this.options.length; i++) {
            if (this.options[i].unitId === this.$route.query.unitId) {
              this.optionIndex = i
            }
          }
        }
      })
    },
    subInfo() {
      if (tools.isEmpty(this.account)) {
        alert('请输入户号')
        return false
      }
      let wecParams = {
        unitId: this.$refs.units.value.split('+')[0],
        unitName: this.$refs.units.value.split('+')[1],
        account: this.account,
        sonBusiType: this.type[this.typeIndex].sonBusiType
      }
      // 号箱选择
      if (this.$route.query.cardId) {
        wecParams['cardId'] = this.$route.query.cardId
      }
      router.push({ path: '/index/wec/orderlist', query: wecParams })
    },
    saveInfo() {
      let data = {
        cardNumber: this.account,
        note: this.note,
        unitId: this.$refs.units.value.split('+')[0],
        cardType: this.typeIndex + 2,
        unitName: this.$refs.units.value.split('+')[1]
      }
      this.$emit('saveWecInfo', data)
    }
  }
}
</script>
<style scoped>
.aaa {
  overflow: scroll;
}

.content li {
  width: 33.33%;
}

.position_text {
  padding: .2rem .3rem .2rem 0;
  background: url(../../assets/images/wec/position.png) right center no-repeat;
  -webkit-background-size: .16rem .26rem;
  background-size: .16rem .26rem;
  text-decoration: underline;
}

.active .wec_icon {
  background-color: #fc5b32;
}

.wec_icon {
  width: 1.2rem;
  height: 1.2rem;
  background-color: #b3b3b3;
  border-radius: 5px;
  margin: 0 auto;
}

select {
  background: url(../../assets/images/wec/sel.png) 97% center no-repeat;
  -webkit-background-size: .3rem auto;
  background-size: .3rem auto;
  margin-top: 1rem;
}

button {
  margin-top: .5rem;
}

select,
input {
  display: block;
  height: .8rem;
  line-height: .8rem;
  border: 1px solid #ccc;
  margin-bottom: .2rem;
  width: 100%;
  padding: 0 .2rem;
  font-size: .3rem;
}

.noinfo {
  line-height: 2rem;
  text-align: center;
}

.card {
  background: url(../../assets/images/gas/ykcz_kabao@2x.png) 0 0 no-repeat;
  border-radius: 50%;
  -webkit-background-size: cover;
  background-size: cover;
}
</style>
