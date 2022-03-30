
import Mock from 'mockjs'
// import Const from '@/constants/api'
function rand () {
  return Math.floor(Math.random() * 10 + 5)
}

function getData () {
  const arr = []
  let id = 1
  for (let i = rand(); i--;) {
    arr.push({
      id: id++,
      isLoop: true,
      isPause: true,
      title: '素材' + Math.random()
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
