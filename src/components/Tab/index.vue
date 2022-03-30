<template>
<div class="tab-wrapper" >
  <ul >
    <li v-for="it in list" :key="it.key" :class="{active: it.key === showKey}" @click="liClick(it)"><span>{{it.name}}</span></li>
  </ul>
</div>
</template>

<script>
import utils from '@/utils'
const { groupBtnClick } = utils
export default {
  props: {
    isEmitChangeOnInit: Boolean,
    defaultKey: String,
    defaultList: Array
  },
  data () {
    return {
      showKey: this.defaultKey,
      list: this.defaultList
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (this.isEmitChangeOnInit) {
        this.$emit('change', this.list.find(it => it.key === this.showKey))
      }
    },
    groupBtnClick,
    liClick (item) {
      this.$emit('change', item)
      this.showKey = item.key
      this.groupBtnClick(this.list, item)
      // console.log(item)
    },

    updateData (obj) {
      for (const i in obj) {
        this[i] = obj[i]
      }
      this.init()
    }
  }

}
</script>
<style lang='scss' >
@import "./index";
</style>
