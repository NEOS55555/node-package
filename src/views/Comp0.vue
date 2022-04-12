
<template>
<div style="background-image:url();background-size:100% 100%;width:100%;height:100%;">
  <div style="position:absolute;width:10.416666666666666vw;height:6.833333333333333vh;left:80.59895833333333vw;top:3.75vh;">
      <TabItem ref="TabItemRef0" :defaultisActive="TabItem0Data.isActive" :defaultisLeftRadius="TabItem0Data.isLeftRadius" :defaultname="TabItem0Data.name" ></TabItem>
  </div>
<div style="position:absolute;width:7.03125vw;height:6.833333333333333vh;left:90.625vw;top:3.75vh;">
      <TabItem ref="TabItemRef1"  ></TabItem>
  </div>
</div>
</template>
<script>
  import TabItem from '@/components/TabItem'

  export default {
    name: '',
    components: { TabItem },
    data () {
      return {"TabItem0Data":{"isActive":true,"isLeftRadius":true,"name":"123123"},"TabItem1Data":{}}
    },
    mounted () {
      
    },
    computed: {},
    methods: {
      TabItem0Data_GET_CURRENT_DATA () {
    return this.TabItem0Data
  },
TabItem1Data_GET_CURRENT_DATA () {
    return this.TabItem1Data
  }
    }
  }
</script>