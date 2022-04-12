<template>
  <div class="light-bg-item" @click="itemClick">
    <img
      class="bg-icon"
      :src="isActive ? activeBackgroundSrc : backgroundSrc"
      alt=""
    />

    <div
      v-if="!!areaName"
      class="area-point"
      :style="
        'left:' +
        $util.posi2xy(((point || {}).position || {}).x) +
        ';top:' +
        $util.posi2xy(((point || {}).position || {}).y) +
        ';' +
        `width:${$util.px2vw(80 * finalscale)};height:${$util.px2vw(
          68 * finalscale
        )};`
      "
      @mousedown="mouseDown"
    >
      <div
        class="position-tip"
        :style="`width:${$util.px2vw(201 * finalscale)};height:${$util.px2vw(
          171 * finalscale
        )};line-height:${$util.px2vw(70 * finalscale)};font-size:${$util.px2vw(
          24 * finalscale
        )};`"
      >
        {{ areaName }}
      </div>
    </div>
  </div>
  <!-- <div class="light-bg-more-item" v-for="(item1,i) in showArr" :key="item1.key+'_'+i">

        <div
          @click="itemClick(item1)"
          class="light-bg-mit" v-for="(it,idx) in item1.moreDivs" :key="idx"
          :style="`left:${it.x};top:${it.y};width:${it.w};height:${it.h};transform:rotate(${it.rotate});`"
        ></div>
      </div> -->
</template>

<script>
// import BgCtnItem from '../BgCtnItem'
// import { DragMoveMixin } from "../../../../mixin/pad";
import { DragMoveMixin } from "@/mixin/pad";

export default {
  props: {
    isEdit: Boolean,
    scale: Number,
    defaultisActive: [String, Boolean],
    // defaultarea: [Object, String],
    defaultpoint: [Object, String],
    defaultbtns: [Array, String],
    defaultareaId: String,
    defaultareaName: String,
    defaultbackgroundSrc: String,
    defaultitemScale: [Number, String],
    defaultactiveBackgroundSrc: String,
  },

  name: "LightBgItem",
  data() {
    return {
      // 这个默认高亮
      isActive: this.defaultisActive || false,
      backgroundSrc: this.defaultbackgroundSrc,
      activeBackgroundSrc: this.defaultactiveBackgroundSrc,
      btns: this.defaultbtns || [],
      areaId: this.defaultareaId || "",
      areaName: this.defaultareaName || "",
      /* area: this.defaultarea || {
        key: "",
        id: "",
        name: "",
        btns: [], // 按钮
      }, */
      itemScale: this.$util.getDefaultitemScale(this.defaultitemScale),
      point: this.defaultpoint || {
        position: {
          x: 0,
          y: 0,
        },
      },
    };
  },

  mixins: [DragMoveMixin],
  created() {},
  /* updated () {
    this.init()
  }, */
  /* watch: {
    ctnWidth (a) {
      console.log('a', a)
      this.init()
    }
  }, */
  mounted() {
    console.log("ffff????", this.isActive);
    if (this.isActive) {
      this.$emit("click", this.getActiveItem());
    }
  },
  computed: {
    finalscale() {
      return (this.scale || 1) * this.itemScale;
    },
  },
  methods: {
    getActiveItem() {
      return {
        id: this.areaId,
        name: this.areaName,
        btns: this.btns,
      };
    },
    disHighlight() {
      this.isActive = false;
    },
    highlight() {
      this.isActive = true;
    },
    itemClick(it) {
      // 为了用户体验更好更直观看到高亮的切换图
      // 跟node里是不一样的
      // this.isActive = !this.isActive;
      // this.isActive = true;
      this.$emit("click", this.getActiveItem());
    },
    clear() {
      this.showArr.forEach((it) => {
        it.active = false;
      });
    },

    updateData(obj = {}) {
      for (const i in obj) {
        this[i] = obj[i];
      }
    },
    mouseDown(e) {
      if (!this.isEdit) {
        return;
      }
      e.stopPropagation();

      this.mousedownEvt(e, this.point);
    },
    mousemove(e) {
      if (!this.isEdit) {
        return;
      }
      this.mousemoveEvt(e, this.point, this.scale);
    },
    mouseup() {
      if (!this.isEdit) {
        return;
      }
      this.mouseupEvt(() => {
        this.$emit("moveover", {
          point: this.point,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
