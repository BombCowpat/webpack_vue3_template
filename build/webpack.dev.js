const utils = require('./utils')
const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base')
const portfinder = require('portfinder')

/** @type { import('webpack').Configuration } */
const webpackDev = merge(webpackBase, {
  mode: 'development',
  devtool: 'inline-source-map',
  //stats 选项让你更精确地控制 bundle 信息该怎么显示 https://webpack.docschina.org/configuration/stats/
  stats: {
    assets: false,
    modules: false,
  },
  devServer: {},
  module: {
    rules: utils.styleLoaders({
      sourceMap: false,
      usePostCSS: true,
    }),
  },
})

module.exports = new Promise((resolve, reject) => {
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // add port to devServer config
      webpackDev.devServer.port = port
      resolve(webpackDev)
    }
  })
})
