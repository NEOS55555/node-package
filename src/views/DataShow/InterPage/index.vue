<template>
<div class="data-show-container">
<div class="line">
<DataBox dir="top left"  title="点击量">
<ClickCount :dateType="dateType" />
</DataBox>
<DataBox dir="top right"  title="各屏幕点击排行">
<ScreenClickBar :dateType="dateType" />
</DataBox>
</div>
<div class="line">
<DataBox dir="bottom left"  title="专业体验点击排行">
<TyClickBar :dateType="dateType" />
</DataBox>
<DataBox dir="bottom right"  title="产品谱系点击排行">
<ProductClickBar :dateType="dateType" />
</DataBox>
</div>
</div>
</template>

<script>
import DataBox from '../Databox'
import ClickCount from './ClickCount'
import ProductClickBar from './ProductClickBar'
import TyClickBar from './TyClickBar'
import ScreenClickBar from './ScreenClickBar'

export default {
  name: '',
  props: {
    dateType: String
  },
  components: { DataBox, ClickCount, ProductClickBar, TyClickBar, ScreenClickBar },
  created () {
  },
  mounted () {},
  computed: {}
}
</script>
