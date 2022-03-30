/**
 * @author 蔡翔宇
 */
import Api from '@/api'
import ApiList from '@/api/apiList'
import Const from '@/constants'
import Utils from '@/utils'
// import roleData from '@/config/function'

const state = {
  menuItems: [], // 已授权菜单
  funcItems: {}, // 选中菜单的功能权限
  activeFuncItem: [],
  _roleId: localStorage.getItem('_roleId')
}

const getters = {
  /**
   * 获取菜单选项
   * @param {*} state
   */
  getMenuItems (state) {
    return state.menuItems
  },
  getFuncItems (state) {
    return state.funcItems
  },
  getActiveFuncItem (state) {
    return state.activeFuncItem
  },
  getRoleId (state) {
    return state[Const.ROLEID]
  }
}

const mutations = {
  /**
   * 设置菜单项
   * @param { state } state
   * @param { 菜单选项 } menuItems
   */
  setMenuItems (state, menuItems) {
    state.menuItems = menuItems
  },
  setFuncItems (state, funcItems) {
    state.funcItems = funcItems
  },
  setActiveFuncItem (state, activeFuncItem) {
    state.activeFuncItem = activeFuncItem
  },
  setRoleId (state, roleId) {
    Utils.setLocalStore(Const.ROLEID, roleId, state)
  }
}
/**
 * 异步获取权限菜单
 * @param {实例} content
 */
const actions = {
  actionMenuItems (content) {
    return new Promise((resolve, reject) => {
      if (content.state.menuItems && content.state.menuItems.length > 0) {
        resolve(content.state.menuItems)
      } else {
        const id = state._roleId
        if (id) {
          Api.get(ApiList.roleSee, {
            put: {
              id: id
            }
          }).then(data => {
            resolve(JSON.parse(data.data.menuList))
          }).catch(err => {
            console.log(err)
          })
        }
      }
    })
  },

  actionFuncItems (content) {

  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
