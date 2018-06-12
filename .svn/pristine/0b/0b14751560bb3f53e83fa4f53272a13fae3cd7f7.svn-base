<template>
  <div class="prebusiness" v-show="isShow">
    <header class="bgf">
      <router-link to="/purchase" class="f24 back"></router-link>
      <h1 class="f40 tc">预购</h1>
    </header>
    <div class="pd clearfix bgf3 f36 bdl_w">
      <div class="bdl">
        请选择每月会充值的业务（可多选）
      </div>
    </div>
    <div class="pd">
      <div class="dyl_row clearfix">
        <div class="dyl_gas_c33 tc fl bz dc" v-for="(val,index) in dataList" :key="index" @click="focus(index)">
          <p class="f22">{{val}}</p>
          <h3><input type="text" value="" class="f30 integer" maxlength="8" @blur="blur(index)"></h3>
        </div>
      </div>
      <button class="button bgo cf f36" @click="next">下一步</button>
    </div>
  </div>
</template>

<script>
import router from '../../router'
export default {
  data() {
    return {
      dataList: ['话费充值', '流量充值', '加油卡', '游戏点卡', '水电煤', '电影票', '火车票'],
      amount: 0
    }
  },
  computed: {
    isShow() {
      if (this.$route.path === '/purchase/prebusiness') {
        return true
      }
      return false
    }
  },
  methods: {
    focus(index) {
      let box = document.getElementsByClassName('dyl_gas_c33')
      for (var i = 0; i < box.length; i++) {
        if (i === index) {
          box[i].classList.add('active')
          box[i].querySelector('input').focus()
          box[i].querySelector('p').classList.add('f22')
          box[i].querySelector('p').style.lineHeight = '.5rem'
        } else {
          if (!box[i].querySelector('input').value > 0) {
            box[i].classList.remove('active')
          }
        }
      }
    },
    blur(index) {
      let box = document.getElementsByClassName('dyl_gas_c33')
      if (!box[index].querySelector('input').value > 0) {
        box[index].classList.remove('active')
        box[index].querySelector('p').classList.remove('f22')
        box[index].querySelector('p').style.lineHeight = '1.2rem'
      }
    },
    next() {
      let input = document.getElementsByClassName('dyl_row')[0].querySelectorAll('input')
      for (var i = 0; i < input.length; i++) {
        if (input[i].value > 0) {
          this.amount += parseFloat(input[i].value)
        }
      }
      router.push({ path: '/purchase/preadvance?amount=' + this.amount })
    }
  }
}
</script>

<style scoped>
.prebusiness {
  height: 100%;
  background: #fff;
}

.dyl_gas_c33.active {
  border: 1px solid #fc5b32;
  color: #fc5b32;
}

.dyl_gas_c33.active h3,
.dyl_gas_c33.active p {
  color: #fc5b32;
}

.bdl {
  border-left: solid 2px #fc5b32;
  padding-left: .1rem;
}

.bdl_w {
  padding: .2rem .3rem;
}

.dyl_gas_c33 p {
  line-height: 1.2rem;
  font-size: .32rem;
  color: #8e8e8e;
}

.dc input {
  height: .5rem;
  margin-top: .32rem;
}

.disable.dyl_gas_c33 p {
  height: 1.1rem;
  line-height: 1.1rem;
}

.dyl_gas_c33.disable {
  border: 1px solid #e5e5e5;
}

.dyl_gas_c33.active p {
  font-size: .28rem;
}

.active ::-webkit-input-placeholder {
  color: #fc5b32;
}

.active :-moz-placeholder {
  /* Firefox 18- */
  color: #fc5b32;
}

.active ::-moz-placeholder {
  /* Firefox 19+ */
  color: #fc5b32;
}

.active :-ms-input-placeholder {
  color: #fc5b32;
}

.dc.active input {
  color: #fc5b32;
  margin-top: 0;
}

.dyl_row {
  padding-top: .2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.dyl_gas_c33 {
  width: 29.33333333%;
  height: 1.2rem;
  border: 1px solid #ccc;
  border-radius: .1rem;
  margin-bottom: .2rem;
  overflow: hidden;
}

.dyl_gas_c33 h3 {
  height: .4rem;
}

.dyl_gas_c33 input {
  height: .58rem;
  vertical-align: top;
  width: 90%;
  text-align: center;
}
</style>
