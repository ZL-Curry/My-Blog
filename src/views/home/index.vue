<template>
  <div>
    <div class="homelist">
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
            <p>{{ item.createdTime || '' }}</p>
          </div>
          <!-- 文本 -->
          <div class="text_content" @click="lookDetail(item)">
            <p>{{ item.context }}</p>
          </div>
        </el-card>
      </div>
      <!-- 右侧 -->
      <AsideList @changeActive="changeSelectStatus($event)" :AlideList="AlideList" ref="refAsideList"/>
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
      changeActiveText:"",
      AlideList: window.$$learn_note,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    
  },
  methods: {
    lookDetail(item) {
      this.$router.push({ name: "noteDetail", params: { item } });
    },
    changeSelectStatus(index){
      this.changeActiveText = index
    }
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
