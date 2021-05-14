<template>
  <div id="app">
    <router-view />
    <div
      v-if="topheight"
      id="myBtn"
      class="iconfont iconfanhuidingbu"
      @click="backtop"
    ></div>
    <!-- ????????? -->


    <!-- <Player/> -->
  </div>
</template>
<script scoped>
// import Player from "zw-player";
export default {
  components: {
    // Player,
  },
  data() {
    return {
      topheight: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.showbtn, true);
    let text = window.$$consoleText;
    console.log(`%c${text}`, "color: #9fdd0e");
    // 重写console.log
    console.log = (function (oriLogFunc) {
      return function () {
        let showText = "BABALU";
        try {
          if (arguments[0] == "error") {
            oriLogFunc.call(
              console,
              `%c ${showText} `,
              "color: white; background-color: red",
              ...arguments
            );
          } else if (arguments[0] == "success") {
            oriLogFunc.call(
              console,
              `%c ${showText} `,
              "color: white; background-color: rgb(110,219,99)",
              ...arguments
            );
          } else {
            oriLogFunc.call(
              console,
              `%c ${showText} `,
              "color: white; background-color: rgb(38,188,213)",
              ...arguments
            );
          }
        } catch (e) {
          console.error("console.log error", e);
        }
      };
    })(console.log);
  },
  methods: {
    showbtn() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      this.scrollTop >= 300
        ? (this.topheight = true)
        : (this.topheight = false);
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
    // 第一次进入网页的loading状态
    if (document.getElementById("Loading"))
      document.getElementById("Loading").remove();
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 12px;
}
::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  background-color: $theme-color;
  border-radius: 12px;
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
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
  color: $theme-color;
}
</style>
