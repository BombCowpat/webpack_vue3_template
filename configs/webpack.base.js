const path = require('path')
// 引入webpack配置文件的类型定义，提供语法提示
/** @type { import('webpack').Configuration } */
const webpackBase = {
  /**
   * https://webpack.js.org/configuration/entry-context/#context
   * 配置webpack的CWD
   */
  context: path.resolve(__dirname, '../'),
  entry: {
    // 必须以 './' 开头的相对路径，不能省略
    app: './src/index.js',
  },
  output: {
    // 出口路径必须指定为绝对路径
    path: path.resolve(__dirname, '../dist'),
  },
}

module.exports = webpackBase
