<template>
  <div class="blog">
    <div class="swiper">
      <el-carousel :interval="5000" arrow="hover">
        <el-carousel-item v-for="(item, index) in url" :key="index">
          <el-image :src="item.imgurl" fit style="width: 100%"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="daohang">
      <el-button
      plain
      type="success"
        v-for="(item, index) in srclist"
        :key="index"
      >
      <i class="iconfont" :class="item.icon || ''"></i>
        <a :href='item.href' target="_blank"
          >
          
          <span> {{item.name}}</span>
         </a
        >
        </el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: [
        {
          imgurl: require("@/assets/img/bz1.jpg"),
        },
        {
          imgurl: require("@/assets/img/bz2.jpg"),
        },
        {
          imgurl: require("@/assets/img/bz3.jpg"),
        },
      ],
      srclist: [
         {
          href: "https://cn.vuejs.org/",
          name: "VUE",
          icon:'iconVue'
        },
        {
          href:'https://uniapp.dcloud.io/',
          name:'Uni-App',
          icon:'iconuni-app'
          
        },{
          href:'https://developers.weixin.qq.com/miniprogram/dev/framework/',
          name:'微信小程序',
          icon:'iconweixin'

        },
        {
          href: "https://www.bilibili.com/",
          name: "哔哩哔哩",
          icon:'iconbilibili'
        },
        {
          href: "https://juejin.cn/",
          name: "掘金",
          icon:'iconjuejin'
        },
        {
          href: "https://stackoverflow.com/",
          name: "stackoverflow",
          icon:'iconstackoverflowcolor'
        },
        {
          href: "https://www.nowcoder.com/",
          name: "牛客网",
          icon:''
        },
        {
          href: "https://www.houdunren.com/",
          name: "后盾人",
        },
        {
          href: "http://107.174.170.196:8888/7d6848ef/",
          name: "宝塔面板",
          icon:'iconbaota'
        },
        {
          href: "https://zh.javascript.info/",
          name: "现代JavaScript",
        },
        {
          href: "https://developer.mozilla.org/zh-CN/docs/Web",
          name: "MDN",
          icon:'iconmdnwebdocs'
        },
        {
          href:'https://github.com/',
          name:'GitHub',
          icon:'iconhuaban88'
        },
        {
          href:'https://es6.ruanyifeng.com/',
          name:'ES6标准入门(阮一峰 著)',
        },
        {
          href:'http://www.ruanyifeng.com/blog/',
          name:'阮一峰的网络日志'
        },
        {
          href:'https://react.docschina.org/',
          name:'React',
          icon:'iconcrew_react'
        },
        {
          href:"http://www.axios-js.com/",
          name:'Axios',
          icon:'iconA'
        },
        {
          href:"https://undraw.co/illustrations",
          name:'urDraw'
        },
        {
          href:"https://codepen.io/",
          name:'codePen',
          icon:'iconcodepen'
        },
        {
          href:'https://youzan.github.io/vant/#/zh-CN/',
          name:'vant',
          icon:'iconvant'
        },
        {
          href:'https://animate.style/',
          name:'Animate.css'
        },
        {
          href:'https://www.tailwindcss.cn/',
          name:'tailwindcss',
          icon:'icontailwindcss-logo'
        },
        {
          href:'https://echarts.apache.org/zh/index.html',
          name:'echarts',
          icon:'iconECharts'
        },
        {
          href:'https://lanhuapp.com/',
          name:'蓝湖',
          icon:'iconlanhu'
        },{
          href:'https://www.webpackjs.com/',
          name:'webpack',
          icon:'iconwebpack'
        },
        {
          href:'https://www.npmjs.com/',
          name:'npm',
          icon:'iconnpm'
        },{
          href:'https://chokcoco.github.io/',
          name:'chokcoco'
        }

      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
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
      background: raba(255,255,24,0.5);
      min-width: 12%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .el-button:hover{
      span{
        color: #fff;
      }
    }
    i{
        font-size: 20px;
      }
    a {
      font-size: 20px;
      span{color: #2da825;}
    }
    
  }
}
@media screen and(max-width: 768px) {
  .el-carousel {
    height: 160px;
  }
}
</style>
