import { fetch } from './api.js'

export default {
  // 获取影片列表
  getFilmList(params) {
    return fetch('/API/film/filmList', params)
  },
  // 获取影院列表
  getCinemaList(params) {
    return fetch('/API/film/cinemaList', params)
  },
  // 获取城市区域列表
  getCityList(params) {
    return fetch('/API/film/city/countyList', params)
  },
  // 获取影院影片场次列表
  showCinemaList(params) {
    return fetch('/API/film/showList', params)
  },
  // 获取影片影院座位列表
  showCinemaSeatList(params) {
    return fetch('/API/film/showSeatList', params)
  },
  // 电影票详情
  movieInfo(params) {
    return fetch('/API/film/orderDtl', params)
  }
}
