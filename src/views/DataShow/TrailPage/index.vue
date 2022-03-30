<template>
<div class="data-show-container">
  <div class="line">
    <DataBox dir="top left"  title="数据区">
      <DataZoom :dateType="dateType" />
    </DataBox>
    <DataBox dir="top right"  title="轨迹区">
      <TrailZoom :dateType="dateType" />
    </DataBox>
  </div>
  <div class="line">
    <DataBox dir="bottom left"  title="历史数据区">
      <HistroyDataZoom :dateType="dateType" />
    </DataBox>
    <DataBox dir="bottom right"  title="热图区">
      <HotZoom :dateType="dateType" />
    </DataBox>
  </div>
</div>
</template>

<script>
import DataBox from '../Databox'
import DataZoom from './DataZoom'
import HotZoom from './HotZoom'
import HistroyDataZoom from './HistroyDataZoom'
import TrailZoom from './TrailZoom'

export default {
  name: '',
  props: {
    dateType: String
  },
  components: { DataBox, DataZoom, HotZoom, HistroyDataZoom, TrailZoom },
  created () {
  },
  mounted () {},
  computed: {}
}
</script>
