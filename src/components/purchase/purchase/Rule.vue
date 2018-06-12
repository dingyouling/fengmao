<template>
  <div class="rule">
    <div id='box' class="">
      <div id='rulerWrapper'></div>
    </div>
  </div>
</template>

<script>
import '../../../assets/js/jquery-1.11.1.min.js'
import { MeasureRuler } from '../../../assets/js/rule'

export default {
  data() {
    return {
      measureRuler: {}
    }
  },
  props: ['sendRuleData'],
  mounted() {
    this.initRule()
  },
  watch: {
    sendRuleData() {
      this.measureRuler.setValue(this.sendRuleData)
    }
  },
  methods: {
    initRule() {
      // 初始化尺子
      this.measureRuler = new MeasureRuler({
        wrapperId: 'rulerWrapper',     // 容器ID，页面中写一个DIV就行 (必须)
        max: 100000,                     // 刻度尺最大的刻度    (非必须，默认为2000)
        minUnit: 5,                    // 刻度尺最小刻度    (非必须，默认为1)
        unitSet: 10,                   // 刻度尺单元长度    (非必须，默认是10)
        value: 1000,                      // 初始化数值       (非必须，默认为1)
        mult: 1,                       // 刻度值倍数，默认是最小刻度值为10px，如果定mult为3则最小刻度为30px (非必须，默认为1)
        callback: this.rulerSetValue        // 滑动尺子过程中的回调函数     (非必须)
      })
    },
    rulerSetValue(val) {
      if (val > 100000) {
        this.measureRuler.setValue(100000)
      }
      this.$emit('ruleData', val)
    }
  }
}
</script>

<style>
#box {
  margin: .2rem auto;
  border-top: 1px solid #8e8e8e;
}

.rulerWrapper .rulerPointer {
  position: absolute;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-top: 15px solid #8e8e8e;
  left: 50%;
  margin-left: -10px;
}

.rulerWrapper {
  background: #fff;
  height: 60px;
  overflow: hidden;
  position: relative;
}

.rulerWrapper .rulerScroller {
  position: absolute;
  display: -webkit-flex;
  display: -webkit-box;
  display: flex;
  left: -10px;
}

.rulerWrapper .rulerScroller ul {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding: 0;
  width: 100px;
  height: 30px;
  float: left;
  border-right: 1px solid #8e8e8e;
  position: relative;
}

.rulerWrapper .rulerScroller li {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  width: 10px;
  float: left;
  border-right: 1px solid #8e8e8e;
  height: 20px;
}

.rulerWrapper .doTime span {
  margin-left: -15px
}

.rulerWrapper .sizeNo {
  position: absolute;
  color: #8e8e8e;
  top: 35px;
  display: block;
  text-align: center
}
</style>
