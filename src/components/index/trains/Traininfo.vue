<template>
	<div>
		<header class="trains-color cf">
      <a class="f24 back back1" @click="toBack"></a>
      <h1 class="f40 tc">选择坐席<span v-if="$route.query.trainDate">(改签)</span></h1>
    </header>
    <div>
    	<div class="cf trains-color f32 trains_case">
    		<div class="clearfix pd df">
    			<div class="fl">{{ chooseTrain.fromStation }}</div>
    			<div class="fl tc">{{ chooseTrain.trainNo }}</div>
    			<div class="fr tr">{{ chooseTrain.toStation }}</div>
    		</div>
    		<div class="clearfix pd f50">
    			<div class="fl">{{ chooseTrain.fromTime }}</div>
    			<div class="fr">{{ chooseTrain.toTime }}</div>
    		</div>
    		<div class="clearfix pd df">
    			<div class="fl">{{ trainsInfo.trainDate.split('-')[1] + '-' + trainsInfo.trainDate.split('-')[2] }}{{trainsInfo.weekDay }}</div>
    			<div class="fl f24 tc">
    				<router-link class="trains_time cf" to="/index/trains/timeTable">列车时刻</router-link>
    			</div>
    			<div class="fr tr">{{ chooseTrain.arrivalDate.split('-')[1] + '-' + chooseTrain.arrivalDate.split('-')[2] }}{{chooseTrain.arrivalWeek }}</div>
    		</div>
    		<div class="clearfix pd df"></div>
    	</div>
    	<div class="trains-color clearfix cf trains_li_header tc f28">
    		<div class="pd clearfix">
    			<div class="fl date_prev" @click="addDay(trainsInfo.trainDate, -1)">
    				<div>前一天</div>
    			</div>
    			<div class="fl">
    				<router-link class="cl" :to="{ name: '火车日期', params: { nowDate: 'nowDate=' + trainsInfo.trainDate }}">{{ trainsInfo.trainDate }}{{ trainsInfo.weekDay }}</router-link>
    			</div>
    			<div class="fr date_next" @click="addDay(trainsInfo.trainDate, 1)">
    				<div>后一天</div>
    			</div>
    		</div>
    	</div>
    	<div class="seat_list c33 tc">
    		<div class="f28" v-for="(val, index) in chooseTrain.tickets" :key="index" :class="{c8e: val.seats===0}">
    			<div>{{ val.seatName }}</div>
    			<div>{{ val.seats }}</div>
    			<div class="f36">
    				<span class="f24">￥</span>
    				{{ val.price }}
    			</div>
    			<div class="qp_btn" :class="{cl: val.seats!==0}" @click="val.seats!==0 && preBook(val)">
    				<div>预订</div>
    			</div>
    		</div>
    	</div>
    </div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { alert } from '../../../util/tool.js'
