
import Mock from 'mockjs'
// import Const from '@/constants/api'

function getData () {
  const arr = []
  let id = 1
  for (let i = 200; i--;) {
    arr.push({
      id: id++,
      mac: Math.random() + '',
      name: '设备名称' + i,
      orgName: '所属机构' + i,
      equType: '固件包类型' + i,
      equGroupName: '分组' + i,
      version: '当前版本' + i,
      screenType: '屏幕类型' + i,
      ratio: '厂家' + i,
      size: '型号' + i
    })
  }

  return arr
}
function setData () {
  return Mock.mock({
    total: 10,
    page: 1,
    pageSize: 10,
    data: getData()
  })
}

const data = setData()

export default data
