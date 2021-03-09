<template>
  <div>
    <div>
      <el-card class="box-card" v-for="item in notes">
        <div slot="header" class="clearfix">
          <h3>{{ item.title }}</h3>
        </div>
        <div class="text item" v-html="item.text">
        </div>
        <el-image
          cover 
          lazy
          z-index:100000
          v-for="(item2,index2) in item.imglist"
          :key="index2"
          class="note_img"
          :src="item2.imgurl"
          :preview-src-list="item2.srcList"
        >
        </el-image>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      notes: [
        {
          title:'自知不足,尚在努力',
          text:`上周日的时候在地铁上看到一个一直关注的一个故事板UP主--(米雷-RayDog)发布的一个关于自己追星的视频,
                我也在问自己,自己每天把一半的时间用在敲代码上是否值得,是因为真正的热爱还是因为程序员的工资高,工作环境好？
                自省一下，发现自己喜欢的东西也不多,音乐(钢琴,吉他,大提琴),电脑(视频剪辑,vsCode,Note,MarkDown,Git),还有一些其他的东西
                我有时只是真正的想要了解,现在感觉自己就是一直无脑的在学习前端方面的东西,没有规划,没有目标,有时我也在想,三年后我在干嘛,
                还是在这边复制粘贴代码,每天搞一些无意义的事情吗,我真的喜欢编程吗,我真的深入了解过编程的价值吗,3.1号面试的时候和fms聊了很多
                也让我又重新拾起记账这一习惯，坚持下去，希望早日真正找到编程带给我的成就感。I code and I'm very lucky to get parid for it:)
          `,
          // imglist:[
          //   {imgurl:require('./img/code_maxnumber.png')}
          // ]
        },
        {
          title:'Calm down and sink in',
          text:`记账软件`,
          imglist:[
            {imgurl:require('./img/code_maxnumber.png')}
          ]
        },
        {
          title:'25号底片',
          text:`To see the world<br>
           things dangerous to come to <br>
           To see behind walls ,To draw closer <br>
           To find each other and to feel <br>
           That is the purpose of LIFE <br>
           开拓视野，冲破艰险<br>
           洞悉所有，贴近生活<br>
           寻找真爱，感受彼此<br>
           这就是人生的目的 `,
          imglist:[
            {imgurl:require('./img/brmxj1.jpeg')},
            {imgurl:require('./img/brmxj2.jpeg')},
            {imgurl:require('./img/Number25.jpg')}
          ]
        },
        {
          title:'西湖-痛仰乐队',
          text:`前天听朋友放了一首痛仰乐队的歌，名字叫《西湖》，非常好听，特别特别特别喜欢这首歌的前21秒,
          之前在学校参加活动的时候，我们班一个同学和他的小乐队表演过痛仰的再见杰克`,
          imglist:[
              {imgurl: require("./img/ty_xh.jpg")}
          ]
        },
        {
          title:'人间-王菲',
          text:`风雨过後不一定有美好的天空<br>
                不是天晴就会有彩虹<br>
                所以你一脸无辜不代表你懵懂<br>
                不是所有感情都会有始有终<br>
                孤独尽头不一定惶恐<br>
                可生命总免不了最初的一阵痛<br>
                但愿你的眼睛只看得到笑容<br>
                但愿你流下每一滴泪都让人感动<br>
                但愿你以後每一个梦不会一场空<br>
                天上人间如果真值得歌颂<br>
                也是因为有你才会变得闹哄哄<br>
                天大地大世界比你想像中朦胧<br>
                我不忍心再欺哄但愿你听得懂`,
                imglist: [
            { imgurl: require("./img/renjian.jpeg") }
          ],
        },
        {
          title: "雨雾下的西湖",
          text:
            "时隔3年，再次来到西湖，西湖依然那么美伦美奂。去时正是下雨天，给西湖的美更是蒙上一层朦胧面纱，山上云雾飞起，水中鸳鸯更是增加了几分美丽",
          imglist: [
            { imgurl: require("./img/xh3.jpg") },
            { imgurl: require("./img/xh2.jpg") },
            { imgurl: require("./img/xh1.jpg") },
          ],
          srcList: [
           'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
          ],
        },
        {
          title: "菲兹杰拉德",
          text:
            "我们来自远方，我们的梦想却那么近，看起来想不实现都难，然而我们并不知道，梦早已破碎。 我们继续奋力向前，逆水行舟，被不断地向后推，直至回到往昔岁月",
          imglist:[
            {imgurl:require('./img/gasby.jpg')}
          ]
        },
        {
          title: "王小波",
          text:
            "一个人倘若需要从思想中得到快乐,那么他的第一个欲望就是学习   ——王小波",
            imglist: [
            { imgurl: require("./img/wxb.jpg") }
          ],
        },
        {
          title: "别做那只迷途的候鸟",
          text: `其实，很长一段时间，我也觉得自己是求职候鸟群中的一只候鸟，努力让自己跟得上迁徙的时刻，一刻不停地往前飞，在人群之中才有安全感，可一个人回到家，又忍不住问自己：现在的工作与生活真的是自己想要的吗？
我常问自己这个问题，我害怕自己看起来是避寒候鸟中的一只，实际上我早已迷途。
我脑子里总有一个画面：一只鸟不知疲倦地飞着，以为前方有鸟群等着自己，以为前方就是南方，但某个闪失时早已迷途。`,
        },
        {
          title: "放学后",
          text:
            "那些青春期的脆弱自尊，轻易不得触碰，那极有有可能成为对他或她一生的打扰。我们都曾经历那样纯粹、易碎的青春，只是时光的磨砺已让我们懂得逃避与忍气吞声然后慢慢遗忘自己曾经的青春",
        },
        {
          title: "秘密",
          text:
            "我们每个人，最想要的就是爱与自由，对于我爱的人，我们愿意付出全部的爱和热情，这种爱本可持续，但热情总会熄灭，这时追求自由，变成我们官黄堂冕的借口，这是人类的全部价值，早已有爱，变成了一颗永远追求自由的心，自由成了背叛的理由，爱情，忘了它吧",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // handleScroll: function (evt, el) {
    //   if (window.scrollY > 50) {
    //     el.setAttribute(
    //       'style',
    //       'opacity: 1; transform: translate3d(0, -10px, 0)'
    //     )
    //   }
    //   return window.scrollY > 100
    // }
  },
};
</script>

<style scoped lang="scss">
.box-card {
  margin: 10px 0px;
}
.box {
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
.note_img {
  max-width: 260px;
  max-height: 300px;
  margin-right: 10px;
  margin-top: 10px;
}
@media all and (max-width: 768px) {
  .note_img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    margin-right: 10px;
    margin-top: 10px;
  }
}
</style>
