<template>
  <div class="software-ctn">
    <div class="software-bg">
      <img :src="backgroundSrc" alt="" />
      <div
        class="point-item"
        v-for="(it, idx) in list"
        :key="it.key"
        @mousedown="(e) => mouseDown(e, idx)"
        :style="`left:${$util.posi2xy(it.position.x)};top:${$util.posi2xy(
          it.position.y
        )};`"
        :class="{ active: it.active }"
        @click="softItemClick(it)"
      >
        <div
          class="name"
          :style="`padding:${$util.px2vw(
            5 * finalscale
          )};margin-bottom:${$util.px2vw(10 * finalscale)};`"
        >
          <div
            class="inner"
            :style="`font-size:${$util.px2vw(
              24 * finalscale
            )};padding: 0 ${$util.px2vw(10 * finalscale)}`"
          >
            <!-- 文字没有办法缩小到12一下，所以只能放大缩小 -->
            <!-- <span :style="`font-size:24px;transform:finalscale(${finalscale});`"></span> -->
            {{ it.name }}
          </div>
        </div>
        <div
          class="img"
          :style="`width:${$util.px2vw(80 * finalscale)};height:${$util.px2vw(
            68 * finalscale
          )};`"
        ></div>
        <BottomLine
          v-if="it.lineCount > 0"
          :lineCount="it.lineCount"
        ></BottomLine>
      </div>
    </div>
    <!-- <div class="point-item">
      <div class="name">
        <div class="inner">专业体验</div>
      </div>
    </div> -->
  </div>
</template>

<script>
import BottomLine from "../BottomLine";
// import utils from "../../../_utils/padmng";
import utils from "@/utils";
// import { DragMoveMixin } from "../../../../mixin/pad";
import { DragMoveMixin } from "@/mixin/pad";

const { groupBtnClick } = utils;

export default {
  props: {
    isEdit: Boolean,
    scale: Number,
    defaultbackgroundSrc: String,
    // maxWidth: String,
    // list: Array
    defaultlist: Array,
    defaultitemScale: [Number, String],
    isEmitChangeOnInit: {
      type: Boolean,
      default: true,
    },
  },
  name: "BgCtnItem",
  components: { BottomLine },
  mixins: [DragMoveMixin],
  data() {
    return {
      itemScale: this.$util.getDefaultitemScale(this.defaultitemScale),
      backgroundSrc: "",
      maxWidth: "",
      list: this.defaultlist || [],
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  beforeDestroy() {},
  /* watch: {
    list (a) {
      this.$emit('itemClick', a.find(it => it.active))
    }
  }, */
  computed: {
    finalscale() {
      return (this.scale || 1) * (this.itemScale || 1);
    },
  },
  methods: {
    init() {
      if (this.isEmitChangeOnInit) {
        // console.log("this.list", this.list);
        this.$nextTick(() => {
          this.$emit("change", this.getActiveItem(true));
        });
      }
    },
    getActiveItem(isf) {
      let item = this.list.find((it) => it.active);
      if (!item && isf) {
        this.list[0].active = true;
        item = this.list[0];
      }
      return item;
    },
    updateData(obj) {
      for (const i in obj) {
        if (i === "list") {
          console.log("update", obj.list);
          const list = [];
          obj.list.forEach((it, i) => {
            it.position = it.position || {};
            list.push({
              ...it,
              position: it.position || {
                x: 0,
                y: 0,
                orix: 0,
                oriy: 0,
              },
              key: it.key || it.id,

              active: false,
            });
          });
          this[i] = list;
        } else {
          this[i] = obj[i];
        }
      }
      this.init();
    },
    groupBtnClick,
    softItemClick(item) {
      // console.log("list", this.list);
      // console.log('itc', item, this.list)
      this.groupBtnClick(this.list, item);
      this.$emit("change", item);
    },
    mouseDown(e, idx) {
      if (!this.isEdit) {
        return;
      }
      e.stopPropagation();
      /* if (!this.isEdit) {
        return;
      } */
      this.actItem = this.list[idx];
      this.mousedownEvt(e, this.actItem);
      // console.log("ff", e);
    },
    mousemove(e) {
      if (!this.isEdit) {
        return;
      }
      this.mousemoveEvt(e, this.actItem, this.scale);
    },
    mouseup() {
      if (!this.isEdit) {
        return;
      }
      // console.log("this.actItem", this.actItem);
      // console.log("this.list", this.list);
      this.mouseupEvt(() => {
        this.$emit("moveover", {
          list: this.list.map((it) => ({
            ...it,
            active: false,
          })),
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
