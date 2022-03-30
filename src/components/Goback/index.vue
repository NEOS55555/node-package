<template>
  <div class="common-tab-bar">
    <div class="return"
         @click="goBack">
         <i class="el-icon-arrow-left"></i>
      返回</div>
  </div>
</template>

<script>
export default {
  name: 'common-tab-bar',
  components: {},
  methods: {
    goBack () {
      this.$emit('click')
    }
  }

}
</script>

<style lang="scss" scoped>
.common-tab-bar {
  // padding: px2vh(30) px2vw(42);
  // position: absolute;
  // top: 0;
  // left: px2vw(40);
  // padding: 0 60px;
  height: px2vh(110);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  font-size: 0;
  .return {
    // padding-left: 30px;
    font-family: PingFangSC-Regular;
    // background: url("../../assets/images/back.png") no-repeat left center;
    font-size: 30px;
    color: #fff;
    font-weight: 400;
  }
}
</style>
