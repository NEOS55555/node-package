
import Mock from 'mockjs'
// import Const from '@/constants/api'

function getData () {
  let id = 0
  const arr = [
    {
      id: id++,
      mac: Math.random() + '',
      name: '沉浸式体验'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '升降摄像头'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '电动遮光帘'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '电动遮光帘'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '虚拟仿真'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '互动体验'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '风格实验室'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '大数据实验室'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '战略经济实验室'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '金融科技实验室'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '互动屏'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '虚拟仿真实验室'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: 'VR金融体验场景'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '智能决策实验室'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '滑轨屏'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '调光玻璃'
    },
    {
      id: id++,
      mac: Math.random() + '',
      name: '会议白板'
    }
  ]

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
