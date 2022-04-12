
<template>
<div style="background-image:url(/images/common/7.jpg);background-size:100% 100%;width:100%;height:100%;">
  <div style="position:absolute;width:13.793816137566127vw;height:6.833333333333333vh;left:71.01934523809521vw;top:1.75vh;">
      <TabItem ref="TabItemRef0" :defaultisActive="TabItem0Data.isActive" :defaultisLeftRadius="TabItem0Data.isLeftRadius" :defaultname="TabItem0Data.name" @click="TabItem0click"></TabItem>
  </div>
<div style="position:absolute;width:13.928571428571415vw;height:7.309523809523809vh;left:84.22619047619044vw;top:1.75vh;">
      <TabItem ref="TabItemRef1" :defaultisRightRadius="TabItem1Data.isRightRadius" :defaultname="TabItem1Data.name" @click="TabItem1click"></TabItem>
  </div>
<div style="position:absolute;width:31.696428571428548vw;height:34.54761904761903vh;left:24.99999999999999vw;top:20.83333333333337vh;">
      <BgCtnItem ref="BgCtnItemRef0" :defaultlist="BgCtnItem2Data.list" @change="BgCtnItem2change"></BgCtnItem>
  </div>
<div style="position:absolute;width:84.52380952380939vw;height:27.166666666666668vh;left:7.73809523809522vw;top:72.14285714285698vh;">
      <CtrlFooter ref="CtrlFooterRef0" :defaulttitlePosition="CtrlFooter3Data.titlePosition" :defaultbtnPosition="CtrlFooter3Data.btnPosition" ></CtrlFooter>
  </div>
<div style="position:absolute;width:20.833333333333332vw;height:27.166666666666668vh;left:68.61979166666667vw;top:15.625vh;">
      <BasicComp ref="BasicCompRef0" :defaulttitle="BasicComp4Data.title" :defaultfontSize="BasicComp4Data.fontSize" :defaultfontColor="BasicComp4Data.fontColor" ></BasicComp>
  </div>
</div>
</template>
<script>
  import TabItem from '@/components/TabItem'
import BgCtnItem from '@/components/BgCtnItem'
import CtrlFooter from '@/components/CtrlFooter'
import BasicComp from '@/components/BasicComp'

  export default {
    name: '',
    components: { TabItem, BgCtnItem, CtrlFooter, BasicComp },
    data () {
      return {"TabItem0Data":{"isActive":true,"isLeftRadius":true,"name":"1231231asdf"},"TabItem1Data":{"isRightRadius":true,"name":"sfsfd123123"},"BgCtnItem2Data":{"list":[{"x":0,"y":0,"name":"test111","id":157,"key":157,"position":{"x":"6.84523809523808vw","y":"0.9523809523809501vh","oriy":11.428571428571402,"orix":131.42857142857113},"active":false,"toggleActive":true,"btns":[{"id":13,"name":"参数","mark":"btn-parm","backgroundSrc":"/images/common/8.jpg","activeBackgroundSrc":"/images/common/9.jpg","isDiyEvt":0,"ajaxUrl":"/abc/def","ajaxType":"post","ajaxParams":"{\"deviceId\": \"$parentId\"}","remark":"这个一个参数按钮，测试用的","key":13,"parentId":157}]},{"x":0,"y":0,"name":"sunyh","id":140,"key":140,"position":{"x":"5.654761904761892vw","y":"15.47619047619044vh","oriy":185.7142857142853,"orix":108.57142857142831},"active":false,"toggleActive":false},{"x":0,"y":0,"name":"Huang测试Windows","id":106,"key":106,"position":{"x":"15.773809523809486vw","y":"1.9047619047619002vh","oriy":22.857142857142804,"orix":302.85714285714215},"active":false,"toggleActive":false},{"x":0,"y":0,"name":"43寸会议白板","id":112,"key":112,"position":{"x":"15.327380952380915vw","y":"14.999999999999964vh","oriy":179.99999999999957,"orix":294.2857142857136},"active":false,"toggleActive":true,"btns":[{"id":12,"name":"客户","mark":"custom","backgroundSrc":"/images/common/10.jpg","activeBackgroundSrc":"/images/common/11.jpg","isDiyEvt":1,"ajaxUrl":"","ajaxType":"","ajaxParams":"","remark":"","key":12,"active":false,"toggleActive":true,"parentId":112},{"id":11,"name":"关","mark":"off","backgroundSrc":"/images/common/12.jpg","activeBackgroundSrc":"/images/common/13.jpg","isDiyEvt":0,"ajaxUrl":"/a","ajaxType":"post","ajaxParams":"a","remark":"","key":11,"active":false,"toggleActive":true,"parentId":112},{"id":10,"name":"开","mark":"on","backgroundSrc":"/images/common/14.jpg","activeBackgroundSrc":"/images/common/15.jpg","isDiyEvt":0,"ajaxUrl":"/abc","ajaxType":"post","ajaxParams":"false","remark":"开关按钮","key":10,"parentId":112}]}]},"CtrlFooter3Data":{"titlePosition":{"position":{"orix":305.7142857142857,"oriy":31.428571428571402,"x":"15.922619047619047vw","y":"2.619047619047617vh"}},"btnPosition":{"position":{"orix":291.42857142857144,"oriy":199.99999999999957,"x":"15.178571428571429vw","y":"16.66666666666663vh"}}},"BasicComp4Data":{"title":"wod","fontSize":36,"fontColor":"#ffffff"}}
    },
    mounted () {
      
    },
    computed: {},
    methods: {
      TabItem0Data_GET_CURRENT_DATA () {
    return this.TabItem0Data
  },
TabItem0click(
) {
this.$router.push({ path: '/route2' })
},
TabItem1Data_GET_CURRENT_DATA () {
    return this.TabItem1Data
  },
TabItem1click(
) {

},
BgCtnItem2Data_GET_CURRENT_DATA () {
    return this.BgCtnItem2Data
  },
BgCtnItem2change(activeItem
) {
this.$refs.CtrlFooterRef0.updateData({ title:activeItem.name,list:activeItem.btns })
},
CtrlFooter3Data_GET_CURRENT_DATA () {
    return this.CtrlFooter3Data
  },
BasicComp4Data_GET_CURRENT_DATA () {
    return this.BasicComp4Data
  }
    }
  }
</script>