<template>
	<div class="chooseRiders f32">
		<header class="trains-color cf">
      <a class="f24 back back1 not_used_common" @click="goBack"></a>
      <h1 class="tc f36">选择乘车人<span v-if="$route.query.trainDate">(改签)</span></h1>
    </header>
    <div class="cf trains-color trains_case">
    	<div class="clearfix pd df">
    		<div class="fl">{{ chooseTrain.fromStation }}</div>
    		<div class="fl tc">{{ chooseTrain.trainNo }}</div>
    		<div class="fl tr">{{ chooseTrain.toStation }}</div>
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
    		<div class="fl tr">{{ chooseTrain.arrivalDate.split('-')[1] + '-' + chooseTrain.arrivalDate.split('-')[2] }}{{chooseTrain.arrivalWeek }}</div>
    	</div>
    </div>
    <div class="cf trains_checked_set clearfix pd lh88">
    	<div class="fl">已选坐席</div>
    	<div class="fr">
    		<span>{{ chooseTrain.chooseSeat.seatName }}</span>
    		<span>￥{{ chooseTrain.chooseSeat.price}}</span>
    	</div>
    </div>
    <div class="lh88 rail-login">
    	<div class="pd bgf" v-if="!$route.query.trainDate">
    		<label>
    			<div class="clearfix trains_noneseat">
	    			<div class="fl">接受无座</div>
	    			<div class="label_wrap fr">
	    		    <input type="checkbox" v-model="acceptNoSeat" value="acceptNoSeat">
	    				<i></i>
	    			</div>
	    		</div>
    		</label>
    	</div>
      <div class="bgf train_login" v-if="!$route.query.trainDate">
      	<router-link class="un_login cl tc" :to="{path: '/index/trains/loginTrain', query: {pageType: 'chooseRiders'}}" v-show="!loginData">登录12306</router-link>
      	<div class="last add_train_contact cl tc" @click="showContactList = true, contactListShow = contactList" v-show="addRiders.length === 0">添加乘车人</div>
      	<div class="pd clearfix login_change bgf" v-show="loginData !== null" @click="showAccountBox = true">
      		<div class="fl">
      			<img src="../../../assets/images/trains/12306@2x.png" alt="">
      		</div>
      		<div class="fl">
      			<p style="line-height: .53rem;">您已登录12306账号</p>
      			<p class="c66 f24" style="line-height: .35rem;">{{loginData === null ? '加载中' : loginData.accountName }}</p>
      		</div>
      	</div>
      </div>
      <div class="train_unlogin">
      	<div class="train_contact_selected">
      		<div class="pd clearfix bgf trains_riders_checked del_wrap" v-for="(val, index) in addRiders" :key="index">
      			<div class="fl" :class="{reset_contact_img: val.flag, del_contact_img: !val.flag}" @click="val.flag = !(val.flag)">
      				<img src="../../../assets/images/trains/trains_icon17@2x.png">
      			</div>
      			<div class="fl last">
      				<div>
      					<div>
      						<p>
      							<span>{{ val.passengerName }}</span>
      							<span class="f24">({{ contactListType[val.passengerType] }})</span>
      						</p>
                  <p class="f24" v-if="loginData && !($route.query.trainDate)">{{val.certNo.substring(0, 5) + '******' + val.certNo.substring(val.certNo.length - 3, val.certNo.length)}}</p>
                  <p class="f24" v-else-if="!loginData || $route.query.trainDate">{{val.idCard.substring(0, 5) + '******' + val.idCard.substring(val.idCard.length - 3, val.idCard.length)}}</p>
      					</div>
      					<div class="del tc cf bgo del_contact">删除</div>
      				</div>
      			</div>
      		</div>
      	</div>
      	<div class="trains_add bgf" v-show="addRiders.length !== 0" v-if="!$route.query.trainDate">
      		<div class="tc">
      			<div class="df">
      				<div>
      					<a class="cl add-contact-adult" @click="showContactList = true, contactListShow = contactListAdult">增加/修改成人票</a>
      				</div>
      				<div>
      					<a class="cl add-contact-children" @click="showContactList = true, contactListShow = contactListChild">添加儿童票</a>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    </div>
    <div class="clearfix bgf trains_phone pd" v-if="!($route.query.trainDate)">
    	<div class="fl">联系手机</div>
    	<div class="fl">
    		<input type="number" placeholder="请输入手机号" class="f32" v-model="contactPhone" @change="contactChange"></div>
    	<div class="fl"></div>
    </div>
    <div class="trains_door" @click="toInsurance">
    	<a class="clearfix pd show_insure_list insurance">
    		<div class="fl">
    			<img src="../../../assets/images/trains/trains_icon15@2x.png" alt=""></div>
    		<div class="fl">
    			<p>行程保障</p>
    			<p class="f24 c8e train_insure_checked" v-if="!$route.query.trainDate">{{insuranceData.insureUnitPrice === 0 ? '尚未购买' : insuranceData.insureUnitPrice + '元保' + insuranceData.insureQuota + '万元'}}</p>
          <p class="f24 c8e train_insure_checked" v-else-if="$route.query.trainDate" v-for="(val, index) in addRiders">已经购买了{{val.insurePrice}}元保险</p>
    			<input type="hidden" id="ipt_insure">
        </div>
    		<div class="help_icon bgf" @click.stop="this.showMask = true" v-if="!$route.query.trainDate">
    			<img src="../../../assets/images/gas/ykcz_bangzhu@2x.png" alt="">
        </div>
    	</a>
    </div>
    <div class="pd reminder">
    	<div>温馨提示</div>
    	<p class="f24">火车票无法保证100%出票，如出票失败将短信通知，票款将原路退回到您的付款账户，请您谅解。</p>
    </div>
    <div class="train_pay bgf" @click="orderConfirm">
      <div class="cf bgl tc">去提交</div>
    </div>
    <div class="popover box_train_contact" v-show="showContactList">
    	<div>
    		<div class="pop_content bgf3">
    			<div class="trains-color cf clearfix df f32 pop_header pd">
    				<div class="popover_cancel" @click="cancelRiders">取消</div>
    				<div class="f24 cl">
    					<div class="bgf tc">
    						<a @click="toTrainsAdd">增加新乘客</a>
    					</div>
    				</div>
    				<div class="tr popover_yes" @click="confirmRiders">确定</div>
    			</div>
    			<div class="pop-body">
    				<ul class="bgf trains_riders f30">
    					<li class="pd clearfix trains_rider1" v-for="(val, index) in contactListShow" :key="index">
    						<label>
    							<div class="fl">
    								<img src="../../../assets/images/trains/12306@2x.png" alt=""></div>
    							<div class="fl">
    								<p>
    									<span>{{ val.passengerName }}({{ contactListType[val.passengerType] }})</span>
    									<span class="cl f24" v-show="loginData === null">{{ val.canBuyNow === 1 ? '已通过' : '未通过' }}</span>
    									<span class="cl f24" v-show="loginData !== null">{{ val.canBuyNow === 'Y' ? '已通过' : '未通过' }}</span>
    								</p>
    								<p class="f24">{{ loginData ? val.certNo.substring(0, 5) + '******' + val.certNo.substring(15, 18) : val.idCard.substring(0, 5) + '******' + val.idCard.substring(15, 18) }}</p>
    							</div>
    							<div class="label_wrap fr">
    							  <input type="checkbox" v-model="ridersChose" :value="val">
    							  <i></i>
    							</div>
    						</label>
    					</li>
  						<div class="tc f24 c8e" v-show="contactListShow.length === 0">
  							<img src="../../../assets/images/trains/none_list.png" style="margin: 0 auto; width: 60%;">    						
  							<p>无相关信息</p>
  						</div>
    				</ul>
    			</div>
    		</div>
    	</div>
    	<div class="mask"></div>
    </div>
    <!-- 保险选择 -->
    <div class="box_other box_train_insure" v-show="showInsurance">
    	<div class="trains-color">
    		<a class="f24 back back1 not_used_common" @click="showInsurance = false"></a>
    		<h1 class="f40 tc category cf">行程保障</h1>
    	</div>
    	<div>
    		<ul class="bgf">
    			<li class="f24 c8e train_insure_li" v-for="(val, index) in insuranceList" @click="chooseInsurance()">
    				<label class="clearfix">
    					<div class="fl">
    						<div class="f32 c33">
    							交通意外险 ￥
    							<span class="insurePrice">{{ val.insureUnitPrice }}</span>
    							元/人
    						</div>
    						<div>
    							优先出票 保额
    							<span class="insureQuota">{{ val.insureQuota }}</span>
    							万元
    						</div>
    						<div>保险{{ val.insureDays }}天</div>
    						<div>保险公司：{{ val.merchantName }}</div>
    					</div>
    					<div class="label_wrap fr">
    						<input type="radio" v-model="insuranceData" :value="val">
    						<i></i>
    					</div>
    				</label>
    			</li>
    			<li class="f24 c8e train_insure_li" @click="chooseInsurance()">
    				<label class="clearfix">
    					<div class="fl">
    						<div class="f32 c33">
    							不购买 ￥
    							<span class="insurePrice">0</span>
    							元/人
    						</div>
    						<div>
    							优先出票 保额
    							<span class="insureQuota">0</span>
    							万元
    						</div>
    						<div>保险0天</div>
    						<div>保险公司：无</div>
    					</div>
    					<div class="label_wrap fr">
    						<input type="radio" v-model="insuranceData" :value="{insureUnitPrice: 0, insureQuota: 0, insureDays: 0, merchantName: 0}">
    						<i></i>
    					</div>
    				</label>
    			</li>
    		</ul>
    	</div>
    </div>
    <!-- 保险说明 -->
    <div class="box_other bgf mask_wrap" v-show="showMask">
    	<header class="trains-color">
    		<a class="f24 back back1 not_used_common header_close" @click="showMask = false"></a>
    		<h1 class="f40 tc category cf">保险说明</h1>
    	</header>
    	<div class="cover cf f28">
    		<div>
    			<div>
    				<p>保险说明</p>
    				<p>交通意外险</p>
    				<p>1、保险名称：华夏共保体铁路交通综合意外险</p>
    				<p>2、份数限制：1份</p>
    				<p>3、保险有效期：当次列车有效，被保险人以乘客身份乘坐从事合法</p>
    				<p>客运列车期间：自持有效车票检票进入车厢时起，至抵达车票载明的终点离开所乘客运火车车厢时止。</p>
    				<p>4、保险费：XX元/份</p>
    				<p>5、保额（未成年人按照法定承保金额为准）：</p>
    				<p>（1）列车乘客意外伤害保险：5000元</p>
    				<p>6、售出可退（乘车日之前）</p>
    				<p>7、年龄：被保险人投保年龄为出生满28天以上（含）</p>
    				<p>8、投保要求：成年人必须为本人投保；未成年人须是其父母座位投保人</p>
    				<p>
    					9、保险公司将委托同程网在各地有资质的服务商为有需要的客户提供保险定额发票以作报销。保险定额发票仅作报销凭证，不是保单凭证。
    				</p>
    				<p>
    					10、数据电文是合法的合同表现形式，电子保单与纸质保单具有同等法律效力，请妥善保存。电子保单可在保险公司网站上查询和下载。
    				</p>
    				<p>
    					11、适用条款：本保险计划适用于条款为《华夏交通综合意外伤害保险条款》、《华夏附加交通综合意外伤害医疗保险》或《天安人寿公共交通工具意外伤害保险条款》或《太平盛世公共交通列车轮船意外伤害保险（201308）条款》、《太平盛世附加意外医疗保险条款》。
    				</p>
    				<p>12、投保人或被保险人应据实填写投保信息，否则本公司有权解除保险合同。</p>
    				<p>13、保单信息查询请登陆承保保险公司官网或者致电承保保险公司客服电话。</p>
    				<p>
    					备注：根据中国保监会《中国保监会关于父母为其未成年子女投保以死亡为给付保险金条件人身保险有关问题的通知》（保监发 [2015]90 号）文件的规定，对于父母为其未成年子女（未满 18周岁）投保人身保险，在被保险人成年之前，各保险合同约定的被保险人死亡给付的保险金额总和、被保险人死亡时各保险公司实际支付的保险金总和按以下限额执行：
    				</p>
    				<p>1）对于被保险人不满10周岁的，不得超过人民币20万元；</p>
    				<p>2）对于被保险人已满10周岁但未满18周岁的，均不得超过人民币50万元。</p>
    			</div>
    			<div class="close" @click="showMask = false">
    				<img src="../../../assets/images/trains/close@2x.png" alt="">
    			</div>
    		</div>
    	</div>
    </div>
    <!-- 12306退出登录 -->
    <Loginmask v-show="showAccountBox" @hideLoginBox="hideLoginBox" :pageMsg="'chooseRiders'"></Loginmask>
  </div>
