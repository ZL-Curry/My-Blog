<template>
  <div class="home">
    <!-- 左侧 -->
    <div class="left">
      <el-card class="box-card" v-for="(item,index) in homeList" :key="index">
        <!-- 标题 -->
          <div slot="header" class="clearfix" >
            <span>{{item.title}}</span>
          </div>
          <!-- 文本 -->
          <div v-html="item.context"></div>
          <div style="">
            <h5>vue 中的 scoped 属性的效果主要通过 PostCSS 转译实现</h5>
            
          </div>
      </el-card>
    </div>
    <!-- 右侧 -->
    <div class="right">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>目录</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        homeList: [
          { 
            title:'vue中css样式穿透',
            context:''
          }
        ]
      }
    },
    methods: {

    }
  }
</script>
<style lang="scss" scoped>
.home {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  .left {
    width: 72%;
    .box-card{
      margin-bottom: 10px;
    }
  }
  .right{
    width: 22%;
  }
}
</style>
