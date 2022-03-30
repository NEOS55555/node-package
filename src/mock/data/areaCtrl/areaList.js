
import Mock from 'mockjs'
// import Const from '@/constants/api'

function getData () {
  const arr = [
    {
      departmentId: 0,
      id: 0,
      orgId: 0,
      remark: '',
      title: '实验室'
    },
    {
      departmentId: 1,
      id: 1,
      orgId: 1,
      remark: '',
      title: '展厅'
    },
    {
      departmentId: 2,
      id: 2,
      orgId: 2,
      remark: '',
      title: '会议室'
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
