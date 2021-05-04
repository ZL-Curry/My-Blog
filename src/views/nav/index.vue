<template>
  <div class="blog">
    <div class="swiper">
      <el-carousel :interval="5000" arrow="hover">
        <el-carousel-item v-for="(item, index) in url" :key="index">
          <el-image :src="item.imgurl" fit style="width: 100%"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="daohang">
      <el-button
      plain
      type="success"
        v-for="(item, index) in srclist"
        :key="index"
      >
      <i class="iconfont" :class="item.icon || ''"></i>
        <a :href='item.href' target="_blank"
          >
          <span> {{item.name}}</span>
         </a
        >
        </el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: [
        {
          imgurl: require("@/assets/img/bz1.jpg"),
        },
        {
          imgurl: require("@/assets/img/bz2.jpg"),
        },
        {
          imgurl: require("@/assets/img/bz3.jpg"),
        },
      ],
      // 导航列表
      srclist: window.$$navigationList
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.blog {
  min-height: calc(100vh - 126px);
  width: 100%;
  margin: 10px 0 10px 0;
  .daohang {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .el-button {
      margin-top: 10px;
      background: raba(255,255,24,0.5);
      min-width: 12%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .el-button:hover{
      span{
        color: #fff;
      }
    }
    i{
        font-size: 20px;
      }
    a {
      font-size: 20px;
      span{color: #2da825;}
    }
  }
}
@media screen and(max-width: 768px) {
  .el-carousel {
    height: 160px;
  }
}
</style>
