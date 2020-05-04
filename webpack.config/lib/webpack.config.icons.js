const path = require('path')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

console.log('-----------------------ENV:production-icons-----------------------')
module.exports = {
  mode: 'production',
  target: "web",
  entry: path.resolve(__dirname, '../../lib/icons/index.js'),
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'ha-icons.js',
    library: 'HaIcons',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
          options: {
            presets: ['minify']
          }
        }
      }
    ]
  },
  plugins: [   
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', // 不启动展示打包报告的http服务器
      generateStatsFile: true, // 是否生成stats.json文件
      statsFilename: 'stats-icons.json',
    })
  ],
}