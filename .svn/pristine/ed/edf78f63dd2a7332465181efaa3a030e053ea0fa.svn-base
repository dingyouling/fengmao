<template>
  <div class="password-box" style="">
    <div class="inner-box">
      <span class="iconfont icon-guanbi close" @click="hide">×</span>
      <h1 class="title">请输入支付密码</h1>
      <div class="flexable password">
        <div :style="{opacity:pass.length>0?'1':'0'}">●</div>
        <div :style="{opacity:pass.length>1?'1':'0'}">●</div>
        <div :style="{opacity:pass.length>2?'1':'0'}">●</div>
        <div :style="{opacity:pass.length>3?'1':'0'}">●</div>
        <div :style="{opacity:pass.length>4?'1':'0'}">●</div>
        <div :style="{opacity:pass.length>5?'1':'0'}">●</div>
      </div>
      <div class="notice color-lightblue">安全支付环境，请放心使用！</div>
      <div class="input-box">
        <div class="flexable">
          <div class="input-key" data-label="1" @click="add(1)"></div>
          <div class="input-key" data-label="2" @click="add(2)"></div>
          <div class="input-key" data-label="3" @click="add(3)"></div>
        </div>
        <div class="flexable">
          <div class="input-key" data-label="4" @click="add(4)"></div>
          <div class="input-key" data-label="5" @click="add(5)"></div>
          <div class="input-key" data-label="6" @click="add(6)"></div>
        </div>
        <div class="flexable">
          <div class="input-key" data-label="7" @click="add(7)"></div>
          <div class="input-key" data-label="8" @click="add(8)"></div>
          <div class="input-key" data-label="9" @click="add(9)"></div>
        </div>
        <div class="flexable">
          <div></div>
          <div class="input-key" data-label="0" @click="add(0)"></div>
          <div class="input-key" data-label="del" @click="del"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pass: []
    }
  },
  methods: {
    add(index) {
      if (this.pass.length < 5) {
        this.pass.push(index)
      } else if (this.pass.length === 5) {
        this.pass.push(index)
        let pass = this.pass.join('')
        this.$emit('sendPassword', pass)
        this.pass = []
      }
    },
    del() {
      this.pass.splice(this.pass.length - 1, 1)
    },
    hide() {
      this.$emit('hidePassBox', true)
    }
  }
}
</script>

<style scoped>
.flexable {
  display: -webkit-box;
}

.flexable>div {
  -webkit-box-flex: 1;
}

.flexable.password>div {
  opacity: 0
}

;
.flexable.password>div.active {
  opacity: 1 !important;
}

.password {
  margin: 12px 25px;
  height: 46px;
}

.password>div {
  height: 46px;
  line-height: 46px;
  text-align: center
}

.password>div:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px
}

.password>div:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px
}

.input-box .flexable>div {
  height: 53px
}

.input-box .flexable>div:active {
  background: rgba(255, 105, 83, .5)
}

.list-block .item-title {
  font-weight: normal!important;
  font-size: 14px
}

ul li {
  position: relative
}

.close {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 20px;
  width: 22px;
  text-align: center
}

h1.title {
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  margin: 0;
}

.notice {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  text-align: center;
  margin-bottom: 15px;
  color: #00a9dd;
}

.inner-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 380px;
  background:url(../assets/images/pwd_keyboard.png) no-repeat center bottom;
  background-size: 100% 100%;
}

.password-box {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: block;
}
</style>
