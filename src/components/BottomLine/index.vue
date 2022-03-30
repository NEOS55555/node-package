<template>

  <div class="bottom-line-wrapper">
    <span v-for="i in lineCount" :key="i">
      <span class="circle"></span>
      <span class="line"></span>
    </span>
    <span class="circle"></span>
  </div>
</template>

<script>

export default {
  name: '',
  props: {
    lineCount: Number
  },

  created () {

  },
  mounted () {
    // this.getmenuList()
  },
  computed: {

  },
  methods: {

  }

}
</script>

<style lang='scss' scoped>
@import "./index";
</style>
