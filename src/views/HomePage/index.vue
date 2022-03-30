<template>
  <div class="container">
    <div class="content">
      <div class="home-page-ctn" @click="goIdx">
        <img :src="$const.resourceUrl + 'images/home/logobg.png'" alt="">
      </div>
    </div>

  </div>
</template>

<script>
// import equConfig from '../zoneControl/comp/equip/config'

export default {
  name: '',
  data () {
    return {
      timmer: null
    }
  },
  created () {
  },
  mounted () {
    this.timmer = setTimeout(() => {
      this.goIdx()
    }, 2000)
  },
  computed: {},
  beforeDestroy () {
    clearTimeout(this.timmer)
  },
  methods: {
    goIdx () {
      clearTimeout(this.timmer)
      this.$router.push({ path: '/index' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
