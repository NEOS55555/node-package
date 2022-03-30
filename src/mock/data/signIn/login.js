
import Mock from 'mockjs'
import Const from '@/constants/api'

function setData () {
  return Mock.mock({
    total: 10,
    page: 1,
    pageSize: 10,
    'list|20': [{
      'id|+1': 1,
      name: '@cname',
      school: '@demo',
      birthday: '@date'
    }]
  })
}

const data = {
  [Const.REQCONFIG.RESDATA]: setData(),
  [Const.REQCONFIG.RESCODE]: Const.HTTP.CODE_200,
  [Const.REQCONFIG.RESMSG]: Const.HTTP.MEG_SUCCESS
}

export default data
