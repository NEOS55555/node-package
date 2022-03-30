import { Message } from "element-ui";
import $api from "@/api";
import $apiList from "@/api/apiList";
window.prevMckCode = "";
const timeOutTime = 3 * 1000;

function doubced(cb, timeout = 500) {
  let timmer = null;
  function abc() {
    clearTimeout(timmer);
    timmer = setTimeout(() => {
      cb && cb();
    }, timeout);
  }
  abc.clear = () => {
    clearTimeout(timmer);
  };
  return abc;
}
function evtIntor() {
  const evtArr = [];
  let isStart = false;
  const debStar = doubced(() => {
    isStart = true;
  }, timeOutTime - 1000);
  function intor() {
    setTimeout(() => {
      if (isStart) {
        console.log("evtArr", evtArr);
        const arr = evtArr.map((it) => it());
        Promise.all(arr).then((res) => {
          intor();
        });
      } else {
        intor();
      }
    }, 5000);
  }
  intor();
  return {
    pushEvt(cb) {
      evtArr.push(cb);
      debStar();
    },
    popEvt(cb) {
      evtArr.pop();
    },
  };
}
const evtLoop = evtIntor();

const ajaxArr = [];
let isAjaxing = false;
let timmer = null;
function sendAjax(data, cb) {
  // console.log('data', data)
  data.cb = cb;
  ajaxArr.push(data);
  start();
  return {
    cancel() {
      clearTimeout(timmer);
      isAjaxing = false;
      const obj = { msg: "接口取消", mgCode: "cancel" };
      cb && cb(obj);
    },
  };
}
// let prevCb = null
function start() {
  /* const obj1 = { msg: '链接超时111', mgCode: 'timeout' }
  prevCb && prevCb(obj1) */
  if (isAjaxing || ajaxArr.length === 0) {
    return;
  }
  clearTimeout(timmer);
  // 超时处理

  isAjaxing = true;
  const map = ajaxArr.shift() || {};
  // ajaxArr.push(map)

  let { data = {}, noBrno, cb, toJavaFuncName = "submitFromWeb" } = map;
  data = data || {};
  if (toJavaFuncName === "submitFromWeb") {
    if (!(noBrno || data.brno)) {
      data.brno = 1820;
    }
  }
  // prevCb = cb
  delete map.cb;
  delete map.toJavaFuncName;
  timmer = setTimeout(() => {
    isAjaxing = false;
    const obj = { msg: "链接超时", mgCode: "timeout" };
    cb && cb(obj);
    start();
    // console.log('超超超超超超超')
  }, timeOutTime);
  // console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  console.log("mapdata", map);
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "mock"
  ) {
    setTimeout(() => {
      var a = {
        resultData: {},
      };
      isAjaxing = false;
      cb(a);
      start();
    }, 1000);
    clearTimeout(timmer);
    return;
  }

  // console.log('window.WebViewJavascriptBridge----', typeof window.WebViewJavascriptBridge)
  window.WebViewJavascriptBridge.callHandler(
    toJavaFuncName, // 指定接收参数 submitFromWeb与java一致
    map,
    function (responseData) {
      // 处理java回传的数据
      isAjaxing = false;
      start();
      clearTimeout(timmer);
      // document.getElementById('show').innerHTML = responseData
      // alert('返回结果了')
      if (!!responseData && responseData !== "null") {
        let obj = {};
        try {
          obj = JSON.parse(responseData);
        } catch (e) {
          obj = { msg: "数据解析失败", mgCode: "fail", err: e };
          // cb && cb(obj)
          // reject(new Error('解密出错'))
        }
        cb && cb(obj);
      } else {
        const obj = { msg: "没有返回数据", mgCode: "no" };
        return cb && cb(obj);
      }
    }
  );
}
// 时间戳转时间格式
function getLocalTime(timestamp) {
  var time = new Date(timestamp);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return (
    y +
    "-" +
    (m < 10 ? "0" + m : m) +
    "-" +
    (d < 10 ? "0" + d : d) +
    " " +
    (h < 10 ? "0" + h : h) +
    ":" +
    (mm < 10 ? "0" + mm : mm) +
    ":" +
    (s < 10 ? "0" + s : s)
  );
}

