
<template>
<div style="background-image:url(/images/common/0.jpg);background-size:100% 100%;width:100%;height:100%;">
  <div style="position:absolute;width:53.442234848484844vw;height:47.833333333333336vh;left:21.30681818181818vw;top:14.208754208754208vh;">
      <BgCtnItem ref="BgCtnItemRef0" :defaultbackgroundSrc="BgCtnItem0Data.backgroundSrc" :defaultlist="BgCtnItem0Data.list" @change="BgCtnItem0change"></BgCtnItem>
  </div>
<div style="position:absolute;width:104.16666666666667vw;height:27.166666666666668vh;left:-2.0833333333333335vw;top:75.74074074074075vh;">
      <CtrlFooter ref="CtrlFooterRef0" :defaultbackgroundSrc="CtrlFooter1Data.backgroundSrc" :defaulttitlePosition="CtrlFooter1Data.titlePosition" :defaultbtnPosition="CtrlFooter1Data.btnPosition" ></CtrlFooter>
  </div>
<div style="position:absolute;width:7.03125vw;height:4.666666666666667vh;left:2.0833333333333335vw;top:3.3333333333333335vh;">
      <Goback ref="GobackRef0"  @click="Goback2click"></Goback>
  </div>
</div>
</template>
<script>
  import BgCtnItem from '@/components/BgCtnItem'
import CtrlFooter from '@/components/CtrlFooter'
import Goback from '@/components/Goback'

  export default {
    name: '',
    components: { BgCtnItem, CtrlFooter, Goback },
    data () {
      return {"BgCtnItem0Data":{"backgroundSrc":"/images/common/1.jpg","list":[{"x":0,"y":0,"name":"顾明开发","id":164,"key":164,"position":{"x":"23.011363636363633vw","y":"27.12121212121212vh","oriy":325.45454545454544,"orix":441.81818181818176},"active":false,"toggleActive":false,"btns":[{"id":2,"name":"关","src":"/images/common/2.jpg"},{"id":3,"name":"标准","src":"/images/common/3.jpg"}]},{"x":0,"y":0,"name":"sunyh","id":140,"key":140,"position":{"x":"39.48863636363636vw","y":"22.727272727272723vh","oriy":272.7272727272727,"orix":758.1818181818181},"active":false,"toggleActive":true,"btns":[{"id":1,"name":"开","src":"/images/common/4.jpg"},{"id":2,"name":"关","src":"/images/common/5.jpg"}]}]},"CtrlFooter1Data":{"backgroundSrc":"/images/common/6.jpg","titlePosition":{"position":{"orix":300,"oriy":57.77777777777778,"x":"15.625vw","y":"4.814814814814815vh"}},"btnPosition":{"position":{"orix":286.6666666666667,"oriy":204.44444444444443,"x":"14.930555555555555vw","y":"17.037037037037035vh"}}},"Goback2Data":{}}
    },
    mounted () {
      
    },
    computed: {},
    methods: {
      BgCtnItem0Data_GET_CURRENT_DATA () {
    return this.BgCtnItem0Data
  },
BgCtnItem0change(activeItem
) {
this.$refs.CtrlFooterRef0.updateData({ title:activeItem.name,list:activeItem.btns })
},
CtrlFooter1Data_GET_CURRENT_DATA () {
    return this.CtrlFooter1Data
  },
Goback2Data_GET_CURRENT_DATA () {
    return this.Goback2Data
  },
Goback2click(
) {
this.$router.push({ path: '/' })
}
    }
  }
</script>