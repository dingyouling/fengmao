<template>
  <div class="product">
    <div class="pd combo">
      <h1 class="f30">超值套餐</h1>
      <router-link to="/purchase" class="bgf" v-for="(val,index) in indexProd" :key="index">
        <p class="combo1 f24 c8e">风猫{{val.givingNum}}期 </p>
        <p class="combo2 f48 co">得{{10 * (100+val.givingPercent)}}</p>
        <p class="combo3 f48 c66">{{val.givingNum}}期</p>
        <p class="combo4 f24 c8e">买1000</p>
        <p class="combo5 f24 c8e">到账</p>
        <div class="canvasdc tc co">
          <canvas :cuur="val.givingPercent/100" class="canvas1"></canvas>
          <p class="f34">{{val.givingPercent}}%</p>
          <p class="f28">赠送</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      dataList: []
    }
  },
  computed: {
    ...mapGetters([
      'indexProd'
    ])
  },
  created() {
    let _this = this
    if (this.$route.path === '/index') {
      setTimeout(function() {
        _this.fillCanvas()
      }, 500)
    }
  },
  watch: {
    $route() {
      let _this = this
      if (this.$route.path === '/index') {
        setTimeout(function() {
          _this.fillCanvas()
        }, 500)
      }
    }
  },
  methods: {
    fillCanvas() {
      var canvas = document.getElementsByClassName('canvas1')
      let canvaswidth = document.getElementsByClassName('canvasdc')[0].clientWidth
      for (var i = 0; i < canvas.length; i++) {
        canvas[i].width = canvaswidth
        canvas[i].height = canvaswidth
        this.arc(canvas[i], canvas[i].getAttribute('cuur'), canvaswidth)
      }
    },
    arc(obj, cuur, canvaswidth) {
      var cobj = obj.getContext('2d')
      cobj.beginPath()
      cobj.lineWidth = 2
      cobj.strokeStyle = '#DEDEDE'
      cobj.arc(canvaswidth / 2, canvaswidth / 2, canvaswidth / 2 - 2, -Math.PI / 2, 2 * Math.PI)
      cobj.stroke()
      cobj.beginPath()
      cobj.lineWidth = 2
      cobj.strokeStyle = '#FF5933'
      cobj.arc(canvaswidth / 2, canvaswidth / 2, canvaswidth / 2 - 2, -Math.PI / 2, 2 * Math.PI * (cuur - 0.25))
      cobj.stroke()
    }
  }
}
</script>

<style scoped>
.product {
  padding-bottom: 1rem;
  background: #f3f3f3;
}

.canvasdc {
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  right: .6rem;
  bottom: .4rem;
  padding: .2rem 0;
}

.canvasdc canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.canvasdc p {
  line-height: .4rem;
}

.combo>a {
  display: block;
  height: 2.2rem;
  position: relative;
  margin-bottom: .2rem;
}

.combo>h1 {
  line-height: .7rem;
  padding-left: .6rem;
  background: url("../../../assets/images/index/tj.png") left center no-repeat;
  -webkit-background-size: .4rem;
  background-size: .4rem;
}

.combo>div {
  height: 2.2rem;
  position: relative;
  margin-bottom: .2rem;
}

.combo1 {
  position: absolute;
  top: .25rem;
  left: .49rem;
}

.combo2 {
  position: absolute;
  top: .9rem;
  left: .49rem;
}

.combo3 {
  position: absolute;
  top: .9rem;
  left: 3rem;
}

.combo4 {
  position: absolute;
  top: 1.55rem;
  left: .6rem;
}

.combo5 {
  position: absolute;
  top: 1.55rem;
  left: 3.1rem;
}

.combo6 {
  position: absolute;
  top: .83rem;
  right: .49rem;
  width: 1.7rem;
  height: .6rem;
  display: block;
  line-height: .6rem;
  border-radius: 5px;
}
</style>

