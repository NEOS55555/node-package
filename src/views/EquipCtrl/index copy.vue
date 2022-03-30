<template>
<div>
    <Header />

  <div class="container">
    <Goback @click="goback"/>
    <div class="tab-change">
      <Tab :showKey="showKey" :list="areaList" @change="tabChange"></Tab>
    </div>
    <div class="content">
      <BgCtnItem
        @itemClick="bgItemClick"
        ref="bgCtnItem"
      ></BgCtnItem>
      <!-- <button @click="changeEq">change</button> -->
      <!-- <BgContent
      :areaId="areaId"
      :showKey="showKey"
      @itemClick="bgItemClick"
      /> -->
    </div>

    <CtrlFooter :controlBtns="showCtrlBtns" :tipname="tempData.name" imgPath="controlArea"  @btnChange="btnChange" />
  </div>
  <ModalList ref="modalList"></ModalList>
  <ProgramModal ref="programModal"></ProgramModal>
  <ScreenProgramModal ref="screenProgramModal"></ScreenProgramModal>
</div>
</template>

<script>
import CtrlFooter from '@/components/CtrlFooter'
import Goback from '@/components/Goback'
import ModalList from '@/components/ModalList'
import ProgramModal from '@/components/ProgramModal'
import ScreenProgramModal from '@/components/ScreenProgramModal'
import Tab from '@/components/Tab'
import BgCtnItem from '@/components/BgCtnItem'
// import equConfig from '../zoneControl/comp/equip/config'
import Header from '@/components/Header'
import { getshowArrMap } from './config'
import config from './adata'

console.log('config', config)

