<template>
  <div class="about">
    <h3><span>*</span>巴巴鲁</h3>
    <p>
      这是一个基于 <em>vue</em> 脚手架2.x开发的PC端和移动端的
      <em>响应式</em> 个人博客,也是我的第一个上线博客
    </p>
    <p>
      项目中主要大部分页面是自己手写，项目中引入了
      <em>Element-ui</em> ,但是很多组件达不到想要的效果
    </p>
    <p>
      后台是基于 <em>NodeJS</em> 和 <em>mongoDB</em> 数据库开发，项目现在在
      <em>宝塔面板</em>
      上面托管，由于服务器是的性能不是太好，可能有时会出现进不去的情况，还望见谅
      💖
    </p>
    <p>本博客主要写一些技术博客，偶尔会记录一下自己的生活和个人感悟 🎈</p>
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
  height: calc(100vh - 120px);
  padding: 0px 10%;
  span {
    font-size: 20px;
    color: #f40;
  }
  h3 {
    padding: 5px 0px;
    border-bottom: 1px solid #cccccc;
  }
  p {
    padding: 10px 10px 10px 20px;
    line-height: 2em;
  }
  em {
    font-style: normal;
    background: rgb(171, 224, 245);
    border-radius: 5px;
    padding: 2px 5px;
  }
}
</style>
