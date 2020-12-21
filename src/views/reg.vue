<template>
  <div id="all">
    <h2>注册</h2>
    <div class="row">
      <input
        class="bloders"
        type="text"
        id="username"
        placeholder=" "
        v-model="username"
      />
      <label class="bloders" for="username">用户名</label>
    </div>
    <div class="row">
      <input
        class="bloders"
        type="password"
        id="password"
        placeholder=" "
        v-model="password"
      />
      <label class="bloders" for="password">密码</label>
    </div>
    <div class="row">
      <input
        class="bloders"
        type="password"
        id="password2"
        placeholder=" "
        v-model="password2"
      />
      <label class="bloders" for="password2">确认密码</label>
    </div>
    <button class="btn" @click="reg">注册</button>
  </div>
</template>
<script>
import { test_user, test_password } from "../utils/tests";
export default {
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      screenWidth: "document.body.clientWidth",
    };
  },
  created() {},
  mounted() {
    document.querySelectorAll("body")[0].onkeyup = (e) => {
      if (e.code == "Enter") {
        let { username, password, password2 } = this;
        if (!username || !password || !password2) return;
        this.reg();
      }
    };
    window.onresize = () => {
      // this.screenWidth = document.body.clientWidth;
      // let inputs2 = document.getElementsByClassName("row");
      // for (var i = 0; i < inputs.length; i++) {
      //   let inputs_width = inputs2[i].style;
      //   if (this.screenWidth >= 500) {
      //     inputs_width.width = 400 + "px";
      //   }
      //   if (this.screenWidth < 500 && this.screenWidth >= 400) {
      //     inputs_width.width = 270 + "px";
      //   }
      //   if (this.screenWidth <= 375) {
      //     inputs_width.width = 210 + "px";
      //   }
      // }
      /**
        if (this.screenWidth >= 500) {
          for (var i = 0; i < inputs.length; i++) {
            inputs[i].style.width = 400 + "px";
          }
        }
        if (this.screenWidth < 500 && this.screenWidth >= 400) {
          for (var i = 0; i < inputs.length; i++) {
            inputs[i].style.width = 270 + "px";
          }
        } else if (this.screenWidth <= 375) {
          for (var i = 0; i < inputs.length; i++) {
            inputs[i].style.width = 230 + "px";
          }
        }
       */
    };
  },
  watch: {
    screenWidth(newValue) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = newValue;
        this.timer = true;
        setTimeout(() => {
          //console.log(this.screenWidth);
          this.timer = false;
        }, 1000);
      }
    },
  },
  methods: {
    reg() {
      let { username, password, password2 } = this;
      if (!username) {
        this.$message({
          message: "请输入用户名称",
          type: "error",
        });
        return;
      }
      if (!test_user(username)) {
        this.$message({
          message: "用户名格式错误",
          type: "error",
        });
        return;
      }
      if (!password) {
        this.$message({
          message: "请输入密码",
          type: "error",
        });
        return;
      }
      if (!test_password(password)) {
        this.$message({
          message: "密码格式错误",
          type: "error",
        });
        return;
      }
      if (!password2) {
        this.$message({
          message: "请再次输入密码",
          type: "error",
        });
        return;
      }
      if (password != password2) {
        this.$message({
          message: "两次输入密码不一致,请检查密码重新输入",
          type: "error",
        });
        return;
      }
      console.log(username, password, password2);
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 15px;
}

#all {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  background-color: #29f1c3;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 10%;
  box-sizing: border-box;
}

.row {
  margin: 0.6rem 0;
  position: relative;
}
@media all  and (max-width: 400px) {
    .row {width: 210px;}
}
@media all  and (min-width: 370px) {
    .row {width: 210px;}
}

@media all and (min-width: 400px) {
   .row {width: 270px;}
}

@media all and (max-width: 520px) {
    .row {width: 270px;}
} 

@media all and (min-width: 520px) {
    .row {width: 400px;}
} 
.row input {
  width: 100%;
  font-size: 1rem;
  border: 1px solid #03c9a9;
  border-radius: 4px;
  padding: 0.8rem 1rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  color: #2e3131;
  outline: none;
  transition: all ease-in-out 0.2s;
}

.row label {
  position: absolute;
  left: 1rem;
  top: 0.8rem;
  color: #ccc;
  transition: all ease-in-out 0.2s;
}

h2 {
  font-size: 2rem;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
}

.row input:focus {
  border: 1px solid #1ba39c;
}

.row input:focus + label {
  transform: translateX(calc(-100% - 1.25rem));
  color: #2e3131;
}

input:not(:focus):not(:placeholder-shown) + label {
  color: rgba(0, 0, 0, 0);
}
.bloders {
  font-weight: 600;
}
.btn {
  margin: 20px 0;
  width: 115px;
  height: 36px;
  border-radius: 6px;
  outline: none;
  border: 1px solid #ccc;
}
</style>