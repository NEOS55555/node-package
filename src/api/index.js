import Consts from '@/constants'
import axios from 'axios'
import store from '../store'
import Router from '../router'
import tokenUtils from '../utils/cookieToken'
// import Vue from 'vue'

// const This = Vue.prototype
const ApiConst = Consts

export default {
  get (url, options) {
    return apiAxios('get', url, options)
  },
  post (url, options) {
    return apiAxios('post', url, options)
  },
  put (url, options) {
    return apiAxios('put', url, options)
  },
  delete (url, options) {
    return apiAxios('delete', url, options)
  },
  patch (url, options) {
    return apiAxios('patch', url, options)
  },
  send (url, options) {
    url = JSON.parse(JSON.stringify(url))
    if (process.env.NODE_ENV !== 'production') {
      if (process.env.NODE_ENV !== 'mock') {
        url.path = (url.api || '') + url.path
      }
    } else {
      url.path = (url.proxy || '') + url.path
    }
    console.log('options', url, options)
    // TODO
    return apiAxios(url.type, url, options)
  }
}

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (req) => {
    return req
  },
  (err) => {
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      const data = res.data
      // console.log(res, 8888888888888, 'res')
      if (data.code === 401 || data.status === 401) {
        // 登录过期 需求重新登录 情况vuex的token和localstorge的token
        // store.commit('User/removeToken')
        // 调转到login界面
        // console.log(Router)
        Router.replace({ path: '/sign-in' })
      }
      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res)
    }
  },
  (err) => {
    return Promise.reject(err)
  }
)

/**
 * 发送请求
 * @param {请求方法} method
 * @param {请求地址} uri
 * @param {配置} options
 * options.params           请求参数
 * options.put              /:id形式参数
 * options.query            ?id=123形式参数
 * options.header           请求头添加参数
 * options.baseUrl          请求基本url 可配置 可选
 * options.timeout          请求超时时间 默认5000  可配置 可选
 * options.withCredentials  是否允许跨域 默认false 可配置 可选
 * options.contentType      请求头方式  默认json 可配参数'form' 'json'
 * options.beforeSend       请求前回调
 * options.compleled        请求完成回调
 * options.success          请求成功
 * options.failure          请求失败
 * options.failureMsg       请求失败是否弹出错误信息 默认false
 * options.error            请求出错
 * options.errorMsg         请求出错是否弹出错误信息 默认false
 * options.responseType     请求请求下载导出一个文件
 */
function apiAxios (method = 'get', urlConfig, options = {}) {
  const def = {
    // baseUrl: ApiConst.REQCONFIG.BASEURL,
    // baseUrl: process.env.VUE_APP_SIGN,
    timeout: ApiConst.REQCONFIG.TIMEOUT,
    withCredentials: false,
    showErrorMsg: false,
    contentType: 'json',
    responseType: 'json'
  }
  Object.assign(def, options) // 合并对象
  let url = urlConfig.path ? urlConfig.path : urlConfig

  if (options.put) {
    if (process.env.NODE_ENV !== 'mock') {
      for (const key in options.put) {
        url = url.replace(':' + key, options.put[key])
      }
    }
  }

  // 请求参数
  const axiosOptions = {
    method: method,
    url,
    baseURL: def.baseUrl,
    withCredentials: def.withCredentials,
    timeout: def.timeout,
    responseType: def.responseType,
    headers: {
      ...options.header,
      TOKEN: tokenUtils.getCookieSelf('token') || '',
      // TOKEN: store.getters['User/getToken'] || '',
      systemType: 1,
      'Content-Type':
        def.contentType === 'form'
          ? 'application/x-www-form-urlencoded;charset=UTF-8'
          : 'application/json;charset=utf-8' // 设置请求头
    }
  }

  // console.log(axiosOptions)
  axiosOptions[
    method === 'post' || method === 'put' || method === 'delete'
      ? 'data'
      : 'params'
  ] = def.params // post: data; get: params

  // formData形式提交
  if (method === 'post' && def.contentType === 'form') {
    axiosOptions.transformRequest = [
      function (data) {
        let ret = ''
        for (const it in data) {
          ret +=
            encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }
    ]
  }

  if (def.beforeSend) {
    def.beforeSend()
  }

  const promise = axios(axiosOptions)

  promise
    .then((res) => {
      // console.info('请求接口' + url + '响应成功， 响应码：', res[ApiConst.REQCONFIG.RESCODE])
      if (res[ApiConst.REQCONFIG.RESCODE] === ApiConst.HTTP.CODE_200) {
        // console.info('返回数据', res[ApiConst.REQCONFIG.RESDATA])

        if (def.success) {
          def.success(res) // 请求成功回调
        }
      } else {
        // console.warn('请求出错，错误信息', res[ApiConst.REQCONFIG.RESCODE] + '/' + res[ApiConst.REQCONFIG.RESMSG])

        if (def.failure) {
          def.failure(res) // 请求出错回调
        }
      }

      if (def.compleled) {
        def.compleled(res) // 请求结束
      }
    })
    .catch((err) => {
      console.log(err, err.response, store.getters['User/getToken'])
      const res = err.response
      if (
        res &&
        res.status === 401 &&
        res.data.resHeader.message === 'token失效'
      ) {
        // This.$error(res.data.data)
        // 登录过期 需求重新登录 情况vuex的token和localstorge的token
        // store.commit('User/removeToken')
        // 调转到login界面
        // console.log(Router)
        Router.replace({ path: '/sign-in' })
      }

      if (def.error) {
        def.error(res.data.data) // 请求失败
      }
    })

  return promise
}
