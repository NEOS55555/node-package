
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    development: {
    },
    // 生产环境去掉console.log
    production: {
      plugins: ['transform-remove-console']
    }
  }
}
