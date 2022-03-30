<template>
<div>
    <Header />
    <div class="container">
      <div class="content">
        <!-- <button @click="changeEq">change</button> -->
        <div class="ctrl-ctn">
          <div class="ctrl-item" v-for="it in circleArr" :key="it.key" @click="circleBtnClick(it)">
            <div class="ctrl-box">
              <img class="icon"
                :src="$const.resourceUrl + 'images/index/'+it.key+'.png'"
                alt="">
              <div class="text">{{it.text}}</div>
              <div class="englist-text">{{it.engText}}</div>
            </div>
          </div>
        </div>
      </div>

      <CtrlFooter :controlBtns="showCtrlBtns" tipname="全网点控制" imgPath="controlArea"  @btnChange="btnChange" />
    </div>
</div>
</template>

<script>
import Header from '@/components/Header'
import CtrlFooter from '@/components/CtrlFooter'
// import equConfig from '../zoneControl/comp/equip/config'
const showCtrlBtns = [
  {
    name: '开灯',
    key: 'light-on',
    group: 'allPcCtrl',
    active: false,
    command: 'LIGHT_ON'
  },
  {
    name: '关灯',
    key: 'light-off',
    group: 'allPcCtrl',
    active: false,
    command: 'LIGHT_OFF'
  },
  {
    name: 'PC开',
    key: 'pc-on',
    group: 'allPcCtrl',
    active: false,
    command: 'PC_ON'
  },
  {
    name: 'PC关',
    key: 'pc-off',
    group: 'allPcCtrl',
    active: false,
    command: 'PC_OFF'
  },
  {
    name: '全开',
    key: 'all-on',
    group: 'allPcCtrl',
    active: false,
    command: 'ON'
  },
  {
    name: '全关',
    key: 'all-off',
    group: 'allPcCtrl',
    active: false,
    command: 'OFF'
  }
]
export default {
  name: '',
  components: { CtrlFooter, Header },
  data () {
    return {
      showCtrlBtns,
      circleArr: [
        {
          key: 'light',
          text: '灯光控制',
          engText: 'Lighting control',
          path: 'lightCtrl'
        },
        {
          key: 'ctrl',
          text: '设备控制',
          engText: 'Equipment control',
          path: 'equipCtrl'
        }
        /* {
          key: 'dataShow',
          text: '数据展示',
          engText: 'Data display',
          path: 'dataShow'
        } */
      ]
    }
  },
  created () {
  },
  mounted () {},
  computed: {},
  methods: {
    btnChange (item) {
      this.$api.send(this.$apiList[item.group], {
        params: {
          command: item.command
        }
      }).then(res => {
        if (res.resultCode !== 'S1000') {
          this.$message({
            type: 'error',
            message: res.msg || '操作失败'
          })
          return
        }
        this.$message({
          type: 'success',
          message: res.msg || '操作成功'
        })
      })
    },
    circleBtnClick (item) {
      console.log(item)
      this.$router.push({ path: item.path })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
