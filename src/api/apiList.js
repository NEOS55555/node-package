/*
 * @Author: your name
 * @Date: 2020-12-10 17:18:02
 * @LastEditTime: 2021-03-30 10:14:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Project-Traffic2\src\api\apiList.js
 */
/**
 * api列表
 * @author 赵鹏
 */

import sign from './modules/sign'
import areaCtrl from './modules/areaCtrl'

const list = {
  ...sign,
  ...areaCtrl
}
export default list
