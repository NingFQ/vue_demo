<template>
  <div class="index-wrap">
    <div class="title">首页({{ name }})</div>
    <div class="container">
      <GoodsItem
        v-for="(item, index) in goodsData"
        :key="index"
        :goodsItem="item"
      ></GoodsItem>
    </div>
    <div>总价：{{ allPrice }}</div>
    <div class="router-content">
      <router-view></router-view>
    </div>

    <div class="cart">
      <router-link :to="{ name: 'cart' }">
        <van-button class="cart-btn" plain type="primary"
          >显示购物车</van-button
        >
        <van-button
          class="cart-btn"
          plain
          type="primary"
          @click="changeUserName"
          >修改用户名</van-button
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import GoodsItem from "./components/goodsItem.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "VueCli20TestIndex",
  components: {
    GoodsItem,
  },
  data() {
    return {
      goodsData: [
        {
          id: 1,
          name: "香蕉",
          price: "10",
          count: 0,
        },
        {
          id: 2,
          name: "苹果",
          price: "2.8",
          count: 0,
        },
        {
          id: 3,
          name: "橘子",
          price: "4.5",
          count: 0,
        },
        {
          id: 4,
          name: "菠萝",
          price: "11",
          count: 0,
        },
        {
          id: 5,
          name: "人参",
          price: "21.4",
          count: 0,
        },
      ],
    };
  },
  computed: {
    ...mapState(["name"]),
    ...mapGetters(["getMessage"]),

    allPrice() {
      var num = 0;
      this.goodsData.map((item) => {
        num += item.price * item.count;
      });
      return num;
    },
  },
  mounted() {
    this.$store.state.cartData = JSON.parse(JSON.stringify(this.goodsData));
    // console.log(this.$store.state.cartData);
  },

  methods: {
    ...mapActions(["setName"]),
    changeUserName() {
      this.setName({ newName: "新名字AAA" });
      // this.$store.dispatch("setName", { newName: "新名字AAA" });
    },
  },
};
</script>

<style lang="scss" scoped>
.index-wrap {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    width: 100%;
    line-height: 200px;
    text-align: center;
    background-color: white;
  }
  .container {
    flex: 1;
    padding: 0px 30px;
  }
  .cart {
    width: 100%;
    padding: 100px 0;
    background-color: white;
    text-align: center;
    .cart-btn {
      width: 200px;
      height: 100px;
      font-size: 30px;
    }
  }
  .router-content {
    height: 100px;
    width: 100%;
    background-color: burlywood;
  }
}
</style>