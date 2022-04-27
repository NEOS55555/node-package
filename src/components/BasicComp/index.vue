<template>
  <div class="basic-comp-wrapper" @click="liClick">
    <img v-if="backgroundSrc" :src="backgroundSrc" alt="" />
    <div class="iframe-ctn" v-if="iframeSrc">
      <iframe
        :src="iframeSrc"
        frameborder="0"
        sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
      ></iframe>
      <div class="iframdrag" v-if="isshowDrag">点我拖动</div>
    </div>
    <div
      v-if="title"
      class="title"
      @mousedown="(e) => mouseDown(e, 'titlePosition')"
      :style="`font-size:${$util.px2vw(
        fontSize * finalscale
      )};color:${fontColor};top:${$util.posi2xy(
        ((titlePosition || {}).position || {}).y
      )};left:${$util.posi2xy(((titlePosition || {}).position || {}).x)}`"
    >
      <div v-for="(txt, idx) in finalTitle" :key="idx">{{ txt }}</div>
    </div>
  </div>
</template>

<script>
import { DragMoveMixin } from "@/mixin/pad";

export default {
  name: "BasicComp",
  props: {
    scale: Number,
    defaulttitle: String,
    defaultfontColor: String,
    defaultfontSize: [Number, String],
    defaultbackgroundSrc: String,
    defaultiframeSrc: String,
    defaulttitlePosition: [Object, String],
  },
  data() {
    return {
      isshowDrag: process.env.VUE_APP_PAD_PACKAGE != 1,
      title: this.defaulttitle,
      fontSize: this.defaultfontSize || 14,
      fontColor: this.defaultfontColor,
      backgroundSrc: this.defaultbackgroundSrc,
      iframeSrc: this.defaultiframeSrc,
      titlePosition: this.defaulttitlePosition || {
        position: {
          x: 0,
          y: 0,
        },
      },
    };
  },
  created() {
    console.log("finalscale", this.finalscale);
  },
  mixins: [DragMoveMixin],
  mounted() {
    // this.getmenuList()
  },
  computed: {
    finalTitle() {
      return this.title.split("\n");
    },
    finalscale() {
      return this.scale || 1;
    },
  },
  methods: {
    updateData(obj) {
      for (const i in obj) {
        this[i] = obj[i];
      }
    },
    liClick() {
      this.$emit("click");
    },
    mouseDown(e, moveProp) {
      this.moveProp = moveProp;
      e.stopPropagation();
      /* if (!this.isEdit) {
        return;
      } */
      this.mousedownEvt(e, this[this.moveProp]);
      // console.log("ff", e);
    },
    mousemove(e) {
      this.mousemoveEvt(e, this[this.moveProp], this.scale);
    },
    mouseup() {
      this.mouseupEvt(() => {
        this.$emit("moveover", {
          [this.moveProp]: this[this.moveProp],
        });
      });
    },
  },
};
</script>

<style lang='scss' scoped>
@import "./index";
</style>
