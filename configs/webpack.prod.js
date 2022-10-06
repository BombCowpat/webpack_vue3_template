const path = require('path')
const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
/** @type { import('webpack').Configuration } */
const webpackProd = merge(webpackBase, {
  mode: 'production',
  output: {
    clean: true,
  },
  plugins: [
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
