
<template>
<div style="background-image:url(/images/common/1.jpg);background-size:100% 100%;width:100%;height:100%;">
  <div style="position:absolute;width:7.03125vw;height:4.666666666666667vh;left:2.0833333333333335vw;top:3.3333333333333335vh;">
      <Goback ref="GobackRef0"  @click="Goback0click"></Goback>
  </div>
<div style="position:absolute;width:43.40277777777778vw;height:31.666666666666668vh;left:53.125vw;top:7.083333333333333vh;">
      <LightBgItem ref="LightBgItemRef0" :defaultbackgroundSrc="LightBgItem1Data.backgroundSrc" :defaultactiveBackgroundSrc="LightBgItem1Data.activeBackgroundSrc" :defaultisActive="LightBgItem1Data.isActive" :defaultareaId="LightBgItem1Data.areaId" :defaultareaName="LightBgItem1Data.areaName" :defaultbtns="LightBgItem1Data.btns" :defaultpoint="LightBgItem1Data.point" @click="LightBgItem1click"></LightBgItem>
  </div>
<div style="position:absolute;width:92.5925925925926vw;height:27.166666666666668vh;left:3.4722222222222223vw;top:71.66666666666667vh;">
      <CtrlFooter ref="CtrlFooterRef0" :defaulttitlePosition="CtrlFooter2Data.titlePosition" :defaultbtnPosition="CtrlFooter2Data.btnPosition" ></CtrlFooter>
  </div>
<div style="position:absolute;width:20.833333333333332vw;height:27.166666666666668vh;left:19.097222222222225vw;top:24.074074074074073vh;">
      <BgCtnItem ref="BgCtnItemRef0" :defaultlist="BgCtnItem3Data.list" ></BgCtnItem>
  </div>
</div>
</template>
<script>
  import Goback from '@/components/Goback'
import LightBgItem from '@/components/LightBgItem'
import CtrlFooter from '@/components/CtrlFooter'
import BgCtnItem from '@/components/BgCtnItem'

  export default {
    name: '',
    components: { Goback, LightBgItem, CtrlFooter, BgCtnItem },
    data () {
      return {"Goback0Data":{},"LightBgItem1Data":{"backgroundSrc":"/images/common/2.jpg","activeBackgroundSrc":"/images/common/3.jpg","isActive":true,"areaId":"3","areaName":"区域3","btns":[{"id":1,"name":"开","src":"/images/common/4.jpg","active":true,"toggleActive":true},{"id":2,"name":"关","src":"/images/common/5.jpg","toggleActive":true,"active":true},{"id":3,"name":"标准","src":"/images/common/6.jpg","active":true}],"point":{"position":{"x":"22.743055555555554vw","y":"21.73611111111111vh","orix":436.66666666666663,"oriy":260.8333333333333}}},"CtrlFooter2Data":{"titlePosition":{"position":{"orix":300,"oriy":31.11111111111111,"x":"15.625vw","y":"2.5925925925925926vh"}},"btnPosition":{"position":{"orix":211.11111111111111,"oriy":200,"x":"10.995370370370372vw","y":"16.666666666666668vh"}}},"BgCtnItem3Data":{"list":[{"id":1,"name":"设备1","key":1,"x":0,"y":0,"position":{"x":"1.3888888888888888vw","y":"0.5555555555555555vh","oriy":6.666666666666666,"orix":26.666666666666664},"active":false,"toggleActive":true},{"id":2,"name":"设备2","key":2,"x":0,"y":0,"position":{"x":"12.152777777777777vw","y":"-0.9259259259259259vh","oriy":-11.11111111111111,"orix":233.33333333333331},"active":false,"toggleActive":false},{"id":3,"name":"设备3","key":3,"x":0,"y":0,"position":{"x":"8.564814814814813vw","y":"13.148148148148147vh","oriy":157.77777777777777,"orix":164.44444444444443},"active":false,"toggleActive":true}]}}
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
this.$router.push({ path: '/route1' })
},
LightBgItem1Data_GET_CURRENT_DATA () {
    return this.LightBgItem1Data
  },
LightBgItem1click(activeItem
) {
this.$refs.LightBgItemRef0.highlight();this.$refs.CtrlFooterRef0.updateData({ title:activeItem.areaName,list:activeItem.btns });this.$refs.CtrlFooterRef0.updateData({ title:activeItem.areaName,list:activeItem.btns })
},
CtrlFooter2Data_GET_CURRENT_DATA () {
    return this.CtrlFooter2Data
  },
BgCtnItem3Data_GET_CURRENT_DATA () {
    return this.BgCtnItem3Data
  }
    }
  }
</script>