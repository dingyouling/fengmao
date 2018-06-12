<template>
  <div class="oil">
    <div v-show="isShow">
      <header class="bgf">
        <router-link to="/" class="f24 back"></router-link>
        <h1 class="f28 tc gas_recharge_hd">
          <ul class="clearfix">
            <router-link class="fl" tag="li" to="/index/oil/zsh" active-class="active">中石化</router-link>
            <router-link class="fl" tag="li" to="/index/oil/zsy" active-class="active">中石油</router-link>
            <router-link class="fl" tag="li" to="/index/oil/oillogin" active-class="active">油卡账号</router-link>
          </ul>
        </h1>
        <a href="static/help/gas_help.html" class="dyl_help fr"></a>
      </header>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    isShow() {
      if (this.$route.path.split('/').length === 4) {
        return true
      }
      return false
    }
  }
}
</script>

<style>
.oil {
  height: 100%;
}

.gas_recharge_hd {
  margin: 0 .8rem;
}

.gas_recharge_hd ul {
  overflow: hidden;
  width: 3.84rem;
  line-height: .58rem;
  margin: 0 auto;
  margin-top: .15rem;
}

.gas_recharge_hd ul li {
  width: 33.33%;
  height: .7rem;
  border-bottom: 1px solid transparent;
}

.gas_recharge_hd ul li.active {
  color: #fc5b32;
  border-color: #fc5b32;
}

.dyl_gas_nums {
  border-bottom: solid #ccc 1px;
  position: relative;
  padding: .2rem 0;
}

.dyl_gas_recharge_num,
.dyl_gas_recharge_num input {
  line-height: .8rem;
  font-size: .5rem;
  width: 5.8rem;
}

.dyl_gas_recharge_chioce {
  display: block;
  width: .69rem;
  height: .69rem;
  background: url(../../assets/images/gas/ykcz_kabao@2x.png) 0 0 no-repeat;
  -webkit-background-size: .69rem .69rem;
  background-size: .69rem .69rem;
  margin-top: .1rem;
}

.dyl_gas_inventory {
  line-height: 1rem;
}

.dyl_gas_inventory1 {
  background: url(../../assets/images/gas/kc@2x.png) 0 center no-repeat;
  -webkit-background-size: .3rem .3rem;
  background-size: .3rem .3rem;
  padding-left: .4rem;
}

.dyl_gas_inventory2 {
  background: url(../../assets/images/gas/mb@2x.png) 0 center no-repeat;
  -webkit-background-size: .3rem .3rem;
  background-size: .3rem .3rem;
  padding-left: .4rem;
}

.recharge_bill {
  height: 1rem;
  border: 1px solid #ccc;
  margin-bottom: .3rem;
  line-height: 1rem;
  padding: 0 .3rem;
  border-radius: 5px;
}

.line100.c8e {
  padding-left: .9rem;
  background-image: url("../../assets/images/common/pay_no.png");
  background-repeat: no-repeat;
  background-position: .3rem center;
  -webkit-background-size: .4rem;
  background-size: .4rem;
  position: relative;
}

.line100.agree {
  padding-left: .9rem;
  background-image: url("../../assets/images/common/pay_yes.png");
  background-repeat: no-repeat;
  background-position: .3rem center;
  -webkit-background-size: .4rem;
  background-size: .4rem;
  position: relative;
}

.line100 {
  display: block;
  line-height: 1rem;
}

.dyl_gas_recharge_button #charge_btn {
  margin-top: .2rem;
  border-radius: 1rem;
}

#gas_list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.dyl_gas_c33 {
  width: 30%;
  height: 1.2rem;
  border: 1px solid #ccc;
  border-radius: .1rem;
  margin-bottom: .2rem;
  overflow: hidden;
  margin-right: 3.33%;
  display: block;
  padding: .2rem 0;
}

.dyl_gas_c33.active {
  border: 1px solid #fc5b32;
}

.dyl_gas_c33.active h3,
.dyl_gas_c33.active p {
  color: #fc5b32;
}

.dyl_gas_c33 input {
  line-height: .9rem;
}

.dyl_gas_c33 input {
  width: 100%;
}

.focus.active input {
  line-height: .4rem;
  color: #fc5b32;
}

.focus.active.dyl_gas_c33 {
  border: 1px solid #fc5b32;
}

.focus.active ::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #fc5b32;
}

.focus.active :-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #fc5b32;
}

.focus.active ::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #fc5b32;
}

.focus.active :-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #fc5b32;
}

input[type='checkbox'] {
  position: absolute;
  width: 0.4rem;
  height: .4rem;
  top: .3rem;
  left: .3rem;
}
</style>
