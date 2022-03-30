<template>
  <div class="hall-wrapper">
    <div class="hall-ctn border-color-right">
      <div class="hp-left">
        <div class="hp-title border-color-bottom">实时机具忙闲状态</div>
        <div class="hp-rect">接待中 <span>{{machineStatusData.busyCount}}</span>
          <div class="rect1 bl"></div>
          <div class="rect1 br"></div>
        </div>
        <div class="hp-icons">
          <img class="icon"
            v-for="it in machineStatusData.busyCount"
            :key="it"
            :src="$const.resourceUrl + 'images/dataShow/show-pc-act.png'"
            alt="">
        </div>
        <div class="hp-rect normal">可接待 <span>{{machineStatusData.lazyCount}}</span>
          <div class="rect1 bl"></div>
          <div class="rect1 br"></div>
        </div>
        <div class="hp-icons">
          <img class="icon"
            v-for="it in machineStatusData.lazyCount"
            :key="it"
            :src="$const.resourceUrl + 'images/dataShow/show-pc.png'"
            alt="">
        </div>
      </div>
      <div class="hp-right border-color">
        <div class="hp-right-ctn">
          <div class="hp-right-title">
            智能交付站
          </div>
          <img class="icon"
              v-if="znjfStatusData.busyCount > 0"
              :src="$const.resourceUrl + 'images/dataShow/show-jf-act.png'"
              alt="">
            <img class="icon"
              v-else
              :src="$const.resourceUrl + 'images/dataShow/show-jf.png'"
              alt="">
        </div>
      </div>
    </div>
    <div class="hall-ctn">
      <div class="hp-left">
        <div class="hp-title border-color-bottom">服务人员忙闲状态</div>
        <div class="hp-rect">接待中 <span>{{personStatusData.busyCount || 0}}</span>
          <div class="rect1 bl"></div>
          <div class="rect1 br"></div>
        </div>
        <div class="hp-icons">
          <img class="icon"
            v-for="it in personStatusData.busyCount"
            :key="it"
            :src="$const.resourceUrl + 'images/dataShow/show-person-act.png'"
            alt="">
        </div>
        <div class="hp-rect normal">可接待 <span>{{personStatusData.lazyCount || 0}}</span>
          <div class="rect1 bl"></div>
          <div class="rect1 br"></div>
        </div>
        <div class="hp-icons">
          <img class="icon"
            v-for="it in personStatusData.lazyCount"
            :key="it"
            :src="$const.resourceUrl + 'images/dataShow/show-person.png'"
            alt="">
        </div>
      </div>
      <div class="hp-right border-color">
        <div class="hp-right-ctn">
          <div class="hp-right-title">
            机器人服务状态
          </div>
          <img class="icon"
              v-if="robotStatusData.busyCount > 0"
              :src="$const.resourceUrl + 'images/dataShow/show-robt-act.png'"
              alt="">
          <img class="icon"
              v-else
              :src="$const.resourceUrl + 'images/dataShow/show-robt.png'"
              alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import equConfig from '../zoneControl/comp/equip/config'

export default {
  props: {
    dateType: String
  },
  data () {
    return {
      timmer: null,
      list: [
        {
          key: 'show-service1',
          val: 0,
          title: '智能交付站'
        },
        {
          key: 'show-service2',
          val: 10,
          title: '沉浸式远程银行'
        },
        {
          key: 'show-service3',
          val: 20,
          title: '现金业务'
        },
        {
          key: 'show-service4',
          val: 0,
          title: '非现金业务'
        }
      ],
      personStatusData: {},
      znjfStatusData: {},
      machineStatusData: {
        busyCount: 0,
        lazyCount: 0
      },
      robotStatusData: {
        busyCount: 0,
        lazyCount: 0
      }
    }
  },
  created () {
    // week\month\year
    this.getData()
    this.$util.evtLoop.pushEvt(this.getData)
    /* this.timmer = setInterval(() => {
      this.getData()
    }, this.$const.DATA_REFRESH_TIME) */
  },
  watch: {
    dateType (a) {
      console.log(a)
      // this.getData(a)
    }
  },
  beforeDestroy () {
    // clearInterval(this.timmer)
    this.$util.evtLoop.popEvt()
  },
  mounted () {},
  computed: {},
  methods: {
    getpersonStatusData (dateType = 'week') {
      return new Promise(resolve => {
        this.$util.sendAjax({
          url: this.$apiList.personStatus.path,
          data: {
          // dateType
          }
        }, (res = {}) => {
          this.personStatusData = res.resultData.data || {
            busyCount: 0,
            lazyCount: 0
          }
          resolve(res)
        })
      })
    },
    getznjfStatusData (dateType = 'week') {
      return new Promise(resolve => {
        this.$util.sendAjax({
          url: this.$apiList.znjjfStatus.path,
          data: {
          // dateType
          }
        }, (res = {}) => {
          this.znjfStatusData = res.resultData.data || {
            busyCount: 0,
            lazyCount: 0
          }
          resolve(res)
        })
      })
    },
    getMachineStatus (dateType = 'week') {
      return new Promise(resolve => {
        this.$util.sendAjax({
          url: this.$apiList.machineStatus.path,
          data: {
          // dateType
          }
        }, (res = {}) => {
          this.machineStatusData = res.resultData.data || {
            busyCount: 0,
            lazyCount: 0
          }
          resolve(res)
        })
      })
    },
    getrobotStatus () {
      return new Promise(resolve => {
        this.$util.sendAjax({
          url: this.$apiList.robotStatus.path,
          data: {
          // dateType
          }
        }, (res = {}) => {
          this.robotStatusData = res.resultData.data || {
            busyCount: 7,
            lazyCount: 5
          }
          resolve(res)
        })
      })
    },
    getData (dateType = 'week') {
      console.log(dateType)
      /* this.getMachineStatus(dateType)
      this.getrobotStatus(dateType)
      this.getpersonStatusData(dateType)
      this.getznjfStatusData(dateType) */
      return Promise.all([this.getMachineStatus(dateType), this.getrobotStatus(dateType), this.getpersonStatusData(dateType), this.getznjfStatusData(dateType)])
      /* this.$util.sendAjax({
        url: this.$apiList.machineStatus.path,
        data: {
          dateType
        }
      }, (res = {}) => {

        this.res = res
        this.count = res.resultData.data.count
      }) */
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