export default {
  name: '',
  components: { CtrlFooter, Goback, Tab, Header, ModalList, ProgramModal, ScreenProgramModal, BgCtnItem },
  data () {
    return {
      areaId: null,
      showKey: null,
      showCtrlBtns: [],
      tempData: {},
      areaList: []
    }
  },
  mounted () {
    this.$util.getAreaList().then(list => {
      console.log('list', list)
      this.areaList = list
      // this.showItem = list[0]
      this.showKey = list[0].key
      this.areaId = list[0].areaId
      this.resg(this.showKey)
    })
  },
  computed: {},
  methods: {
    isTrue (a) {
      return a != null
    },
    resg (showKey) {
      const showMap = getshowArrMap()
      const showItem = showMap[showKey] || {}
      this.$refs.bgCtnItem.updateData({
        ...showItem
      })
    },
    tabChange (item) {
      console.log(item)
      this.showKey = item.key
      this.areaId = this.areaList.find(it => it.key === this.showKey).areaId
      this.resg(this.showKey)
    },
    btnChange (item) {
      console.log('btnChange', item)
      console.log('deviceId', this.tempData)
      const { mac, modeCount } = this.tempData
      //
      const getMaterListCb = ({ screenItem, programItem = {} }) => {
        console.log('获取节目素材')
        if (!programItem.id) {
          return Promise.resolve([])
        }
        // return Promise.resolve([{ id: 1, name: 2 }])
        return this.$api.send(this.$apiList.getMaterList, {
          put: {
            areaId: screenItem.areaId,
            mac,
            modeId: screenItem.modeId,
            storyId: programItem.id
          }
        }).then(res => res.data)
      }
      const playProgramCtrlCb = ({ screenItem, programItem = {} }) => {
        if (!programItem.id) {
          return
        }
        return this.$util.sendComd(this.$apiList.changeProgramCtrl, {
          params: {
            areaId: screenItem.areaId,
            mac,
            modeId: screenItem.modeId,
            storyId: programItem.id
          }
        })
      }
      const playMaterCtrlCb = ({ screenItem, programItem = {}, materItem = {} }) => {
        if (!materItem.id || !programItem.id) {
          return
        }
        return this.$api.send(this.$apiList.changeMaterCtrl, {
          params: {
            areaId: screenItem.areaId,
            mac,
            materialId: materItem.id,
            modeId: screenItem.modeId,
            storyId: programItem.id
          }
        })
      }

      const sortCtrlCb = ({ screenItem, programItem = {}, isSortPrograming }) => {
        if (!programItem.id) {
          return
        }
        return this.$util.sendComd(this.$apiList.circlePlayProgramCtrl, {
          params: {
            areaId: screenItem.areaId,
            controlType: isSortPrograming ? 1 : 2,
            mac,
            modeId: screenItem.modeId,
            storyId: programItem.id
          }
        })
      }

      const sortMaterCtrlCb = ({ programItem = {}, materItem = {}, isSortPrograming }) => {
        if (!materItem.id || !programItem.id) {
          return
        }
        return this.$util.sendComd(this.$apiList.circleMaterCtrl, {
          params: {
            areaId: this.areaId,
            controlType: isSortPrograming ? 1 : 2,
            mac,
            materialId: materItem.id,
            modeId: 1,
            storyId: programItem.id
          }
        })
      }

      // 普通屏幕
      // if (item.modalType === 'mater-content') {
      if (item.key === 'btn-content-change') {
        if (modeCount === 1) {
          this.$api.send(this.$apiList.normalProgramList, {
            put: {
              mac
            }
          }).then(res => {
            console.log('resresres', res)
            this.$refs.programModal.show(res.data, {
              getMaterListCb: (programItem) => {
                console.log('获取节目素材')
                return getMaterListCb({
                  screenItem: {
                    areaId: this.areaId,
                    modeId: 1
                  },
                  programItem
                })
              },
              // 切换节目
              playProgramCtrlCb: (programItem) => {
                return playProgramCtrlCb({
                  screenItem: {
                    areaId: this.areaId,
                    modeId: 1
                  },
                  programItem
                })
              },
              // 切换素材
              playMaterCtrlCb: (programItem, materItem) => {
                return playMaterCtrlCb({
                  screenItem: {
                    areaId: this.areaId,
                    modeId: 1
                  },
                  programItem,
                  materItem
                })
              },
              // 单曲循环节目
              sortProgramCtrlCb: (programItem, isSortPrograming) => {
                return sortCtrlCb({
                  screenItem: {
                    areaId: this.areaId,
                    modeId: 1
                  },
                  programItem,
                  isSortPrograming
                })
              },
              // 单曲循环素材
              sortMaterCtrlCb: (programItem, materItem = {}, isSortPrograming) => {
                return sortMaterCtrlCb({
                  screenItem: {
                    areaId: this.areaId,
                    modeId: 1
                  },
                  materItem,
                  programItem,
                  isSortPrograming
                })
              }

            })
          })
          // } else if (item.modalType === 'chenjin-content') {
        } else if (modeCount > 1) {
        // 多屏列表
          this.$api.send(this.$apiList.getScreenProgramList, {
            put: {
              mac
            }
          }).then(res => {
            this.$refs.screenProgramModal.show(res.data.map(it => ({
              ...it,
              key: it.modeId + '',
              name: it.modeName
            })), {
            // 获取节目列表
              getProgramListCb: (screenItem) => {
                console.log('获取节目素材', screenItem)
                // return Promise.resolve([{ id: 1, name: 2 }])
                return this.$api.send(this.$apiList.getProgramList, {
                  put: {
                    areaId: screenItem.areaId,
                    modeId: screenItem.modeId
                  }
                }).then(res => res.data)
              },
              getMaterListCb: (screenItem, programItem) => {
                return getMaterListCb({
                  screenItem,
                  programItem
                }).then(res => res.slice(0, Math.floor(Math.random() * res.length + 2)))
              },
              // 切换节目
              playProgramCtrlCb: (screenItem, programItem) => {
                return playProgramCtrlCb({
                  screenItem,
                  programItem
                })
              },
              // 切换素材
              playMaterCtrlCb: (screenItem, programItem, materItem) => {
                return playMaterCtrlCb({
                  screenItem,
                  programItem,
                  materItem
                })
              },
              // 单曲循环节目
              sortProgramCtrlCb: (screenItem, programItem, isSortPrograming) => {
                return sortCtrlCb({
                  screenItem,
                  programItem,
                  isSortPrograming
                })
              },
              // 单曲循环素材
              sortMaterCtrlCb: (screenItem, programItem, materItem = {}, isSortPrograming) => {
                return sortMaterCtrlCb({
                  screenItem,
                  materItem,
                  programItem,
                  isSortPrograming
                })
              }
            })
          })
        }
      } else {
        this.$util.sendComd(this.$apiList.equCtrl, {
          params: {
            deviceId: mac,
            areaId: this.areaId,
            command: item.command
          }
        })
      }
      // const { deviceId } = this.tempData
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
      this.$router.push({ path: '/index' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
