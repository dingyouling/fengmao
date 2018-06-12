<template>
  <div class="toast">
    <div class="mask"></div>
    <div class="toast-wrap">
      <div>
        <i class="icon" v-show="success">&#xe848;</i>
        <i class="icon" v-show="fail">&#xe62d;</i>
      </div>
      <div class="text">
        {{toastMsg}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: mapGetters({
    'success': 'showSuccess',
    'fail': 'showFail',
    'toastMsg': 'toastMsg'
  })
}
</script>

<style lang="scss" scoped>
@function px2rem($px, $base-font-size: 75px) {
  @return ($px / $base-font-size) * 1rem;
}
@font-face {
  font-family: 'icon';  /* project id 172436 */
  src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot');
  src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.woff') format('woff'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.svg#iconfont') format('svg');
}
.icon {
    font-family:"icon" !important;
    font-size:18px;
    font-style:normal;
    color: #ffffff;
}
.toast {
  z-index: 100;
  .toast-wrap {
    position: fixed;
    width: 2.5rem;
    height: 2.5rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1002;
    .icon {
      font-size: px2rem(80px);
    }
    .text {
      font-size: 14px;
      color: #fff;
      margin-top: px2rem(20px);
    }
  }
  .mask {
    position: fixed;
    width: 100%;
    margin: 0 auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1001;
    background: rgba(0, 0, 0, .6);
  }
}
</style>