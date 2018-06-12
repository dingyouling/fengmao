var fontsi = 100
var screenwidth = 750
function resize1() {
  var newscreenwidth = document.documentElement.clientWidth
  var bili = newscreenwidth / screenwidth
  var newfontsi = fontsi * bili
  document.documentElement.style.fontSize = newfontsi + 'px'
}
resize1()
window.onresize = resize1
