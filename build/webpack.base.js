const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const publicPath = process.env.NODE_ENV === 'production' ? '/' : '/'
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
    publicPath: publicPath,
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: 'swc-loader',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024,
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'media/[name].[hash:8][ext]',
        },
      },
    ],
  },
  plugins: [
    // https://github.com/vuejs/core/tree/main/packages/vue
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new VueLoaderPlugin(),
    // 自动处理html模版
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: 'index.html',
      minify: false,
      favicon: 'favicon.ico',
    }),
  ],
  optimization: {
    usedExports: true,
  },
}

module.exports = webpackBase
