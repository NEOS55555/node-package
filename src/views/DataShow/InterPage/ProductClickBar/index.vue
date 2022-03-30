<template>
<!-- <div> -->

  <div class="bar-ctn" ref="barCtn">

  </div>
  <!-- <span>{{JSON.stringify(this.res)}}</span> -->
<!-- </div> -->
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
        yAxis: {
          type: 'category',
          data: arr.map(it => it.prodName),
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: this.$util.jpx2vw(24),
            color: '#fff'
          }
        },
        grid: {
          left: '30%',
          right: '20%',
          top: '5%',
          bottom: '5%'
        },
        xAxis: {
          type: 'value',
          show: false
        },
        series: [
          {
            data: arr.map(it => it.count),
            type: 'bar',
            label: {
              show: true,
              position: 'right',
              fontSize: this.$util.jpx2vw(24),
              color: '#fff'
            },
            itemStyle: {
              borderRadius: 100
            },
            barWidth: this.$util.jpx2vw(20),
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
      this.$util.sendAjax({
        url: this.$apiList.productClickCountBar.path,
        data: {
          appId: 'cppx',
          dateType
        }
      }, (res = {}) => {
        this.res = res
        /* res = { msg: 'OK', resultData: { data: [{ prodName: '天天增利系列', count: 142, prodId: '48' }, { prodName: '小微乐收银', count: 91, prodId: '9' }, { prodName: '优选系列基金', count: 91, prodId: '37' }, { prodName: '重大疾病类产品', count: 74, prodId: '31' }, { prodName: '云注册', count: 72, prodId: '16' }, { prodName: '开立适合的特色卡户', count: 69, prodId: '298' }, { prodName: '基金定投', count: 67, prodId: '50' }, { prodName: '“慧”富系列', count: 61, prodId: '53' }, { prodName: '保险配置', count: 48, prodId: '52' }, { prodName: '传统抵押贷款', count: 44, prodId: '1' }] }, resultCode: 'S1000' } */
        this.paintBar(res.resultData.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
