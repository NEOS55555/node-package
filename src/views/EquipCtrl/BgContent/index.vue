<template>
  <BgCtnItem
    @itemClick="itemClick"
    ref="bgCtnItem"
  ></BgCtnItem>
</template>

<script>
import BgCtnItem from '@/components/BgCtnItem'
import { getshowArrMap } from '../config'
export default {
  props: {
    showKey: String,
    areaId: Number
  },
  name: '',
  components: { BgCtnItem },
  data () {
    return {
      showArr: []

    }
  },
  mixins: [],
  mounted () {
    this.resg(this.showKey)
  },
  watch: {
    showKey (showKey) {
      // console.log(a)
      this.resg(showKey)
    }
  },
  methods: {
    resg (showKey) {
      const showMap = getshowArrMap()
      const showItem = showMap[showKey] || {}
      this.$refs.bgCtnItem.updateData({
        ...showItem
      })
    },
    itemClick (it) {
      // console.log(it)
      this.$emit('itemClick', it)
    }

  }

}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
