<template>
	<div>
		<header class="trains-color cf">
      <a class="f24 back back1" @click="goBack()"></a>
      <h1 class="f40 tc">列车时刻</h1>
    </header>
    <div>
    	<div class="c33 f32 tc">
    		<table id="time_table">
    			<tbody>
    				<tr class="c8e">
    					<th>到达站</th>
    					<th>到达时间</th>
    					<th>出发时间</th>
    					<th>停留</th>
    				</tr>
    			</tbody>
    			<tbody>
    				<tr v-for="(val, index) in timeTableData">
    					<td>{{ val.station }}</td>
    					<td class="tabletime_round" :class="{tabletime_line: (index + 1) !== timeTableData.length, now: index >= beginTr && index <= endTr, line_now: index >= beginTr && index < endTr}">{{ val.arrivalTime }}</td>
    					<td>{{ val.departureTime }}</td>
    					<td>{{ val.stayTimeSpan === '----' ? val.stayTimeSpan : val.stayTimeSpan + '分钟' }}</td>
    				</tr>
    			</tbody>
    		</table>
    	</div>
    </div>
	</div>
</template>
<script>
import router from '../../../router'
import _trains from '../../../fetch/trains.js'
import { mapGetters } from 'vuex'
export default{
  data() {
    return {
      timeTableData: null,
      beginTr: 0,
      endTr: 0
    }
  },
  computed: {
    ...mapGetters([
      'chooseTrain'
    ])
  },
  mounted() {
    if (this.$route.query.ticketList) {
      this.getData(this.$route.query)
    } else {
      this.getData(this.chooseTrain)
    }
  },
  methods: {
    goBack() {
      router.back()
    },
    getData(data) {
      _trains.findTrainStopStation(data).then(res => {
        this.timeTableData = res.result.stations
        for (var i = 0; i < this.timeTableData.length; i++) {
          var item = this.timeTableData[i]
          if (item.station === this.chooseTrain.fromStation) {
            this.beginTr = i
          }
          if (item.station === this.chooseTrain.toStation) {
            this.endTr = i
          }
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style scoped>
table{
	width: 100%
}
table th, table td {
    width: 20%;
    line-height: 1rem;
}
table th{
	font-weight: normal;
}
.tabletime_round{
	position: relative;
}

.tabletime_round:before{
	content: '';
	display: block;
	width: .2rem;
	height: .2rem;
	background-color: #dedfe0;
	position: absolute;
	right: -.2rem;
	top: .4rem;
	border-radius: 50%;
}
.tabletime_line:after{
	content: '';
	display: block;
	position: absolute;
	right: -.1rem;
	top: .4rem;
	height: 1rem;
	width: 0;
	border-right: 1px dashed #dedfe0;
	top: .6rem;
}
.tabletime_round.now:before{
	background-color: #03a9f4;
}
.tabletime_line.line_now:after{
	border-right: 3px solid #03a9f4;
	right: -.13rem;
}
</style>