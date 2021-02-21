<template>
  <div class="navbar">
    <div class="top_line"></div>
    <div class="mask" v-if="status" @click="status = !status"></div>
    <div class="navcontent">
      <div class="babalu">
        <p>巴巴鲁</p>
      </div>
      <div class="nav-items" :class="status ? 'nav-itemshow' : ''" @click="status=false">
        <div class="nav-item" :class="{'active':urlpath=='/'}" @click="togglePath('/')">首页</div>
        <div class="nav-item" :class="{'active':urlpath=='/blog'}" @click="togglePath('/blog')">博客</div>
        <div class="nav-item" :class="{'active':urlpath=='/note'}" @click="togglePath('/note')">笔记</div>
        <div class="nav-item" :class="{'active':urlpath=='/about'}" @click="togglePath('/about')">关于</div>
      </div>
      <button
        type="button"
        class="nav-btn"
        id="nav-btn"
        @click="status = !status"
      >
        <!--按钮-->
        <span></span>
        <span></span>
        <span></span>
      </button>
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
      status: false,
    };
  },
  computed: {
    urlpath(){
      return this.$route.path
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    toggleBtn() {
      this.status = !this.status;
    },
    togglePath(path){
      this.navTo(path)
      // console.log()
    }
  },
};
</script>

<style scoped>
.navbar {
  height: 65px;
  width: 100%;
  background-color: rgba(255, 254, 254);
  box-shadow: 0px 2px 10px #ccc;
}
.top_line {
  height: 5px;
  width: 100%;
  background: rgb(132, 189, 0);
}
.navcontent {
  width: 100%;
  padding: 0 10%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
}

.babalu {
  display: flex;
  justify-content: center;
  line-height: 60px;
}

.babalu p {
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bolder;
}

.nav-items {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  height: 60px;
  font-weight: 500;
  line-height: 60px;
  text-align: center;
  width: 100px;
  background-color: rgba(255, 254, 254);
  
}
.nav-item.active{
  height: 60px;
  border-bottom: 5px solid rgb(132, 189, 0);
  box-sizing: border-box;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgb(131, 131, 131);
}

.nav-item:hover {
  background-color: rgba(195, 206, 169, 0.2);
  font-weight: bold;
  height: 60px;
  text-shadow: 1px 1px 2px rgb(131, 131, 131);
  /* transition: all 0.5s; */
}

.nav-btn {
  display: none;
  position: absolute;
  top: 19px;
  right: 19px;
  z-index: 999;
  padding: 5px 5px 3px;
  cursor: pointer;
  background: #fff;
  border-radius: 3px;
  border-color: rgb(132, 189, 0);
}

.nav-btn span {
  display: block;
  width: 17px;
  height: 2px;
  background: rgb(132, 189, 0);
  margin-bottom: 2px;
}

@media all and (max-width: 768px) {
  .navbar {
    width: 100%;
    background-color: rgba(255, 254, 254);
  }
  .mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 65px;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999  ;
  }
  .navcontent {
    padding: 0;
    display: block;
    box-sizing: content-box;
    align-items: center;
    position: absolute;
    z-index: 1000;
  }

  .babalu {
    display: flex;
    justify-content: start;
    padding-left: 2%;
    height: auto;
  }

  .nav-items {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    display: none;
  }
  .nav-items.nav-itemshow {
    display: block;
  }
  .nav-item {
    width: 100%;
    display: flex;
    justify-content: start;
    padding-left: 2%;
    border-bottom: 1px solid #ccc;
  }
  .nav-btn {
    display: block;
  }
}
</style>
