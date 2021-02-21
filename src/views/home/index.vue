<template>
  <div>
    <div class="homelist">
      <div class="left">
        <el-card
          class="box-card"
          v-for="(item, index) in homeList"
          :key="index"
        >
          <!-- 标题 -->
          <div slot="header" class="clearfix blod_text">
            <span>{{ item.title }}</span>
          </div>
          <!-- 文本 -->
          <div class="text_content">
            <p>{{ item.context }}</p>
          </div>
        </el-card>
      </div>
      <!-- 右侧 -->
      <div class="right">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>目录</span>
          </div>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>
                与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
              </div>
              <div>
                在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
              </div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>
                控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
              </div>
              <div>
                页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
              </div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>
                清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
              </div>
              <div>
                帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
              </div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>
                用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
              </div>
              <div>
                结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
              </div>
            </el-collapse-item>
          </el-collapse>
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
      value: `### 同时
      ，**word-wrap**也可以用来设置**文本行为**，当前行超过指定容器的边界时是否断开转行。`,
      homeList: [
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
      ],
      activeNames: ["1"],
      editor: null,
      editorData: "",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleChange(val) {
      // console.log(val);
    },
  },
};
</script>

<style scoped lang="scss">
.blod_text {
  font-weight: 600;
  font-size: 20px;
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
