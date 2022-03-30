import Utils from '@/utils'
import Const from '@/constants'
import Api from '@/api'
import ApiList from '@/api/apiList'

const state = {
  _token: localStorage.getItem('_token') || '',
  // _token: sessionStorage.getItem('_token') || '',
  _user_name: localStorage.getItem('userName') || '',
  _organization: localStorage.getItem('_organization') || '',
  _user_info: {}
}

const getters = {
  getToken (state) {
    const token = Utils.getLocalStore(Const.TOKEN, state)
    // if (!state[Const.TOKEN]) {
    //   state[Const.TOKEN] = sessionStorage.getItem('_token')
    // }
    // return state[Const.TOKEN]
    return token
  },
  getUsername (state) {
    const _userName = Utils.getLocalStore('userName', state)
    return _userName
  },
  getOrganization (state) {
    const _organization = Utils.getLocalStore(Const.ORGANIZATION, state)
    return _organization
  },
  getUserInfo (state) {
    return state[Const.USERINFO]
  },
  getRoleId (state) {
    return state[Const.ROLEID]
  }
}

const mutations = {
  setToken (state, token) {
    Utils.setLocalStore(Const.TOKEN, token, state)
    // sessionStorage.setItem('_token', token)
    state[Const.TOKEN] = token
  },
  removeToken (state) {
    state.TOKEN = null
    localStorage.removeItem(Const.TOKEN)
  },
  setUsername (state, username) {
    Utils.setLocalStore(Const.USERNAME, username, state)
  },
  setOrganization (state, organization) {
    Utils.setLocalStore(Const.ORGANIZATION, organization, state)
  },
  setUserInfo (state, userInfo) {
    state[Const.USERINFO] = userInfo
  },
  setRoleId (state, roleId) {
    Utils.setLocalStore(Const.ROLEID, roleId, state)
  },

  // 退出登录
  logOut (state) {
    mutations.setToken(state, '')
    mutations.setUsername(state, '')
    mutations.setOrganization(state, '')
    mutations.setUserInfo(state, '')
    mutations.setRoleId(state, '')
  },

  roleMenuList (state, Menu) {
    state.menuList = Menu
  }
}

const actions = {
  getUserInfo (content, type) {
    return new Promise((resolve, reject) => {
      const userInfo = content.state[Const.USERINFO]
      if (userInfo && JSON.stringify(userInfo) !== '{}') {
        resolve(userInfo)
      } else {
        Api.get(ApiList.getUserInfo, {
        }).then(data => {
          if (data.code === 0) {
            const json = data.data
            content.commit('setUserInfo', json)
            resolve(json)
          }
        })
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
