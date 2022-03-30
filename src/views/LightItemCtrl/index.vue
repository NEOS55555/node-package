<template>
<div>
    <Header />

  <div class="container">
    <Goback @click="goback"/>
    <div class="tab-change"><Tab :showKey="showItem.key" :list="areaList" @change="tabChange"></Tab></div>
    <div class="content">
      <!-- <button @click="changeEq">change</button> -->
      <BgContent
      v-if="showItem.key"
      :showKey="showItem.key"
      :areaId="showItem.areaId"
      @itemClick="bgItemClick"
      />
    </div>

    <CtrlFooter :controlBtns="showCtrlBtns" :tipname="tempData.name" imgPath="controlArea"  @btnChange="btnChange" />
  </div>
  <ModalList ref="modalList"></ModalList>
</div>
</template>

<script>
import CtrlFooter from '@/components/CtrlFooter'
import Goback from '@/components/Goback'
import ModalList from '@/components/ModalList'
import Tab from '@/components/Tab'
import BgContent from './BgContent'
// import equConfig from '../zoneControl/comp/equip/config'
import Header from '@/components/Header'

export default {
  name: '',
  components: { CtrlFooter, BgContent, Goback, Tab, Header, ModalList },
  data () {
    return {
      showItem: {},
      showCtrlBtns: [],
      tempData: {},
      areaList: []
    }
  },
  created () {
    // console.log()
    this.$util.getAreaList().then(list => {
      console.log('list', list)
      this.areaList = list
      this.showItem = list.find(it => it.key === this.$router.history.current.query.key)
    })
  },
  mounted () {},
  computed: {},
  methods: {
    tabChange (item) {
      console.log(item)
      this.showItem = item
    },
    btnChange (item) {
      console.log('btnChange', item)
      console.log('tempData', this.tempData)
      this.$util.sendComd(this.$apiList.lightCtrl, {
        params: {
          deviceId: this.tempData.mac,
          areaId: this.showItem.areaId,
          command: item.command
        }
      })
    },
    bgItemClick (item) {
      console.log('bgItemClick', item)
      if (!item) {
        return
      }
      this.tempData = item
      this.showCtrlBtns = item.btns
    },
    goback () {
      this.$router.push({
        path: '/lightCtrl'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
