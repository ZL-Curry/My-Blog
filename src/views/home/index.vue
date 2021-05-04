<template>
  <div>
    <div class="homelist" id="homelist">
      <div class="left">
        <el-card
          class="box-card"
          v-for="(item, index) in AlideList"
          :key="index"
        >
          <!-- 标题 -->
          <div
            slot="header"
            class="clearfix blod_text"
            :class="{ act: changeActiveText == index }"
          >
            <h4>{{ item.title }}</h4>
            <p>{{ item.createdTime || "" }}</p>
          </div>
          <!-- 文本 -->
          <div class="text_content" @click="lookDetail(item)">
            <p>{{ item.context }}</p>
          </div>
        </el-card>
        <div style="height:400px;">
        </div>
      </div>
      <!-- 右侧 -->
      <AsideList
        @changeActive="changeSelectStatus($event)"
        :AlideList="AlideList"
        ref="refAsideList"
        :changeActiveTexts="changeActiveText"
        :topArr="topArr"
      />
    </div>
  </div>
</template>

<script>
import AsideList from "@/components/icc_aside_list.vue";
export default {
  name: "",
  components: {
    AsideList,
  },
  props: {},
  data() {
    return {
      changeActiveText: "",
      AlideList: window.$$learn_note,
      topArr: [],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    const jump = document.querySelectorAll(".left h4");
    for (let i = 0; i < jump.length; i++) {
      this.topArr.push(jump[i].offsetTop);
    }
    window.addEventListener(
      "scroll",
      this.debounce(this.handelScroll, 10),
      true
    );
  },
  methods: {
    debounce(fn, wait) {
      var timer = null;
      return function () {
        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(fn, wait);
      };
    },
    handelScroll() {
      let topArr = this.topArr;
      const current_offset_top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let index = 0;
      for (let i = 0, len = this.topArr.length; i < len; i++) {
        if (
          current_offset_top + 5 >= topArr[i] &&
          current_offset_top < topArr[i + 1]
        ) {
          // 根据滚动距离判断应该滚动到第几个导航的位置
          index = i;
        }
      }
      this.changeActiveText = index;
    },
    lookDetail(item) {
      this.$router.push({ name: "noteDetail", params: { item } });
    },
    changeSelectStatus(index) {
      this.changeActiveText = index;
    },
  },
};
</script>

<style scoped lang="scss">
a {
  color: black;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.item.act {
  color: $theme-color;
}
.blod_text {
  font-weight: 600;
  font-size: 20px;
  height: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  p {
    line-height: 3em;
    font-size: 16px;
  }
}
.blod_text.act {
  color: $theme-color;
}
.text_content {
  line-height: 1.75em;
  text-indent: 2em;
  color: rgb(82, 82, 82);
  text-align: justify;
  text-justify: inter-ideograph;
  word-wrap: break-word;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.home {
  width: 1200px;
  margin: auto;
  position: relative;
  .btn {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px 10px;
    cursor: pointer;
  }
  h3 {
    margin: 30px 0 15px;
  }
}
.homelist {
  position: relative;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 72%;
  .box-card {
    margin-bottom: 10px;
  }
}
@media all and (max-width: 768px) {
  .home {
    .left {
      width: 100%;
    }
  }
}
</style>
