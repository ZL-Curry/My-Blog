<template>
  <div class="home">
    <div class="left">
      <div class="card" v-for="item in 10">
        <h4>路由拦截器</h4>
        <br />
        <h5>请求拦截器</h5>
        <p>
          请求拦截器的作用是在请求发送前进行一些操作，例如在每个请求体里加上token，统一做了处理如果以后要改也非常容易。
          关于拦截，这里只说原理，前端的请求，最终还是离不开 ajax，像vue 的
          vue-resource
          、axios，都只是对ajax进行了统一的封装，它暴露出来的拦截器，其实就是写了一个方法，把ajax写在这个方法里面，在执行这个方法的时候，先将请求时要添加给请求头的那些数据（token、后端要的加密码…具体要看实际情况）先执行一遍，都赋值给一个变量，然后再统一传给ajax，接下来就是执行ajax，这就是所谓的请求拦截，其实就是先执行要添加的数据，然后再执行ajax，如果把这个添加数据的过程抽出来，就成了所谓的请求拦截器；
        </p>
        <h5>响应拦截器</h5>
        <p>
          响应拦截器的作用是在接收到响应后进行一些操作，例如在服务器返回登录状态失效，需要重新登录的时候，跳转到登录页。
          响应拦截器也是一样如此，就是在请求结果返回后，先不直接导出，而是先对响应码等等进行处理，处理好后再导出给页面，如果将这个对响应码的处理过程抽出来，就成了所谓的响应拦截器；
        </p>
        <h5>axios拦截器</h5>
        <p>在请求或响应被 then 或 catch 处理前拦截它们。</p>
        <img src="@/assets/homeimage/axios.request.png" alt="" />
        <h5>移除拦截器</h5>
        <img src="@/assets/homeimage/axios.request-remove.png" alt="" />
        <h5>自定义 axios 实例添加拦截器</h5>
        <img src="@/assets/homeimage/axios.request-custom.png" alt="" />
      </div>
    </div>
    <div class="right">
      <div class="broadside">
        <!-- :class="{ act: current == index }" -->
        <h5
          v-for="(item, index) in asideTexts"
          @click="asideClick(index)"
          :class="{ act: changeActiveText == index }"
        >
          {{ item }}
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      indexs: "1",
      asideTexts: [],
      changeActiveText: "",
      seeThis:0
    };
  },
  methods: {
    asideClick(index) {
      var elmnt = document.querySelectorAll("h4")[index];
      elmnt.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
      this.changeActiveText = index;
    },
    handleScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 300){            
        console.log('大于500')
      }
    }
  },
  mounted() {
    // $el 方法只在mounted中有效
    // this.$el.querySelector('#read')
    let _this = this
    let x = _this.$el.querySelectorAll('h4')
    let asideText = [];
    for (let i = 0; i < x.length; i++) {
      asideText.push(x[i].innerHTML);
    }
    this.asideTexts = asideText;
    // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
    window.addEventListener('scroll',this.handleScroll) 
  },
  created() {},
};
</script>
<style lang="scss" scoped>
h5 {
  margin: 20px 0px;
}
.home {
  display: flex;
  justify-content: start;
}

.left {
  width: 72%;
}

.right {
  width: 20%;
  position: fixed;
  top: 60px;
  right: 8%;
  height: 450px;
}
.card {
  width: 100%;
  border-radius: 7px;
  background: linear-gradient(
    to right bottom,
    rgba(63, 226, 226, 0.6),
    rgba(90, 180, 49, 0.1)
  );
  backdrop-filter: blur(8px);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.8);
  padding: 20px;
  box-sizing: border-box;
  margin: 20px 0;
}
.card h5 {
  margin: 7px 0;
}

.card img {
  width: 100%;
}
.card p {
  line-height: 1.8;
  text-indent: 2em;
  text-align: justify;
}
.broadside {
  width: 100%;
  height: 100%;
  border-radius: 7px;
  background: linear-gradient(
    to right bottom,
    rgba(57, 172, 238, 0.6),
    rgba(90, 180, 49, 0.1)
  );
  backdrop-filter: blur(8px);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-left: 1px solid rgba(255, 255, 255, 0.8);
  padding: 20px;
  box-sizing: border-box;
  margin: 20px 0px;
  overflow: auto;
}
.broadside h5.act {
  color: rgb(32, 70, 196);
}
// .broadside::-webkit-scrollbar {
//   width: 0 !important;
// }

.broadside::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
  // height: 0px;
}

.broadside::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #1a5185;
}

.broadside::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(141, 140, 140, 0.2);
  border-radius: 10px;
  background: #ededed;
}
</style>