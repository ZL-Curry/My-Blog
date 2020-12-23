<template>
  <div id="all">
    <h2>会员登录</h2>
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
    <div class="row relative_yzm">
      <input
        class="bloders authcode"
        id="yzm"
        placeholder=" "
        v-model="random_number"
        onKeyUp="value=value.replace(/[\W]/g,'')"
      />
      <label class="bloders" for="yzm">验证码</label>
      <span class="random_number" @click="changeRundomNumber">{{
        RandomNumber
      }}</span>
    </div>
    <button class="btn" @click="login">登录</button>
    <p>还没账号？<a href="javascript:;" @click="navTo('/reg')">去注册</a></p>
  </div>
</template>
<script>
import { test_user, test_password, getRandomNumber } from "../utils/tests";
export default {
  data() {
    return {
      username: "",
      password: "",
      RandomNumber: "", //第一次随机生成和点击切断的六位数字
      random_number: "", //  用户输入用来判断的数据
      screenWidth: "document.body.clientWidth",
    };
  },
  created() {
    this.RandomNumber = getRandomNumber();
  },
  mounted() {
    document.querySelectorAll("body")[0].onkeyup = (e) => {
      let { username, password } = this;
      if (!username || !password) return;
      if (e.code == "Enter") {
        this.login();
      }
    };
    window.onresize = () => {
      this.screenWidth = document.body.clientWidth;
      let inputs = document.getElementsByClassName("row");
      for (var i = 0; i < inputs.length; i++) {
        let inputs_width = inputs[i].style;
        if (this.screenWidth >= 520) {
          inputs_width.width = 400 + "px";
        }
        if (this.screenWidth < 520 && this.screenWidth >= 400) {
          inputs_width.width = 270 + "px";
        }
        if (this.screenWidth <= 375) {
          inputs_width.width = 230 + "px";
        }
      }
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
    login() {
      let { username, password, random_number } = this;
      if (!username) {
        this.$message({
          message: "请输入用户名称",
          type: "error",
        });
        return;
      }
      if (!test_user(username)) {
        this.$message({
          message: "用户名称格式错误",
          type: "error",
        });
        return;
      }
      if (!password) {
        this.$message({
          message: "密码不能为空",
          type: "error",
        });
        return;
      }
      if (!test_password(password)) {
        this.$message({
          message: "密码格式错误，请尝试重新输入密码",
          type: "error",
        });
        return;
      }
      if (!random_number) {
        this.$message({
          showClose: true,
          message: "请填写验证码",
          type: "error",
        });
        return;
      }
      if (random_number !== this.RandomNumber) {
        this.$message({
          showClose: true,
          message: "验证码错误，请尝试重新输入",
          type: "error",
        });
        return;
      }
      console.log(username, password, random_number);
    },
    changeRundomNumber() {
      this.RandomNumber = getRandomNumber();
    },
  },
};
</script>
<style lang="scss" scoped>
.relative_yzm {
  position: relative;
}
.random_number {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bolder;
  width: 80px;
  height: 30px;
  background: linear-gradient(30deg, #ffcc00, deeppink, #9c27b0);
  right: 6px;
  top: 10px;
  animation: hueRotate 20s infinite alternate;
}
@keyframes hueRotate {
  100% {
    filter: hue-rotate(360deg);
  }
}
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
@media all and (max-width: 375px) {
  .row {
    width: 230px;
  }
}

@media all and (min-width: 400px) {
  .row {
    width: 270px;
  }
}

@media all and (max-width: 520px) {
  .row {
    width: 270px;
  }
}

@media all and (min-width: 520px) {
  .row {
    width: 400px;
  }
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
  transform: translateX(calc(-100% - 1.2rem));
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