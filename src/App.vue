<template>
  <div id="app">
    <el-header class="headers">
      <el-menu :default-active="activeIndex" @select="handleSelect">
        <el-row type="flex">
          <el-col :span="2" :offset="2" class="babalu">
            <div>巴巴鲁</div>
          </el-col>
          <el-col :span="5" :offset="14">
            <el-row type="flex">
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/blog">博客</el-menu-item>
              <el-menu-item index="/note">笔记</el-menu-item>
              <el-menu-item index="/about">关于</el-menu-item>
            </el-row>
          </el-col>
        </el-row>
      </el-menu>
    </el-header>
    <el-container class="mains">
      <el-row style="width: 100%">
        <el-col :span="24">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </el-col>
      </el-row>
    </el-container>
    <button id="myBtn">UP</button>
    <el-footer
      >© 2020 个人博客 blog.babalu.link | QQ:1697362616 |
      Github:ZL-Curry</el-footer
    >
  </div>
</template>
<script scoped>
export default {
  data() {
    return {
      activeIndex: this.$route.path,
    };
  },
  created() {
    // console.log('%c "一个人倘若需要从思想中得到快乐,那么他的第一个欲望就是学习   ——王小波"', "color:green;font-size:20px");
  },
  mounted() {
    var toTop = document.getElementById("myBtn");
    //    默认显示为隐藏
    toTop.style.display = "none";
    // 按钮点击事件
    toTop.onclick = function () {
      // 获取滚动条举例顶部的距离
      var timer = setInterval(function () {
        var backTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        // 越来越慢效果
        var speedTop = backTop / 5;
        document.documentElement.scrollTop = backTop - speedTop;
        if (backTop == 0) {
          clearInterval(timer);
        }
      }, 30);
    };
    window.onscroll = function () {
      var backTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(backTop);
      var nav = document.querySelector(".headers");
     

      if (backTop < 60) {
        nav.style.position = "sticky";
        nav.style.zIndex = "100";
        nav.style.display = "block";
        nav.style.animation = "spotlight .6s";
        toTop.style.display = "none";
      } else if (backTop > 30) {
        nav.style.display = "none";
        toTop.style.display = "block";
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key);
    },
  },
};
</script>
<style lang="scss">
#myBtn {
  position: fixed;
  bottom: 30px;
  right: 20px;
  z-index: 99;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%; /* 圆角 */
  width: 50px;
  height: 50px;
  background: rgb(238, 138, 138);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
* {
  margin: 0;
  padding: 0;
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
  color: #333;
  text-align: center;
  line-height: 60px;
}
.mains {
  width: 83%;
  margin: 0 auto;
  display: flex;
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
</style>
