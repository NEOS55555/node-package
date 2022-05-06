const { web2package } = require("./serve/lib/package");
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { execute } = require("./serve/lib");
const { packagezip } = require("./serve/lib/packagezip");
const { mkdirSelf, copyFolder, deleteFolder } = require("./serve/lib/fslib");

const STATIC_FILE_PATH = path.resolve(__dirname, "./dist");
const port = 1883;

const CDN_PATH = path.resolve(__dirname, "./cdn");
const CDN_PACKAGE_PATH = path.resolve(CDN_PATH, "./package");

mkdirSelf(CDN_PATH);
mkdirSelf(CDN_PACKAGE_PATH);
console.log("CDN_PATH", CDN_PATH);
// app.use(express.static(STATIC_FILE_PATH));
// app.use("/abc", express.static(STATIC_FILE_PATH));
app.use("/cdn", express.static(CDN_PATH));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == "options") res.send(200);
  //让options尝试请求快速结束
  else next();
});
//
const appSettingPath = path.resolve(__dirname, "./appSetting.js");

// 打包代码
function packagecode() {
  const codepackagedir = path.resolve(CDN_PACKAGE_PATH, "./codedist.zip");

  return packagezip(codepackagedir, (archive) => {
    archive.directory(path.resolve(__dirname, "./src/router"), "router");
    archive.directory(path.resolve(__dirname, "./src/views"), "views");
    archive.directory(
      path.resolve(__dirname, "./public/images/common"),
      "public/images/common"
    );
    archive.file(appSettingPath, { name: "appSetting.js" });
  }).then((r) => {
    console.log("package ov");

    return {
      success: true,
      path: "/cdn/package/codedist.zip",
    };
  });
}
// 打包静态资源
function packagedist() {
  const packagedir = path.resolve(CDN_PACKAGE_PATH, "./dist.zip");
  return packagezip(packagedir, (archive) => {
    archive.directory(path.resolve(STATIC_FILE_PATH), false);
  }).then((r) => {
    console.log("package ov");

    return {
      success: true,
      path: "/cdn/package/dist.zip",
    };
  });
}

// 打包之后，压缩zip
app.post("/package", (req, res) => {
  const { pages, appId, appName } = req.body;
  console.log("pages", pages);
  if (!appId) {
    res.json({ success: false });
  }
  fs.writeFileSync(
    appSettingPath,
    `exports.appName = \`${appName.replace(/\`/gi, "")}\``
  );
  web2package(__dirname, pages).then(() => {
    console.log("结构完整，开始打包");
    setTimeout(() => {
      execute("npm run build")
        .then(() => {
          console.log("打包完成");
          // 复制进去
          const abpath = path.resolve(CDN_PATH, "./" + appId);
          copyFolder(STATIC_FILE_PATH, abpath, true);

          Promise.all([packagecode(), packagedist()])
            .then((resarr) => {
              // console.log(resarr);
              res.json({
                success: true,
                path: "/cdn/package/dist.zip",
                codePath: "/cdn/package/codedist.zip",
              });
            })
            .catch((e) => {
              console.log("package err", e);
            });
          /* const packagedir = path.resolve(CDN_PACKAGE_PATH, "./dist.zip");
          packagezip(packagedir, (archive) => {
            archive.directory(path.resolve(STATIC_FILE_PATH), false);
          })
            .then((r) => {
              console.log("package ov");

              res.json({
                success: true,
                path: "/cdn/package/dist.zip",
              });
            })
            .catch((e) => {
              console.log("package err", e);
            }); */
        })
        .catch((err) => {
          console.log("打包出错拉", err);
          res.json({ success: false });
        });
    }, 1000);
  });
});

app.listen(port);
