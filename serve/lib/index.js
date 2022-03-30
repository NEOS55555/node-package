const exec = require('child_process').exec
exports.dealImgs = function (obj) {
  var arr = []
  const imgList = ['png', 'jpg', 'jpeg', 'gif']
  let imgId = 0
  function isimg(config) {
    if (typeof config === 'string' && config.slice(0, 4) === 'http') {
      const imgPointIndex = config.lastIndexOf('.')
      if (imgPointIndex == -1) {
        return
      }
      /* const imgType = config.slice(imgPointIndex + 1)
      if (imgList.indexOf(imgType) == -1) {
        return
      } */
      const item = { src: config, imgId: imgId++, imgType: 'jpg' }
      arr.push(item)
      return item
    }
  }
  function getSrc(config) {
    // for (let i in )
    if (typeof config === 'object') {
      for (let i in config) {
        const item = isimg(config[i])
        if (item) {
          config[i] = `/images/common/${item.imgId}.${item.imgType}`
        }
        getSrc(config[i])
      }
    }
  }
  getSrc(obj)
  return arr
}

function clearBlankObj(obj, isStrong) {
  const map = {}
  Object.keys(obj || {}).forEach((key) => {
    if (obj[key] != null) {
      if (isStrong && !obj[key]) {
        return
      }
      map[key] = obj[key]
    }
  })
  return map
}
exports.clearBlankObj = clearBlankObj

exports.execute = function (cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, function (err, stdout, stderr) {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}
