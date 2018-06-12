<template>
  <div class="cardadd">
    <header class="bgf">
      <a href="javascript:history.back();" id="back" class="f24 back"></a>
      <h1 class="f40 tc category" idd="0" id="header_h1">{{typeArr[$route.query.typeindex]}}</h1>
    </header>

    <!--手机号添加开始-->
    <div class="phone" id="div_phone" v-show="$route.query.typeindex==0">
      <div class="pd">
        <div class="dc_add_box bgf">
          <div>
            <div class="dc_add_item dc_add_bb">
              <div class="dc_add_item_left c33 f30 fl">手机号:</div>
              <div class="dc_add_item_right fr">
                <input type="number" name="cardNumber" class="c33 f30 integer mobileNo" placeholder="请输入手机号" v-model="cardNumber">
              </div>
            </div>
            <div class="dc_add_item">
              <div class="dc_add_item_left c33 f30 fl">备注名:</div>
              <div class="dc_add_item_right fr">
                <input type="text" name="note" maxlength="30" class="c33 f30" placeholder="请输入备注名" v-model="note">
              </div>
            </div>
          </div>
        </div>
        <a href="javascript:void(0);" class="button cf f36 tc bgo dc_btn save_add_card" @click="savePhone">保存</a>
      </div>
    </div>
    <!--手机号添加结束-->

    <!--油卡号添加开始-->
    <div class="gas" id="div_gas" v-show="$route.query.typeindex==1">
      <div class="pd">
        <div class="dc_add_box bgf">
          <div>
            <div class="dc_add_item dc_add_bb">
              <div class="dc_add_item_left c33 f30 fl">油卡机构:</div>
              <div class="dc_add_item_right fr">
                <div class="dc_add_right_jg cf f30 tc fl mr3" :class="{bgo:oilType == 1,bgc:oilType ==2}" @click="oilType = 1">中石化</div>
                <div class="dc_add_right_jg cf f30 tc fl mr3" :class="{bgo:oilType == 2,bgc:oilType ==1}" @click="oilType = 2">中石油</div>
              </div>
            </div>
            <div class="dc_add_item dc_add_bb">
              <div class="dc_add_item_left c33 f30 fl">油卡卡号:</div>
              <div class="dc_add_item_right fr">
                <input type="text" name="cardNumber" maxlength="23" class="c33 f30 autoHandleCardNo" placeholder="请输入卡号" v-model="cardNumber">
              </div>
            </div>
            <div class="dc_add_item">
              <div class="dc_add_item_left c33 f30 fl">备注名:</div>
              <div class="dc_add_item_right fr">
                <input type="text" name="note" placeholder="请输入备注名" class="c33 f30" v-model="note">
              </div>
            </div>
          </div>
        </div>
        <a href="javascript:void(0);" class="button cf f36 tc bgo dc_btn save_add_card" @click="saveOil">保存</a>
      </div>
    </div>
    <!--油卡号添加结束-->

    <!--游戏账号添加开始-->
    <div class="game" id="div_game" v-show="$route.query.typeindex==3">
      <!-- qq类游戏 -->
      <div class="pd" id="qq">
        <div class="dc_add_box bgf">
          <div>
            <div class="dc_add_item dc_add_bb con">
              <div class="dc_add_item_left c33 f30 fl" id="card_number_label">
                <span>QQ</span>:</div>
              <div class="dc_add_item_right fr">
                <input type="text" name="cardNumber" class="c33 f30" placeholder="请输入账号" v-model="cardNumber">
              </div>
            </div>
            <div class="dc_add_item">
              <div class="dc_add_item_left c33 f30 fl">备注名:</div>
              <div class="dc_add_item_right fr">
                <input type="text" name="note" placeholder="请输入备注名" class="c33 f30" v-model="note">
              </div>
            </div>
          </div>
        </div>
        <a href="javascript:void(0);" class="button cf f36 tc bgo dc_btn save_add_card" @click="saveQQ">保存</a>
      </div>

      <!-- 网易一卡通游戏 -->

      <!-- 魔兽世界游戏 -->

      <div class="mask" hidden>
        <ul class="bgf f26 c66 tc">
          <li>
            <div rel="5" relHtml="Q币"><img src="../../assets/images/card/1.png" alt=""></div>
            <p>Q币</p>
          </li>
          <li>
            <div rel="5" relHtml="穿越火线"><img src="../../assets/images/card/2.png" alt=""></div>
            <p>穿越火线</p>
          </li>
          <li>
            <div rel="5" relHtml="地下城与勇士"><img src="../../assets/images/card/3.png" alt=""></div>
            <p>地下城与勇士</p>
          </li>
          <li>
            <div rel="5" relHtml="英雄联盟"><img src="../../assets/images/card/4.png" alt=""></div>
            <p>英雄联盟</p>
          </li>
          <li>
            <div rel="7" relHtml="网易一卡通"><img src="../../assets/images/card/5.png" alt=""></div>
            <p>网易一卡通</p>
          </li>
          <li>
            <div rel="8" relHtml="魔兽世界"><img src="../../assets/images/card/6.png" alt=""></div>
            <p>魔兽世界</p>
          </li>
          <div class="sj"></div>
        </ul>
      </div>
    </div>

    <!--游戏账号添加结束-->

    <!-- 生活缴费添加开始 -->
    <Wec v-show="$route.query.typeindex==2" @saveWecInfo="saveWecInfo"></Wec>
    <!-- 生活缴费添加结束 -->

    <!-- 火车票添加开始 -->
    <TrainsAdd v-show="$route.query.typeindex==4"></TrainsAdd>
    <!-- 火车票添加结束 -->
  </div>
