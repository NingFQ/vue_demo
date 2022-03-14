<template>
  <div class="cart-wrap">
    <div>我是购物车</div>
    {{ allPrice }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "VueCli20TestCart",

  data() {
    return {};
  },

  computed: {
    ...mapState({ goodsData: "cartData" }),
    allPrice() {
      var num = 0;
      this.goodsData.map((item) => {
        num += item.price * item.count;
      });
      return num;
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>