
import Mock from 'mockjs'
// import Const from '@/constants/api'

function getData () {
  const arr = []
  let id = 1
  for (let i = 20; i--;) {
    arr.push({
      areaId: id++,
      areaName: '区域' + i,
      modeId: 0,
      planId: 0,
      resolutionX: 0,
      resolutionY: 0
    })
  }

  return arr
}
function getscren () {
  const arr = []
  let id = 1
  for (let i = 3; i--;) {
    arr.push({
      isCurrent: true,
      mac: '',
      modeAreas: getData(),
      modeId: id++,
      modeName: '屏幕' + i
    })
  }

  return arr
}
function setData () {
  return Mock.mock({
    code: 0,
    data: getscren(),
    message: '',
    status: 0,
    success: true
  })
}

const data = setData()

/* const data = {
  [Const.REQCONFIG.RESDATA]: setData(),
  [Const.REQCONFIG.RESCODE]: Const.HTTP.CODE_200,
  [Const.REQCONFIG.RESMSG]: Const.HTTP.MEG_SUCCESS
} */

export default data
