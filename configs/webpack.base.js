const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    // app: './src/index.js',
    // print: './src/print.js',
    app: {
      import: './src/index.js',
      dependOn: ['lodash', 'dayjs'],
    },
    print: {
      import: './src/print.js',
      dependOn: ['lodash', 'dayjs'],
    },
    lodash: 'lodash',
    dayjs: 'dayjs',
  },
  output: {
    // 出口路径必须指定为绝对路径
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    // 自动处理html模版
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: 'index.html',
      minify: false,
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
}

module.exports = webpackBase
