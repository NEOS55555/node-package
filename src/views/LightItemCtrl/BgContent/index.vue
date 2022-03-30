<template>
  <BgCtnItem
    :bgSrc="showItem.bgSrc"
    :showArr="showArr"
    :maxWidth="showItem.maxWidth"
    @itemClick="itemClick"
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
  created () {
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
      this.showItem = showMap[showKey] || {}
      this.showArr = this.showItem.showArr.map(itshow => ({
        ...itshow,
        mac: Math.random()
      }))

      this.$api.send(this.$apiList.lightDevList, {
        put: {
          areaId: this.areaId
        }
      }).then(res => {
        this.showArr = this.showItem.showArr.map((itshow, i) => ({
          ...itshow,
          // mac: res.data.find(it => it.id === itshow.id)
          mac: (res.data[i] || {}).mac,
          modeCount: (res.data[i] || {}).modeCount
        }))
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
