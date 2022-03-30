<template>
  <div class="hall-wrapper">
    <!-- <div style="font-size:42px;">{{JSON.stringify(res)}}</div> -->
    <div class="hall-ctn" v-for="it in list" :key="it.key">
      <div class="count-text">
        {{it.val + it.kunit}}
      </div>
      <img class="icon"
        :src="$const.resourceUrl + 'images/dataShow/'+it.key+'.png'"
        alt="">
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
          key: 'show-hel-tempture',
          val: 0,
          kunit: ' ℃'
        },
        {
          key: 'show-hel-pm25',
          val: 10,
          kunit: ' ug/m³'
        },
        {
          key: 'show-hel-wet',
          val: 20,
          kunit: '%'
        },
        {
          key: 'show-hel-sound',
          val: 0,
          kunit: 'db'
        }
      ],
      res: {}
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
  beforeDestroy () {
    // clearInterval(this.timmer)
    this.$util.evtLoop.popEvt()
  },
  watch: {
    dateType (a) {
      console.log(a)
      // this.getData(a)
    }
  },
  mounted () {},
  computed: {},
  methods: {
    getData (dateType = 'week') {
      return new Promise(resolve => {
        this.$util.sendAjax({
          url: this.$apiList.evnironment.path,
          data: {
          // dateType
          }
        }, (res = {}) => {
          this.res = res
          //
          const data = res.resultData.data || {}
          this.list[0].val = data.indoorTemperature || 0
          this.list[1].val = data.pm25 || 0
          this.list[2].val = data.indoorHumidity || 0
          this.list[3].val = data.noise || 0
          resolve(res)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
