const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
//压缩js
const TerserPlugin = require('terser-webpack-plugin');
//清除无用的 CSS
const PurgecssWebpackPlugin = require('purgecss-webpack-plugin')
const glob = require('glob'); // 文件匹配模式

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin //分析构建结果

// 路径处理方法
function resolve(dir) {
  return path.join(__dirname, dir);
}
const PATHS = {
  src: resolve('src')
}
console.log('process.env.NODE_ENV=', process.env.NODE_ENV) // 打印环境变量
// 费时分析
const config = {
  mode: 'none',
  entry: './src/index.js', // 打包入口地址
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.join(__dirname, 'dist') // 输出文件目录
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: resolve('src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // 启用缓存
              presets: [
                '@babel/preset-env'
              ],
            }
          }
        ]
      },
      {
        test: /\.(s[ac]|c)ss$/i, //匹配所有的 sass/scss/css 文件
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'cache-loader', // 获取前面 loader 转换的结果
          'css-loader',
          'postcss-loader',
          'sass-loader', //use: 对应的 Loader 名称 Loader 的执行顺序是固定从后往前，
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        type: "asset",
        //解析
        parser: {
          //转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          }
        },
        generator: {
          //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
          filename: 'img/[name].[hash:6][ext]',
          //打包后对资源的引入，文件命名已经有/img了
          publicPath: './'
        },
      },
    ]
  },
  plugins: [ // 配置插件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({ // 让css成为独立的文件 style-loader只是把样式插入到head标签里
      filename: 'css/[name].[hash:8].css'
    }),
    new PurgecssWebpackPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
    }),
    // new BundleAnalyzerPlugin({
    //   // analyzerMode: 'disabled',  // 不启动展示打包报告的http服务器
    //   // generateStatsFile: true, // 是否生成stats.json文件
    // })
  ],
  devServer: {
    static: path.resolve(__dirname, 'public'), // 静态文件目录
    compress: true, //是否启动压缩 gzip
    port: 8080, // 端口号
    // open:true  // 是否自动打开浏览器
  },
  resolve: {
    // 配置别名
    alias: {
      '~': resolve('src'),
      '@': resolve('src'),
      'components': resolve('src/components'),
    },
    extensions: ['.ts', '...'],  //...代表默认['.js', '.json', '.wasm'],
    modules: [resolve('src'), 'node_modules'], //src目录下的文件优先于node_modules
  },
  cache: {
    type: 'filesystem',
  },
  optimization: {
    minimize: true,
    minimizer: [
      // 添加 css 压缩配置
      new OptimizeCssAssetsPlugin({}),
      // 添加 js 压缩配置
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        extractComments: false, // 不将注释提取到单独的文件中
        terserOptions: {
          warnings: false,
          compress: {
            drop_console: true
          },
          mangle: true,
          output: {
            comments: false,
          },
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false
        }
      })
    ]
  },
}

module.exports = (env, argv) => {
  console.log('argv.mode=', argv.mode) // 打印 mode(模式) 值
  // 这里可以通过不同的模式修改 config 配置

  return config
}
