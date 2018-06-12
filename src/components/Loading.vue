<template>
  <div class="loading">
    <div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$bigWidth:1;
$smallWidth:.3;
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .7);
  z-index: 1000;
  div {
    width: $bigWidth+rem;
    height: $bigWidth+rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    animation-name: spin;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    div {
      width: $smallWidth+rem;
      height: $smallWidth+rem;
      position: absolute;
      border-radius: 50%;
      background: #fc5b32;
      right: auto;
      bottom: auto;
    }
    div:nth-of-type(1) {
      top: -$smallWidth/2+rem;
      left: ($bigWidth - $smallWidth)/2+rem;
      width: $smallWidth+rem;
      height: $smallWidth+rem;
      transform: scale(1)
    }
    div:nth-of-type(2) {
      top: $bigWidth/2-($bigWidth/1.414/2 + $smallWidth*0.125/2)+rem;
      left: $bigWidth/2+($bigWidth/1.414 - $smallWidth*0.125)/2+rem;
      width: $smallWidth*0.125+rem;
      height: $smallWidth*0.125+rem;
    }
    div:nth-of-type(3) {
      top: ($bigWidth - $smallWidth*0.25)/2+rem;
      left: ($bigWidth - $smallWidth*0.25/2)+rem;
      width: $smallWidth*0.25+rem;
      height: $smallWidth*0.25+rem;
    }
    div:nth-of-type(4) {
      top: $bigWidth/2+($bigWidth/1.414/2 - $smallWidth*0.375/2)+rem;
      left: $bigWidth/2+($bigWidth/1.414 - $smallWidth*0.375)/2+rem;
      width: $smallWidth*0.375+rem;
      height: $smallWidth*0.375+rem;
    }
    div:nth-of-type(5) {
      top: ($bigWidth - $smallWidth*0.5/2)+rem;
      left: ($bigWidth - $smallWidth*0.5)/2+rem;
      width: $smallWidth*0.5+rem;
      height: $smallWidth*0.5+rem;
    }
    div:nth-of-type(6) {
      top: $bigWidth/2+($bigWidth/1.414/2 - $smallWidth*0.625/2)+rem;
      left: ($bigWidth/1.414/2 - $smallWidth*0.625)/2+rem;
      width: $smallWidth*0.625+rem;
      height: $smallWidth*0.625+rem;
    }
    div:nth-of-type(7) {
      top: ($bigWidth - $smallWidth*0.75)/2+rem;
      left: -$smallWidth*0.75/2+rem;
      width: $smallWidth*0.75+rem;
      height: $smallWidth*0.75+rem;
    }
    div:nth-of-type(8) {
      top: $bigWidth/2-($bigWidth/1.414/2 + $smallWidth*0.875/2)+rem;
      left: ($bigWidth/1.414/2 - $smallWidth*0.875)/2+rem;
      width: $smallWidth*0.875+rem;
      height: $smallWidth*0.875+rem;
    }
  }
  @keyframes spin {
    0%{
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
