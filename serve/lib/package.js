const {
  mkdirSelf,
  writeFilePromise,
  saveFile,
  deleteFolder,
} = require("./fslib");
const path = require("path");
const { packageComponents, packageRouter, setPageName } = require("./dealstr");
const { dealImgs } = require(".");

function saveImgs(staticPath, pageList) {
  const imgArr = dealImgs(pageList);
  const comDirSrc = path.resolve(staticPath, "./public/images/common");
  deleteFolder(comDirSrc);
  mkdirSelf(path.resolve(staticPath, "./public"));
  mkdirSelf(path.resolve(staticPath, "./public/images"));
  mkdirSelf(comDirSrc);
  return new Promise((resolve) => {
    (function intor(count) {
      if (count >= imgArr.length) {
        resolve();
        return;
      }
      const { imgId, imgType, src } = imgArr[count];

      saveFile(src, comDirSrc, imgId, imgType)
        .then((res) => {
          setTimeout(() => {
            intor(count + 1);
          }, 200);
        })
        .catch((e) => {
          console.log(e);
          if (e.is404) {
            intor(count + 1);
          } else {
            intor(count + 1);
          }
        });
    })(0);
  });
}

exports.web2package = function (staticPath, pageList) {
  return new Promise((resolve) => {
    setPageName(pageList);
    mkdirSelf(path.resolve(staticPath, "./src"));
    mkdirSelf(path.resolve(staticPath, "./src/router"));
    mkdirSelf(path.resolve(staticPath, "./src/views"));
    saveImgs(staticPath, pageList).then(() => {
      // 打包list
      writeFilePromise(
        path.resolve(staticPath, "./src/router/config.js"),
        packageRouter(pageList)
      );
      // 打包组件
      (function intor(icount) {
        if (icount >= pageList.length) {
          console.log("????执行到这了?", icount);
          resolve({
            success: true,
            code: 200,
          });
          return;
        }
        const it = pageList[icount];
        writeFilePromise(
          path.resolve(staticPath, "./src/views/" + it.name + ".vue"),
          packageComponents(JSON.parse(JSON.stringify(it)))
        ).then((res) => {
          intor(icount + 1);
        });
      })(0);
    });
  });
};
