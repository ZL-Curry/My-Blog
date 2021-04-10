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

    <el-footer><a href="http://wpa.qq.com/msgrd?v=3&uin=1697362616&site=qq&menu=yes" target="_blank"><span>QQ:1697362616</span></a> | <a href="https://github.com/ZL-Curry/" target='_blank'><span>GitHub</span></a></el-footer>
  </div>
</template>
<script>
import Headerbar from "../views/headerbar/headerbar";
export default {
  data() {
    return {
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
    // var toTop = document.getElementById("myBtn");
    // //    默认显示为隐藏
    // toTop.style.display = "none";
    // // 按钮点击事件
    // toTop.onclick = function () {
    //   // 获取滚动条举例顶部的距离
    //   var timer = setInterval(function () {
    //     var backTop =
    //       document.documentElement.scrollTop || document.body.scrollTop;
    //     // 越来越慢效果
    //     var speedTop = backTop / 5;
    //     document.documentElement.scrollTop = backTop - speedTop;
    //     if (backTop == 0) {
    //       clearInterval(timer);
    //     }
    //   }, 30);
    // };
    // window.onscroll = function () {
    //   var backTop =
    //     document.documentElement.scrollTop || document.body.scrollTop;
    //   var nav = document.querySelector(".headers");

    //   if (backTop < 60) {
    //     // nav.style.position = "sticky";
    //     // nav.style.zIndex = "100";
    //     // nav.style.display = "block";
    //     // nav.style.animation = "spotlight .6s";
    //     // toTop.style.display = "none";
    //   } else if (backTop > 30) {
    //     nav.style.display = "none";
    //     toTop.style.display = "block";
    //   }
    // };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key);
    },
    
  },
};
</script>
<style lang="scss">

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
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
  span{
    color: black;
    padding: 0px 20px;
  }
}

.mains {
  width: 83%;
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
