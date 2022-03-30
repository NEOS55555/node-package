import Mock from 'mockjs'
import Const from '@/constants/api'

function setData () {
  return Mock.mock({
    total: 321,
    'records|10': [{
      'id|+1': 1,
      'position|+1': 1,
      companyName: '@ctitle(10,15)',
      companyIconUrl: 'https://product-online.cdn.bcebos.com/1629208239228073.jpg?x-bce-process=image/quality,q_80/format,f_auto/interlace,i_progressive',
      companyDescription: '@ctitle(10,15)',
      companyFounder: '@cname',
      companyQualifications: '优秀',
      companyVideoUrl: 'https://product-online.cdn.bcebos.com/1629342446586771.mp4'
    }]
  })
}

const data = {
  code: Const.HTTP.CODE_200,
  message: 'success',
  data: setData()
}

export default data
