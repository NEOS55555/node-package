/*
 * @Descripttion:
 * @Author: liuchunhui
 * @Date: 2020-12-08 14:31:20
 * @LastEditTime: 2020-12-15 08:51:14
 */
process.env.VUE_APP_REBUILDTIME = new Date(); // 版本时间戳
console.log(process.env.NODE_ENV);

module.exports = {
  publicPath: "./",
  lintOnSave: false,
  // assetsDir: 'static',
  // 输出文件目录
  outputDir: process.env.OUTPUT_DIR,
  configureWebpack: (config) => {
    // if (debug) { // 开发环境配置
    config.devtool = "source-map";
    // }
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "南京民生银行";
      return args;
    });
  },

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  // css相关配置
  // css: {
  //   // 开启 CSS source maps?
  //   sourceMap: false,

  //   // css预设器配置项
  //   loaderOptions: {
  //     sass: {
  //       prependData: `
  //       @import "@/assets/style/variables.scss";
  //       @import "@/assets/style/mixin.scss";
  //       @import "@/assets/style/reset.scss";
  //       @import "@/assets/style/extend.scss";
  //       `
  //     }
  //   }
  // },
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: `
              @import "@/assets/style/variables.scss";
              @import "@/assets/style/mixin.scss";
              @import "@/assets/style/reset.scss";
              @import "@/assets/style/extend.scss";
              `,
      },
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 100, // 换算的基数1920/100
            minPixelValue: 2,
            selectorBlackList: [".el-"], // 忽略转换正则匹配项
            propList: ["*"],
          }),
        ],
      },
    },
  },
  // webpack-dev-server 相关配置 10.251.186.45:8070
  // 阿里云部署 相关配置 112.126.122.236 端口号不变
  devServer: {
    open: true,
    // host: 'localhost',
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://10.25.0.168:8889",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
      "/logapi": {
        target: "http://10.25.0.168:8888",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/logapi": "",
        },
      },
    },
  },
};
