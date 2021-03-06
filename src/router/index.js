import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index1',
      component: resolve => require(['@/components/Index'], resolve),
      children: [
        {
          path: 'phone/:type',
          name: '话费流量',
          component: resolve => require(['@/components/index/Phone'], resolve)
        },
        {
          path: 'oil',
          name: '加油卡',
          component: resolve => require(['@/components/index/Oil'], resolve),
          children: [
            {
              path: 'zsh',
              name: '中石化',
              component: resolve => require(['@/components/index/oil/Zsh'], resolve)
            },
            {
              path: 'zsy',
              name: '中石油',
              component: resolve => require(['@/components/index/oil/Zsy'], resolve)
            },
            {
              path: 'oillogin',
              name: '油卡登录模式',
              component: resolve => require(['@/components/index/oil/OilLogin'], resolve),
              children: [
                {
                  path: 'ologin',
                  name: '油卡登录',
                  component: resolve => require(['@/components/index/oil/Login'], resolve)
                },
                {
                  path: 'oreg',
                  name: '油卡注册',
                  component: resolve => require(['@/components/index/oil/Reg'], resolve)
                },
                {
                  path: 'olist',
                  name: '卡号列表',
                  component: resolve => require(['@/components/index/oil/OilList'], resolve)
                },
                {
                  path: 'obind',
                  name: '绑定卡号',
                  component: resolve => require(['@/components/index/oil/BindCard'], resolve)
                },
                {
                  path: 'subinfo',
                  name: '验证码',
                  component: resolve => require(['@/components/index/oil/SubInfo'], resolve)
                }
              ]
            }
          ]
        },
        {
          path: 'game',
          name: '游戏点卡',
          component: resolve => require(['@/components/index/Game'], resolve),
          children: [
            {
              path: 'sub',
              name: '游戏点卡提交',
              component: resolve => require(['@/components/index/game/GameSub'], resolve)
            }
          ]
        },
        {
          path: 'trains',
          name: '火车票',
          component: resolve => require(['@/components/index/Trains'], resolve),
          children: [
            {
              path: 'serve',
              name: '火车票服务',
              component: resolve => require(['@/components/index/trains/Serve'], resolve)
            },
            {
              path: 'stations/:stationType',
              name: '火车站',
              component: resolve => require(['@/components/index/trains/Stations'], resolve)
            },
            {
              path: 'trainsDate/:nowDate',
              name: '火车日期',
              component: resolve => require(['@/components/index/trains/Trainsdate'], resolve)
            },
            {
              path: 'trainsList',
              name: '火车列表',
              component: resolve => require(['@/components/index/trains/Trainslist'], resolve)
            },
            {
              path: 'trainInfo',
              name: '火车详情',
              component: resolve => require(['@/components/index/trains/Traininfo'], resolve)
            },
            {
              path: 'timeTable',
              name: '时刻表',
              component: resolve => require(['@/components/index/trains/Timetable'], resolve)
            },
            {
              path: 'chooseRiders',
              name: '添加乘车人',
              component: resolve => require(['@/components/index/trains/Chooseriders'], resolve)
            },
            {
              path: 'loginTrain',
              name: '登录12306',
              component: resolve => require(['@/components/index/trains/Logintrain'], resolve)
            },
            {
              path: 'orderCountdown',
              name: '订单倒计时',
              component: resolve => require(['@/components/index/trains/Ordercountdown'], resolve)
            },
            {
              path: 'payTrains',
              name: '火车票支付',
              component: resolve => require(['@/components/index/trains/Paytrains'], resolve)
            },
            {
              path: 'traveler',
              name: '12306旅客',
              component: resolve => require(['@/components/index/trains/Traveler'], resolve)
            },
            {
              path: 'phoneCheck',
              name: '手机号校验',
              component: resolve => require(['@/components/index/trains/Phonecheck'], resolve)
            }
          ]
        },
        {
          path: 'wec',
          name: '生活缴费',
          component: resolve => require(['@/components/index/Wec'], resolve),
          children: [
            {
              path: 'citylist',
              name: '城市列表',
              component: resolve => require(['@/components/index/wec/WecCityList'], resolve)
            },
            {
              path: 'orderlist',
              name: '账单列表',
              component: resolve => require(['@/components/index/wec/WecOrderList'], resolve)
            }
          ]
        },
        {
          path: 'movie',
          name: '电影票',
          component: resolve => require(['@/components/index/Movie'], resolve),
          children: [
            {
              path: 'movieinfo',
              name: '影片详情',
              component: resolve => require(['@/components/index/movie/MovieInfo'], resolve)
            },
            {
              path: 'movieseat',
              name: '选座',
              component: resolve => require(['@/components/index/movie/MovieSeat'], resolve)
            },
            {
              path: 'movieorder',
              name: '确认订单',
              component: resolve => require(['@/components/index/movie/MovieOrder'], resolve)
            },
            {
              path: 'moviecity',
              name: '城市选择',
              component: resolve => require(['@/components/index/movie/MovieCity'], resolve)
            },
            {
              path: 'cinemainfo',
              name: '电影院详情',
              component: resolve => require(['@/components/index/movie/CinemaInfo'], resolve)
            }
          ]
        }
      ]
    },
    {
      path: '/purchase',
      name: 'Purchase',
      component: resolve => require(['@/components/Purchase'], resolve),
      children: [
        {
          path: 'prebusiness',
          name: '预购业务',
          component: resolve => require(['@/components/purchase/Prebusiness'], resolve)
        },
        {
          path: 'preadvance',
          name: '预购推荐',
          component: resolve => require(['@/components/purchase/Preadvance'], resolve)
        }
      ]
    },
    {
      path: '/order',
      name: 'Order',
      component: resolve => require(['@/components/Order'], resolve),
      children: [
        {
          path: 'item/:type',
          name: '话费、流量、加油卡、游戏点卡、水电煤',
          component: resolve => require(['@/components/order/OrderItem'], resolve)
        },
        {
          path: 'movie',
          name: '电影票订单',
          component: resolve => require(['@/components/order/OrderMovie'], resolve)
        },
        {
          path: 'trains',
          name: '火车票订单',
          component: resolve => require(['@/components/order/OrderTrains'], resolve),
          children: [
            {
              path: 'info',
              name: '火车票订单详情',
              component: resolve => require(['@/components/order/trains/TrainsOrderInfo'], resolve)
            },
            {
              path: 'change',
              name: '火车票订单改签单',
              component: resolve => require(['@/components/order/trains/TrainsOrderChange'], resolve)
            },
            {
              path: 'refund',
              name: '火车票退票',
              component: resolve => require(['@/components/order/trains/TrainsRefund'], resolve)
            },
            {
              path: 'refundsuccess',
              name: '火车票退票成功',
              component: resolve => require(['@/components/order/trains/TrainsRefundSuccess'], resolve)
            },
            {
              path: 'refundinfo',
              name: '火车票退票详情',
              component: resolve => require(['@/components/order/trains/TrainsRefundInfo'], resolve)
            },
            {
              path: 'ensure',
              name: '火车票行程保障',
              component: resolve => require(['@/components/order/trains/TrainsEnsure'], resolve)
            }
          ]
        },
        {
          path: 'info',
          name: '订单详情页',
          component: resolve => require(['@/components/order/OrderInfo'], resolve)
        },
        {
          path: 'movieinfo',
          name: '电影票订单详情页',
          component: resolve => require(['@/components/order/OrderMovieInfo'], resolve)
        }
      ]
    },
    {
      path: '/me',
      name: 'Me',
      component: resolve => require(['@/components/Me'], resolve),
      children: [
        {
          path: 'preorder',
          name: '预购订单',
          component: resolve => require(['@/components/me/PreOrder'], resolve),
          children: [
            {
              path: 'preorderinfo',
              name: '预购订单详情',
              component: resolve => require(['@/components/me/PreOrderInfo'], resolve)
            },
            {
              path: 'preorderflow',
              name: '预购订单流水',
              component: resolve => require(['@/components/me/PreOrderFlow'], resolve)
            }
          ]
        }, {
          path: 'card',
          name: '卡包',
          component: resolve => require(['@/components/me/Card'], resolve),
          children: [
            {
              path: 'cardadd',
              name: '新增卡号',
              component: resolve => require(['@/components/me/CardAdd'], resolve)
            }
          ]
        },
        {
          path: 'mb',
          name: '猫币账单',
          component: resolve => require(['@/components/me/Mb'], resolve)
        },
        {
          path: 'coupon/:type',
          name: '卡券',
          component: resolve => require(['@/components/me/Coupon'], resolve),
          children: [
            {
              path: 'couponinfo',
              name: '卡券详情',
              component: resolve => require(['@/components/me/CouponInfo'], resolve)
            }
          ]
        },
        {
          path: 'about',
          name: '关于我们',
          component: resolve => require(['@/components/me/About'], resolve)
        },
        {
          path: 'set',
          name: '设置',
          component: resolve => require(['@/components/me/Set'], resolve),
          children: [
            {
              path: 'setpass',
              name: '设置密码主页',
              component: resolve => require(['@/components/me/SetPassIndex'], resolve),
              children: [
                {
                  path: ':type',
                  name: '修改密码',
                  component: resolve => require(['@/components/me/SetPass'], resolve)
                }
              ]
            }
          ]
        },
        {
          path: 'information',
          name: '消息中心',
          component: resolve => require(['@/components/me/Information'], resolve),
          children: [
            {
              path: 'notice',
              name: '公告详情',
              component: resolve => require(['@/components/me/Notice'], resolve)
            }
          ]
        },
        {
          path: 'bind',
          name: '绑定分销商',
          component: resolve => require(['@/components/me/Bind'], resolve)
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/Login'], resolve)
    },
    {
      path: '/reg/:type',
      name: 'Reg',
      component: resolve => require(['@/components/Reg'], resolve)
    },
    {
      path: '/pay',
      name: '支付',
      component: resolve => require(['@/components/Pay'], resolve)
    },
    {
      path: '/paysuccess',
      name: '支付成功',
      component: resolve => require(['@/components/PaySuccess'], resolve)
    },
    {
      path: '/choosecard',
      name: '选择卡号',
      component: resolve => require(['@/components/ChooseCard'], resolve)
    }
  ]
})
