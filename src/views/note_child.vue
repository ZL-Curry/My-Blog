<template>
    <div  >
      <div >
        <el-card class="box-card box" v-for="item in notes" v-scroll="handleScroll" >
        <div slot="header" class="clearfix">
          <span>{{item.title}}</span>
        </div>
        <div  class="text item">
          {{ item.text }}
        </div>
      </el-card>
      <el-card class="box-card box" v-for="item in notes" v-scroll="handleScroll" >
        <div slot="header" class="clearfix">
          <span>{{item.title}}</span>
        </div>
        <div  class="text item">
          {{ item.text }}
        </div>
      </el-card>
      </div>

    </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      notes:[
        {
          title:'菲兹杰拉德',
          text:'我们来自远方，我们的梦想却那么近，看起来想不实现都难，然而我们并不知道，梦早已破碎。 我们继续奋力向前，逆水行舟，被不断地向后推，直至回到往昔岁月'
        },
        {
          title:"王小波",
          text:"一个人倘若需要从思想中得到快乐,那么他的第一个欲望就是学习   ——王小波"
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0)'
        )
      }
      return window.scrollY > 100
    }
  }
}
</script>

<style scoped lang="scss">
.box-card{
  margin: 10px 0px;
}
.box {
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
</style>
