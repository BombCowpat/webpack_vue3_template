const path = require('path')
const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
/** @type { import('webpack').Configuration } */
const webpackProd = merge(webpackBase, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: 'index.html',
      minify: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: 'public',
        },
      ],
    }),
  ],
})

module.exports = webpackProd
