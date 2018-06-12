<template>
	<div>
		<div>
			<header class="trains-color cf">
	      <a to="/index/trains" class="f24 back back1" @click="goBack()"></a>
	      <h1 class="f40 tc">日期选择</h1>
	    </header>
	    <div class="tc">
	    	<table class="week-title">
          <tbody>
              <tr>
                  <td class="cl">日</td>
                  <td class="weekday">一</td>
                  <td class="weekday">二</td>
                  <td class="weekday">三</td>
                  <td class="weekday">四</td>
                  <td class="weekday">五</td>
                  <td class="cl">六</td>
              </tr>
          </tbody>
        </table>
        <div class="calendar-wrapper">
          <div v-for="(item, index) in calenderTable" :key="index">
            <div class="month-lable f32">{{item.hd}}</div>
            <div class="month-table">
              <div class="clearfix">
                <div v-for="(value, i) in item.calendarCon" :class="value.name" :key="i" @click="value.flag && chooseDate({date: value.year + '-' + value.month + '-' + value.day,weekDay: value.weekDay})"><div>{{value.day}}</div></div>
              </div>
            </div>
          </div>
        </div>
	    </div>
		</div>
	</div>
</template>

<script>
import router from '../../../router'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      nowDate: '',
      baseday: 29,
      calenderTable: [],
      sevenDay: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    }
  },
  mounted() {
    this.initDate()
  },
  computed: {
    ...mapGetters([
      'trainsInfo'
    ])
  },
  methods: {
    initDate() {
      const getNowDate = new Date()
      var nowyear = getNowDate.getFullYear()
      let nowmonth = getNowDate.getMonth() + 1
      if (nowmonth <= 10) {
        nowmonth = '0' + nowmonth
      }
      let nowday = getNowDate.getDate()
      if (nowday <= 10) {
        nowday = '0' + nowday
      }
      this.nowDate = nowyear + '-' + nowmonth + '-' + nowday
      const firstDate = new Date(this.nowDate)
      const firstYear = firstDate.getFullYear()
      const firstMonth = firstDate.getMonth() + 1
      const firstDay = firstDate.getDate()
      const lastDate = new Date(new Date(firstDate).getTime() + this.baseday * 24 * 60 * 60 * 1000)
      const lastYear = lastDate.getFullYear()
      const lastMonth = lastDate.getMonth() + 1
      const lastDay = lastDate.getDate()
      const betweenMonth = (lastYear - firstYear) * 12 + (lastMonth - firstMonth)
      for (var i = 0; i <= betweenMonth; i++) {
        var year = firstYear
        var month = firstMonth + i
        const flag1 = parseInt(month / 12)
        const flag2 = parseInt(month % 12)
        if (month > 12) {
          year += flag1
          month = month - flag1 * 12
          if (flag1 > 1 && flag2 === 0) {
            year += -1
            month += 12
          }
        }
        var min = 0
        var max = 31
        if (month === firstMonth) {
          min = firstDay
          max = (year + '-' + month + '-' + new Date(year, month, 0).getDate()).split('-')[2]
        } else if (month === lastMonth) {
          min = 1
          max = (year + '-' + month + '-' + new Date(year, month, 0).getDate()).split('-')[2]
          if (lastDay < max) {
            max = lastDay
          }
        }
        if (month < 10) {
          month = '0' + month
        }
        const firstDateStr = year + '-' + month + '-01'  // 当前月份的开始日期
        const lastDateStr = year + '-' + month + '-' + new Date(year, month, 0).getDate()  // 当前月份的结束日期
        const firstWeekDay = new Date(firstDateStr).getDay()  // 当前月份的第一天是星期几
        const theLastDay = new Date(lastDateStr).getDate()  // 当前时间的最后一天
        var dateTable = {
          hd: '',
          calendarCon: []
        }
        dateTable.hd = year + '年' + month + '月'
        for (var j = 0; j < firstWeekDay; j++) {
          dateTable.calendarCon.push(
            {
              name: 'fl',
              year: '',
              month: '',
              day: '',
              flag: false
            }
          )
        }
        for (var x = 1; x <= theLastDay; x++) {
          if (x < min || x > max) {
            if (x < 10) {
              x = '0' + x
            }
            const weekDay = this.sevenDay[new Date(year + '-' + month + '-' + x).getDay()]
            dateTable.calendarCon.push(
              {
                name: 'fl un-invalid-date',
                year: year,
                month: month,
                day: x,
                weekDay: weekDay,
                flag: false
              }
            )
          } else {
            if (x < 10) {
              x = '0' + x
            }
            const weekDay = this.sevenDay[new Date(year + '-' + month + '-' + x).getDay()]
            dateTable.calendarCon.push(
              {
                name: 'fl invalid-date',
                year: year,
                month: month,
                day: x,
                weekDay: weekDay,
                flag: true
              }
            )
          }
        }
        this.calenderTable.push(dateTable)
      }
    },
    chooseDate(data) {
      this.$store.dispatch('setTrainDate', data)
      this.trainsInfo.trainDate = data.date
      this.trainsInfo.weekDay = data.weekDay
      this.$store.dispatch('saveTrainData', this.trainsInfo)
      router.back()
    },
    goBack() {
      router.back()
    }
  }
}
</script>

<style scoped>
	body{
		padding-top: 1.58rem;
	}
	table.week-title {
	    width: 100%;
	    height:.7rem;
	    margin-top:.88rem;
	    background-color: #f2f7ff;
	    position: fixed;
	    top:0;
	    z-index: 5;
	}
	.week-title td {
	    height: 100%;
	    width: 14.285%;
	    background-color: #f3f6f5;
	}
	.month-lable{
	    width: 100%;
	    line-height: .9rem;
	}
	.month-table .fl{
		width: 14.285%;
		height: .9rem;
		line-height: .6rem;
	}
	.invalid-date >div{
		background-color: #f3f3f3;
		width: .6rem;
		height: .6rem;
		border-radius: .3rem;
		margin:0 auto .35rem;
	}
	.month-table .cl > div{
		background-color: #fff;
	}
	.calendar-wrapper{
		padding-top: .7rem;
	}
</style>