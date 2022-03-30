export default {
  // 设置cookie
  setCookie (cName, cPwd, exdays) {
    var exdate = new Date()// 获取时间
    exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays)// 保存的天数
    // 字符串拼接cookie
    window.document.cookie = 'userName' + '=' + cName + ';path=/;expires=' + exdate.toGMTString()
    window.document.cookie = 'userPwd' + '=' + cPwd + ';path=/;expires=' + exdate.toGMTString()
  },
  setCookieSelf (name, psw, exdays) {
    var exdate = new Date()// 获取时间
    exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays)// 保存的天数
    // 字符串拼接cookie
    window.document.cookie = name + '=' + psw + ';path=/;expires=' + exdate.toGMTString()
  },
  clearCookieSelf (name) {
    // console.log(this.setCookieSelf)
    this.setCookieSelf(name, '', -1)
  },
  getCookieSelf: function (name) {
    if (document.cookie.length > 0) {
      var arr = document.cookie.split('; ')// 这里显示的格式需要切割一下
      const loginForm = {}
      for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=')// 再次切割
        loginForm[arr2[0]] = arr2[1]
      }
      return loginForm[name]
    }
  },
  // 读取cookie
  getCookie: function () {
    if (document.cookie.length > 0) {
      var arr = document.cookie.split('; ')// 这里显示的格式需要切割一下
      const loginForm = {}
      for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=')// 再次切割
        // 判断查找相对应的值
        if (arr2[0] === 'userName') {
          loginForm.username = arr2[1]// 保存到保存数据的地方
        } else if (arr2[0] === 'userPwd') {
          loginForm.password = arr2[1]
        }
      }
      return loginForm
    }
  },
  // 清除cookie
  clearCookie: function () {
    this.setCookie('', '', -1)// 修改2值都为空，天数为负1天就好了
  }
}
