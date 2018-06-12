<template>
	<div class="bgf">
		<div>
			<header class="trains-color cf">
				<router-link class="f24 back back1 not_used_common" to="/index/trains"></router-link>
				<input type="text" placeholder="请输入城市名称（如北京，beijing，bj）" class="long_in f28" v-model="stationSearch" @keyup="searchStation" @focus="selectFlag=true">
				<div class="cancel">取消</div>
			</header>
			<!-- <div class="city_position">
				<li>
					<a href="#ls">历史</a>
				</li>
				<li>
					<a href="#rm">热门</a>
				</li>
				<li>
					<a href="#A">A</a>
				</li>
				<li>
					<a href="#B">B</a>
				</li>
				<li>
					<a href="#C">C</a>
				</li>
				<li>
					<a href="#D">D</a>
				</li>
				<li>
					<a href="#E">E</a>
				</li>
				<li>
					<a href="#F">F</a>
				</li>
				<li>
					<a href="#G">G</a>
				</li>
				<li>
					<a href="#H">H</a>
				</li>
				<li>
					<a href="#J">J</a>
				</li>
				<li>
					<a href="#K">K</a>
				</li>
				<li>
					<a href="#L">L</a>
				</li>
				<li>
					<a href="#M">M</a>
				</li>
				<li>
					<a href="#N">N</a>
				</li>
				<li>
					<a href="#P">P</a>
				</li>
				<li>
					<a href="#Q">Q</a>
				</li>
				<li>
					<a href="#R">R</a>
				</li>
				<li>
					<a href="#S">S</a>
				</li>
				<li>
					<a href="#T">T</a>
				</li>
				<li>
					<a href="#W">W</a>
				</li>
				<li>
					<a href="#X">X</a>
				</li>
				<li>
					<a href="#Y">Y</a>
				</li>
				<li>
					<a href="#Z">Z</a>
				</li>
			</div> -->
			<div class="content f30">
				<!-- 历史选择 -->
				<div>
					<a href="#" class="target-fix" id="ls"></a>
					<div class="f28 c66 pd ls">历史选择</div>
				</div>
				<div>
					<div class="pd active_city tc clearfix">
						<div class="bgf fl bgf3 selectStation" v-for="(item, index) in initHisStations" v-if="index>0" @click="changeStation(item)" :key="index">{{item}}</div>
					</div>
				</div>
				<!-- 热门城市 -->
				<div>
					<a href="#" class="target-fix" id="rm"></a>
					<div class="f28 c66 pd ls rm">热门城市</div>
				</div>
				<div class="pd active_city tc clearfix">
					<div class="bgf fl bgf3" v-for="(item, index) in hotStations" @click="changeStation(item.stationName)" :key="index">{{item.stationName}}</div>
				</div>
				<!-- 筛选 -->
				<div class="pd position_hint bgf" v-show="selectFlag">
					<ul id="filter_position">
						<li v-for="(val, i) in stationMatch">
							<a @click="changeStation(val.stationName)" :key="i">{{val.stationName}}</a>
						</li>
					</ul>
				</div>
				<div>
					<div v-for="(val, key) in allStationData" :key="key">
						<a class="target-fix" :id="key"></a>
						<div class="f28 c66 pd bgf3">{{key}}</div>
						<div class="pd">
							<ul>
								<li v-for="(item, index) in val" @click="changeStation(item.stationName)" :key="index">{{item.stationName}}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import cityData from '../../../assets/js/stationDate.js'
