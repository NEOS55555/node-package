import Vue from 'vue'
import Vuex from 'vuex'

// import User from './modules/user'
// import Auth from './modules/auth'
// import Editor from '../_source/_store/modules/editor'
// import Editor from '../_source/_component/_Editor/EditorStore'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 复制ID
    fromId: '',
    // 图片平展 图片点击展开 数组
    srcList: [],
    // 输入密码 做验证确认用
    passwor: '',
    // 输入密码强弱判定
    percentage: 0,
    // 角色结构树 校验 学伟
    menuList: [],
    // 素材上传 缩略图
    makeThumb: {},
    // 素材上传 视频宽
    makewidth: {},
    // 素材上传 视频高
    makeheight: {},
    // 素材上传 整个文件MD5
    md5: {},
    // 素材上传不成功文件
    fileslist: {},
    // 测试数据
    ileslist: []
  },
  modules: {
    // User,
    // Auth,
    // Editor
  }
})
