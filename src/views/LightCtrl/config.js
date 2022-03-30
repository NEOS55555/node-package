import utils from '@/utils'
// import biz from '../../constants/biz'

const { setStateAndFirstActive, px2vw, getAreaList } = utils
const lightBtnsArr = [
  {
    name: '开灯',
    key: 'light-on',
    group: 'light',
    active: false,
    command: 'LIGHT_ON_CMD'
  },
  {
    name: '关灯',
    key: 'light-off',
    group: 'light',
    active: false,
    command: 'LIGHT_OFF_CMD'
  },
  // 1312321
  {
    name: '亮度+',
    key: 'lg-add',
    group: 'light',
    active: false,
    command: 'BRIGHTNESS_UP_CMD'
  },
  {
    name: '亮度-',
    key: 'lg-sub',
    group: 'light',
    active: false,
    command: 'BRIGHTNESS_DOWN_CMD'
  },
  {
    name: '暖光',
    key: 'lg-hot',
    group: 'light',
    active: false,
    command: 'LIGHT_WARM_CMD'
  },
  {
    name: '冷光',
    key: 'lg-cold',
    group: 'light',
    active: false,
    command: 'LIGHT_COLD_CMD'
  },
  {
    name: '标准',
    key: 'lg-standard',
    group: 'light',
    active: false,
    command: 'LIGHT_STANDARD_CMD'
  }
]

export function getShowArr () {
  const size = 0.7
  const topMar = -50
  // $util.
  return getAreaList().then(res => {
    const list = res

    const showArr = [

      {
        name: '实验室',
        active: false,
        areaId: list[0].areaId,
        key: 1,
        showKey: 'test',
        btns: lightBtnsArr,
        x: px2vw(452),
        y: px2vw(80 + topMar),
        w: px2vw(1559 * size),
        point: {
          x: px2vw(480),
          y: px2vw(100)
        }

      },
      {
        name: '展厅',
        active: false,
        areaId: list[1].areaId,
        // disabled: true,
        key: 2,
        showKey: 'zhanting',
        btns: lightBtnsArr,
        x: px2vw(419),
        y: px2vw(442 + topMar),
        w: px2vw(1315 * size),
        point: {
          x: px2vw(400),
          y: px2vw(100)
        }
      },
      {
        name: '会议室',
        active: false,
        areaId: list[2].areaId,
        // disabled: true,
        key: 3,
        showKey: 'meet',
        btns: lightBtnsArr,
        x: px2vw(0),
        y: px2vw(300 + topMar),
        w: px2vw(901 * size),
        point: {
          x: px2vw(300),
          y: px2vw(80)
        }
      }

    ]
    // console.log('showArr,', showArr)
    setStateAndFirstActive(showArr)
    return showArr
  })
}

export {
  lightBtnsArr
}
