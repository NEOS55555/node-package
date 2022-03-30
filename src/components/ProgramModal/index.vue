<template>
    <el-dialog
      :visible.sync="visible"
      class="dialog-deep"
      center
      @closed="close"
    >
      <div class="dialog1-content">

        <div class="pro-head">
          <span class="pro-title">节目列表</span>

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
              <li @click="changeProgram(index)" :class="{active:activeProgramIndex === index}" v-for="(item,index) in programList" :key="item.key">{{item.title}}</li>
            </ul>
          </div>
          <div class="program-content">
            <div class="program-ctn">{{activeMater.title}}</div>
            <div class="program-preview">
              <ul>
                <li @click="changeMater(index)" :class="{active:activeMaterIndex === index}" v-for="(it,index) in activeProgramItem.materList" :key="it.id">{{it.title}}</li>

              </ul>
            </div>
          </div>
        </div>
      </div>

    </el-dialog>

</template>

<script>

export default {
  /*  props: {
    dialogList: Array,
    dialogType: String
  }, */
  name: '',
  components: { },
  data () {
    return {
      visible: false,
      programList: [],
      //
      isPlaying: true,
      isSortMatering: false,
      isSortPrograming: false,
      activeProgramIndex: 0,
      activeMaterIndex: 0
      // dialogType: ''
    }
  },
  mixins: [],
  created () {
  },
  computed: {
    activeProgramItem () {
      return this.programList[this.activeProgramIndex] || {}
    },
    activeMater () {
      return (this.activeProgramItem.materList || [])[this.activeMaterIndex] || {}
    }
  },
  watch: {

  },
  methods: {
    changeProgram (index) {
      this.activeProgramIndex = index
      this.activeMaterIndex = 0
      this.isSortMatering = false
      this.isSortPrograming = false
      this.isPlaying = true
      this.sortMaterCb()
      if (!(this.programList[this.activeProgramIndex] || {}).materList) {
        this.cbMap.getMaterListCb(this.programList[this.activeProgramIndex]).then(list => {
          console.log('list', list)
          this.$set(this.programList[this.activeProgramIndex], 'materList', list)
          // this.programList[this.activeProgramIndex].materList = list
          // this.transfromList(this.programList)
          this.playProgramCb()
        })
      } else {
        this.playProgramCb()
        // this.transfromList(this.programList)
      }
      /* this.programList.forEach((it, idx) => {
        it.active = index === idx
        if (it.active) {
          const actIdx = it.materList.findIndex(itm => itm.active)
          this.activeMaterIndex = actIdx > -1 ? actIdx : 0
        }
      }) */
      console.log(this.activeProgramIndex, this.activeMaterIndex)
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
      nextIndex = nextIndex < 0 ? this.programList.length - 1 : nextIndex
      this.changeProgram(nextIndex)
    },
    nextProgram () {
      let nextIndex = this.activeProgramIndex + 1
      nextIndex = nextIndex >= this.programList.length ? 0 : nextIndex
      this.changeProgram(nextIndex)
    },
    // 单曲循环素材
    sortMater () {
      this.isSortMatering = !this.isSortMatering
      this.sortMaterCb()
    },
    sortMaterCb () {
      console.log('是否单曲循环', this.isSortMatering)
      this.cbMap.sortMaterCtrlCb(this.activeProgramItem, this.activeMater, this.isSortPrograming)
    },
    sortProgram () {
      this.isSortPrograming = !this.isSortPrograming
      this.sortProgramCb()
    },
    sortProgramCb () {
      console.log('是否单曲循环节目', this.isSortPrograming)
      this.cbMap.sortProgramCtrlCb(this.activeProgramItem, this.isSortPrograming)
    },
    playProgramCb () {
      console.log('播放节目activeProgramItem', this.activeProgramItem)
      this.cbMap.playProgramCtrlCb(this.activeProgramItem)
    },
    playMaterCb () {
      console.log('播放素材activeMater', this.activeMater)
      this.cbMap.playMaterCtrlCb(this.activeProgramItem, this.activeMater)
    },
    /* modalBtnClick (item) {
      this.$emit('modalBtnClick', item)
      this.mdbClickCb && this.mdbClickCb(item)
    }, */

    close () {
      this.visible = false
    },
    show (list, cbMap) {
      // { getMaterListCb, playProgramCtrlCb,sortProgramCtrlCb }
      this.cbMap = cbMap
      this.visible = true
      // this.getMaterListCb = getMaterListCb
      // this.playProgramCtrlCb = playProgramCtrlCb
      // this.transfromList(list)
      this.programList = list
      this.changeProgram(0)
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
