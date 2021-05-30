<template>
  <div id="loading" :style="{backgroundColor:bgColor}">
		<div id="loading-center">
			<div id="loading-center-absolute">
				<div class="object" :style="{backgroundColor:color}"></div>
				<div class="object" :style="{backgroundColor:color}"></div>
				<div class="object" :style="{backgroundColor:color}"></div>
				<div class="object" :style="{backgroundColor:color}"></div>
				<div class="object" :style="{backgroundColor:color}"></div>
				<div class="object" :style="{backgroundColor:color}"></div>
				<div class="object" :style="{backgroundColor:color}"></div>
				<div class="object" :style="{backgroundColor:color}"></div>
				<div class="object" :style="{backgroundColor:color}"></div>
				<div class="object" :style="{backgroundColor:color}"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
 name: 'loading',
 props: {
  bgColor: {
    type: String,
    default: "#45b29d",
  },
  color:{
    type: String,
    default: "white",
  }
 },
 data(){
   return {}
 }
}
</script>

<style lang="scss" scoped>
#loading{
  // background-color: #45b29d;
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 1;
  margin-top: 0px;
  top: 0px;
  &-center{
    width: 100%;
    height: 100%;
    position: relative;
    &-absolute {
      position: absolute;
      left: 50%;
      top: 50%;
      height: 50px;
      width: 150px;
      margin-top: -25px;
      margin-left: -75px;
    }
    .object{
      width: 8px;
      height: 50px;
      margin-right:5px;
      // background-color: #FFF;
      -webkit-animation: animate 1s infinite;
      animation: animate 1s infinite;
      float: left;
      &:last-child {
        margin-right: 0px;
        }
      &:nth-child(10){
        -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;	
        }
      &:nth-child(9){
        -webkit-animation-delay: 0.8s;
          animation-delay: 0.8s;	
        }	
      &:nth-child(8){
        -webkit-animation-delay: 0.7s;
          animation-delay: 0.7s;	
        }
      &:nth-child(7){
        -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;	
        }
      &:nth-child(6){
        -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;	
        }
      &:nth-child(5){
        -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
        }
      &:nth-child(4){
        -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;		
        }
      &:nth-child(3){
        -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;	
        }
      &:nth-child(2){
        -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
        }	
      @-webkit-keyframes animate {
        50% {
        -ms-transform: scaleY(0); 
          -webkit-transform: scaleY(0);
          transform: scaleY(0);
          }
      }
      @keyframes animate {
        50% {
        -ms-transform: scaleY(0); 
          -webkit-transform: scaleY(0);
          transform: scaleY(0);
          }
      }
    }
  }
}
</style>