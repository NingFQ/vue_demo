<template>
  <div class="login-wrap">
    <div class="login-title">特步，永不止步</div>
    <van-form @submit="onSubmit">
      <van-field
        class="login-ipt"
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
      />
      <van-field
        class="login-ipt"
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
      />
      <div class="login-btn-wrap">
        <van-button
          class="login-btn"
          round
          block
          type="primary"
          native-type="submit"
          >登 录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, Button, Field, Toast } from "vant";
Vue.use(Form);
Vue.use(Button);
Vue.use(Field);
Vue.use(Toast);
export default {
  name: "VueCli20TestLogin",

  data() {
    return {
      username: "",
      password: "",
    };
  },

  mounted() {},

  methods: {
    onSubmit(values) {
      if (this.username == "" || this.password == "") {
        Toast.fail("不能为空");
      } else {
        this.$router.push({
          path: "/",
          query: {
            a: "dd",
          },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
  .login-title {
    margin-top: 200px;
    width: 100%;
    height: 200px;
    font-size: 50px;
    text-align: center;
    line-height: 200px;
  }
  .login-ipt {
    height: 80px;
    font-size: 30px;
    margin: 40px 0;
    border-bottom: 1px solid #999999;
  }
  .login-btn-wrap {
    width: 100%;
    padding: 0 60px;
    margin-top: 200px;
    .login-btn {
      width: 100%;
      height: 80px;
      font-size: 32px;
    }
  }
}
</style>