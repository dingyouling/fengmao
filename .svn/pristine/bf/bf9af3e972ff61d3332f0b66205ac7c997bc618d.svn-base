<template>
  <div class="movieseat bgf">
    <header class="bgr">
      <a href="javascript:history.back();" class="f24 back back1"></a>
      <h1 class="f40 tc cf cinema_name">{{$route.query.cinemaName}}</h1>
    </header>
    <div class="movie_info">
      <p class="f30">{{$route.query.filmInfo}} | {{$route.query.hallName}}</p>
      <p class="co f24">{{$route.query.showTime}}</p>
    </div>
    <div class="tc f26 c66 movie_charts">
      <img src="../../../assets/images/movie/charts_1.png" alt="">
      <span>可选</span>
      <img src="../../../assets/images/movie/charts_2.png" alt="">
      <span>已售</span>
      <img src="../../../assets/images/movie/charts_3.png" alt="">
      <span>已选</span>
    </div>
    <div class="bgf3" id="charts">
      <div class="movie_sel_charts">
        <div id="seat-map" ref="ul">
          <div class="front tc">屏幕</div>
          <div class="ul">
            <ul v-for="(val,index) in seatData" :key="index">
              <span>{{val.xcoord}}</span>
              <li v-for="(va,ind) in val.data" :key="ind" :code="va.code" :class="{li:va.ycoord,isOut:va.status==0,isChoose:chooseSeatData.indexOf(va.code)!==-1}" @click="chooseSeat(va)"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed pd bgf">
      <div>
        <p class="f20 c33 li60">已选座位</p>
        <div class="sel_charts">
          <div class="f20 tc c33 fl" v-for="(val,index) in chooseSeatStr" :key="index">{{val}}</div>
        </div>
      </div>
      <div class="clearfix">
        <span class="f30 fl">接收短信手机号</span> <input type="text" :placeholder="phone" class="fl" v-model="phone">
      </div>
      <div>
        <div class="fl">
          <p class="co f20">
            <span class="f50" id="total">{{$route.query.discountPrice * chooseSeatData.length}}</span>元</p>
          <p class="f24 c66">
            <span id="price">{{$route.query.discountPrice}}</span>元 ×
            <span id="counter">{{chooseSeatData.length}}</span>
          </p>
        </div>
        <a href="javascript:;" class="fr cf bgo tc f32 dcc" @click="subInfo">确认选座</a>
      </div>
    </div>
  </div>
</template>

<script>
import _movie from '../../../fetch/movie'
import _pay from '../../../fetch/pay'
import { alert } from '../../../util/tool'
import * as tools from '../../../util/checkParams'
import router from '../../../router'

