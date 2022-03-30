<template>
  <div class="bar-ctn" ref="barCtn">

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
        color: ['#fff'],
        xAxis: {
          type: 'category',
          data: arr.map(it => {
            let name = it.prodName
            if (name.length > 5) {
              name = name.slice(0, 5) + '\n' + name.slice(5)
            }
            return name
          }),
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: this.$util.jpx2vw(22),
            color: '#fff',
            rotate: 45
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          top: '10%',
          bottom: '30%'
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [
          {
            data: arr.map(it => it.count),
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              fontSize: this.$util.jpx2vw(24),
              color: '#fff'
            },
            itemStyle: {
              borderRadius: 100
            },
            barWidth: this.$util.jpx2vw(30),
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      }
      // this.myChart = echarts.init(this.$refs.barCtn)
      this.myChart.setOption(option)
    },
    getData (dateType = 'week') {
      /* this.paintBar([
        {
          prodName: '入户屏',
          count: parseInt(100 * Math.random())
        },
        {
          prodName: '入户屏1',
          count: parseInt(100 * Math.random())
        },
        {
          prodName: '入户屏123',
          count: parseInt(100 * Math.random())
        },
        {
          prodName: '入户屏123',
          count: parseInt(100 * Math.random())
        },
        {
          prodName: '入户屏566',
          count: parseInt(100 * Math.random())
        },
        {
          prodName: '入户屏566',
          count: parseInt(100 * Math.random())
        },
        {
          prodName: '入户dgfsdfhfhd屏566',
          count: parseInt(100 * Math.random())
        },
        {
          prodName: 'wetwet',
          count: parseInt(100 * Math.random())
        },
        {
          prodName: 'wertwet',
          count: parseInt(100 * Math.random())
        },
        {
          prodName: 'sadgast',
          count: parseInt(100 * Math.random())
        },
        {
          prodName: '导览台',
          count: '14'
        }]
      ) */
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
