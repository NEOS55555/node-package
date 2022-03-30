import BIZ from './biz'
import API from './api'
import SYS from './sys'
import MGP from './mgp'
export default {
  ...API,
  ...BIZ,
  ...SYS,
  ...MGP,
  resourceUrl: process.env.VUE_APP_RESOURCE, // 静态资源服务器地址
  uploadUrl: process.env.VUE_APP_UPLOADURL // 上传文件服务器地址
}