</template>

<script>
import * as tools from '../../util/checkParams'
import { alert } from '../../util/tool'
import _me from '../../fetch/me'
import router from '../../router'
import Wec from '../index/Wec'
import TrainsAdd from './TrainsAdd'

export default {
  data() {
    return {
      typeArr: ['手机号', '油卡', '生活缴费', 'QQ账号', '火车票'],
      cardNumber: '',
      note: '',
      oilType: 1
    }
  },
  components: {
    Wec,
    TrainsAdd
  },
  mounted() {
    if (this.$route.query.cardNumber) {
      this.cardNumber = this.$route.query.cardNumber
      this.note = this.$route.query.note
      this.oilType = this.$route.query.unitName === '中国石化' ? 1 : 2
    }
  },
  methods: {
    savePhone() {
      if (!tools.isMobile(this.cardNumber)) {
        alert('请输入正确的手机号码')
        return false
      }
      if (this.$route.query.cardNumber) {     // 更新
        _me.updataCard({
          cardNumber: this.cardNumber,
          cardType: 6,
          note: this.note,
          cardId: this.$route.query.cardId
        }).then(res => {
          alert('修改成功')
          router.push({ path: '/me/card', query: { typeindex: 0 } })
        })
      } else {
        _me.addCard({
          cardNumber: this.cardNumber,
          cardType: 6,
          note: this.note
        }).then(res => {
          alert('添加成功')
          router.push({ path: '/me/card', query: { typeindex: 0 } })
        })
      }
    },
    saveOil() {
      let unitName
      if (this.oilType === 1) {
        if (!tools.isZsh(this.cardNumber)) {
          alert('请输入正确的中石化卡号')
          return false
        }
        unitName = '中国石化'
      } else if (this.oilType === 2) {
        if (!tools.isZsy(this.cardNumber)) {
          alert('请输入正确的中石油卡号')
          return false
        }
        unitName = '中国石油'
      }
      if (this.$route.query.cardNumber) {
        _me.updataCard({
          note: this.note,
          cardNumber: this.cardNumber,
          unitName: unitName,
          cardType: 1,
          cardId: this.$route.query.cardId
        }).then(res => {
          alert('添加成功')
          router.push({ path: '/me/card', query: { typeindex: 1 } })
        })
      } else {
        _me.addCard({
          note: this.note,
          cardNumber: this.cardNumber,
          unitName: unitName,
          cardType: 1
        }).then(res => {
          alert('添加成功')
          router.push({ path: '/me/card', query: { typeindex: 1 } })
        })
      }
    },
    saveWecInfo(data) {
      _me.addCard(data).then(res => {
        alert('添加成功')
        router.push({ path: '/me/card', query: { typeindex: 2 } })
      })
    },
    saveQQ() {
      if (tools.isEmpty(this.cardNumber)) {
        alert('请输入QQ号码')
        return false
      }
      if (this.$route.query.cardNumber) {     // 更新
        _me.updataCard({
          cardNumber: this.cardNumber,
          cardType: 5,
          note: this.note,
          cardId: this.$route.query.cardId
        }).then(res => {
          alert('修改成功')
          router.push({ path: '/me/card', query: { typeindex: 3 } })
        })
      } else {
        _me.addCard({
          cardNumber: this.cardNumber,
          cardType: 5,
          note: this.note
        }).then(res => {
          alert('添加成功')
          router.push({ path: '/me/card', query: { typeindex: 3 } })
        })
      }
    }
  }
}
</script>

<style>
.dc_add_box {
  border: 1px solid #E6E6E6;
  margin-bottom: .5rem;
  border-radius: 5px;
}

.dc_add_box>div {
  margin: .3rem .4rem;
}

.dc_add_item {
  height: 1.05rem;
}

.dc_add_bb {
  border-bottom: 1px solid #E6E6E6;
}

.dc_add_item_left {
  width: 1.4rem;
  text-align: right;
  line-height: 1.05rem;
}

.dc_add_item_right {
  width: 3.8rem;
  height: 1.05rem;
  margin-left: .15rem;
}

.dc_add_item_right>input {
  height: .6rem;
  vertical-align: top;
  margin-top: .25rem;
  border: none;
  outline: none;
  width: 4rem;
  position: relative;
  top: 0;
}

.dc_add_right_jg {
  width: 1.5rem;
  height: .5rem;
  border-radius: 5px;
  line-height: .5rem;
  margin-top: .26rem;
}
</style>
