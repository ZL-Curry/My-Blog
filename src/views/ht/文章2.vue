<template>
  <div class="home">
    <div class="fixeditem">
      <div
        class=""
        v-for="(item, index) in tabs"
        :class="seeThis == index ? 'active' : ''"
      >
        <!-- <a href="javascript:void(0)" @click="goAnchor(index)">{{ item }}</a> -->
        <h2 href="javascript:void(0)" @click="goAnchor(index)">{{ item }}</h2>
      </div>
    </div>

    <div :class="seeThis == index ? 
    'active' : ''"
    v-for="(item1,index) in box" 
    class="box" 
    :id="'anchor'+index">{{item1}}</div>
    <!-- <div class="box" id="anchor1">block1</div>
    <div class="box" id="anchor2">block2</div>
    <div class="box" id="anchor3">block3</div>
    <div class="box" id="anchor4">block4</div>
    <div class="box" id="anchor5">block5</div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      seeThis: 0,
      tabs: ["tab0", "tab1","tab2", "tab3", "tab4", "tab5"],
      box:['0','1','2','3','4','5']
    };
  },
  mounted() {
    // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    goAnchor(index) {
      // 也可以用scrollIntoView方法， 但由于这里头部设置了固定定位，所以用了这种方法
      // document.querySelector('#anchor'+index).scrollIntoView()
      this.seeThis = index;
      var anchor = this.$el.querySelector("#anchor" + index);
      anchor.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      this.changeActiveText = index;
    },
    handleScroll() {
      var anchorOffset0 = this.$el.querySelector("#anchor0").offsetTop ;
      var anchorOffset1 = this.$el.querySelector("#anchor1").offsetTop ;
      var anchorOffset2 = this.$el.querySelector("#anchor2").offsetTop ;
      var anchorOffset3 = this.$el.querySelector("#anchor3").offsetTop ;
      var anchorOffset4 = this.$el.querySelector("#anchor4").offsetTop ;
      var anchorOffset5 = this.$el.querySelector("#anchor5").offsetTop ;
      var scrollTop1 =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop1 > anchorOffset0) {
        this.seeThis = 0;
      }
      if (scrollTop1 > anchorOffset1 && scrollTop1 < anchorOffset2) {
        this.seeThis = 1;
      }
      if (scrollTop1 > anchorOffset2 && scrollTop1 < anchorOffset3) {
        this.seeThis = 2;
      }
      if (scrollTop1 > anchorOffset3 && scrollTop1 < anchorOffset4) {
        this.seeThis = 3;
      }
      if (scrollTop1 > anchorOffset4 && scrollTop1 < anchorOffset5) {
        this.seeThis = 4;
      }
      if (scrollTop1 > anchorOffset5) {
        this.seeThis = 5;
      }
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.active {
  color: #ccc;
  background: rgb(73, 112, 2);
}
.box {
  height: 500px;
  width: 500px;
  border: 1px solid #ccc;
}
.fixeditem {
  position: fixed;
  top: 300px;
  left: 0;
  z-index: 99999;
}
</style>