<template>
  <div class="bar-warp">
    <div class="pre-title">客户统计</div>
    <div class="bar-ctn" ref="barCtn">

    </div>
  </div>
</template>

<script>
// import equConfig from '../zoneControl/comp/equip/config'
import * as echarts from 'echarts'

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
    // this.getData(this.dateType)
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
  mounted () {
    this.myChart = echarts.init(this.$refs.barCtn)
    this.getData(this.dateType)
  },
  computed: {},
  methods: {
    paintBar (arr) {
      arr = arr || []
      var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#fff',
            fontSize: this.$util.jpx2vw(24)
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: 'rgba(255,255,255,.2)'
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#fff',
            fontSize: this.$util.jpx2vw(24)
          }
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            lineStyle: {
              color: '#00FBF0'
            },
            showSymbol: false,
            smooth: true,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#00FBF0' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'transparent' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          }
        ]
      }

      // this.myChart = echarts.init(this.$refs.barCtn)
      this.myChart.setOption(option)
    },
    getData (dateType = 'week') {
      this.$util.sendAjax({
        url: this.$apiList.productClickCountBar.path,
        data: {
          appId: 'xxty',
          dateType
        }
      }, res => {
        this.paintBar(res.resultData.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
