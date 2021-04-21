<template>
  <div>
    <div class="homelist">
      <div class="left">
        <el-card
          class="box-card"
          v-for="(item, index) in homeList"
          :key="index"
          @click.native="toNoteDetail(item)"
        >
          <!-- 标题 -->
          <div
            slot="header"
            class="clearfix blod_text"
            :class="{ act: changeActiveText == index }"
          >
            <h4>{{ item.title }}</h4>
          </div>
          <!-- 文本 -->
          <div class="text_content">
            <p>{{ item.context }}</p>
          </div>
        </el-card>
      </div>
      <!-- 右侧 -->
      <div class="right">
        <el-card class="tips">
          <div slot="header" class="clearfix">
            <h3>论坛小贴士</h3>
          </div>
          <div>记录心得，分享经验</div>
          <el-row style="margin-top:20px;">
            <el-button type="primary" plain>发帖交流</el-button>
            <el-button type="success" plain>签到打卡</el-button>
          </el-row>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>目录</h3>
          </div>
          <div
            @click="asideClick(index)"
            :class="{ act: changeActiveText == index }"
            v-for="(item, index) in homeList"
            :key="index"
            class="text item"
          >
            <h4>{{ item.title.split("").slice(0, 20).join("") }}...</h4>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      changeActiveText: "",
      homeList: [
        {
          title: "vue数据双向绑定",
          context: `vue实现数据双向绑定主要是：采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty() 来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty() 将它们转为 getter/setter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。

vue的数据双向绑定 将MVVM作为数据绑定的入口，整合Observer，Compile和Watcher三者，通过Observer来监听自己的model的数据变化，通过Compile来解析编译模板指令（vue中是用来解析 {{}}），最终利用watcher搭起observer和Compile之间的通信桥梁，达到数据变化 —>视图更新；视图交互变化（input）—>数据model变更双向绑定效果
`,
        },
        {
          title: "Keep-alive",
          context: `主要用于保留组件状态或避免重新渲染.有一个列表页面和一个 详情页面，那么用户就会经常执行打开详情=>返回列表=>打开详情这样的话 列表 和 详情 都是一个频率很高的页面，那么就可以对列表组件使用keep-alive进行缓存，这样用户每次返回列表的时候，都能从缓存中快速渲染，而不是重新渲染。
1、属性：
include:字符串或正则表达式。只有匹配的组件会被缓存。
exclude：字符串或正则表达式。任何匹配的组件都不会被缓存。
2、用法：
包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition>相似，<keep-alive>是一个抽象组件：它自身不会渲染一DOM 元素，也不会出现在父组件链中。
当组件在keep-alive 内被切换，在 2.2.0 及其更高版本中，activated 和 deactivated生命周期 将会在 树内的所有嵌套组件中触发`,
        },
        {
          title: "v-for和v-if的优先级",
          context:
            "当它们处于同一节点，v-for的优先级比v-if更高，这意味着 v-if将分别重复运行于每个 v-for循环中。当你想为仅有的一些项渲染节点时，这种优先级的机制会十分有用",
        },
        {
          title: "vuex理解",
          context:
            "vuex是一个状态管理工具，主要解决大中型复杂项目的数据共享问题，主要包括state,actions,mutations,getters和modules 5个要素，主要流程：组件通过dispatch到 actions，actions是异步操作，再actions中通过commit到mutations，mutations再通过逻辑操作改变state，从而同步到组件，更新其数据状态,而getters相当于组件的计算属性对,组件中获取到的数据做提前处理的.再说到辅助函数的作用",
        },
        {
          title: "v-if和v-show的区别",
          context: `v-if和v-show都可以显示和隐藏一个元素，但有本质区别
v-if是惰性的，只是值为false就不会加载对应元素，为true才动态加载对应元素
v-show:是无论为true和为false都会加载对应html代码，但为false时用display:none隐藏不在页面显示，但为true时页面上用display:block显示其效果

适用场景：切换频繁的场合用v-show,切换不频繁的场合用v-if`,
        },
        {
          title: "事件委托",
          context:
            "JS事件代理就是通过给父级元素（例如：ul）绑定事件，不给子级元素(例如：li)绑定事件，然后当点击子级元素时，通过事件冒泡机制在其绑定的父元素上触发事件处理函数，主要目的是为了提升性能，因为我不用给每个子级元素绑定事件，只给父级元素绑定一次就好了,在原生js里面是通过event对象的targe属性实现",
        },
        {
          title: "请求拦截器",
          context: ` 请求拦截器的作用是在请求发送前进行一些操作，例如在每个请求体里加上token，统一做了处理如果以后要改也非常容易。
          关于拦截，这里只说原理，前端的请求，最终还是离不开 ajax，像vue 的
          vue-resource
          、axios，都只是对ajax进行了统一的封装，它暴露出来的拦截器，其实就是写了一个方法，把ajax写在这个方法里面，在执行这个方法的时候，先将请求时要添加给请求头的那些数据（token、后端要的加密码…具体要看实际情况）先执行一遍，都赋值给一个变量，然后再统一传给ajax，接下来就是执行ajax，这就是所谓的请求拦截，其实就是先执行要添加的数据，然后再执行ajax，如果把这个添加数据的过程抽出来，就成了所谓的请求拦截器；`,
        },
        {
          title: "响应拦截器",
          context: ` 响应拦截器的作用是在接收到响应后进行一些操作，例如在服务器返回登录状态失效，需要重新登录的时候，跳转到登录页。
          响应拦截器也是一样如此，就是在请求结果返回后，先不直接导出，而是先对响应码等等进行处理，处理好后再导出给页面，如果将这个对响应码的处理过程抽出来，就成了所谓的响应拦截器；`,
        },
        {
          title: "vue中css样式穿透",
          context: `从官方文档了解到，我们所谓的穿透，官方叫做深度选择器。就是在我们想穿透的选择器前边添加 >>> 或者 /deep/ 或者 ::v-deep
          官方说明>>>可能存在问题，建议用后两者，我们用的less，就选择 /deep/ 好了，于是我们加回刚在style中删除的scoped属性，`,
        },
        {
          title:
            "document.querySelectorAll赋给其它变量时, 为什么要.bind(document)?",
          context: `因为document.querySelectorAll是通过document这个对象去调用querySelectorAll的时候，
                    函数的环境变量里this会指向document，假设querySelectorAll含有this的操作的话，那么this就会指代document。  
                    而当你执行var select = document.querySelectorAll; 的时候，select所得到的是querySelector这个引用，
                    但是此时如果直接通过select去调用的话，也就是select('span'); ，由于select（querySelectorAll）直接调用的话，
                    this会自动指向window，所以就会出错。bind的作用是，创建一个新函数，称为绑定函数。当调用这个绑定函数时，绑定函数会以创建它时传入 bind()方法的第一个参数作为 this，传入 bind() 方法的第二个以及以后的参数。  
                    而这句话var $ = document.querySelectorAll.bind(document);的效果相当于下面的代码`,
        },
        {
          title: "MVVM的理解",
          context: `MVVM是Model-View-ViewModel的缩写。MVVM是一种设计思想。
 View层是视图层，也就是用户界面。前端主要由HTML和CSS来构建；
 Model层 是指数据模型，泛指后端进行的各种业务逻辑处理和数据操控，对于前端来说就是后端的提供的API接口；
ViewModel层是视图数据层，一个同步View和Model的对象。

在MVVM架构下，View和Model之间并没有直接的联系，而是通过ViewModel进行交互，Model和ViewModel之间的交互是双向的，因此View数据的变化会同步到Model中，而Model数据的变化也会立即反应到View上。

ViewModel通过双向数据绑定把View层和Model层连接了起来，而View和Model之间的同步工作完全是自动的，无需人为干涉，因此开发者只需要关注业务逻辑，不需要手动操作DOM，不需要关注数据状态的同步问题，复杂的数据状态维护完全由MVVM来统一管理`,
        },
        {
          title: "computed 有何特点，computed 和 watch，methods 的区别",
          context: `computed： 有缓存，data 不变不会重新计算；提高性能。
computed 为什么需要缓存？简单说就是可以提高性能。假设我们有一个性能开销比较大的计算属性A,它需要遍历一个巨大的数组做大量的计算，然后我们可能有其他的属性依赖于A，如果没有缓存，将不可避免的多次执行A 的getter，如果不希望有缓存请用方法代替
computed 和 methods的区别: computed 计算属性是基于它的响应式依赖进行缓存的，只在相关响应式依赖发生改变时它们才会重新求值，这意味着只要原属性还没发生改变，多次访问相关属性，计算属性会立即返回之前的计算结果，而不必再次执行函数；而 methods 每当触发重新渲染时，调用方法总会再次执行函数
computed 和 watch的区别：computed 默认只要 getter，不过需要时也可以提供 setter；watch 侦听器，当需要在数据变化时执行异步或开销较大的操作时，watch是最有用的，使用 watch选项允许执行异步操作（访问一个API）,限制我们执行该操作的频率，并在得到最终结果前，设置中间状态，这些都是计算属性无法做到的`,
        },
      ],
      editor: null,
      editorData: "",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 跳转文章详情
    toNoteDetail(item){
      console.log('1')
      this.$router.push({name:'notedetail',params:{item:item}});
    },
    // 侧边栏点击跳转
    asideClick(index) {
      var elmnt = document.querySelectorAll(".left h4")[index];
      elmnt.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
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
}
.blod_text.act {
  color: $theme-color;
}
.text_content {
  line-height: 1.5em;
  text-indent: 2em;
  color: rgb(82, 82, 82);
  text-align: justify;
  text-justify: inter-ideograph;
  word-wrap: break-word;
  overflow: hidden;
  word-break: break-all;
  p{
    overflow: hidden;
 	text-overflow: ellipsis;
 	display: -webkit-box;
 	-webkit-line-clamp: 3;
 	-webkit-box-orient: vertical;
  }
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
.right {
  width: 22%;
  position: fixed;
  right: 8%;
  top: 75px;
  .tips {
    margin-bottom: 10px;
  }
  h3 {
    margin: 0;
  }
}
@media all and (max-width: 768px) {
  .right {
    display: none;
  }
  .home {
    .left {
      width: 100%;
    }
  }
}
</style>