import _trains from '../../../fetch/trains.js'
import router from '../../../router'
export default{
  data() {
    return {
      trainsList: this.trainsInfo,
      sevenDay: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    }
  },
  mounted() {
    this.getTrainsList()
  },
  computed: {
    ...mapGetters([
      'chooseTrain',
      'trainsInfo'
    ])
  },
  methods: {
    toBack() {
      if (this.$route.query.trainDate) {
        router.push({path: '/index/trains/trainsList', query: this.$route.query})
      } else {
        router.push({path: '/index/trains/trainsList'})
      }
    },
    addDay(dateStr, days) {
      var date = new Date(dateStr.replace(/-/g, '/'))
      date = new Date((date.getTime() / 1000 + (24 * 60 * 60 * days)) * 1000)
      var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      if (new Date(date.getFullYear() + '-' + month + '-' + day) < new Date((new Date().getTime() / 1000 + (24 * 60 * 60 * -1)) * 1000)) {
        alert('发车日期无效')
      } else {
        this.trainsInfo.trainDate = date.getFullYear() + '-' + month + '-' + day
        this.trainsInfo.weekDay = this.sevenDay[date.getDay()]
        this.$store.dispatch('saveTrainData', this.trainsInfo)
        this.getTrainsList()
      }
    },
    getTrainsList() {
      _trains.findTrainByStation(this.trainsInfo).then(res => {
        for (var i = 0; i < res.result.trains.length; i++) {
          var train = res.result.trains[i]
          if (train.trainNo === this.chooseTrain.trainNo) {
            train.queryKey = res.result.queryKey
            let arrivalDate = new Date((new Date(this.trainsInfo.trainDate + ' ' + this.chooseTrain.fromTime)).getTime() + parseInt(this.chooseTrain.runTimeSpan) * 60 * 1000)
            train.arrivalDate = arrivalDate.getFullYear() + '-' + ((arrivalDate.getMonth() + 1) < 10 ? '0' + (arrivalDate.getMonth() + 1) : (arrivalDate.getMonth() + 1)) + '-' + (arrivalDate.getDate() < 10 ? '0' + arrivalDate.getDate() : arrivalDate.getDate())
            train.arrivalWeek = this.sevenDay[arrivalDate.getDay()]
            this.$store.dispatch('setChooseTrain', train)
          }
        }
      }).catch(error => {
        console.log(error)
      })
    },
    preBook(data) {
      this.chooseTrain.chooseSeat = {seatName: data.seatName, price: data.price, seatClass: data.seatClass}
      let arrivalDate = new Date((new Date(this.trainsInfo.trainDate + ' ' + this.chooseTrain.fromTime)).getTime() + parseInt(this.chooseTrain.runTimeSpan) * 60 * 1000)
      this.chooseTrain.arrivalDate = arrivalDate.getFullYear() + '-' + ((arrivalDate.getMonth() + 1) < 10 ? '0' + (arrivalDate.getMonth() + 1) : (arrivalDate.getMonth() + 1)) + '-' + (arrivalDate.getDate() < 10 ? '0' + arrivalDate.getDate() : arrivalDate.getDate())
      this.chooseTrain.arrivalWeek = this.sevenDay[arrivalDate.getDay()]
      this.$store.dispatch('setChooseTrain', this.chooseTrain)
      if (this.$route.query.trainDate) {
        router.push({path: '/index/trains/chooseRiders', query: this.$route.query})
      } else {
        router.push({path: '/index/trains/chooseRiders'})
      }
    }
  }
}
</script>

<style scoped>
body{
	padding-top: .88rem;
}
header{
	border:0;
}
header .f36{
	line-height: .88rem;
	margin: 0;
}
.trains_li_header{
	height: .9rem;
	line-height: .9rem;
	position: fixed;
	top:.88rem;
	left: 0;
	width:100%;
}
.trains_li_header .cl{
	width: 2.8rem;
	height: .6rem;
	border-radius: .3rem;
	line-height: .6rem;
	left: 50%;
	top: 50%;
	transform:translate(-50%,-50%);
	-webkit-transform:translate(-50%,-50%);
	position: absolute;
	background:#fff url(../../../assets/images/trains/trains_icon07@2x.png) .2rem center no-repeat;
	-webkit-background-size: .27rem .27rem;
	background-size: .27rem .27rem;
}
.trains_li_header .cl div{
	padding-left: .3rem;
}
.date_prev{
	padding-left: .2rem;
	background:url(../../../assets/images/trains/train_prev.png) left center no-repeat;
	-webkit-background-size: .13rem .25rem;
	background-size: .13rem .25rem;
}
.date_next{
	padding-right: .2rem;
	background:url(../../../assets/images/trains/train_next.png) right center no-repeat;
	-webkit-background-size: .13rem .25rem;
	background-size: .13rem .25rem;
}
.seat_list{
	line-height: 1.1rem;
}
.seat_list .f28{
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	border-bottom: solid #f2f7ff 1px;
}
.seat_list .f28 > div{
	flex:1;
}

.qp_btn > div{
	height: .6rem;
	width: 1.2rem;
	border-radius: .3rem;
	line-height: .6rem;
	margin: .3rem auto 0;
}
.qp_btn.cl > div{
	border: 1px solid #03a9f4;
}
.trains_case{
	border-bottom: 1px solid #fff;
	padding-bottom: .2rem;
}
.trains_time{
	width: 2.08rem;
	height: .6rem;
	line-height: .6rem;
	background:url(../../../assets/images/trains/trains_icon13@2x.png) center center no-repeat;
	-webkit-background-size: 2.08rem .5rem;
	background-size: 2.08rem .5rem;
	margin: 0 auto;
	display: block;
}
.trains_case{
	line-height: .7rem;
}
.trains_li_header {
	position: relative;
	top: 0;
}
</style>