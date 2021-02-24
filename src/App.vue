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
    <!-- <button id="myBtn">UP</button> -->
    
  </div>
</template>
<script scoped>
import Player from 'zw-player'
export default {
  components: {
    Player
}
}
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
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
</style>
