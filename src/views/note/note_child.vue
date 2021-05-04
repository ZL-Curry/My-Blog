<template>
  <div>
    <div>
      <el-card class="box-card" v-for="(item, index) in notes" :key="index">
        <div
          slot="header"
          class="clearfix blod_text"
          :class="{ act: changeActiveText == index }"
        >
          <h4>{{ item.title }}</h4>
          <p>{{ item.createdTime || '' }}</p>
        </div>
        <div class="textContext" v-html="item.text"></div>
        <el-image
          cover
          lazy
          z-index:100000
          v-for="(item2, index2) in item.imglist"
          :key="index2"
          class="note_img"
          :src="item2.imgurl"
          :preview-src-list="item2.srcList"
        >
        </el-image>
      </el-card>
    </div>
    <AsideList @changeActive="changeSelectStatus($event)" :AlideList="notes" :changeActiveTexts= 'changeActiveText'/>
  </div>
</template>

<script>
import AsideList from "@/components/icc_aside_list.vue";
export default {
  name: "",
  props: {},
  components: {
    AsideList,
  },
  data() {
    return {
      changeActiveText:"",
      notes: window.$$note,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    changeSelectStatus(index) {
      this.changeActiveText = index;
    },
  },
};
</script>

<style scoped lang="scss">
.box-card {
  margin: 10px 0px;
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
}
.box {
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.textContext {
  line-height: 1.75em;
  text-indent: 2em;
  color: rgb(82, 82, 82);
  text-align: justify;
  text-justify: inter-ideograph;
  word-wrap: break-word;
  overflow: hidden;
  word-break: break-all;
}
.note_img {
  max-width: 260px;
  max-height: 300px;
  margin-right: 10px;
  margin-top: 10px;
}
@media all and (max-width: 768px) {
  .note_img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    margin-right: 10px;
    margin-top: 10px;
  }
}
</style>
