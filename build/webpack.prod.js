const path = require('path')
const utils = require('./utils')
const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
/** @type { import('webpack').Configuration } */
const webpackProd = merge(webpackBase, {
  mode: 'production',
  devtool: false,
  output: {
    clean: true,
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      extract: true,
      usePostCSS: true,
    }),
  },
  plugins: [
    new MiniCssExtractPlugin(),
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
