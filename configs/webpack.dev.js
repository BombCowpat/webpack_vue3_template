const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base')

/** @type { import('webpack').Configuration } */
const webpackDev = merge(webpackBase, {
  mode: 'development',
  devtool: 'inline-source-map',
})

module.exports = webpackDev