export default {
  data() {
    return {
      seatData: [],
      chooseSeatData: [],
      chooseSeatValue: [],
      chooseSeatStr: [],
      phone: ''
    }
  },
  mounted() {
    this.getSeatList()
    this.phone = localStorage.mobile
  },
  methods: {
    getSeatList() {
      _movie.showCinemaSeatList({
        channelShowCode: this.$route.query.channelShowCode
      }).then(res => {
        if (res.result.length === 0) {
          alert('暂无该场次座位信息')
          return false
        }
        let newData = []
        for (let i = 0; i < res.result.length; i++) {
          let flag = true
          for (let j = 0; j < newData.length; j++) {
            if (newData[j].xcoord === res.result[i].xcoord) {
              flag = false
              newData[j].data.push(res.result[i])
            }
          }
          if (flag) {
            newData.push({
              xcoord: res.result[i].xcoord,
              data: [res.result[i]]
            })
          }
        }
        let maxlength = 0
        newData.sort(function(a, b) {
          return Number(a.xcoord) - Number(b.xcoord)
        })
        for (let i = 0; i < newData.length; i++) {
          if (newData[i].data.length > 0) {
            newData[i].data.sort(function(a, b) {
              return Number(a.ycoord) - Number(b.ycoord)
            })
            if (newData[i].data[0].ycoord > 1) {
              let length = newData[i].data[0].ycoord
              for (let j = 1; j < length; j++) {
                newData[i].data.splice(0, 0, 111)
              }
            }
            for (let k = 1; k < newData[i].data.length; k++) {
              let length = newData[i].data[k].ycoord - newData[i].data[k - 1].ycoord
              if (length > 1) {
                for (let j = 1; j < length; j++) {
                  newData[i].data.splice(k, 0, 111)
                }
              }
            }
            if (maxlength < newData[i].data.length) {
              maxlength = newData[i].data.length
            }
          }
        }
        this.$refs.ul.style.width = 54 * (maxlength + 1) * document.documentElement.clientWidth / 750 + 'px'
        this.seatData = newData
      })
    },
    chooseSeat(val) {
      let flag = true
      for (let i = 0; i < this.chooseSeatData.length; i++) {
        if (val.code === this.chooseSeatData[i]) {
          this.chooseSeatData.splice(i, 1)
          this.chooseSeatValue.splice(i, 1)
          this.chooseSeatStr.splice(i, 1)
          flag = false
        }
      }
      if (flag) {
        if (this.chooseSeatData.length < 4) {
          this.chooseSeatData.push(val.code)
          this.chooseSeatValue.push(val)
          this.chooseSeatStr.push(val.rowNum + '排' + val.colNum + '座')
        } else {
          alert('最多只能选择4个座位')
        }
      }
    },
    subInfo() {
      if (!this.checkSeat()) {
        alert('请不要留下单独座位')
        return false
      }
      if (!tools.isMobile(this.phone)) {
        alert('请输入正确的手机号码')
        return false
      }
      let filmParams = {
        channelShowCode: this.$route.query.channelShowCode,
        seatCodes: this.chooseSeatData.join(','),
        seatNo: this.chooseSeatStr.join(','),
        mobile: this.phone
      }
      let subData = {
        filmParams: JSON.stringify(filmParams),
        orderAmount: this.$route.query.origPrice * this.chooseSeatData.length,
        prodCode: 'MV_custom_C',
        prodNum: this.chooseSeatData.length
      }
      _pay.orderConfirm(subData).then(res => {
        console.log(res)
        let data = {
          orderCode: res.result.orderCode,
          discountPrice: this.$route.query.discountPrice * this.chooseSeatData.length
        }
        router.push({ path: '/index/movie/movieorder', query: data })
      })
    },
    checkSeat() {
      for (let i = 0; i < this.chooseSeatValue.length; i++) {
        for (let j = 0; j < this.seatData.length; j++) {
          if (this.seatData[j].xcoord === this.chooseSeatValue[i].xcoord) {
            let index = 0
            for (let k = 0; k < this.seatData[j].data.length; k++) {
              if (this.seatData[j].data[k].code === this.chooseSeatValue[i].code) {
                index = k
              }
            }
            // 判断首尾
            if (index < 2) {
              if (this.seatData[j].data[0].status === '1') {
                return false
              }
            } else if (index > this.seatData[j].data.length - 3) {
              if (this.seatData[j].data[this.seatData[j].data.length - 1].status === '1' && this.chooseSeatData.indexOf(this.seatData[j].data[this.seatData[j].data.length - 1].code) === -1) {
                return false
              }
            } else {
              // 判断左为空
              if (this.seatData[j].data[index - 1].status === '1' && this.chooseSeatData.indexOf(this.seatData[j].data[index - 1].code) === -1) {
                if (this.seatData[j].data[index - 2].status !== '1') {
                  return false
                }
                for (let m = 0; m < this.chooseSeatValue.length; m++) {
                  if (this.chooseSeatValue[m].code === this.seatData[j].data[index - 2].code) {
                    return false
                  }
                }
              }
              // 判断右为空
              if (this.seatData[j].data[index + 1].status === '1' && this.chooseSeatData.indexOf(this.seatData[j].data[index + 1].code) === -1) {
                if (this.seatData[j].data[index + 2].status !== '1') {
                  return false
                }
                for (let m = 0; m < this.chooseSeatValue.length; m++) {
                  if (this.chooseSeatValue[m].code === this.seatData[j].data[index + 2].code) {
                    return false
                  }
                }
              }
            }
          }
        }
      }
      return true
    }
  }
}
</script>

<style scoped>
.movieseat {
  padding-bottom: 3.3rem;
}

.movie_info {
  padding: .3rem;
  border-bottom: 1px solid #dedfe0;
}

.movie_info>p:nth-of-type(1) {
  line-height: .6rem;
}

.movie_charts {
  margin: .18rem auto;
}

.movie_charts>* {
  vertical-align: middle;
}

.movie_charts>img {
  display: inline-block;
  width: auto;
  height: .34rem;
}

.fixed {
  height: 3.3rem;
  position: fixed;
  bottom: 0;
  left: 0;
}

.fixed>div:nth-of-type(1) {
  width: 6.9rem;
  height: 1.3rem;
  border-bottom: 1px solid #dedfe0;
}

.fixed>div:nth-of-type(2) {
  width: 6.9rem;
  height: .5rem;
  margin-top: .2rem;
}

.li60 {
  line-height: .6rem;
}

.sel_charts>div {
  width: 1.6rem;
  height: .55rem;
  line-height: .55rem;
  border: 1px solid #dedfe0;
  border-radius: 5px;
  margin-right: .1rem;
}

.fixed>div:nth-of-type(3) a {
  width: 2.75rem;
  height: .73rem;
  line-height: .73rem;
  margin-top: .12rem;
  border-radius: 5px;
}

.movie_sel_charts {
  height: 6.8rem;
  overflow: scroll;
}

.front {
  width: 2.4rem;
  height: .5rem;
  line-height: .5rem;
  margin: 0 auto .3rem;
  background-color: #d9d9d9;
  border-radius: 0 0 5px 5px;
}

.fixed input {
  height: .4rem;
  margin-left: .2rem;
}

#seat-map {
  min-width: 7.5rem;
}

#seat-map .ul {
  padding: 0 .3rem;
}

#seat-map ul {
  overflow-x: scroll;
  position: relative;
  padding-left: .4rem;
}

#seat-map li {
  width: .4rem;
  height: 0.4rem;
  margin: .05rem;
  display: inline-block;
}

#seat-map .li {
  background: url('../../../assets/images/movie/charts_1.png') no-repeat center;
  background-size: contain;
}

#seat-map .isOut {
  background: url('../../../assets/images/movie/charts_2.png') no-repeat center;
  background-size: contain;
}

#seat-map .isChoose {
  background: url('../../../assets/images/movie/charts_3.png') no-repeat center;
  background-size: contain;
}

#seat-map span {
  position: absolute;
  top: .1rem;
  left: 0;
}
</style>
