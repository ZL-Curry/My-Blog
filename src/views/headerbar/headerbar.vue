<template>
  <div class="nav">
    <div class="navbar">
      <div class="top_line"></div>
      <div class="mask" v-if="status" @click="status = !status"></div>
      <div class="navcontent">
        <div class="babalu">
          <p @click="click_name">{{ $store.state.username }}</p>
        </div>
        <div
          class="nav-items"
          :class="status ? 'nav-itemshow' : ''"
          @click="status = false"
        >
          <div
            class="nav-item"
            :class="{ active: urlpath == item.path }"
            @click="togglePath(item.path)"
            v-for="(item, index) in navList"
            :key="index"
          >
            {{ item.name }}
          </div>
        </div>
        <button
          type="button"
          class="nav-btn"
          id="nav-btn"
          @click="status = !status"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
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
      status: false,
      navList: [
        { name: "Home", path: "/" },
        { name: "Navigation", path: "/navigation" },
        { name: "Note", path: "/note" },
        { name: "Infinity", path: "/infinity" },
        { name: "Beyond", path: "/beyond" },
        { name: "About", path: "/about" },
      ],
    };
  },
  computed: {
    urlpath() {
      return this.$route.path;
    },
  },
  watch: {},
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    click_name() {
      // console.log(this.$store.state.username)
      // this.$store.dispatch('changename')
      // this.$store.commit("namechanged")
      // this.$store.commit("addcount",10)
      // this.$store.dispatch('actionsAddCount',100)
      this.$store.getters.getterCount;
    },
    toggleBtn() {
      this.status = !this.status;
    },
    togglePath(path) {
      this.navTo(path);
    },
    handleScroll() {
      // 获取滚动时的高度
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 0) {
        this.status = false;
      }
    },
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style  lang='scss'>
.nav {
  height: 65px;
  width: 100%;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  clear: both;
  height: 65px;
  width: 100%;
  background-color: rgba(255, 254, 254);
  box-shadow: 0px 2px 10px #ccc;
}
.top_line {
  height: 5px;
  width: 100%;
  background: $theme-color;
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
.nav-item.active {
  height: 60px;
  border-bottom: 5px solid $theme-color;
  box-sizing: border-box;
  font-weight: bold;
  text-shadow: $theme-text-shadow;
}

.nav-item:hover {
  background-color: rgba(195, 206, 169, 0.2);
  font-weight: bold;
  height: 60px;
  text-shadow: 1px 1px 2px rgb(131, 131, 131);
  transition: all 0.5s;
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
  border-color: $theme-color;
}

.nav-btn span {
  display: block;
  width: 17px;
  height: 2px;
  background: $theme-color;
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
    z-index: 999;
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
  .nav-item:hover {
    background: #fff;
  }
}
</style>
