
import Mock from 'mockjs'
import Const from '@/constants/api'

function getData () {
  const arr = []
  for (let i = 15; i--;) {
    arr.push({
      id: Math.random(),
      equName: '设备名称' + i,
      orgName: '所属机构' + i,
      equType: '固件包类型' + i,
      equGroupName: '分组' + i,
      version: '当前版本' + i,
      screenType: '屏幕类型' + i,
      ratio: '厂家' + i,
      size: '型号' + i,
      upgrade: '升级状态' + i
    })
  }

  return arr
}
function setData () {
  return Mock.mock({
    total: 10,
    page: 1,
    pageSize: 10,
    list: getData()
  })
}

const data = {
  [Const.REQCONFIG.RESDATA]: setData(),
  resHeader: {
    [Const.REQCONFIG.RESCODE]: Const.HTTP.CODE_200,
    [Const.REQCONFIG.RESMSG]: Const.HTTP.MEG_SUCCESS
  }
}

export default data
