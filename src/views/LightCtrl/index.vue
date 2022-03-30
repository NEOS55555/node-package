<template>
<div>
    <Header />

  <div class="container">
    <Goback @click="goback"/>
    <div class="tab-change">
      <Tab :list="$const.AREA_LIST" @change="tabChange"></Tab>
    </div>
    <div class="content">
      <!-- <button @click="changeEq">change</button> -->
      <LightBgContent
      :ctnWidth="$util.px2vw(1200)"
      :showArr="showArr"
      ref="bgRef"
      @itemClick="bgItemClick"
      />
    </div>

    <CtrlFooter :controlBtns="tempData.btns" :tipname="tempData.name" imgPath="controlArea"  @btnChange="btnChange" />
  </div>
</div>
</template>

<script>
import CtrlFooter from '@/components/CtrlFooter'
import Goback from '@/components/Goback'
import LightBgContent from '@/components/LightBgContent'
// import LightBgContent from './LightBgContent'
// import $util from '@/utils'
import Tab from '@/components/Tab'
// import equConfig from '../zoneControl/comp/equip/config'
import Header from '@/components/Header'
import { getShowArr, lightBtnsArr } from './config'

export default {
  name: '',
  components: { CtrlFooter, LightBgContent, Goback, Tab, Header },
  data () {
    return {

      showKey: '',
      showArr: [],
      showCtrlBtns: lightBtnsArr,
      tempData: {},
      areaList: []
    }
  },
  created () {
    getShowArr().then(list => {
      console.log('arealist', list)
      this.showArr = list
      this.tempData = list[0]
    })
  },
  mounted () {},
  computed: {},
  methods: {
    entryCtrlitem (key) {
      this.$router.push({
        path: '/lightItemCtrl',
        query: {
          key
        }
      })
    },
    btnChange (item) {
      console.log('btnChange', item)
      // this.entryCtrlitem()
      // const { deviceId } = this.tempData
      console.log('deviceId', this.tempData)
      // this.$api.send(this.$apiList.allPcCtrl)
      // 总区域的开关
      this.$util.sendComd(this.$apiList.allPcCtrl, {
        params: {
          // deviceId: this.showItem.mac,
          areaId: this.tempData.areaId,
          command: item.command
        }
      })
      // console.log('跳页了')
    },
    bgItemClick (item) {
      console.log('bgItemClick', item)
      if (!item) {
        return
      }
      this.tempData = item
      // item.active = true
      // this.entryCtrlitem(item.showKey)
      console.log('跳页了')
    },
    tabChange (item) {
      console.log(item)
      this.entryCtrlitem(item.key)
      console.log('跳页了')
      // this.showKey = item.key
    },
    goback () {
      this.$router.push({ path: '/index' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
