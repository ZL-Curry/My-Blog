<template>
  <div class="about">
    <h3><span>*</span>巴巴鲁</h3>
    <p>
      这是一个基于 <em>vue</em> 脚手架开发的PC端和移动端的
      <em>响应式</em> 个人博客
    </p>
    <p>
      项目中引入了
      <em>Element-ui</em> ,但是很多组件达不到想要的效果
    </p>
    <p>
      后台是基于 <em>NodeJS</em> 和 <em>mongoDB</em> 数据库开发，项目现在在
      <em>宝塔面板</em>
      上面托管，由于服务器是的性能不是太好，可能有时会出现进不去的情况，还望见谅
      💖
    </p>
    <p>本网站主要用来写一些技术博客，记录生活，分享感悟 🎈</p>
    <div style="height: 300px;">
      <el-steps direction="vertical" :active="1">
        <el-step title="响应式布局" description="实现各种设备兼容"></el-step>
        <el-step title="富文本编辑器" description="TipTap或百度Editor"></el-step>
        <el-step title="Node后台接口" description="设计一个完成的博客系统后台，完成增删改查"></el-step>
        <el-step title="支持登录，留言，发布帖子" description="目前已完成登录注册功能"></el-step>
      </el-steps>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.about {
  min-height: calc(100vh - 126px);
  padding: 0px 2%;
  span {
    font-size: 20px;
    color: #f40;
  }
  h3 {
    padding: 5px 0px;
    border-bottom: 1px solid #cccccc;
  }
  p {
    padding: 10px 5px 10px 5px;
    line-height: 2em;
  }
  em {
    font-style: normal;
    background: $theme-color;
    border-radius: 5px;
    padding: 2px 3px;
  }
}
</style>
