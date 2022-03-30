/*
 * @Author: your name
 * @Date: 2020-12-10 17:18:02
 * @LastEditTime: 2020-12-11 13:35:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Project-Traffic2\src\mock\extend.js
 */
import Mock from 'mockjs'
const Random = Mock.Random

Random.extend({
  demo: function (date) {
    var demo = ['清华大学', '北京大学', '复旦大学', '哈尔滨工业大学', '中国人民大学', '中国航空航天大学', '南京大学', '武汉大学', '上海交通大学', '浙江大学']
    return this.pick(demo)
  },

  phone: function () {
    var phonePrefixs = ['132', '135', '189', '133', '134', '136', '186', '150', '151', '152', '176', '177']
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) // Number()
  },

  bank: function (date) {
    var demo = [
      '招商银行',
      '招商银行通州分行',
      '招商银行梨园支行',
      '招商银行地泽路支行',
      '北京银行',
      '北京银行北苑分行',
      '北京银行青年路支行',
      '北京银行十里堡支行',
      '交通银行',
      '交通银行中关村支行',
      '中国银行',
      '中国银行通州支行',
      '中国银行台湖支行',
      '农业银行',
      '农业银行地泽路支行',
      '农业银行雍和宫支行',
      '建设银行',
      '建设银行大兴分行',
      '建设银行颐和园支行',
      '工商银行',
      '工商银行梨园支行',
      '工商银行临河里支行'
    ]
    return this.pick(demo)
  },

  image: function (date) {
    var demo = [
      'demo/images/avatar.png',
      'demo/images/avatar2.png',
      'demo/images/avatar3.png',
      'demo/images/avatar04.png',
      'demo/images/avatar5.png',
      'demo/images/photo1.png',
      'demo/images/photo2.png',
      'demo/images/photo3.jpg',
      'demo/images/photo4.jpg',
      'demo/images/user1.jpg',
      'demo/images/user2.jpg',
      'demo/images/user3.jpg',
      'demo/images/user4.jpg',
      'demo/images/user5.jpg',
      'demo/images/user6.jpg',
      'demo/images/user7.jpg',
      'demo/images/user8.jpg'
    ]
    return this.pick(demo)
  }
})
