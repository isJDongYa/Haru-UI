const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const path = require('path')

console.log('-----------------------ENV:production-charts-----------------------')
module.exports = {
  mode: 'production',
  target: "web",
  entry: path.resolve(__dirname, '../../lib/charts/index.js'),
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'ha-charts.js',
    library: 'HaCharts',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
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
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', // 不启动展示打包报告的http服务器
      generateStatsFile: true, // 是否生成stats.json文件
      statsFilename: 'stats-charts.json',
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.json', '.scss', '.css'],
    alias: {
      '@lib': path.resolve('lib'),
      '@mixins': path.resolve('lib/mixins'),
      '@containers': path.resolve('lib/components/containers'),
      '@stuffings': path.resolve('lib/components/stuffings'),
      '@coordinater': path.resolve('lib/components/coordinater'),
      '@materials': path.resolve('lib/components/materials'),
      '@others': path.resolve('lib/components/others'),
      '@charts': path.resolve('lib/charts'),
      '@utils': path.resolve('lib/utils'),
      '@style': path.resolve('lib/style'),
      '@icons': path.resolve('lib/icons')
    }
  },
  externals: {
    'vue': 'vue',
    'vue-router': 'vue-router',
    'echarts': 'ECharts',
    'echarts-stat':'ecStat'
  }
}