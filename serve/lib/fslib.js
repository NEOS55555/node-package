const fs = require("fs");
const path = require("path");
const superagent = require("superagent");
const { clearBlankObj } = require(".");

function setSuagentMap(suagent, setMap = {}, otm = {}) {
  let temp = suagent;
  Object.keys(clearBlankObj(setMap, true)).forEach((key) => {
    // console.log(key)
    if (key == "disableTLSCerts") {
      return;
    }
    temp = temp.set(key, setMap[key]);
  });
  if (otm.disableTLSCerts || setMap.disableTLSCerts) {
    temp = temp.disableTLSCerts();
  }
  return temp;
}

function mkdirSelf(filepath) {
  // filepath = path.resolve(__dirname, filepath);
  if (!fs.existsSync(filepath)) {
    var pathtmp;
    filepath.split("/").forEach(function (dirname) {
      if (pathtmp) {
        pathtmp = path.join(pathtmp, dirname);
      } else {
        //如果在linux系统中，第一个dirname的值为空，所以赋值为"/"
        if (dirname) {
          pathtmp = dirname;
        } else {
          pathtmp = "/";
        }
      }
      if (!fs.existsSync(pathtmp)) {
        if (!fs.mkdirSync(pathtmp)) {
          return false;
        }
      }
    });
  }
  return true;
}
exports.mkdirSelf = mkdirSelf;

exports.writeFilePromise = function (dir, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(dir, data, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};

exports.saveFile = function (
  url,
  dirUrl,
  fileName,
  type,
  refurl,
  setMap,
  otm = {}
) {
  console.log("saveFile 地址是，", url);
  return new Promise((resolve, reject) => {
    let temp = superagent.get(url);
    if (refurl) {
      temp = temp.set("Referer", refurl);
    }
    temp = setSuagentMap(temp, setMap, otm);
    temp
      .timeout(150000)
      .responseType("blob")
      .then((res) => {
        const fileUrl = `${dirUrl}/${fileName}.${type}`;
        // console.log(fileUrl)
        fs.writeFile(
          path.resolve(__dirname, fileUrl),
          res.body,
          "binary",
          function (err) {
            if (err) {
              return reject(err);
            }
            resolve("ok");
          }
        );
      })
      .catch((err) => {
        reject(getErrorObj(err));
      });
  });
};

function getErrorObj(err) {
  const obj = {
    isTimeout: err.code == "ETIMEDOUT" || err.code == "ECONNABORTED",
    isRefuse: err.code == "ECONNRESET",
    is404:
      err.status == 404 ||
      err.code == 404 ||
      (err.code == "ENOTFOUND" && err.code !== 302 && err.code !== 301),
    is403: err.status == 403,
    code: err.code,
    err: err,
  };
  return obj;
}