import { alert } from '../../../util/tool'
import router from '../../../router'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      hotStations: null,
      allStationData: null,
      stationSearch: '',
      stationMatch: [],
      selectFlag: false
    }
  },
  mounted() {
    this.hotStations = cityData.hotStationData
    this.allStationData = cityData.allStationData
  },
  computed: {
    ...mapGetters([
      'fromStation',
      'toStation',
      'hisStations',
      'trainsInfo'
    ]),
    initHisStations() {
      if (this.hisStations !== null && this.hisStations !== '') {
        return this.hisStations.split(',').reverse()
      }
    }
  },
  methods: {
    changeStation(station) {
      if (this.$route.path.indexOf('fromStation') !== -1) {
        if (station !== this.toStation) {
          this.$store.dispatch('setFromStation', station)
          this.trainsInfo.fromStation = station
          this.$store.dispatch('saveTrainData', this.trainsInfo)
        } else {
          alert('出发和目的地不能一样')
          return false
        }
      } else {
        if (station !== this.fromStation) {
          this.$store.dispatch('setToStation', station)
        } else {
          alert('出发和目的地不能一样')
          return false
        }
      }
      var cacheStation = ''
      var cacheStationStr = localStorage.getItem('historyStation')
      console.log(cacheStation)
      if (localStorage.getItem('historyStation') !== null && cacheStationStr !== '') {
        cacheStation = cacheStationStr
      }
      if ((',' + cacheStation + ',').indexOf(',' + station + ',') < 0) {
        cacheStation = cacheStation + station + ','
      }
      if (cacheStation.substring(0, cacheStation.length - 1).split(',').length > 12) {
        cacheStation = cacheStation.substring(cacheStation.indexOf(',') + 1, cacheStation.length)
      }
      localStorage.setItem('historyStation', cacheStation)
      this.$store.dispatch('saveHisStations', cacheStation)
      router.back()
    },
    searchStation() {
      let result = []
      if (this.stationSearch === '') {
        result = []
        return false
      }
      for (var o in this.allStationData) {
        for (var i in this.allStationData[o]) {
          var flag = true
          var matchArr = this.allStationData[o][i].match.split('|')
          for (var j = 0; j < matchArr.length; j++) {
            if (matchArr[j].indexOf(this.stationSearch) === 0) {
              result.push(this.allStationData[o][i])
              flag = false
              break
            }
            if (flag && this.allStationData[o][i].stationName.indexOf(this.stationSearch) >= 0) {
              result.push(this.allStationData[o][i])
            }
          }
        }
      }
      this.stationMatch = result
    }
  }
}
</script>

<style scoped>
header{
	display: -webkit-inline-flex;
	display: -moz-inline-flex;
	display: -ms-inline-flex;
	display: -o-inline-flex;
	display: inline-flex;
}
header input{
	position: absolute;
	top:50%;
	transform:translateY(-50%);
	-webkit-transform:translateY(-50%);
	left: .6rem;
	width:6.5rem;
	height: .6rem;
	border-radius: .3rem;
	padding: 0 .2rem;
	transition:all .5s;
}
header .short_in{
	width:5.8rem;
}
.content{
	line-height: .6rem;
	padding-top: .2rem;
}
.active_city{
	padding: .3rem;
}
.active_city>div{
	width: 1.9rem;
	height: .7rem;
	margin-right: .25rem;
	margin-bottom: .25rem;
	line-height: .7rem;
	border-radius: .4rem;
}
.active_city a{
	display: block;
}
.content ul li{
	border-bottom: 1px solid #e5e5e5;
	line-height: .7rem;
}
.content ul li a{
	display: block;
}
#city a{
	display: block;
}
.city_position{
	line-height: .4rem;
	position: fixed;
	right:0;
	top:1.2rem;
}
.city_position a{
	display: block;
	width: .6rem;
	text-align: center;
}
.target-fix {  
  position: relative;
  top: -44px;
  display: block;
  height: 0;
  overflow: hidden;  
}
.ls{
	padding-left: .8rem;
	background:url(../../../assets/images/trains/trains_icon05@2x.png) .3rem center no-repeat;
	-webkit-background-size: .23rem .26rem;
	background-size: .23rem .26rem;
}
.rm{
	background:url(../../../assets/images/trains/trains_icon06@2x.png) .3rem center no-repeat;
	-webkit-background-size: .23rem .26rem;
	background-size: .23rem .26rem;
}
.cancel{
	position: absolute;
	right: .3rem;
	display: none;
}
.position_hint{
	position: fixed;
	top: .88rem;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
}
.mask{
	position: fixed;
	display: none;
	top: .88rem;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.2);
}
</style>