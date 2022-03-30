
<template>
<div>
  <div class="horizontally-center" style="position:absolute;top:0;">
    <div class="inner-item" style="width:100%">
      <Header ref="HeaderRef"  ></Header>
    </div>
  </div>
<div class="" style="position:absolute;left:20px;top:20px;">
    <div class="inner-item" style="width:auto">
      <Goback ref="GobackRef"  @click="Goback1click"></Goback>
    </div>
  </div>
<div class="" style="position:absolute;right:20px;top:30px;">
    <div class="inner-item" style="width:auto">
      <Tab ref="TabRef" :isEmitChangeOnInit="true" :defaultList="Tab2Data.list" :defaultKey="Tab2Data.defaultKey" @change="Tab2change"></Tab>
    </div>
  </div>
<div class="horizontally-center" style="position:absolute;top:150px;">
    <div class="inner-item" style="width:auto">
      <BgCtnItem ref="BgCtnItemRef" :isEmitChangeOnInit="true" @change="BgCtnItem3change"></BgCtnItem>
    </div>
  </div>
<div class="horizontally-center" style="position:absolute;bottom:0;">
    <div class="inner-item" style="width:auto">
      <CtrlFooter ref="CtrlFooterRef" :defaultBgSrc="'/images/controlArea/bg2.png'" @change="CtrlFooter4change"></CtrlFooter>
    </div>
  </div>
</div>
</template>
<script>
  import Header from '@/components/Header'
import Goback from '@/components/Goback'
import Tab from '@/components/Tab'
import BgCtnItem from '@/components/BgCtnItem'
import CtrlFooter from '@/components/CtrlFooter'

  export default {
    name: '',
    components: { Header, Goback, Tab, BgCtnItem, CtrlFooter },
    data () {
      return {"Tab2Data":{"defaultKey":"test","list":[{"key":"test","name":"实验室","bgCtnData":{"bgSrc":"/images/point/zoom1.png","maxWidth":1024,"list":[{"key":1,"name":"沉浸式体验","x":120,"y":143,"btns":[{"name":"开","key":1,"group":"mdeChge","src":"/images/controlArea/all-on.png","active":false},{"name":"关","key":2,"group":"mdeChge","src":"/images/controlArea/all-off.png","active":false}]},{"key":2,"name":"沉浸式体验2","x":220,"y":243,"btns":[{"name":"播放","key":1,"group":"mdeChge","src":"/images/controlArea/btn-play.png","active":false},{"name":"信号","key":2,"group":"mdeChge","src":"/images/controlArea/btn-signal.png","active":false}]}]}},{"key":"zhanting","name":"展厅","bgCtnData":{"bgSrc":"/images/point/zoom2.png","maxWidth":1024,"list":[{"key":1,"name":"展厅123","x":120,"y":143,"btns":[{"name":"开","key":1,"group":"mdeChge","src":"/images/controlArea/all-on.png","active":false},{"name":"关","key":2,"group":"mdeChge","src":"/images/controlArea/all-off.png","active":false}]},{"key":2,"name":"展厅","x":220,"y":243,"btns":[{"name":"播放","key":1,"group":"mdeChge","src":"/images/controlArea/btn-play.png","active":false},{"name":"信号","key":2,"group":"mdeChge","src":"/images/controlArea/btn-signal.png","active":false}]}]}},{"key":"meet","name":"会议室","bgCtnData":{"bgSrc":"/images/point/zoom3.png","maxWidth":"auto","list":[{"key":1,"name":"会议室","x":120,"y":143,"btns":[{"name":"开","key":1,"group":"mdeChge","src":"/images/controlArea/all-on.png","active":false},{"name":"关","key":2,"group":"mdeChge","src":"/images/controlArea/all-off.png","active":false}]},{"key":2,"name":"会议室2","x":220,"y":243,"btns":[{"name":"播放","key":1,"group":"mdeChge","src":"/images/controlArea/btn-play.png","active":false},{"name":"信号","key":2,"group":"mdeChge","src":"/images/controlArea/btn-signal.png","active":false}]}]}}]},"BgCtnItem3Data":{"showKey":"abc"}}
    },
    mounted () {
      
    },
    computed: {},
    methods: {
      Header0Data_GET_CURRENT_DATA () {
    return this.Header0Data
  },
Goback1Data_GET_CURRENT_DATA () {
    return this.Goback1Data
  },
Goback1click(
) {
this.$router.push({ path: '/index' })
},
Tab2Data_GET_CURRENT_DATA () {
    return this.Tab2Data
  },
Tab2change(item,abc
) {
console.log(item);this.$refs.BgCtnItemRef.updateData({ ...item.bgCtnData })
},
BgCtnItem3Data_GET_CURRENT_DATA () {
    return this.BgCtnItem3Data
  },
BgCtnItem3change(item
) {
this.$refs.CtrlFooterRef.updateData({
        title: item.name,
        list: item.btns,
      })
      // this.BgCtnItem.list
      console.log('fff', item)
},
CtrlFooter4Data_GET_CURRENT_DATA () {
    return this.CtrlFooter4Data
  },
CtrlFooter4change(item
) {
console.log('fff', item)
}
    }
  }
</script>