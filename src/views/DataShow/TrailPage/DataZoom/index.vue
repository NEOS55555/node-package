<template>
  <div class="datazoom-warp">
    <div class="left-box">
      <div class="pre-title">当前总客户数量统计备份</div>
      <div class="count-num">8905</div>
      <div class="pre-title">区域数据分布备份</div>
      <div class="pie-ctn" ref="pieCtn"></div>
    </div>
    <CustomerChart></CustomerChart>
  </div>
</template>

<script>
import CustomerChart from './CustomerChart.vue'
import * as echarts from 'echarts'
import $util from '@/utils'
// import equConfig from '../zoneControl/comp/equip/config'
function paintPies (arr) {
  const START_ANGLE = 90
  const total = arr.reduce((p, c) => c.value + p, 0)
  let prevDege = START_ANGLE
  const series = arr.map(({ value, name }, idx) => {
    const index = idx + 1
    const rate = value / total
    prevDege += 360 * rate
    return {
      name: 'Access From' + value,
      type: 'pie',
      center: ['32%', '50%'],
      radius: [10 * index + '%', 10 * index + 5 + '%'],
      startAngle: prevDege,
      avoidLabelOverlap: false,
      label: {
        show: true,
        fontSize: $util.jpx2vw(20),
        fontWeight: 'bold',
        /* lineStyle: {
          color: '#000'
        }, */
        color: '#fff',
        formatter: ' {d}%'
      },
      labelLine: {
        show: true,
        length: $util.jpx2vw(10),
        length2: $util.jpx2vw(10)
      },
      emphasis: {
        show: false
      },
      data: [
        { value: value, name: name },
        {
          value: total - value,
          name: name + '0',
          itemStyle: { color: '#21427F' },
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      ]
    }
  })
  var option = {
    tooltip: {
      show: false
    },
    legend: {
      data: arr.map(it => it.name),
      right: '0',
      top: 'center',
      orient: 'vertical',
      textStyle: {
        color: '#fff',
        fontSize: $util.jpx2vw(14)
      }
    },
    series
  }
  return option
}

export default {
  mounted () {
    this.myChart = echarts.init(this.$refs.pieCtn)
    this.getData(this.dateType)
  },
  methods: {
    paintBar (arr) {
      arr = [
        {
          name: '牛逼1',
          value: 100
        },
        {
          name: '牛逼112',
          value: 20
        },
        {
          name: '11牛逼1',
          value: 30
        },
        {
          name: '师傅带',
          value: 40
        }
      ]
      // this.myChart = echarts.init(this.$refs.barCtn)
      this.myChart.setOption(paintPies(arr))
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
  },
  components: { CustomerChart }

}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
