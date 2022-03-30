<template>
  <div class="header">
    <img class="logo"
         :src="$const.resourceUrl + 'images/home/logo.png'" />
    <img class="logo-name"
         :src="$const.resourceUrl + 'images/home/logo-name1.png'" />
    <!-- <span class="logout-btn"
          @click="logout">
      <img :src="$const.resourceUrl + 'images/signin/logout.png'" />
      退出
    </span> -->
  </div>
</template>

<script>
import tokenUtils from '../../utils/cookieToken'

export default {
  methods: {
    logout () {
      tokenUtils.clearCookieSelf('token')
      this.$api.send(this.$apiList.logout, {}).then(() => {
        this.$router.push({ path: '/sign-in' })
      })
    }
  }
}
</script>

<style lang='scss' >
@import "./index";
</style>
