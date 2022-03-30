/**
 * 工程配置管理平台
 */

export default {
  // pc全开关
  // 查询所有区域
  areaList: { type: 'get', path: '/pad/area' },
  // 灯光控制
  lightCtrl: { type: 'post', path: '/pad/control/light' },
  equCtrl: { type: 'post', path: '/pad/control/equ' },
  areaDevList: { type: 'get', path: '/pad/equ/area/:areaId' },
  lightDevList: { type: 'get', path: '/pad/light/area/:areaId' },
  allPcCtrl: { type: 'post', path: '/pad/control/all' },
  normalProgramList: { type: 'get', path: '/pad/story/:mac' },
  getScreenProgramList: { type: 'get', path: '/pad/splitview/mode/:mac' },
  changeProgramCtrl: { type: 'post', path: '/pad/splitview/switchStory' },
  changeMaterCtrl: { type: 'post', path: '//pad/splitview/switchMaterial' },
  circlePlayProgramCtrl: { type: 'post', path: '/pad/splitview/controlStory' },
  circleMaterCtrl: { type: 'post', path: '/pad/splitview/controlMaterial' },
  getMaterList: { type: 'get', path: '/pad/splitview/story/material/:mac/:modeId/:areaId/:storyId' },
  getProgramList: { type: 'get', path: '/pad/splitview/mode/story/:modeId/:areaId' }

}
