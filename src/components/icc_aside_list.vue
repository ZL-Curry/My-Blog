<template>
  <div class="asideList">
    <el-card
      class="box-card"
      :body-style="{
        backgroundColor: '#f5f5f5',
        height: '500px',
        overflowY: 'auto',
        scrollbar: { width: '7px' },
      }"
    >
      <div slot="header" class="clearfix">
        <h3>目录</h3>
      </div>
      <div
        v-for="(item, index) in AlideList"
        :key="index"
        class="text item"
        :class="{ act: changeActiveTexts == index }"
        @click="asideClick(index)"
      >
        <h4>{{ item.title.split("").slice(0, 20).join("") }}...</h4>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    AlideList: {
      type: Array,
      default: [],
    },
    changeActiveTexts: {
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    asideClick(index) {
      var elmnt = document.querySelectorAll("h4")[index];
      console.log(elmnt.offsetTop);
      console.log(elmnt.offsetTop);
      elmnt.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
      this.$emit("changeActive", index);
    },
  },
};
</script>

<style scoped lang="scss">
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.item.act {
  color: $theme-color;
}
.asideList {
  width: 22%;
  position: fixed;
  right: 8%;
  top: 75px;
  // .box-card {
  //   height: 470px;
  //   overflow-y: auto;
  //   &::-webkit-scrollbar {
  //     width: 7px;
  //     background-color: #f5f5f5;
  //   }
  // }
  h3 {
    margin: 0;
  }
}

@media all and (max-width: 768px) {
  .asideList {
    display: none;
  }
}
</style>
