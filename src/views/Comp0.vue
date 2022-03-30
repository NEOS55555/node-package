
<template>
<div style="background-image:url();background-size:100% 100%;width:100%;height:100%;">
  <div style="position:absolute;width:99.0625vw;height:27.5vh;left:0.28409090909090906vw;top:72.42424242424241vh;">
      <CtrlFooter ref="CtrlFooterRef0" :defaultbackgroundSrc="CtrlFooter0Data.backgroundSrc" :defaulttitlePosition="CtrlFooter0Data.titlePosition" :defaultbtnPosition="CtrlFooter0Data.btnPosition" ></CtrlFooter>
  </div>
</div>
</template>
<script>
  import CtrlFooter from '@/components/CtrlFooter'

  export default {
    name: '',
    components: { CtrlFooter },
    data () {
      return {"CtrlFooter0Data":{"backgroundSrc":"/images/common/0.jpg","titlePosition":{"position":{"orix":300,"oriy":20,"x":"15.625vw","y":"1.6666666666666667vh"}},"btnPosition":{"position":{"orix":300,"oriy":20,"x":"15.625vw","y":"1.6666666666666667vh"}}}}
    },
    mounted () {
      
    },
    computed: {},
    methods: {
      CtrlFooter0Data_GET_CURRENT_DATA () {
    return this.CtrlFooter0Data
  }
    }
  }
</script>