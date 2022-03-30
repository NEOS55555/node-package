<template>
  <div class="click-count-container">
    <div class="count-ctn">
      <img class="icon"
        :src="$const.resourceUrl + 'images/dataShow/clickCountBg.png'"
        alt="">

      <div class="count-text">
        <div class="title">总点击量</div>
        <div class="text"><span class="count">{{count}}</span>次</div>
        <!-- <div>{{JSON.stringify(res)}}</div> -->
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
      count: 0,
      res: {}
    }
  },
  created () {
    // week\month\year
    this.getData(this.dateType)
  },
  updated () {
    console.log('fff')
  },
  watch: {
    dateType (a) {
      console.log(a)
      this.getData(a)
    }
  },
  mounted () {},
  computed: {},
  methods: {
    getData (dateType = 'week') {
      this.$util.sendAjax({
        url: this.$apiList.totalClickCount.path,
        data: {
          dateType
        }
      }, (res = {}) => {
        /* var div = document.createElement('div')
        div.innerText = 'cccccc,' + JSON.stringify(res)
        document.body.appendChild(div) */
        this.res = res
        this.count = res.resultData?.data?.count
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
