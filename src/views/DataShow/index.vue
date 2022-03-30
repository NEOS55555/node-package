<template>
  <div>
    <Header />

    <div class="container">
      <Goback @click="goback"/>
      <div class="top-ctn">
        <Tab :list="tabList" @change="tabChange" className="normal"></Tab>
        <div class="select-list" v-show="showKey==='inter'">
          <el-select v-model="dateType" placeholder="请选择" popper-class="top-select-week" style="width: 240px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>

      <InterPage :dateType="dateType" v-if="showKey==='inter'"></InterPage>
      <HellPage  v-else-if="showKey==='hell'"></HellPage>
      <TrailPage v-else></TrailPage>
    </div>
  </div>

</template>

<script>
import Goback from '@/components/Goback'
import Header from '@/components/Header'
import Tab from '@/components/Tab'
import InterPage from './InterPage'
import HellPage from './HellPage'
import TrailPage from './TrailPage'

export default {
  name: '',
  components: { Goback, Tab, Header, InterPage, HellPage, TrailPage },
  data () {
    return {
      tabList: [
        {
          key: 'inter',
          name: '交互数据',
          active: true
        },
        /* {
          key: 'trail',
          name: '轨迹追踪',
          active: false
        }, */
        {
          key: 'hell',
          name: '厅堂数据',
          active: false
        }
      ],
      showKey: 'inter',
      options: [
        {
          value: 'week',
          label: '周'
        },
        {
          value: 'month',
          label: '月'
        },
        {
          value: 'year',
          label: '年'
        }
      ],
      dateType: 'week'
    }
  },
  created () {
  },
  mounted () {},
  computed: {},
  methods: {
    tabChange (item) {
      this.showKey = item.key
      console.log(item.key)
    },
    goback () {
      this.$router.push({ path: '/index' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index";
</style>
<style lang="scss" >
.top-select-week {
  background-color: #00112E;
  .el-select-dropdown__item {
    font-size: px2vw(28);
    height: px2vh(60);
    line-height: px2vh(60);
    color: #fff;
  }
  .el-select-dropdown__item.selected {
    background-color: #706464;
  }
}
.data-show-container {
  .line {
    display: flex;
    justify-content: center;
    // justify-content: space-between;
    .data-show-box:first-child {
      margin-right: px2vw(20);
    }
    &:first-child {
      margin-bottom: px2vw(20);
    }
  }
}
</style>
