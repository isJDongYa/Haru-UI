const VueLoaderPlugin = require('vue-loader/lib/plugin')


const path = require('path')

console.log('-----------------------ENV:development-----------------------')
module.exports = {
  mode: 'development',
  target: "web",
  entry: './sample/app.js',
  devServer: {
    contentBase: path.resolve(__dirname, '../sample/public'),
    overlay: true,
    port: 8070,
    stats: "errors-only"
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
          loader: 'babel-loader?cacheDirectory=true'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
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
  devtool: "source-map"
}