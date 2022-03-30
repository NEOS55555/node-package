
import Mock from 'mockjs'
import Const from '@/constants/api'
const AREA_ID = {
  reception: 71,
  conference: 70,
  roadshow: 64,
  rest: 69,
  hall: 72,
  negotiation: 66,
  product: 68,
  lobby: 65,
  incubator: 67
}
function setData () {
  return Mock.mock({
    total: 10,
    page: 1,
    pageSize: 10,
    records: Object.keys(AREA_ID).map(key => ({
      districtId: AREA_ID[key]
    }))
  })
}

const data = {
  [Const.REQCONFIG.RESDATA]: setData(),
  [Const.REQCONFIG.RESCODE]: Const.HTTP.CODE_200,
  [Const.REQCONFIG.RESMSG]: Const.HTTP.MEG_SUCCESS
}

export default data
