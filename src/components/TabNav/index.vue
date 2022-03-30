<template>
  <div class="common-tab-bar">
    <div class="return"
         @click="goBack">
      返回</div>
    <div class="tab-bar">
      <div class="common-tab-bar-item"
           :class="{'active':index === value}"
           v-for="(item , index) in tabList"
           :key="index"
           @click="changeActive(item , index)">
        {{item.text}}
      </div>
    </div>
    <div class="logo"><img src="@/assets/images/logo.png"
           alt=""></div>
  </div>
</template>

<script>
export default {
  name: 'common-tab-bar',
  components: {},
  data () {
    return {

    }
  },

  props: {
    tabList: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'default'
    },
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
  },
  methods: {
    changeActive (item, index) {
      this.$emit('input', index)
      this.$emit('change', { index, ...item })
    },
    goBack () {
      this.$emit('goBack')
    }
  }

}
</script>

<style lang="scss" scoped>
.common-tab-bar {
  // padding: px2vh(30) px2vw(42);
  padding: 0 60px;
  height: px2vh(110);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  box-sizing: border-box;
  font-size: 0;
  .return {
    padding-left: 30px;
    font-family: PingFangSC-Regular;
    background: url("../../assets/images/back.png") no-repeat left center;
    font-size: 30px;
    color: #596178;
    font-weight: 400;
  }
  .logo {
    img {
      height: px2vh(60);
    }
  }
  .tab-bar {
    display: flex;
    justify-content: center;
    .common-tab-bar-item {
      // margin-left: 40px;
      height: px2vh(110);
      line-height: px2vh(110);
      width: px2vh(164);
      text-align: center;
      font-size: px2vh(30);
      color: #596178;
      &:not(:last-child) {
        margin-right: px2vw(40);
      }
    }
    .active {
      color: #083a94;
      border-bottom: 4px solid #083a94;
    }
  }
}
</style>
