<template>
    <el-dialog
      :visible.sync="visible"
      class="dialog-deep"
      center
      @closed="close"
    >
      <div class="dialog1-content">
        <div class="pro-head">
          <Tab :showKey="showKey" className="normal" :list="tabList" @change="tabChange"></Tab>
        </div>
        <div class="pro-head">
          <span class="pro-title">屏幕列表</span>

          <div class="btn-list">
            <span class="opera-btn show-item" @click="prevProgram">上一节目</span>
            <span class="opera-btn show-item" @click="nextProgram">下一节目</span>
            <span class="opera-btn show-item" @click="playPauseProgram">{{isPlaying ? '暂停' :'播放'}}</span>
            <span class="opera-btn show-item" :class="{active: isSortPrograming}" @click="sortProgram"><img class="icon" :src="$const.resourceUrl + 'images/index/sort-one.png'" alt="">节目循环</span>
            <span class="opera-btn show-item" :class="{active: isSortMatering}" @click="sortMater"><img class="icon" :src="$const.resourceUrl + 'images/index/sort-one.png'" alt="">素材循环</span>
          </div>
        </div>
        <div class="pro-container">
          <div class="program-menu-list border-color-right border-color-left">
            <ul class="">
              <li @click="changeScreen(index)" :class="{active:activeScreenIndex === index}" v-for="(item,index) in screenList" :key="item.key">{{item.areaName}}</li>
            </ul>
          </div>
          <div class="program-content">
            <div class="program-list-preview">
              <ul>
                <li class="show-item" @click="changeProgram(index)" :class="{active:activeProgramIndex === index}" v-for="(it,index) in activeScreenItem.programList" :key="it.id">{{it.title}}</li>

              </ul>
            </div>
            <div class="program-preview">
              <ul>
                <li @click="changeMater(index)" :class="{active:activeMaterIndex === index}" v-for="(it,index) in (((screenList[activeScreenIndex] || {}).programList || [])[activeProgramIndex] || {}).materList" :key="it.id">{{it.title}}</li>

              </ul>
            </div>
          </div>
        </div>
      </div>

    </el-dialog>

</template>

<script>
import Tab from '@/components/Tab'

export default {
  /*  props: {
    dialogList: Array,
    dialogType: String
  }, */
  name: '',
  components: { Tab },
  data () {
    return {
      tabList: [],
      showKey: '',
      visible: false,
      screenList: [],
      //
      isPlaying: true,
      isSortMatering: false,
      isSortPrograming: false,
      activeScreenIndex: 0,
      activeProgramIndex: 0,
      activeMaterIndex: 0
      // dialogType: ''
    }
  },
  mixins: [],
  created () {
  },
  computed: {
    activeScreenItem () {
      return this.screenList[this.activeScreenIndex] || {}
    },
    activeProgramItem () {
      if (this.screenList[this.activeScreenIndex] && this.screenList[this.activeScreenIndex].programList) {
        return this.screenList[this.activeScreenIndex].programList[this.activeMaterIndex]
      }
      return {}
    },
    activeMater () {
      const mtlist = (((this.screenList[this.activeScreenIndex] || {}).programList || [])[this.activeProgramIndex] || {}).materList
      if (mtlist) {
        return mtlist[this.activeMaterIndex]
      }
      return {}
    }
  },
  watch: {

  },
  methods: {
    tabChange (item) {
      this.showKey = item.key
      this.getPromList()
    },
    getPromList () {
      // const list = getmlist()
      console.log('this.tabList', this.tabList)
      this.screenList = this.tabList.find(it => (it.key) === (this.showKey)).modeAreas
      this.changeScreen(0)
    },
    changeScreen (index) {
      this.isSortPrograming = false
      this.isSortMatering = false
      this.sortMaterCb()
      this.sortProgramCb()
      this.activeScreenIndex = index
      this.activeProgramIndex = 0
      this.activeMaterIndex = 0
      this.isPlaying = true
      if (!this.screenList[this.activeScreenIndex].materList) {
        this.cbMap.getProgramListCb(this.screenList[this.activeScreenIndex]).then(list => {
          console.log('list', list)
          this.$set(this.screenList[this.activeScreenIndex], 'programList', list)
          // cb ? cb() : this.playProgramCb()
          this.changeProgram(0)
        })
      } else {
        // cb ? cb() : this.playProgramCb()
        this.changeProgram(0)
      }
    },
    changeProgram (index) {
      this.isSortMatering = false
      this.isSortPrograming = false
      this.sortMaterCb()
      this.sortProgramCb()
      this.activeProgramIndex = index
      this.isPlaying = true
      if (!this.screenList[this.activeScreenIndex].programList[this.activeProgramIndex].materList) {
        this.cbMap.getMaterListCb(this.activeScreenItem, this.activeScreenItem.programList[this.activeProgramIndex]).then(list => {
          this.$set(this.screenList[this.activeScreenIndex].programList[this.activeProgramIndex], 'materList', list)
          console.log('mmmaterlist', list)
          // console.log(this.activeProgramItem)
          this.playProgramCb()
        })
      } else {
        this.playProgramCb()
      }

      // console.log(this.activeProgramIndex, this.activeMaterIndex)
    },
    changeMater (index) {
      this.activeMaterIndex = index
      /* this.activeProgramItem.materList.forEach((it, idx) => {
        it.active = index === idx
      }) */
      this.playMaterCb()
    },
    playPauseProgram () {
      this.isPlaying = !this.isPlaying
      console.log('播放暂停', this.activeProgramItem)
    },
    prevProgram () {
      let nextIndex = this.activeProgramIndex - 1
      nextIndex = nextIndex < 0 ? this.activeScreenItem.programList.length - 1 : nextIndex
      this.changeProgram(nextIndex)
    },
    nextProgram () {
      let nextIndex = this.activeProgramIndex + 1
      nextIndex = nextIndex >= this.activeScreenItem.programList.length ? 0 : nextIndex
      this.changeProgram(nextIndex)
    },
    // 单曲循环素材
    sortMater () {
      this.isSortMatering = !this.isSortMatering
      this.sortMaterCb()
    },

    sortMaterCb () {
      console.log('是否单曲循环', this.isSortMatering)
      this.cbMap.sortMaterCtrlCb(this.activeScreenItem, this.activeProgramItem, this.activeMater, this.isSortPrograming)
    },
    sortProgram () {
      this.isSortPrograming = !this.isSortPrograming
      this.sortProgramCb()
      this.cbMap.sortProgramCtrlCb(this.activeScreenItem, this.activeProgramItem, this.isSortPrograming)
    },
    sortProgramCb () {
      console.log('是否单曲循环节目', this.isSortPrograming)
    },
    playProgramCb () {
      console.log('播放节目activeProgramItem', this.activeProgramItem)
      this.cbMap.playProgramCtrlCb(this.activeScreenItem, this.activeProgramItem)
    },
    playMaterCb () {
      console.log('播放素材activeMater', this.activeMater)
      this.cbMap.playMaterCtrlCb(this.activeScreenItem, this.activeProgramItem, this.activeMater)
    },
    /* modalBtnClick (item) {
      this.$emit('modalBtnClick', item)
      this.mdbClickCb && this.mdbClickCb(item)
    }, */

    close () {
      this.visible = false
    },

    show (list, cbMap) {
      this.cbMap = cbMap
      this.visible = true
      this.tabList = list
      this.showKey = list[0].key
      this.getPromList()

      // this.dialogList = list
      // this.dialogType = type
      // this.mdbClickCb = cb
    }
  }

}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
