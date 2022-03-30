<template>
  <div class="home-page">
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
    // this.$util.wsSend('hello world')
  },
  watch: {
    $route(to, from) {
      this.init(to);
    },
  },
  computed: {},
  mounted() {
    this.init(this.$route);
  },
  methods: {
    init(to) {
      // 是否需要登录权限
      if (to.meta.auth) {
        // 是否有token
        if (!this.token) {
          // this.$router.push({ path: '/sign-in' })
        } else {
          // const funcItem = this.funcItems[to.name]
          // this.$store.commit('Auth/setActiveFuncItem', funcItem)
        }
      }
    },
  },
  // components: { Header }
};
</script>

<style lang="scss">
@import "@/assets/style/style.scss";
/* .home-page {
  // background: url($resource-url+'images/home/bg.png');
  background: url("../public/images/home/bg.png");
} */
</style>
