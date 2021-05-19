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
    <div style="height: 100px">
      <el-steps direction="horizontal" :active="1" finish-status="success">
        <el-step title="响应式布局" description="实现各种设备兼容"></el-step>
        <el-step
          title="富文本编辑器"
          description="TipTap或百度Editor"
        ></el-step>
        <el-step
          title="Node后台接口"
          description="设计一个完成的博客系统后台，完成增删改查"
        ></el-step>
        <el-step
          title="支持登录，留言，发布帖子"
          description="目前已完成登录注册功能"
        ></el-step>
      </el-steps>
    </div>
    <div id="container"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: null,
    };
  },
  created() {},
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let map = new AMap.Map("container", {
        zoom: 22, //级别
        center: [120.209336, 30.133265], //中心点坐标
        mapStyle: "amap://styles/macaron",
        pitch: 27, // 地图俯仰角度，有效范围 0 度- 83 度
        // viewMode: "1D", //使用3D视图
        layers: [
          //使用多个图层
          // new AMap.TileLayer.Satellite(),
          // new AMap.TileLayer.RoadNet()
        ],
      });
      AMap.plugin("AMap.Geolocation", function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: "RB",
        });
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);
        function onComplete(data) {
          // data是具体的定位信息
        }
        function onError(data) {
          // 定位出错
        }
      });
      // 获取当前城市信息
      // AMap.plugin("AMap.CitySearch", function () {
      //   var citySearch = new AMap.CitySearch();
      //   citySearch.getLocalCity(function (status, result) {
      //     if (status === "complete" && result.info === "OK") {
      //       // 查询成功，result即为当前所在城con
      //       console.log(status,result)
      //     }
      //   });
      // });
      //实时路况图层
      var trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10,
      });
      var infoWindow = new AMap.InfoWindow({
        //创建信息窗体
        isCustom: true, //使用自定义窗体
        content: "<div>巴巴鲁</div>", //信息窗体的内容可以是任意html片段
        offset: new AMap.Pixel(16, -45),
      });
      var onMarkerClick = function (e) {
        infoWindow.open(map, e.target.getPosition()); //打开信息窗体
        //e.target就是被点击的Marker
      };
      // 添加点标记
      var marker = new AMap.Marker({
        position: [120.209336, 30.133265], //位置
      });
      map.add(marker); //添加到地图
      map.add(trafficLayer); //添加图层到地图
      marker.on("click", onMarkerClick); //绑定click事件
      var currentCenter = map.getCenter();
      // console.log(currentCenter);
    },
    destroyMap() {
      this.map && this.map.destroy();
    },
  },
  destroyed() {
    this.destroyMap();
  },
};
</script>

<style lang="scss">
#container {
  width: 100%;
  height: 300px;
  margin-bottom: 50px;
}
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
