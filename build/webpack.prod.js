const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = function (env) {
  /** @type { import('webpack').Configuration } */
  const webpackProd = merge(webpackBase, {
    mode: 'production',
    devtool: false,
    output: {
      clean: true,
      filename: 'js/[name].[contenthash].js',
      chunkFilename: 'js/[name].[contenthash].js',
    },
    module: {
      rules: utils.styleLoaders({
        sourceMap: false,
        extract: true,
        usePostCSS: true,
      }),
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': require(`./envs/${env.env_config}.js`),
      }),
      // extract css into its own file
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: path.join('css/[name].[contenthash:8].css'),
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
  return webpackProd
}
