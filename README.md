# 民生银行，pad 端

## 项目说明

这个项目可能是 pc 和 pad 两端使用，所以，ui 框架使用 element-ui，页面布局使用 vw、vh，用于适配到 pc 端。
该项目所有数据都加密，所以使用 sendAjax 与后端进行交互。

## 项目安装

建议 cnpm 安装

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm install
cnpm install
```

## 本地启动

```
npm run serve // 同npm run dev
npm run dev // 启动本地开发环境 端口60000
npm run mock // 启动mock模拟数据 端口60001
npm run int // 启动集成测试环境 端口60002
npm run uat // 启动用户验收环境 端口60002
npm run prod // 启动生产环境 端口60003
```

## 打包发布

```
npm run buildint // 打包测试环境
npm run builduat // 打包阿里云环境
npm run build // 打包生产环境
```

## 单元测试

```
npm run test:unit // 待处理
```

## 环境变量说明

.env.development
.env.mock
.env.int
.env.production

NODE_ENV // 环境标识
BASE_URL // 基础路径
OUTPUT_DIR // 打包输出文件夹
VUE_APP_DEBUG // 是否启动调试模式
VUE_APP_API // 接口地址
VUE_APP_RESOURCE // 静态资源地址
VUE_APP_UPLOADURL // 上传路径
