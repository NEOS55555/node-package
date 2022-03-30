/**
 * @author zhaopeng
 * api 常量
 */
/* let baseuri = process.env.VUE_APP_API
if (process.env.NODE_ENV !== 'mock') {
  baseuri = baseuri.replace('location.hostname', location.hostname)
  if (location.hostname === '58.209.141.93') {
    baseuri = process.env.VUE_APP_ONLINE_API
  }
} */

export default {
  DATA_REFRESH_TIME: 5 * 1000,
  HTTP: {
    CODE_200: 0, // 正常返回
    CODE_404: 404, // 未找到
    MEG_SUCCESS: 'success'
  },
  REQCONFIG: {
    // BASEURL: baseuri,
    // BASEURL: '/api',
    TIMEOUT: 200000,
    RESCODE: 'code',
    RESMSG: 'message',
    RESDATA: 'data'
  }
}
