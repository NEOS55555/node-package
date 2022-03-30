// const path = require('path')
const fs = require('fs')

var archiver = require('archiver')

exports.packagezip = function (savepath, cb) {
  return new Promise((resolve) => {
    var output = fs.createWriteStream(savepath)
    //设置压缩格式为zip
    var archive = archiver('zip', {
      zlib: { level: 9 }, // Sets the compression level.
    })

    output.on('close', function () {
      console.log(archive.pointer() + ' total bytes')
      console.log(
        'archiver has been finalized and the output file descriptor has closed.'
      )
      resolve({ success: true })
    })

    output.on('end', function () {
      console.log('Data has been drained')
    })

    archive.on('error', function (err) {
      // throw err
      console.log(err)
      resolve({ success: false })
    })
    archive.pipe(output)
    cb(archive)
    /* if (isFile) {
      archive.file(outerPath, {
        name: fileName,
      })
    } else {
      archive.directory(outerPath, false)
    } */

    archive.finalize()
  })
}
