<template>
<div class="hall-container">
  <div class="hall-wrapper">
    <div class="hall-ctn" v-for="it in list" :key="it.key">
      <img class="icon"
        :src="$const.resourceUrl + 'images/dataShow/'+it.img+'.png'"
        alt="">
      <div class="count-text">
        <div class="count-txt-title">{{it.title}}</div>
        <div class="count-txt-count"><span class="count">{{it.val}}</span>人等待</div>
        <!-- <div>{{JSON.stringify(res)}}</div> -->
      </div>

    </div>
  </div>
</div>

</template>

<script>
// import equConfig from '../zoneControl/comp/equip/config'

const imgmap = {
  对公现金业务: 'show-service3',
  对公非现金业务: 'show-service4',
  个人业务: 'show-service3',
  个人贵宾业务: 'show-service3',
  交付业务: 'show-service1',
  贵宾交付业务: 'show-service1',
  远程银行体验仓: 'show-service2'
}

export default {
  props: {
    dateType: String
  },
  data () {
    return {
      timmer: null,
      list: [
        {
          key: 'show-service1',
          val: 0,
          title: '智能交付站'
        },
        {
          key: 'show-service2',
          val: 10,
          title: '沉浸式远程银行'
        },
        {
          key: 'show-service3',
          val: 20,
          title: '现金业务'
        },
        {
          key: 'show-service4',
          val: 0,
          title: '非现金业务'
        },
        {
          key: 'show-service5',
          val: 0,
          title: '非现金业务2'
        }
      ]
    }
  },
  created () {
    // week\month\year
    this.getData()
    this.$util.evtLoop.pushEvt(this.getData)
    /* this.timmer = setInterval(() => {
      this.getData()
    }, this.$const.DATA_REFRESH_TIME) */
  },
  watch: {
    dateType (a) {
      console.log(a)
      // this.getData(a)
    }
  },
  mounted () {},
  computed: {},
  beforeDestroy () {
    // clearInterval(this.timmer)
    this.$util.evtLoop.popEvt()
  },
  methods: {
    getData (dateType = 'week') {
      console.log(dateType)
      return new Promise(resolve => {
        this.$util.sendAjax({
          url: this.$apiList.bussqueue.path,
          data: {
          // dateType
          }
        }, (res = {}) => {
          /* res.resultData = {
            data: [
              {
                strSign: 'E',
                enName: 'dgfxj',
                waitNum: '2',
                serviceId: 'x1',
                serviceName: '对公非现金'
              },
              {
                strSign: 'D',
                enName: 'grgbyw',
                waitNum: '5',
                serviceId: 'x2',
                serviceName: '个人贵宾业务'
              }
            ]
          } */
          this.list = (res.resultData.data || []).map((it, idx) => ({
            key: 'show-service' + (idx + 1),
            img: imgmap[it.serviceName] || 'show-service3',
            val: it.waitNum,
            title: it.serviceName
          }))
          resolve(res)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
