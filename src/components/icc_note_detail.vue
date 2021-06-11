<template>
  <div class="noteDetail">
    <div class="content">
      <el-card>
        <div slot="header" class="clearfix blod_text">
          <h4 class="_h1">{{ this.$route.params.item.title || "" }}</h4>
        </div>
        <div class="text_content">
          <p class="_p">{{ this.$route.params.item.context || "" }}</p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
};
</script>

<style lang="scss" scoped>
.noteDetail {
  margin: 20px;
  min-height: calc(100vh - 110px);
  ._h1{
    font-size: 30px;
  }
  ._p{
    font-size: 20px;
    text-indent: 2em;
    line-height: 60px;
  }
}
</style>