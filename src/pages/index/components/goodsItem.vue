<template>
  <div class="goods-item">
    <span>{{ goodsItem.name }}</span>
    <div class="counter">
      <button class="btn" @click="handleBtnInsc">-</button>
      <input type="number" v-model="goodsItem.count" />
      <button class="btn" @click="handleBtnDecr">+</button>
    </div>
    <div style="width: 200px">单价：{{ goodsItem.price }}</div>
    <div style="width: 200px">
      小计：{{ (goodsItem.price * goodsItem.count).toFixed(2) }}
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "VueCli20TestGoodsitem",

  data() {
    return {
      stepper: 1,
    };
  },
  props: {
    goodsItem: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {},

  methods: {
    ...mapMutations(["addCartGoods"]),
    ...mapMutations(["reduceCartGoods"]),
    handleBtnDecr() {
      this.goodsItem.count++;
      // this.$store.commit("addCartGoods", {
      //   addData: Object.assign({}, this.goodsItem),
      // });
      this.addCartGoods({
        addData: Object.assign({}, this.goodsItem),
      });
    },
    handleBtnInsc() {
      if (this.goodsItem.count > 0) {
        this.goodsItem.count--;
        this.$store.commit("reduceCartGoods", {
          reduceData: Object.assign({}, this.goodsItem),
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.goods-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  font-size: 30px;
  .counter {
    flex: 1;
    display: flex;
    flex-direction: row;
    .btn {
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      background-color: #666666;
    }
    input {
      display: block;
      width: 100px;
      text-align: center;
    }
  }
}
</style>