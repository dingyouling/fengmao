<template>
  <div class="oilList">
    <header class="pd bgf">
      <router-link to="/index/oil/oillogin" class="f24 back"></router-link>
      <router-link to="/index/oil/oillogin/ologin" class="f24 fr">添加账号</router-link>
      <h1 class="f40 tc category">账号油卡管理</h1>
    </header>
    <div class="search clearfix pd">
      <div class="fl"><input type="text" class="f24" placeholder="请输入姓名" style="height: .6rem;width: 5.5rem;" v-model="searchContext" @blur="getOilAccountList"></div>
      <div class="fr co refer" @click="refer">
        <span class="f26" ref="time"></span>
        <img src="../../../assets/images/common/refer.png" alt="" ref="search">
      </div>
    </div>
    <div class="dataList pd">
      <div class="box" v-for="(val,index) in oilAccountList" :key="index" :class="{zsh:val.oilType==2,zsy:val.oilType==1}">
        <div class="box_top pd cf f30">
          <span>{{val.loginName}} ({{val.oilType===1?'中石油':'中石化'}})</span>
          <span class="close" @click="delOilAccount(val.accountId)"></span>
        </div>
        <router-link :to="'/index/oil/oillogin/subinfo?type=bz&accountId='+val.accountId" class="pd bz bgf">
          <div class="f28 c8e">备注</div>
          <div class="f32 c33">{{val.aliasName}}</div>
        </router-link>
        <div class="box_mid bgf">
          <div class="pd" v-for="(item,ind) in val.cardList" :key="ind">
            <div class="no" v-show="sendGas.cardNo != item.cardNo" @click="getCardNo(item.cardNo,val.loginName,val.oilType)">
              <div class="f28 c8e">{{ind==0?'油卡卡号':''}}</div>
              <div class="f32 c33">{{item.cardNo}}</div>
            </div>
            <div class="yes" v-show="sendGas.cardNo == item.cardNo">
              <div class="f28 c8e">{{ind==0?'油卡卡号':''}}</div>
              <div class="f32 c33">{{item.cardNo}}</div>
            </div>
          </div>
        </div>
        <router-link :to="'/index/oil/oillogin/obind?accountId='+val.accountId+'&chargeType='+val.oilType" class="box_bottom tc bgf f28">添加一个油卡号>></router-link>
      </div>
    </div>

    <div class="toRecharge f36 cf tc" @click="sendGasInfo">去充值</div>
  </div>
</template>

<script>
import _oil from '../../../fetch/oil'
import { alert } from '../../../util/tool'
import * as tools from '../../../util/checkParams'
import router from '../../../router'

export default {
  data() {
    return {
      oilAccountList: [],
      searchContext: '',
      time: true,
      sendGas: {
        cardNo: '',
        oilType: 1,
        loginName: ''
      }
    }
  },
  mounted() {
    this.getOilAccountList()
  },
  methods: {
    getOilAccountList() {
      _oil.getOilAccountList({
        pageSize: 20,
        searchContext: this.searchContext
      }).then(res => {
        this.oilAccountList = res.result
      }).catch(error => {
        console.log(error)
      })
    },
    refer() {
      let _this = this
      if (_this.time) {
        let countDown = 120
        _this.$refs.time.style.display = 'block'
        _this.$refs.search.style.display = 'none'
        _this.time = false
        _this.$refs.time.innerHTML = countDown + 's'
        let t = setInterval(function() {
          countDown--
          _this.$refs.time.innerHTML = countDown + 's'
          if (countDown < 0) {
            _this.$refs.time.style.display = 'none'
            _this.$refs.search.style.display = 'block'
            _this.time = true
            clearInterval(t)
          }
        }, 1000)
        _oil.updateOilAccount().then(res => {
          if (res.success) {
            _this.getOilAccountList()
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    delOilAccount(accountId) {
      _oil.delOilAccount({
        accountId: accountId
      }).then(res => {
        this.getOilAccountList()
        console.log(res)
        alert('删除成功')
      }).catch(error => {
        console.log(error)
      })
    },
    sendGasInfo() {
      if (tools.isEmpty(this.sendGas.cardNo)) {
        alert('请选择卡号')
        return false
      }
      router.push({ path: '/index/oil/oillogin', query: { cardNo: this.sendGas.cardNo, oilType: this.sendGas.oilType, loginName: this.sendGas.loginName } })
    },
    getCardNo(cardNo, loginName, oilType) {
      this.sendGas.cardNo = cardNo
      this.sendGas.loginName = loginName
      this.sendGas.oilType = oilType
    }
  }
}
</script>

<style scoped>
.dataList {
  padding-bottom: 1.2rem;
}

.oilList {
  background: #f3f3f3;
}

.search>.fl {
  /*width:6.2rem;*/
  width: 6rem;
  height: .6rem;
  line-height: .6rem;
  border-radius: .6rem;
  margin: .2rem auto;
  padding-left: .7rem;
  background-image: url("../../../assets/images/common/search.png");
  background-repeat: no-repeat;
  background-position: .2rem center;
  -webkit-background-size: .3rem;
  background-size: .3rem;
  background-color: #fff;
  overflow: hidden;
}

.search>.fr {
  line-height: 1rem;
  position: relative;
  width: .5rem;
}

.search>.fr>span {
  display: none;
}

.search>.fr>img {
  width: .5rem;
  position: absolute;
  top: .3rem;
}

.box {
  margin-bottom: .2rem;
}

.zsh .box_top {
  width: 100%;
  line-height: .6rem;
  height: .6rem;
  border-radius: 5px 5px 0 0;
  background: -webkit-gradient(linear, left top, right top, from(#f65252), to(#ff7171));
}

.zsy .box_top {
  width: 100%;
  line-height: .6rem;
  height: .6rem;
  border-radius: 5px 5px 0 0;
  background: -webkit-gradient(linear, left top, right top, from(#fa7636), to(#feba27));
}

.box .close {
  background: url("../../../assets/images/trains/close.png") no-repeat center;
  -webkit-background-size: .3rem;
  background-size: .3rem;
  display: inline-block;
  width: .3rem;
  height: .6rem;
  float: right;
}

.box_mid .no {
  line-height: 1rem;
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #f3f3f3;
  background-image: url("../../../assets/images/common/pay_no.png");
  background-repeat: no-repeat;
  background-position: 5.8rem center;
  -webkit-background-size: .4rem;
  background-size: .4rem;
}

.box_mid .yes {
  line-height: 1rem;
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #f3f3f3;
  background-image: url("../../../assets/images/common/pay_yes.png");
  background-repeat: no-repeat;
  background-position: 5.8rem center;
  -webkit-background-size: .4rem;
  background-size: .4rem;
}

.bz {
  line-height: 1rem;
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #f3f3f3;
  -webkit-background-size: .4rem;
  background-image: url("../../../assets/images/common/right.png");
  background-repeat: no-repeat;
  background-position: 6.3rem center;
  background-size: .2rem;
}

.box_mid .f28,
.bz .f28 {
  width: 1.5rem;
}

.box_bottom {
  line-height: 1rem;
  border-radius: 0 0 5px 5px;
  display: block;
  color: #ff6953;
}

.toRecharge {
  width: 100%;
  line-height: 1rem;
  background: #fc5b32;
  position: fixed;
  bottom: 0;
  left: 0;
}

#load_more {
  margin: .2rem 0;
}
</style>
