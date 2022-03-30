const { web2package } = require("./serve/lib/package");
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { execute } = require("./serve/lib");
const { packagezip } = require("./serve/lib/packagezip");
const { mkdirSelf } = require("./serve/lib/fslib");

const STATIC_FILE_PATH = path.resolve(__dirname, "./dist");
const port = 7878;

const CDN_PATH = path.resolve(__dirname, "./cdn");
const CDN_PACKAGE_PATH = path.resolve(CDN_PATH, "./package");

mkdirSelf(CDN_PATH);
mkdirSelf(CDN_PACKAGE_PATH);

app.use(express.static(STATIC_FILE_PATH));
app.use("/cdn", express.static(CDN_PATH));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 打包之后，压缩zip
app.post("/package", (req, res) => {
  const { pages } = req.body;
  console.log("pages", pages);
  web2package(__dirname, pages).then(() => {
    console.log("结构完整，开始打包");
    setTimeout(() => {
      execute("npm run build")
        .then(() => {
          console.log("打包完成");
          const packagedir = path.resolve(CDN_PACKAGE_PATH, "./dist.zip");
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
            });
        })
        .catch((err) => {
          console.log("打包出错拉", err);
          res.json({ success: false });
        });
    }, 1000);
  });
});

app.post("/preview", (req, res) => {
  const { pages } = req.body;
  res.header("Access-Control-Allow-Origin", "*");
  web2package(__dirname, pages).then(() => {
    console.log("结构完整，开始打包");
    setTimeout(() => {
      execute("npm run build")
        .then(() => {
          console.log("打包完成");
          res.json({
            success: true,
          });
        })
        .catch((err) => {
          console.log("打包出错拉", err);
          res.json({ success: false });
        });
    }, 1000);
  });
});

app.listen(port);
