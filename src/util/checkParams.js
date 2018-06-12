// 判断是否为空
export function isEmpty(obj) {
  if (undefined === obj || obj === null || obj === '') {
    return true
  }
  return false
}

// 判断是否为手机号码
export function isMobile(mobileNo) {
  if (/^1(3[0-9]|4[579]|5[0-9]|7[013678]|8[0-9])\d{8}$/.test(mobileNo) && mobileNo.length === 11) {
    return true
  }
  return false
}

// 判断中石化卡号
export function isZsh(card) {
  if (/^(100011)\d{13}$/.test(card)) {
    return true
  }
  return false
}

// 判断中石油卡号
export function isZsy(card) {
  if (/^(9)\d{15}$/.test(card)) {
    return true
  }
  return false
}
