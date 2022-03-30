/**
 * @author qiaohai
 * 业务常量
 */

const NORMAL_STATUS_CODE = {}
NORMAL_STATUS_CODE['正常'] = 0
NORMAL_STATUS_CODE['在线'] = 0
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

// 区域列表
const AREA_LIST = [
  {
    key: 'test',
    name: '实验室',
    // areaId: 3,
    active: true
  },
  {
    key: 'zhanting',
    name: '展厅',
    // areaId: 2,
    active: false
  },
  {
    key: 'meet',
    name: '会议室',
    // areaId: 1,
    active: false
  }
]
const AREA_MAP = {}
AREA_LIST.forEach(it => {
  AREA_MAP[it.key] = it
})

export default {
  CLIENTID: 'tbaiotm',

  // 登录状态
  TOKEN: '_token',
  USERNAME: '_user_name',
  ORGANIZATION: '_organization',
  DICT: '_dict_list',
  USERINFO: '_user_info',
  ROLEID: '_roleId',
  MENUITEMS: '_menuItems',

  BTN_ADD: 'add',
  BTN_DEL: 'del',
  BTN_EDIT: 'edit',
  BTN_VIEW: 'view',
  BTN_LOG: 'log',
  BTN_COPY: 'copy',
  BTN_DOWNLOAD: 'download',
  BTN_NEWFILE: 'addFile',

  DEPT_TYPE: 2,
  ORG_TYPE: 1,
  ROLE_TYPE: '7',

  DELINFO: {
    DEL_EMPTY: '请选择要删除的数据',
    DEL_CONFIRM: '确定删除数据吗？',
    DEL_RECONFIRM: '再次确认删除数据吗？'
  },

  /**
   * 机构管理
   */
  ORG: {
    ROOTID: 1
  },

  /**
   * 服务器管理
   */
  SERVER: {
    DEL_TITLE: '删除提示',
    DEL_ALARM_TITLE: '禁止删除该服务器',
    DEL_WARNING: '该二级服务器已绑定播放设备，且无“中心服务器”，不可被删除！',
    DEL_CONFIRM: '该二级服务器已绑定播放设备，若继续操作，则该服务器下的设备会自动转移至“中心服务器”！',
    DEL_WARNING_OTHER: '该中心服务器存在二级服务器，不可被删除！',
    TIP_MESSAGE: '上级服务器：当系统中存在“中心服务器”且当前编辑服务器为“二级服务器”时，此提示框显示“中心服务器”。当系统中不存在中心服务器或当前编辑服务器为“中心服务器”时不提示！用来说明服务器的从属结构。'
  },
  RESETUSERPSD: {
    RESET_WARNING: '确定重置密码，重置后的密码为000000？',
    RESET_CONFIRM: '请再次确认是否重置密码'
  },
  /**
   * 审核管理
   */
  audit: {
    DEL_EMPTY: '请选择要删除的数据',
    DEL_WARNING: '系统检测到，该审核流程处于启用状态， 若删除此审核流程，请启用或新建该审核类型的其他流程。',
    DEL_CONFIRM: '删除确认 是否删除该审核流程，删除后将不可撤回',
    ENABLE_WARNING: '系统检测到，同类型审核流程已经存在，是否确认当前操作， 若该流程启用，则其他素材审核流程将处于禁用状态。'
  },
  /**
   * 计划管理
   */
  plan: {
    CLOSE_TITLE: '请确认是否关闭该计划'
  },
  AREA_LIST,
  AREA_ID,
  AREA_MAP
}
