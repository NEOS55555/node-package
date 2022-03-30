import utils from '@/utils'
import $const from '@/constants'
let count = 0
const getGbtns = () => {
  return [
    {
      name: '开',
      key: 'all-on',
      group: 'opn',
      active: false,
      command: 'HOST_ON_CMD'
    },
    {
      name: '关',
      key: 'all-off',
      group: 'opn',
      active: false,
      command: 'HOST_OFF_CMD'
    }
  ]
}

const getVoiceBtns = () => [
  getBtnItem('增加', 'voice-add', {
    group: 'opn',
    command: 'VOLUME_UP_CMD'
    // command: 'VOICEUP'
  }),
  getBtnItem('降低', 'voice-sub', {
    group: 'opn',
    command: 'VOLUME_DOWN_CMD'
    // command: 'VOICEDOWN'
  })
]

const getComBtns = () => [...getGbtns(), ...getVoiceBtns()]

function getItem (name, x, y, obj = {}) {
  return {
    key: count++,
    name: name,
    active: false,
    x: utils.px2vw(x),
    y: utils.px2vh(y),
    ...obj
  }
}

function getBtnItem (name, key, obj = {}) {
  return {
    name,
    key,
    group: 'mdeChge',
    active: false,
    ...obj
  }
}

const sinalbtn = getBtnItem('信号源切换', 'btn-signal', {
  group: 'signal',
  command: 'SWITCH_SIGNAL_CMD'
})
const contentbtn = getBtnItem('内容切换', 'btn-content-change', {
  modalType: 'mater-content'
})
const getPlaybtn = () =>
  getBtnItem('播放', 'btn-play', {
    group: 'play-screen',
    toggleKey: 'voice-add',
    toggleName: '暂停',
    toggleActive: false,
    command: 'PAUSE_CMD'
  })
function getshowArrMap () {
  const showArrMap = {
    test: {
      bgSrc: $const.resourceUrl + 'images/point/zoom1.png',
      maxWidth: utils.px2vw(1024),
      showArr: [
        getItem('沉浸式体验', 120, 143, {
          btns: [...getComBtns(), { ...contentbtn, modalType: 'chenjin-content' }],
          active: true
        }),
        getItem('升降摄像头', 256, 332, {
          btns: [...getGbtns(), getPlaybtn()]
        }),
        getItem('电动遮光帘', 663, 143, {
          btns: [...getGbtns(), getPlaybtn()]
        }),
        getItem('虚拟仿真', 842, 311, {
          btns: [...getComBtns(), sinalbtn, contentbtn]
        }),
        getItem('互动体验', 665, 455, {
          btns: [...getComBtns(), sinalbtn, contentbtn]
        })
      ]
    },
    zhanting: {
      bgSrc: $const.resourceUrl + 'images/point/zoom2.png',
      maxWidth: utils.px2vw(1324),
      showArr: [
        getItem('风格实验室', 322, 106, {
          btns: [...getComBtns(), sinalbtn],
          active: true
        }),
        getItem('大数据实验室', 672, 106, {
          btns: [...getComBtns(), sinalbtn]
        }),
        getItem('战略经济实验室', 1056, 106, {
          btns: [...getComBtns(), sinalbtn]
        }),
        getItem('金融科技实验室', 1122, 294, {
          btns: getComBtns()
        }),

        getItem('互动屏', 826, 294, {
          btns: getComBtns()
        }),
        getItem('虚拟仿真实验室', 978, 511, {
          btns: getComBtns()
        }),

        getItem('VR金融体验场景', 633, 473, {
          btns: getComBtns()
        }),
        getItem('智能决策实验室', 297, 507, {
          btns: [...getComBtns(), sinalbtn]
        })
      ]
    },
    meet: {
      bgSrc: $const.resourceUrl + 'images/point/zoom3.png',
      maxWidth: utils.px2vw(422),
      showArr: [
        getItem('滑轨屏', 238, 73, {
          btns: getGbtns(),
          active: true
        }),
        getItem('调光玻璃', 274, 280, {
          btns: getGbtns()
        }),
        getItem('会议白板', 116, 516, {
          btns: [...getComBtns(), sinalbtn]
        })
      ]
    }
  }
  console.log('showArrMap,', showArrMap)
  return showArrMap
}
export { getItem, getBtnItem, getGbtns, getshowArrMap }