</template>

<script>
import router from '../../../router'
import {
  mapGetters,
  mapActions
} from 'vuex'
import _trains from '../../../fetch/trains.js'
import { alert } from '../../../util/tool.js'
import Loginmask from './Loginmask.vue'
export default{
  data() {
    return {
      acceptNoSeat: false,
      isLogin: false,
      showContactList: false,
      contactList: null,
      contactListAdult: [],
      contactListChild: [],
      contactListShow: [],
      contactListType: ['', '成人', '儿童', '学生'],
      ridersChose: [],
      addRiders: [],
      deleteShow: [],
      contactPhone: '',
      showInsurance: false,
      insuranceList: null,
      insuranceData: {insureUnitPrice: 0, insureQuota: 0, insureDays: 0, merchantName: 0, pubPid: ''},
      showMask: false,
      showAccountBox: false,
      ticketDtl: null
    }
  },
  components: {
    Loginmask
  },
  mounted() {
    if (!(this.$route.query.trainDate)) {
      this.getContactList()
      this.findInsurances()
    } else {
      this.ticketChangeDtl()
    }
  },
  computed: {
    ...mapGetters([
      'chooseTrain',
      'trainsInfo',
      'loginData'
    ])
  },
  methods: {
    ...mapActions({
    }),
    goBack() {
      if (this.$route.query.trainDate) {
        router.push({path: '/index/trains/trainInfo', query: this.$route.query})
      } else {
        router.push({path: '/index/trains/trainInfo'})
      }
    },
    getContactList() {
      if (this.loginData === null) {
        _trains.findContactList().then(res => {
          this.contactList = res.result
          for (var i = 0; i < res.result.length; i++) {
            if (res.result[i].passengerType === 2) {
              this.contactListChild.push(res.result[i])
            } else {
              this.contactListAdult.push(res.result[i])
            }
          }
        }).catch(error => {
          console.log(error)
        })
      } else {
        _trains.railwayTraveler(this.loginData).then(res => {
          this.contactList = res.result.travelerList
          for (var i = 0; i < res.result.travelerList.length; i++) {
            if (res.result.travelerList[i].passengerType === 2) {
              this.contactListChild.push(res.result.travelerList[i])
            } else {
              this.contactListAdult.push(res.result.travelerList[i])
            }
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    findInsurances() {
      _trains.findInsurances().then(res => {
        this.insuranceList = res.result
      }).catch(error => {
        console.log(error)
      })
    },
    cancelRiders() {
      this.showContactList = false
      this.ridersChose = this.addRiders
    },
    confirmRiders() {
      this.showContactList = false
      this.addRiders = this.ridersChose
      for (var i = 0; i < this.addRiders.length; i++) {
        this.addRiders[i].flag = false
        this.addRiders[i].seatClass = this.chooseTrain.chooseSeat.seatClass
        this.addRiders[i].ticketPrice = this.chooseTrain.chooseSeat.price
      }
    },
    contactChange() {
      if (/^1(3[0-9]|4[579]|5[0-9]|7[013678]|8[0-9])\d{8}$/.test(this.contactPhone) && this.contactPhone.length === 11) {
        return true
      } else {
        return false
      }
    },
    chooseInsurance() {
      this.showInsurance = false
    },
    orderConfirm() {
      // 如果是购买车票
      if (!this.$route.query.trainDate) {
        this.contactChange()
        if (this.addRiders.length === 0) {
          alert('你还没选任何乘车人')
          return false
        }
        if (!this.contactChange()) {
          alert('请填写正确的手机号')
          return false
        }
        var trainParams = {
          queryKey: this.chooseTrain.queryKey,
          journeyType: 1,
          trainNo: this.chooseTrain.trainNo,
          fromStation: this.chooseTrain.fromStation,
          toStation: this.chooseTrain.toStation,
          trainClass: this.chooseTrain.trainClass,
          trainDate: this.trainsInfo.trainDate,
          isPost: 0,
          ticketModel: this.loginData === null ? 0 : 1,
          token: this.loginData === null ? '' : this.loginData.token,
          acceptNoSeat: this.acceptNoSeat ? 1 : 0,
          contactInfo: {
            person: this.contactPhone,
            cellphone: this.contactPhone
          },
          passengers: []
        }
        if (this.addRiders.length !== 0) {
          for (var i = 0; i < this.addRiders.length; i++) {
            var passenger = {
              contactId: this.addRiders[i].contactId,
              passengerType: this.addRiders[i].passengerType,
              passengerName: this.addRiders[i].passengerName,
              idType: this.loginData === null ? this.addRiders[i].idType : this.addRiders[i].certType,
              idCard: this.loginData === null ? this.addRiders[i].idCard : this.addRiders[i].certNo,
              birthday: this.loginData === null ? this.addRiders[i].birthday : this.addRiders[i].bornDate,
              insureCount: this.insuranceData.insureUnitPrice === 0 ? 0 : 1,
              insurePrice: this.insuranceData.insureUnitPrice,
              insurNo: this.insuranceData.pubPid,
              sex: this.loginData === null ? this.addRiders[i].sex : (~this.addRiders[i].sexCode + 2),
              seatClass: this.addRiders[i].seatClass,
              ticketPrice: this.addRiders[i].ticketPrice,
              provinceCode: this.addRiders[i].provinceCode,
              schoolCode: this.addRiders[i].schoolCode,
              studentNo: this.addRiders[i].studentNo,
              eductionalSystem: this.addRiders[i].eductionalSystem,
              admissionYear: this.addRiders[i].admissionYear,
              preferenceFromStation: this.addRiders[i].preferenceFromStation,
              preferenceToStation: this.addRiders[i].preferenceToStation
            }
            trainParams.passengers.push(passenger)
          }
        }
        _trains.orderConfirm({
          orderAmount: this.chooseTrain.chooseSeat.price,
          prodCode: 'Train_custom_D',
          prodNum: 1,
          trainParams: JSON.stringify(trainParams)
        }).then(res => {
          console.log(trainParams)
          console.log(res)
          router.push({path: '/index/trains/orderCountdown', query: {orderCode: res.result.orderCode}})
        }).catch(error => {
          console.log(error)
        })
      } else {
        // 如果是改签车票
        let data = {
          arrivalDate: this.$route.query.trainDate,
          endStation: this.chooseTrain.toStationCode,
          fromStation: this.chooseTrain.fromStation,
          orderCode: this.$route.query.orderCode,
          queryKey: this.chooseTrain.queryKey,
          seatClass: this.chooseTrain.chooseSeat.seatClass,
          startStation: this.chooseTrain.fromStationCode,
          ticketId: this.$route.query.ticketId,
          toStation: this.chooseTrain.toStation,
          trainDate: this.$route.query.trainDate,
          trainNo: this.chooseTrain.trainNo,
          trainType: this.chooseTrain.trainClass
        }
        _trains.applyChangeTicket(data).then(res => {
          router.push({path: '/index/trains/orderCountdown', query: this.$route.query})
        }).catch(error => {
          console.log(error)
        })
      }
    },
    hideLoginBox() {
      this.showAccountBox = false
      this.getContactList()
    },
    toTrainsAdd() {
      if (this.loginData) {
        router.push({path: '/me/card/cardadd', query: {typeindex: '4', isLogin: true}})
      } else {
        router.push({path: '/me/card/cardadd', query: {typeindex: '4', isLogin: false}})
      }
    },
    ticketChangeDtl() {
      _trains.ticketChangeDtl({ticketId: this.$route.query.ticketId, type: 2}).then(res => {
        this.ticketDtl = res.result
        this.addRiders = [{
          passengerName: res.result.passengerName,
          idCard: res.result.idCard,
          passengerType: res.result.passengerType,
          insurePrice: res.result.insurePrice
        }]
      }).catch(error => {
        console.log(error)
      })
    },
    toInsurance() {
      if (!this.$route.query.trainDate) {
        this.showInsurance = true
      } else {
        return false
      }
    }
  }
}
</script>
<style scoped>
.chooseRiders{
	background-color: #f2f7ff;
	padding-bottom: 1rem;
}
header{
	border-bottom: 0;
}
.trains_case{
	line-height: .7rem;
  border-bottom: 0;
}
.trains_li_header {
	position: relative;
	top: 0;
}
.trains_checked_set{
	background-color: #4fc4f7;
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
.lh88{
	line-height: .88rem;
}
.trains_noneseat{
	position: relative;
    margin-bottom: .2rem;
}
.label_wrap{
	width: .4rem;
	height: .4rem;
}
.label_wrap input{
	display: none;
}
.label_wrap input + i{
	margin: .2rem .2rem 0 0;
	width: .4rem;
	height: .4rem;
	display: block;
	background: url(../../../assets/images/trains/kong.png) center no-repeat;
	-webkit-background-size: .4rem auto;
	background-size: .4rem auto;
}
.label_wrap input:checked + i{
	background: url(../../../assets/images/trains/yes@2x.png) center no-repeat;
	-webkit-background-size: .4rem auto;
	background-size: .4rem auto;
}
.train_login .un_login{
	border-bottom: 1px solid #f2f7ff;
	background: #fff url(../../../assets/images/trains/12306@2x.png) 2.4rem center no-repeat;
	-webkit-background-size: .29rem .36rem;
	background-size: .29rem .36rem;
	display: block;
}
.train_login > .last{
	background:#fff url(../../../assets/images/trains/add_contact.png) 2.4rem center no-repeat;
	-webkit-background-size: .31rem .31rem;
	background-size: .31rem .31rem;
	margin-bottom: .2rem;
}
.train_unlogin img,.login_change img{
	width: .3rem;
	height: auto;
	margin:.2rem .4rem 0 0;
}
.login_change{
	background:#fff url(../../../assets/images/trains/right.png) 6.9rem center no-repeat;
	-webkit-background-size: .17rem auto;
	background-size: .17rem auto;
	padding: .1rem .3rem;
}
.login_change img{
	width:.3rem;
}
.train_unlogin .trains_riders_checked{
	height: auto;
	overflow: hidden;
}
.train_login{
	margin-bottom: .2rem;
	background-color: #f2f7ff;
}
.trains_riders_checked{
	border-bottom: 1px solid #f2f7ff;
}
.trains_riders_checked > .fl:first-child{
	width: 10%;
	height:.8rem;
}
.trains_riders_checked > .fl.last{
	width: 90%;
	overflow: hidden;
}
.trains_riders_checked > .fl.last > div{
	position: relative;
}
.del_wrap{
	padding-right: 0;
}
.del{
	position: absolute;
	right: -1rem;
	width: 1rem;
	top: -.1rem;
	height: 1rem;
	line-height: 1rem;
}
.del_show{
	left: -1rem;
}
.train_unlogin .trains_add{
	line-height: 1rem;
	height: 1rem;
	padding: 0 .3rem;
}
.trains_add a{
	display: block;
}
.train_unlogin{
	line-height: .4rem;
}
.train_unlogin > div{
	position: relative;
}
.trains_del{
	width: 80%;
}
.trains_phone{
	margin: .2rem 0;
	padding: .2rem;
}
.trains_phone > div:first-child{
	border-right: 1px solid #ccc;
	padding-right: .2rem;
	margin-right: .2rem;
}
.trains_door a{
	display: block;
	padding: .1rem .3rem;
	background:#fff url(../../../assets/images/trains/right.png) 7rem center no-repeat;
	-webkit-background-size: .17rem .3rem;
	background-size: .17rem .3rem;
}
.trains_door a:first-child{
	border-bottom: 1px solid #f2f7ff;
	padding:.1rem .3rem;
}
.trains_door a.delivery{
	background: #fff;
}
.delivery_address{
	position: relative;
}
.red_caution{
	color: #f44336;
}
.delivery_address .c8e{
	width: 5rem;
}
.delivery_address .close{
	width: 1rem;
	height: 1rem;
	position: absolute;
	right:0;
	top: 0;
	background:url(../../../assets/images/trains/close.png) top right no-repeat;
	-webkit-background-size: .3rem .3rem;
	background-size: .3rem .3rem;
}
.delivery_address > div:first-child{
	margin-right: .4rem;
}
.trains_door img{
	width: .35rem;
	margin: .25rem .2rem 0 0;
}
.reminder{
	padding: .3rem;
	color: #44444e;
	line-height: .4rem;
}
.reminder >div{
	line-height: .5rem;
}
.train_pay{
	line-height: 1rem;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
}
.train_pay > .cf{
	background-color: #b3e5fc;
}
.train_pay > .bgl{
	background-color: #03a9f4;
}
.pop-body>ul{
	margin-top: .2rem;
}
.trains_riders img{
	width: .26rem;
	margin: .25rem .4rem 0 0;
}
.trains_riders .checkBox{
	margin: 0;
	margin-top: .2rem;
	width: .4rem;
	height: .4rem;
}
.trains_riders .noPerson{
	width: 3.57rem;
	margin: .2rem auto;
}
.trains_riders li{
	line-height: .4rem;
	padding: .1rem .3rem;
	border-bottom: 1px solid #f2f7ff;
	position: relative;
}
.lable_wrap{
	width:.4rem;
	margin-top: .25rem;
}
.trains_rider1 p .cl{
	margin-left: .2rem;
}
.trains_rider1 p .bj{
	padding:.2rem .4rem 0 0;
	background:url(../../../assets/images/trains/bj@2x.png) right .2rem no-repeat;
	-webkit-background-size: .23rem auto;
	background-size: .23rem auto;
}
.pop-body > div:first-child{
	border-bottom: 1px solid #f2f7ff;
}
.pop-body .co{
	clear: #f44336;
}
.mask_wrap{
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
}
.mask_wrap .cover{
    background-color: rgba(0,0,0,.5);
    line-height: .5rem;
    padding: 1.2rem .6rem 0;
    height: 100%;
    overflow: scroll;
}
.cover>div{
    height: 100%;
}
.close img{
    width: .72rem;
    height: .72rem;
    margin: .5rem auto;
}
.help_icon{
	height: .8rem;
	width: .5rem;
	float: left;
	margin-left:.2rem;
}

.help_icon img{
    width: .3rem;
}
.insurance{
	position: relative;
}
.mask{
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0px;
	left: 0px;
	background-color: rgba(0, 0, 0, 0.54);
	z-index: 910;
}
.pop_content{
  position: fixed;
  width: 100%;
  left: 0px;
  z-index: 920;
  overflow: auto;
  max-height: 80%;
  bottom: 0px;
  opacity: 1;
}
.pop_header{
	line-height: .9rem;
	position: relative;
	left: 0;
	top: 0;
	width: 100%;
}
.pop_header .tc{
	height: .5rem;
	line-height: .5rem;
	margin: .2rem auto 0;
	border-radius: .25rem;
	background: #fff url(../../../assets/images/trains/add_contact.png) .2rem center no-repeat;
	-webkit-background-size: .31rem .31rem;
	background-size: .31rem .31rem;
	padding-left: .3rem;
}
.pop_header .tc a{
	display: block;
}
.pop-body{
	height:8rem;
	overflow: scroll;
	background-color: #f2f7ff;
}
.train_yx{
	border-top: solid #dedfe0 1px;
	margin-top: .4rem;
	position: relative;
	height:.4rem;
}
.train_yx span{
	position: absolute;
	background-color: #fff;
	padding: 0 .3rem;
	top: -.15rem;
	left: 50%;
	transform: translateX(-50%);
	-webkit-transform: translateX(-50%);
}
.trains_option{
	line-height: .8rem;
}
.trains_option label > div{
	padding-left: .3rem;
	position: relative;
}
.pop_body{
	height: 100%;
	overflow:auto;
}
/* 保险选择 */
.box_train_insure{
	position: fixed;
	left: 0;
	top: 0;
	z-index: 1000;
	width: 100%;
	height: 100%;
}
.box_train_insure .trains-color{
	line-height: .88rem;
}
.box_train_insure ul{
	height: 12.5rem;
	overflow-y: scroll;
}
.box_train_insure li{
	border-bottom: 1px solid #f2f7ff;
	padding: .2rem .3rem;
	line-height: .4rem;
	position: relative;
}
.box_train_insure label>div{
	display: block;
}
.box_train_insure li > .f32{
	line-height: .5rem;
}
.trains_door{
	margin: .2rem 0;
}
.checkBox{
	margin-top: .6rem;
	width: .4rem;
	height: .4rem;
}
.changeAccount {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.changeAccount>ul {
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: 0;
  left: 0;
}
.changeAccount>ul>li {
  line-height: 1rem;
  border-bottom: 1px solid #dedfe0;
  padding: 0 .3rem;
}
</style>