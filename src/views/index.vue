<template>
  <div class="home">
    <Headerbar />
    <div class="mains">
      <keep-alive v-if="$route.meta.keepAlive">
        <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      </keep-alive>
       <keep-alive v-if="!$route.meta.keepAlive">
        <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      </keep-alive>
    </div>
    <!-- 左侧 -->
    <div>
      <img src="@/assets/img/weixi_2_code.jpg" v-show="imgShowStatus" width="200" alt="微信二维码" class="wx_2_code_img">
      <a href="http://wpa.qq.com/msgrd?v=3&uin=1697362616&site=qq&menu=yes" target="_blank"><span>QQ:1697362616</span></a> | 
      <a href="javascript:;" v-on:mouseover="onMouserover" v-on:mouseout="onMouseout" class="wx_2_code_text"><span class="iconfont iconweixin1" > Wechat</span></a> | 
      <a href="https://github.com/ZL-Curry/" target='_blank'><span class="iconfont iconhuaban88"> GitHub</span></a>
    </div>
  </div>
</template>
<script>
import Headerbar from "../views/headerbar/headerbar";
export default {
  data() {
    return {
      imgShowStatus: false,
      activeIndex: this.$route.path,
    };
  },
  created() {
    // console.log('%c "一个人倘若需要从思想中得到快乐,那么他的第一个欲望就是学习   ——王小波"', "color:green;font-size:20px");
  },
  components: {
    Headerbar,
  },
  mounted() {
  
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key);
    },
    // 鼠标移入事件
    onMouserover(){
      this.imgShowStatus = true
    },
    // 鼠标移出事件
    onMouseout(){
      this.imgShowStatus = false
    }
  },
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.el-menu-item,
.el-submenu__title {
  height: 60px;
}
.el-header {
  width: 100%;
  padding: 0;
  border-bottom: solid 1px #ccc;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}
@keyframes spotlight {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

.el-footer {
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #ccc;
  color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  .wx_2_code_img{
    position: absolute;
    top: -210px;
    left: auto;
  }
  span{
    color: black;
    padding: 0px 20px;
    font-size: 20px;
  }
}

.mains {
  width: 100%;
  margin: 0 auto;
  // min-height: calc(100vh - 126px);
  // height: auto;
}
.babalu {
  display: flex;
  justify-content: center;
  align-items: center;
}
.babalu div {
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bolder;
}
@media all and (max-width: 768px) {
  .el-footer {
    font-size: 16px;
  }
  .mains {
    width: 90%;
  }
}
</style>
