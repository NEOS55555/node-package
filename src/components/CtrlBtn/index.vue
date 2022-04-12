<template>
  <ul class="control-btn-list" @mousedown="mousedown">
    <li
      v-for="(item, idx) in list"
      :key="item.key"
      @click="liClick(item)"
      :style="`margin-right:${$util.px2vw(
        idx === list.length - 1 ? 0 : 80 * finalscale
      )};`"
    >
      <img
        class="icon"
        :class="{ active: item.active }"
        :src="item.active ? item.activeBackgroundSrc : item.backgroundSrc"
        :style="`width:${$util.px2vw(82 * finalscale)};`"
        alt=""
      />
      <div
        class="name"
        :style="`font-size:${$util.px2vw(
          20 * finalscale
        )};margin-top:${$util.px2vw(10 * finalscale)};`"
      >
        {{ item.toggleActive && item.toggleName ? item.toggleName : item.name }}
      </div>
    </li>
  </ul>
</template>

<script>
import utils from "@/utils";
const { groupBtnClick } = utils;

export default {
  name: "CtrlBtn",
  props: {
    scale: Number,
  },
  data() {
    return {
      itemScale: 1,
      list: [],
    };
  },
  created() {},
  mounted() {
    // this.getmenuList()
  },
  computed: {
    finalscale() {
      return (this.scale || 1) * (this.itemScale || 1);
    },
  },
  methods: {
    groupBtnClick,
    mousedown(e) {
      this.$emit("mousedown", e);
    },
    updateData(obj) {
      for (const i in obj) {
        this[i] = obj[i];
      }
    },
    liClick(item) {
      // if (!item.active) {
      this.$emit("change", item);
      // }
      this.groupBtnClick(this.list, item, true);
      // console.log(item)
    },
  },
};
</script>

<style lang='scss' scoped>
@import "./index";
</style>
