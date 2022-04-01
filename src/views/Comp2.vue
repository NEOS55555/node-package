
<template>
<div style="background-image:url(/images/common/9.jpg);background-size:100% 100%;width:100%;height:100%;">
  <div style="position:absolute;width:7.03125vw;height:4.666666666666667vh;left:2.0833333333333335vw;top:3.3333333333333335vh;">
      <Goback ref="GobackRef0"  @click="Goback0click"></Goback>
  </div>
<div style="position:absolute;width:83.50694444444444vw;height:24.444444444444457vh;left:8.506944444444445vw;top:71.66666666666669vh;">
      <CtrlFooter ref="CtrlFooterRef0" :defaultbackgroundSrc="CtrlFooter1Data.backgroundSrc" :defaulttitlePosition="CtrlFooter1Data.titlePosition" :defaultbtnPosition="CtrlFooter1Data.btnPosition" ></CtrlFooter>
  </div>
<div style="position:absolute;width:28.333333333333332vw;height:45.333333333333336vh;left:11.111111111111114vw;top:13.796296296296296vh;">
      <BgCtnItem ref="BgCtnItemRef0" :defaultbackgroundSrc="BgCtnItem2Data.backgroundSrc" :defaultlist="BgCtnItem2Data.list" @change="BgCtnItem2change"></BgCtnItem>
  </div>
</div>
</template>
<script>
  import Goback from '@/components/Goback'
import CtrlFooter from '@/components/CtrlFooter'
import BgCtnItem from '@/components/BgCtnItem'

  export default {
    name: '',
    components: { Goback, CtrlFooter, BgCtnItem },
    data () {
      return {"Goback0Data":{},"CtrlFooter1Data":{"backgroundSrc":"/images/common/10.jpg","titlePosition":{"position":{"orix":316.6666666666667,"oriy":41.111111111111114,"x":"16.493055555555557vw","y":"3.425925925925926vh"}},"btnPosition":{"position":{"orix":171.11111111111114,"oriy":140,"x":"8.912037037037038vw","y":"11.666666666666666vh"}}},"BgCtnItem2Data":{"backgroundSrc":"/images/common/11.jpg","list":[{"x":0,"y":0,"name":"android设备-顾明2","id":161,"key":161,"position":{"x":"10.243055555555554vw","y":"0.8333333333333331vh","oriy":9.999999999999998,"orix":196.66666666666663},"active":false,"toggleActive":false,"btns":[{"id":3,"name":"标准","src":"/images/common/12.jpg"},{"id":1,"name":"开","src":"/images/common/13.jpg"}]},{"x":0,"y":0,"name":"test111","id":157,"key":157,"position":{"x":"1.2152777777777777vw","y":"16.11111111111111vh","oriy":193.33333333333331,"orix":23.33333333333333},"active":false,"toggleActive":true,"btns":[{"id":1,"name":"开","src":"/images/common/14.jpg","toggleActive":true,"active":true},{"id":2,"name":"关","src":"/images/common/15.jpg","active":true,"toggleActive":true}]}]}}
    },
    mounted () {
      
    },
    computed: {},
    methods: {
      Goback0Data_GET_CURRENT_DATA () {
    return this.Goback0Data
  },
Goback0click(
) {
this.$router.push({ path: '/route1' });this.$router.push({ path: '/route1' })
},
CtrlFooter1Data_GET_CURRENT_DATA () {
    return this.CtrlFooter1Data
  },
BgCtnItem2Data_GET_CURRENT_DATA () {
    return this.BgCtnItem2Data
  },
BgCtnItem2change(activeItem
) {
this.$refs.CtrlFooterRef0.updateData({ title:activeItem.name,list:activeItem.btns })
}
    }
  }
</script>