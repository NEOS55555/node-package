<template>
  <div class="ctrl-footer">
    <div class="img">
      <img class="icon" :src="backgroundSrc" alt="" />
      <div
        class="text"
        :style="`font-size:${$util.px2vw(28 * finalscale)};top:${$util.posi2xy(
          ((titlePosition || {}).position || {}).y
        )};`"
        @mousedown="(e) => mouseDown(e, 'titlePosition')"
      >
        <!-- left:${$util.posi2xy(
          ((titlePosition || {}).position || {}).x
        )}; -->
        {{ this.deftitle || title }}
      </div>
    </div>
    <div
      class="btn-ctn"
      :style="`top:${$util.posi2xy(((btnPosition || {}).position || {}).y)};`"
    >
      <!-- 
      :style="`left:${$util.posi2xy(
        ((btnPosition || {}).position || {}).x
      )};top:${$util.posi2xy(((btnPosition || {}).position || {}).y)};`"
     -->
      <CtrlBtn
        :scale="scale"
        :isEmitChangeOnInit="isEmitChangeOnInit"
        ref="CtrlBtnRef"
        @change="btnChange"
        @mousedown="(e) => mouseDown(e, 'btnPosition')"
      />
    </div>
  </div>
</template>

<script>
import CtrlBtn from "../CtrlBtn";
// import { DragMoveMixin } from "../../../../mixin/pad";
import { DragMoveMixin } from "@/mixin/pad";

export default {
  name: "CtrlFooter",
  components: { CtrlBtn },
  props: {
    scale: Number,
    // list: Array,
    defaulttitlePosition: [Object, String],
    defaultbtnPosition: [Object, String],
    isEmitChangeOnInit: Boolean,
    defaultdeftitle: String,
    defaultbackgroundSrc: String,
    defaultitemScale: [Number, String],
    defaultTitle: String,
    defaultdeflist: Array,
  },
  data() {
    return {
      backgroundSrc: this.defaultbackgroundSrc,
      itemScale: this.$util.getDefaultitemScale(this.defaultitemScale),
      // 这个是不需要输入传进来的，
      titlePosition: this.defaulttitlePosition || {
        position: {
          x: 0,
          y: 0,
        },
      },
      btnPosition: this.defaultbtnPosition || {
        position: {
          x: 0,
          y: 0,
        },
      },
      title: this.defaultTitle,
      list: [],
      deftitle: this.defaultdeftitle || "",
      deflist: this.defaultdeflist || [], // 默认展示的列表
      moveProp: "",
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  mixins: [DragMoveMixin],
  computed: {
    finalscale() {
      return (this.scale || 1) * (this.itemScale || 1);
    },
  },
  methods: {
    init() {
      if (Array.isArray(this.deflist) && this.deflist.length > 0) {
        this.$refs.CtrlBtnRef.updateData({
          list: this.deflist,
        });
      } else if (this.isEmitChangeOnInit) {
        // this.$emit('change', )
        const item = this.list.find((it) => it.active);
        if (item) {
          this.$refs.CtrlBtnRef.updateData({
            list: this.list.find((it) => it.active).list,
          });
        }
      }
    },
    updateData(obj = {}) {
      for (const i in obj) {
        this[i] = obj[i];
      }
      this.$refs.CtrlBtnRef.updateData({
        itemScale: this.itemScale,
        list:
          Array.isArray(this.deflist) && this.deflist.length > 0
            ? this.deflist
            : this.list,
      });
    },
    btnChange(item) {
      this.$emit("change", item);
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
        console.log("fff", this.moveProp, this[this.moveProp]);
        this.$emit("moveover", {
          [this.moveProp]: this[this.moveProp],
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
