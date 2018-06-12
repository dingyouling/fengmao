<template>
  <div class="bind">
    <header class="bgf">
      <a href="javascript:history.back();" class="f24 back"></a>
      <h1 class="f40 tc">绑定分销商</h1>
    </header>
    <div class="content1 tc pd" v-show="step==1">
      <img src="../../assets/images/common/bound.png" alt="">
      <p class="f36">您的基本信息已提交完成，可以选择分销商</p>
      <div @click="step=2" class="f32 cf bgo">输入推荐码绑定分销商</div>
    </div>
    <div class="content tc f32" v-show="step==2">
      <div>
        <input type="text" name="recommendCode" placeholder="请填写分销商推荐码" class="pd" v-model="recommendCode">
      </div>
      <div id="btn_invite" class="f32 cf bgo" @click="subInfo">绑定</div>
      <router-link to="/index" class="f32 cf bgo">去逛逛</router-link>
    </div>
  </div>
</template>

<script>
import { alert } from '../../util/tool'
import * as tools from '../../util/checkParams'
import _me from '../../fetch/me'
import router from '../../router'

export default {
  data() {
    return {
      step: 1,
      recommendCode: ''
    }
  },
  methods: {
    subInfo() {
      if (tools.isEmpty(this.recommendCode)) {
        alert('推荐码不为空')
        return false
      }
      _me.recommendCodeAction({
        actionType: 1,
        recommendCode: this.recommendCode
      }).then(res => {
        console.log(res)
        alert('绑定成功')
        router.push({ path: '/index' })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.bind {
  padding-top: 1px;
}

img {
  width: 2.23rem;
  margin: 1rem auto .2rem;
}

.content1 div {
  display: block;
  width: 6.9rem;
  height: .9rem;
  line-height: .9rem;
  margin: .4rem 0;
  border-radius: 5px;
}

input {
  width: 100%;
}

.content {
  padding-top: .3rem;
}

.content>div {
  margin-bottom: .2rem;
}

input {
  border: 1px solid #ccc;
  height: .9rem;
  line-height: .9rem;
  width: 100%;
}

.content .bgo {
  display: block;
  width: 6.9rem;
  height: .9rem;
  line-height: .9rem;
  margin: .4rem auto;
  border-radius: 5px;
}
</style>
