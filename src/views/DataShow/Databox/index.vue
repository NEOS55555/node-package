<template>
  <div :class="'data-show-box ' + dir ">
    <div class="title">{{title}}</div>
    <div class="data-ctn">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import equConfig from '../zoneControl/comp/equip/config'

export default {
  props: {
    dir: String,
    title: String
  },
  data () {
    return {
      areaList: []
    }
  },
  created () {
  },
  mounted () {},
  computed: {},
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
