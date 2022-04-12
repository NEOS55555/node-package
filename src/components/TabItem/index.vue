<template>
  <div
    class="tab-wrapper"
    :style="`padding-left:${
      isLeftRadius ? getItemHeight(circleWidth) : 0
    };padding-right:${isRightRadius ? getItemHeight(circleWidth) : 0};`"
  >
    <div
      v-if="isLeftRadius"
      class="leftRadius"
      :style="`height:${getItemHeight(
        borderItemHeight + 10 * 2
      )};width:${getItemHeight(
        circleWidth
      )};border-radius: ${getItemHeight()} 0 0 ${getItemHeight()};`"
    ></div>
    <div
      v-if="isRightRadius"
      class="rightRadius"
      :style="`height:${getItemHeight(
        borderItemHeight + 10 * 2
      )};width:${getItemHeight(
        circleWidth
      )};border-radius: 0 ${getItemHeight()} ${getItemHeight()} 0;`"
    ></div>
    <ul
      :style="`padding: ${$util.px2vw(10 * finalscale)} 0;padding-left:${
        isLeftRadius ? 0 : $util.px2vw(15)
      };`"
    >
      <li
        :class="{ active: isActive }"
        @click="liClick"
        :style="`margin-left: -${getItemHeight(
          circleWidth / 2
        )};padding: 0 ${$util.px2vw(20 * finalscale)};
      border-radius: ${getItemHeight()};line-height:${getItemHeight()};height:${getItemHeight()};`"
      >
        <span :style="`font-size:${$util.px2vw(32 * finalscale)};`">{{
          name
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabItem",
  props: {
    scale: Number,
    // isEmitChangeOnInit: Boolean,
    defaultisActive: [String, Boolean],
    defaultisLeftRadius: [String, Boolean],
    defaultisRightRadius: [String, Boolean],
    defaultitemScale: [Number, String],
    defaultname: String,
  },
  data() {
    return {
      borderItemHeight: 62,
      name: this.defaultname,
      isActive: this.defaultisActive || false,
      isLeftRadius: this.defaultisLeftRadius || false,
      isRightRadius: this.defaultisRightRadius || false,
      itemScale: this.$util.getDefaultitemScale(this.defaultitemScale),
    };
  },
  computed: {
    circleWidth() {
      return this.borderItemHeight / 2 + 10;
    },
    getBorderRadius() {
      return (
        "border-left-width:" +
        (this.isLeftRadius ? "2px" : 0) +
        ";border-right-width:" +
        (this.isRightRadius ? "2px" : 0) +
        ";" +
        (this.isLeftRadius || this.isRightRadius
          ? "border-radius:" + this.$util.px2vw(62 * this.finalscale) + ";"
          : "")
      );
    },
    finalscale() {
      return (this.scale || 1) * this.itemScale;
    },
  },
  mounted() {},
  methods: {
    getItemHeight(w = 62) {
      return this.$util.px2vw(w * this.finalscale);
    },
    liClick() {
      this.$emit("click");
    },

    updateData(obj) {
      for (const i in obj) {
        this[i] = obj[i];
      }
    },
  },
};
</script>
<style lang='scss' >
@import "./index";
</style>
