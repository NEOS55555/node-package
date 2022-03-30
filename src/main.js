import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Echarts from 'echarts'
import * as echarts from 'echarts'
import CryptoJS from 'crypto-js' // 登录加密

import Constant from './constants'
import Util from './utils'
import Api from './api'
import ApiList from './api/apiList'
// import Tools from './_source/_tool'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {
  viewAdaptive
} from './utils/util.view'
// import './filter'
// import './directive'
// import './_source/_directive'

// import './_source/_scss/_index.scss'
function connectWebViewJavascriptBridge (callback) {
  if (window.WebViewJavascriptBridge) {
    callback(window.WebViewJavascriptBridge)
  } else {
    document.addEventListener(
      'WebViewJavascriptBridgeReady'
      , function () {
        callback(window.WebViewJavascriptBridge)
      },
      false
    )
  }
}

// 注册回调函数，第一次连接时调用 初始化函数
connectWebViewJavascriptBridge(function (bridge) {
  // 初始化
  bridge.init(function (message, responseCallback) {
    var data = {
      'Javascript Responds': 'Wee!'
    }
    // alert("jasdashjd");
    responseCallback(data)
  })

  // Android调用js方法：functionInJs方法名称需要保持一致 ，并返回给Android通知
  bridge.registerHandler('functionInJs', function (data, responseCallback) {
    responseCallback(data)
  })
})

if (process.env.NODE_ENV === 'mock') {
  require('./mock')
}
// 设置窗口自适应
viewAdaptive(1920, 100)
Vue.prototype.$api = Api
Vue.prototype.$apiList = ApiList
Vue.prototype.$const = Constant
Vue.prototype.$util = Util
// Vue.prototype.$tools = Tools
Vue.prototype.$evtBus = new Vue()
Vue.prototype.$echarts = echarts

Vue.use(CryptoJS)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
