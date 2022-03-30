<template>
  <div class="bar-ctn vert-middle" ref="barCtn">

  </div>
</template>

<script>

export default {
  props: {
    dateType: String
  },
  data () {
    return {
      res: {}
    }
  },
  created () {
    // week\month\year
  },
  updated () {
    console.log('fff')
  },
  /* watch: {
    dateType (a) {
      console.log(a)
      this.getData(a)
    }
  }, */
  mounted () {
    this.traceObj = this.$util.paintTrail({
      node: this.$refs.barCtn,
      imgSrc: this.$const.resourceUrl + 'images/light/zoom1.png',
      width: 703,
      height: 305,
      circleRadius: 10,
      lineWidth: 1
    })
    this.getData()
  },
  computed: {},
  methods: {
    paintBar () {
      this.traceObj.apoint(1, 100, 200)
      this.traceObj.apoint(1, 100, 250)
      this.traceObj.apoint(1, 150, 250)
      this.traceObj.apoint(1, 10, 50)

      this.traceObj.apoint(2, 100, 10)

      // this.traceObj.paintTrace(1)
      console.log('pppp')
    },
    getData (dateType = 'week') {
      this.$util.sendAjax({
        url: this.$apiList.screenClickCountBar.path,
        data: {
          dateType
        }
      }, (res = {}) => {
        this.paintBar(res.resultData.data)
        // this.count = res.resultData.count
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
