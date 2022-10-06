const path = require('path')
const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
/** @type { import('webpack').Configuration } */
const webpackProd = merge(webpackBase, {
  mode: 'production',
  output: {
    clean: true,
  },
  plugins: [
    // 自动处理html模版
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: 'index.html',
      minify: false,
    }),
    // 复制静态资源
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: 'public',
        },
      ],
    }),
    // 输出文件清单
    new WebpackManifestPlugin(),
  ],
})

module.exports = webpackProd