// 获取区域信息
const areaListPromise = $api.send($apiList.areaList, {}).then((res) => {
  const list = res.data;
  const areaList = [
    {
      key: "test",
      name: "实验室",
      areaId: list[0].id,
      active: true,
    },
    {
      key: "zhanting",
      name: "展厅",
      areaId: list[1].id,
      active: false,
    },
    {
      key: "meet",
      name: "会议室",
      areaId: list[2].id,
      active: false,
    },
  ];
  return areaList;
});
export default {
  /**
   * @author zhaopeng
   * 本地存储状态
   * @param {} key
   * @param {*} value
   * @param {*} state
   */
  getDefaultitemScale(scale) {
    var num = parseFloat(scale);
    num = isNaN(num) ? 1 : num;
    return num;
  },
  posi2xy($px) {
    if (typeof $px === "string") {
      return $px;
    }
    return $px + "px";
  },
  setLocalStore(key, value, state) {
    if (!value) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value);
    }
    state[key] = value;
  },
  px2vh($px, maxv = 1200) {
    if (typeof $px === "string") {
      return $px;
    }
    return ($px * 100) / maxv + "vh";
  },
  px2vw($px, maxv = 1920) {
    if (typeof $px === "string") {
      return $px;
    }
    return ($px * 100) / maxv + "vw";
  },
  /**
   * @author zhaopeng
   * 获取存储状态
   * @param {*} key
   * @param {*} state
   */
  getLocalStore(key, state) {
    if (!state[key]) {
      state[key] = localStorage.getItem(key);
    }
    return state[key];
  },
  getLocalTime,
  /**
   * @author caixiangyu
   * 存储/删除登录名和密码
   */
  setLocalLogin(name, pwd, checked, value) {
    if (!value) {
      localStorage.removeItem("userName");
      localStorage.removeItem("userPwd");
      localStorage.removeItem("pasChecked");
    } else {
      localStorage.setItem("userName", name);
      localStorage.setItem("userPwd", pwd);
      localStorage.setItem("pasChecked", checked);
    }
  },

  /**
   * @author caixiangyu
   * 获取登录名和密码
   */
  getLocalLogin() {
    var name = localStorage.getItem("userName");
    var pwd = localStorage.getItem("userPwd");
    var checked = localStorage.getItem("pasChecked");
    // console.log(name, pwd, checked)
    return [name, pwd, checked];
  },

  // 分组按钮点击
  groupBtnClick(btnArr, item, isHide) {
    if (item.playType === "toggle") {
      item.active = !item.active;
      return;
    }
    item.toggleActive = !item.toggleActive;
    if (item.active) {
      return;
    }
    if (item.disabled) {
      return;
    }
    if (!item.noChange) {
      btnArr.forEach((it) => {
        if (it.group === item.group) {
          it.active = it.key === item.key;
          if (it.active && isHide) {
            /* setTimeout(() => {
              it.active = false
            }, 200) */
          }
        }
      });
      if (item.group === "all") {
        btnArr
          .filter((it) => it.group !== item.group)
          .forEach((itm) => {
            itm.active = item.activeArr.indexOf(itm.key) !== -1;
          });
      } else {
        btnArr.forEach((it) => {
          /* if (it.key === item.key) {
            it.active = true
          } */
          if (it.group === "all") {
            // it.activeArr
            const activeArr = btnArr.filter(
              (im) => it.activeArr.indexOf(im.key) !== -1 && im.active
            );
            // console.log(activeArr)
            it.active = activeArr.length === it.activeArr.length;
          }
        });
      }
    }
  },
  throttle(func, wait) {
    let timeout = null;
    let context;
    let args;
    let previous = 0;

    const later = function () {
      previous = +new Date();
      timeout = null;
      func.apply(context, args);
    };

    const throttled = function () {
      const now = +new Date();
      // 下次触发 func 剩余的时间
      const remaining = wait - (now - previous);
      context = this;
      args = arguments;
      // 如果没有剩余的时间了或者你改了系统时间
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(later, remaining);
      }
    };
    return throttled;
  },
  // 发送中控指令
  sendCtrlIndex(item, datmd) {
    console.log("中控指令传过来的item", item, datmd);
    const { scenceId, districtId, deviceId, otherClick, mac } = datmd;
    const commandMap = {
      // 投影仪
      off: 1,
      on: 2,
      // 幕布
      mbOff: 1,
      mbOn: 2,
      mbPause: 5,
      // 音量
      voiceAdd: 3,
      voiceReduce: 4,
    };
    let mck = item.key;
    if (mck.indexOf("ctrl-") === 0) {
      mck = mck.replace("ctrl-", "");
      if (mck.indexOf("voice") !== -1) {
        const command = item.command;
        const params = {
          command,
          idList: [deviceId],
        };
        console.log("音量发送指令", params);
        // === 'ctrl-voiceReduce' ? 'VolumeDown' : 'VolumeUp'
        $api
          .send($apiList.equipmentSend, {
            type: "json",
            params,
          })
          .then((data) => {})
          .catch((err) => {
            this.$error(err.message);
          });
      } else {
        const arr = ["mbOff", "mbOn"];
        if (arr.indexOf(mck) !== -1) {
          window.prevMckCode = mck;
        }
        console.log("mck", mck, item);
        let value = "[0,0,1]";
        if (["mbPause"].indexOf(mck) !== -1) {
          if (item.active) {
            value = "2";
          } else {
            if (window.prevMckCode) {
              mck = window.prevMckCode;
            } else {
              value = "2";
            }
          }
          // mck = item.active ? 'mbPause' : 'mbOn'
        }
        const params = {
          command: commandMap[mck] + "",
          deviceId: deviceId,
          scence: scenceId,
          districtId,
          value: value, // 温度、亮度变化范围（格式[最小值,最大值]）
        };
        console.log("params", params);
        $api
          .send($apiList.equipmentControll, { params })
          .then((data) => {})
          .catch((err) => {
            this.$error(err.message);
          });
      }
    } else {
      console.log("进来了么？？");
      // this.$emit('liClick', item)
      otherClick && otherClick(item);
    }
    if (mac) {
      const operaparam = {
        mac,
        content: item.name,
        operateTime: getLocalTime(Date.now()),
      };
      console.log("操作日志", operaparam);
      $api.send($apiList.operateLog, {
        params: operaparam,
      });
    }
  },
  isDev() {
    return process.env.NODE_ENV === "development";
  },
  isMock() {
    return process.env.NODE_ENV === "mock";
  },
  jpx2vw(px, isAdd) {
    return (
      ((px * 100) / 1920) * (window.screen.width / 100) + (isAdd ? "px" : "")
    );
  },
  jpx2vh(px, isAdd) {
    return (
      ((px * 100) / 1200) * (window.screen.height / 100) + (isAdd ? "px" : "")
    );
  },
  sendAjax,
  sendAjaxPromise(params) {
    return new Promise((resolve) => {
      sendAjax(params, (res) => {
        resolve(res);
      });
    });
  },
  sendAjaxComd(params) {
    sendAjax(params, (res) => {
      if (res.resultCode !== "S1000") {
        Message({
          type: "error",
          message: res.msg || "操作失败",
        });
        return;
      }
      Message({
        type: "success",
        message: res.msg || "操作成功",
      });
    });
  },
  sendComd(path, config) {
    $api.send(path, config).then((res) => {
      if (res.code !== 0) {
        Message({
          type: "error",
          message: res.message || "操作失败",
        });
        return;
      }
      Message({
        type: "success",
        message: res.message || "操作成功",
      });
    });
  },
  evtLoop,
  setStateAndFirstActive(list, notSetFirst) {
    for (const item of list) {
      item.active = false;
    }
    if (!notSetFirst) {
      list[0].active = true;
    }
    return list;
  },
  getBtnItem(name, key, obj = {}) {
    return {
      name,
      key,
      group: "mdeChge",
      active: false,
      ...obj,
    };
  },
  getUrl(prv, url) {
    let murl = "";
    try {
      const a = new URL(prv, url);
      murl = a.toString();
    } catch (e) {
      murl = prv;
    }
    return murl;
  },
  getAreaList() {
    return areaListPromise;
  },
};
