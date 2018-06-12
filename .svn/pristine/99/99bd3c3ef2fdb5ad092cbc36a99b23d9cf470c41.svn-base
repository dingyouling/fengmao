<template>
  <div class="alert">
    <div class="alert-wrap">
      <div class="text">
        {{alertMsg}}
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
    'alertMsg': 'alertMsg'
  })
}

</script>

<style lang="scss" scoped>
@function px2rem($px, $base-font-size: 75px) {
  @return ($px / $base-font-size) * 1rem;
}

.alert {
  z-index: 1000;
  .alert-wrap {
    position: fixed;
    padding:.1rem .3rem;
    line-height: .6rem;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: px2rem(45px);
    background: rgba(0, 0, 0, 0.6);
    .text {
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>