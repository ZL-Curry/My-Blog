<template>
  <div id="app">
    <router-view />
    <div
      v-if="topheight"
      id="myBtn"
      class="iconfont iconfanhuidingbu"
      @click="backtop"
    ></div>
    <Player/>
  </div>
</template>
<script scoped>
import Player from "zw-player"; // 仲威音乐播放器
import {ConsoleLog} from "@/common/ConsoleLog.js"
export default {
  components: {
    Player,
  },
  data() {
    return {
      topheight: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.showbtn, true);
    // let text = `
    //   ██████╗  █████╗ ██████╗  █████╗ ██╗     ██╗   ██╗
    //   ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║     ██║   ██║
    //   ██████╔╝███████║██████╔╝███████║██║     ██║   ██║
    //   ██╔══██╗██╔══██║██╔══██╗██╔══██║██║     ██║   ██║
    //   ██████╔╝██║  ██║██████╔╝██║  ██║███████╗╚██████╔╝
    //   ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚═════╝
    // `;
    // console.log(`%c${text}`, "color: #9fdd0e");
    ConsoleLog
  },
  methods: {
    showbtn() {
      let that = this;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop;
      this.scrollTop >= 300 ? (this.topheight = true) : (this.topheight = false);
    },
    /**
     * 回到顶部功能实现过程：
     * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
     * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
     * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
     * 4. 最后记得在移动到顶部时，清除定时器
     */
    backtop() {
      var timer = setInterval(function () {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    },
  },
  async created() {
    if (document.getElementById("Loading"))
      document.getElementById("Loading").remove();
  },
};
// console.log('%c "一个人倘若需要从思想中得到快乐,那么他的第一个欲望就是学习   ——王小波"', "color:green;font-size:20px");
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#myBtn {
  font-size: 40px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  width: 50px;
  height: 50px;
  color: rgb(10, 140, 216);
}
</style>
