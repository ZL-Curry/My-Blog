<template>
  <div id="app">
    <!-- <el-header class="headers">
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
    </el-header> -->
    <!-- <Player></Player> -->
    <router-view />
    <button v-if="topheight"  id="myBtn"  @click="backtop">UP</button>
  </div>
</template>
<script scoped>
import Player from "zw-player";
export default {
  components: {
    Player,
  },
  data(){
    return {
      topheight:false
    }
  },
   mounted() {
       window.addEventListener("scroll",this.showbtn,true);
    },
    methods: {
        // 显示回到顶部按钮
       showbtn(){
          let that = this;
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          that.scrollTop = scrollTop;
          this.scrollTop>=300?this.topheight=true:this.topheight=false
       },
      /**
        * 回到顶部功能实现过程：
        * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
        * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
        * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
        * 4. 最后记得在移动到顶部时，清除定时器
      */
      backtop(){
          var timer = setInterval(function(){
            let osTop = document.documentElement.scrollTop || document.body.scrollTop;
            let ispeed = Math.floor(-osTop / 5); 
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            this.isTop = true;
            if(osTop === 0){
              clearInterval(timer);
            }
          },30)
      }
    }
};
// import  Headerbar  from "./views/headerbar/headerbar";
// export default {
//   data() {
//     return {

//        activeIndex: this.$route.path,
//     };
//   },
//   created() {
//     // console.log('%c "一个人倘若需要从思想中得到快乐,那么他的第一个欲望就是学习   ——王小波"', "color:green;font-size:20px");
//   },
//   components: {
//     Headerbar
//   },
//   mounted() {
//     var toTop = document.getElementById("myBtn");
//     //    默认显示为隐藏
//     toTop.style.display = "none";
//     // 按钮点击事件
//     toTop.onclick = function () {
//       // 获取滚动条举例顶部的距离
//       var timer = setInterval(function () {
//         var backTop =
//           document.documentElement.scrollTop || document.body.scrollTop;
//         // 越来越慢效果
//         var speedTop = backTop / 5;
//         document.documentElement.scrollTop = backTop - speedTop;
//         if (backTop == 0) {
//           clearInterval(timer);
//         }
//       }, 30);
//     };
//     window.onscroll = function () {
//       var backTop =
//         document.documentElement.scrollTop || document.body.scrollTop;
//       var nav = document.querySelector(".headers");

//       if (backTop < 60) {
//         // nav.style.position = "sticky";
//         // nav.style.zIndex = "100";
//         // nav.style.display = "block";
//         // nav.style.animation = "spotlight .6s";
//         // toTop.style.display = "none";
//       } else if (backTop > 30) {
//         nav.style.display = "none";
//         toTop.style.display = "block";
//       }
//     };
//   },
//   methods: {
//     handleSelect(key, keyPath) {
//       this.$router.push(key);
//     },
//   },
// };
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
#myBtn{
  background: $theme-color;
}
</style>
