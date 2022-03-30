<template>
  <div class="data-show-container">
    <div class="line">
      <DataBox dir="top-line"  title="实时厅堂服务资源状态及分布">
        <Status :dateType="dateType" ></Status>

      </DataBox>

    </div>
    <div class="line">
      <DataBox dir="bottom left"  title="各业务区服务情况">
        <Service :dateType="dateType" ></Service>
      </DataBox>
      <DataBox dir="bottom right"  title="室内环境检测">
        <HallCheck :dateType="dateType" ></HallCheck>
      </DataBox>
    </div>
  </div>
</template>

<script>
import DataBox from '../Databox'
import HallCheck from './HallCheck'
import Service from './Service'
import Status from './Status'

export default {
  name: '',
  props: {
    dateType: String
  },
  components: { DataBox, HallCheck, Service, Status },
  created () {
  },
  mounted () {},
  computed: {}
}
</script>
