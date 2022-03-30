/*
    方法名称：窗口自适应
    参数说明：
        [designSize] 设计图的尺寸 ej：750px
        [scaleSize] 换算比例 ej：1rem = 100px 这里填100
    其他说明：
        实际fontsize / 理论fontsize = 实际屏幕width / 理论屏幕width
        实际fontsize = 实际屏幕width / 理论屏幕width * 理论fontsize
*/
export function viewAdaptive (designSize, scaleSize) {
  var docView = document.documentElement || document.getElementsByTagName('html')[0]
  var docViewFn = function () {
    var docViewWidth = docView.getBoundingClientRect().width
    let setFs = docViewWidth / designSize * scaleSize
    docView.style.fontSize = setFs + 'px'
    const realFs = parseInt(window.getComputedStyle(docView).fontSize)

    if (Math.abs(realFs - setFs) >= 1) {
      // 计算基准比例
      setFs = setFs * setFs / realFs
      docView.setAttribute('style', 'font-size:' + setFs + 'px!important;')
    }
  }

  var timeOutGo = null
  window.addEventListener('resize', function () {
    clearTimeout(timeOutGo)
    setTimeout(docViewFn, 300)
  })
  docViewFn()
};
