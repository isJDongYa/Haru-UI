const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require('path')

const publicDirInput = path.resolve(__dirname, 'public')
const publicDirOutput = path.resolve(__dirname, 'dist')

const mode = process.NODE_ENV === 'development' ? 'development' : "production"

module.exports = {
  mode,
  entry: './src/app.js',
  devServer: {
    contentBase: './dist'
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
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ],
    
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: publicDirInput,
        to: publicDirOutput
      }
    ]),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.json', '.scss', '.css'],
    alias: {

    }
  }
}