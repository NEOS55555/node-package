/**
 * 工程配置管理平台
 */
// 8888
let baseuri = process.env.VUE_APP_SIGN
if (process.env.NODE_ENV !== 'mock') {
  baseuri = baseuri.replace('location.hostname', location.hostname)
  if (location.hostname === '58.209.141.93') {
    baseuri = process.env.VUE_APP_ONLINE_SIGN
  }
}

const proxy = baseuri
export default {
  operateLog: { type: 'post', path: '/equipment/operate/log', proxy, api: '/logapi' },
  login: { type: 'post', path: '/account/login', proxy, api: '/logapi' },
  equipmentSend: { type: 'put', path: '/equipment/command/send', proxy, api: '/logapi' }, // 发送指令
  logout: { type: 'post', path: '/account/logout', proxy, api: '/logapi' },
  // 列表
  unityList: { type: 'get', path: '/unity/resource/list', proxy, api: '/logapi' },
  // 设备的计划
  equipmentPlanList: { type: 'get', path: '/equipment/:mac/plan', proxy, api: '/logapi' },
  // 设置计划插播计划提交
  equipmentPlanCommit: { type: 'put', path: '/equipment/:mac/plan', proxy, api: '/logapi' }
}
