import Mock from 'mockjs'
import ApiList from '@/api/apiList'
import './extend'

const modules = require.context('./data/', true, /\.js/) // 扫描data文件夹下的全部mock文件
const mocks = {}
modules.keys().forEach(item => {
  const mockItem = modules(item)
  if (!mocks[getFileName(item)]) {
    mocks[getFileName(item)] = mockItem.default
  }
})

/**
 * get /demo
 * get /demo?id=1&name='张三'
 * get /demo/list
 * put /demo/add
 * put /demo/123
 * put /demo/123/disable
 * delete /demo/123
 */
function initApi () {
  for (const key in ApiList) {
    const item = ApiList[key] // url 配置项
    const url = getUrl(item)
    const method = getMethod(item)
    if (url) {
      // console.log(method, url)
      const mockItem = mocks[key]
      // console.log(key, mockItem, method, url)
      Mock.mock(url, method, function (opt) {
        // console.log(opt)
        return mockItem
      })
      if (method === 'get' || method === 'delete') {
        const reg = new RegExp('^' + (url + '\\?') + '.*$')
        Mock.mock(reg, method, function (opt) {
          // console.log(opt)
          return mockItem
        })
      }
    } else {
      console.error('ApiList中的[' + key + ']未配置请求路径') // 异常场景 未配置请求路径
    }
  }
}

/**
 * 获取url
 * @param {*} item
 */
function getUrl (item) {
  // console.log(item, 1111111111)
  if (typeof item === 'string') {
    return item
  } else {
    return item.path
  }
}

/**
 * 获取method
 * @param {*} item
 */
function getMethod (item) {
  // console.log(item, 22222222222)
  if (typeof item === 'string' || !item.type) {
    return 'get'
  } else {
    return item.type
  }
}

/**
 * 根据url获取文件名
 * @param {} url
 */
function getFileName (url) {
  return url.substr(url.lastIndexOf('/') + 1).replace('.js', '')
}

initApi()
