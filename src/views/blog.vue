<template>
  <div class="blog">
    <div class="swiper">
      <el-carousel :interval="5000" arrow="hover">
        <el-carousel-item v-for="(item, index) in url" :key="index">
          <el-image
            :src="item.imgurl"
            fit
            style="width: 100%;"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: [
        {
          imgurl: require("../assets/img/bz1.jpg"),
        },
        {
          imgurl: require("../assets/img/bz2.jpg"),
        },
        {
          imgurl: require("../assets/img/bz2.jpg"),
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.blog {
  height: calc(100vh - 126px);
  width: 100%;
  margin: 10px 0 0 0;
}
</style>
