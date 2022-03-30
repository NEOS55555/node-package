<template>
  <div class="light-bg-wrap">
    <div class="light-bg-ctn" :style="'width:'+ctnWidth">
      <div class="light-bg-item" v-for="item in showArr" :key="item.key" :class="'zoom'+item.key" @click="itemClick(item)" :style="`left: ${item.x};top: ${item.y};width: ${item.w};`">
        <img class="bg-icon" :src="$const.resourceUrl + 'images/light/zoom'+item.key +(item.active ? '-active': '')+'.png'"
        alt="">

        <div class="area-point" :style="'left:'+(item.point || {}).x+';top:'+(item.point || {}).y+';'">
          <div class="position-tip" :style="'left:'+(item.tip || {}).x+';top:'+(item.tip || {}).y+';right:'+(item.tip || {}).rx">{{item.name}}</div>
        </div>
      </div>
      <div class="light-bg-more-item" v-for="(item1,i) in showArr" :key="item1.key+'_'+i">

        <div
          @click="itemClick(item1)"
          class="light-bg-mit" v-for="(it,idx) in item1.moreDivs" :key="idx"
          :style="`left:${it.x};top:${it.y};width:${it.w};height:${it.h};transform:rotate(${it.rotate});`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
// import BgCtnItem from '../BgCtnItem'
import utils from '@/utils'
const { groupBtnClick } = utils

export default {
  props: {
    ctnWidth: String,
    showArr: Array
  },
  name: '',

  mixins: [],
  created () {
    this.init()
  },
  /* updated () {
    this.init()
  }, */
  /* watch: {
    ctnWidth (a) {
      console.log('a', a)
      this.init()
    }
  }, */
  methods: {
    init () {
      const item = this.showArr.find(it => it.active)
      if (item) {
        this.$emit('itemClick', item)
      }
    },
    groupBtnClick,

    itemClick (it) {
      this.groupBtnClick(this.showArr, it)
      console.log(it)
      this.$emit('itemClick', it)
    },
    clear () {
      this.showArr.forEach(it => { it.active = false })
    },
    show () {
      this.showArr[0].active = true
      this.$emit('itemClick', this.showArr[0])
    }

  }

}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
