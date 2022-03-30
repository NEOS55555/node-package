
import Mock from 'mockjs'
// import Const from '@/constants/api'

function getData () {
  const arr = []
  let id = 1
  for (let i = 20; i--;) {
    arr.push({
      id: id++,
      isLoop: true,
      isPause: true,
      title: '节目' + i
    })
  }

  return arr
}
function setData () {
  return Mock.mock({
    code: 0,
    data: getData(),
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
