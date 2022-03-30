import utils from '@/utils'
import $const from '@/constants'
import { lightBtnsArr } from '../LightCtrl/config'
let count = 0

const getGbtns = () => {
  return [
    {
      name: '开',
      key: 'all-on',
      group: 'opn',
      active: false,
      command: 'ON'
    },
    {
      name: '关',
      key: 'all-off',
      group: 'opn',
      active: false,
      command: 'OFF'
    }
  ]
}

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
// 人多 1 人少 2 理财 3  保管箱 4

function getshowArrMap () {
  const showArrMap = {
    test: {
      bgSrc: $const.resourceUrl + 'images/point/light-zoom1.png',
      maxWidth: utils.px2vw(1559),
      showArr: [
        getItem('灯光1', 272, 129, {
          id: 1,
          btns: [
            ...lightBtnsArr
          ],
          active: true
        }),
        getItem('灯光2', 534, 129, {
          btns: [
            ...lightBtnsArr
          ]
        }),
        getItem('灯光3', 711, 289, {
          btns: [
            ...lightBtnsArr
          ]
        }),
        getItem('灯光4', 979, 258, {
          btns: [
            ...lightBtnsArr
          ]
        }),
        getItem('灯光5', 1218, 278, {
          btns: [
            ...lightBtnsArr
          ]
        })

      ]
    },
    zhanting: {
      bgSrc: $const.resourceUrl + 'images/point/light-zoom2.png',
      maxWidth: utils.px2vw(1315),
      showArr: [
        getItem('灯光6', 312, 183, {
          btns: [
            ...lightBtnsArr
          ],
          active: true
        }),
        getItem('灯光7', 623, 202, {
          btns: [
            ...lightBtnsArr
          ]
        }),
        getItem('灯光8', 838, 337, {
          btns: [
            ...lightBtnsArr
          ]
        }),
        getItem('灯光9', 1084, 246, {
          btns: [
            ...lightBtnsArr
          ]
        })
      ]
    },
    meet: {
      bgSrc: $const.resourceUrl + 'images/point/light-zoom3.png',
      maxWidth: utils.px2vw(901),
      showArr: [
        getItem('灯光10', 138, 229, {
          btns: [
            ...lightBtnsArr
          ],
          active: true
        }),
        getItem('灯光11', 326, 129, {
          btns: [
            ...lightBtnsArr
          ]
        }),
        getItem('灯光12', 536, 171, {
          btns: [
            ...lightBtnsArr
          ]
        }),
        getItem('灯光13', 669, 67, {
          btns: [
            ...lightBtnsArr
          ]
        })

      ]
    }
  }
  console.log('showArrMap,', showArrMap)
  return showArrMap
}
export { getItem, getBtnItem, getGbtns, getshowArrMap }
