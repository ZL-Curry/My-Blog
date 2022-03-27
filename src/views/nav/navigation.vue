<template>
  <div class="blog">
    <div class="daohang">
      <button
        plain
        type="success"
        v-for="(item, index) in srclist"
        :key="index"
      >
        <i class="iconfont" :class="item.icon || ''"></i>
        <a :href="item.href" target="_blank">
          <span> {{ item.name }}</span>
        </a>
      </button>
    </div>
  </div>
</template>

<script>
import { addClass } from "../../utils/tests.js"
export default {
  data() {
    return {
      srclist: window.$$navigationList,
    };
  },
  mounted() {
    this._addClass()
  },
  methods: {
    _addClass() {
      let lists =  this.$refs.lists.children
      for (let i = 0; i < lists.length; i++) {
        let item = lists[i]
        addClass(item, 'test3')
      }
      console.log(lists)
    }
  },
};
</script>

<style scoped lang="scss">
// 测试动态添加类
.test3{
  color: red;
}


// test h-full
html,body{
  height: 100%;
}
.blog {
  min-height: calc(100vh - 126px);
  width: 100%;
  margin: 10px 0 10px 0;
  .daohang {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .el-button {
      margin-top: 10px;
      background: raba(255, 255, 24, 0.5);
      min-width: 12%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .el-button:hover {
      span {
        color: #fff;
      }
    }
    i {
      font-size: 20px;
    }
    a {
      font-size: 20px;
      span {
        color: #2da825;
      }
    }
  }
}
@media screen and(max-width: 768px) {
  .el-carousel {
    height: 160px;
  }
}
</style>
