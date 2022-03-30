<template>
  <div class="co-warp">
    <co-not-found :imgParams="imgParams"
                  :textParams="textParams"
                  :btnParams="btnParams">
    </co-not-found>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      imgParams: {
        url: '/images/404.png',
        width: 445,
        height: 241
      },
      textParams: {
        title: '404',
        titleStyle: '',
        desc: 'This page is misssin',
        descStyle: ''
      },
      btnParams: {
        type: 'primary',
        size: 'lg',
        line: false,
        text: false,
        radius: false,
        disable: false,
        icon: '',
        // btnTitle: localStorage.getItem('roleType') === '7' ? '返回设备管理' : '返回首页',
        // toName: localStorage.getItem('roleType') === '7' ? '/tacmp-pmp/equipment' : '/tacmp/home'
        btnTitle: '返回重新登录',
        toName: '/sign-in'
      }
    }
  },
  created () {

  },
  mounted () {
    // this.btnTitle = localStorage.getItem('roleType') === '7'?'返回':
  },
  computed: {

  },
  methods: {
    toHome () {
      // this.$router.push({
      //   name: '/tacmp/home'
      // })

    }
  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
.co-warp {
  margin-top: 20%;
}
</style>
