const path = require('path')

console.log('-----------------------ENV:production-icons-----------------------')
module.exports = {
  mode: 'production',
  target: "web",
  entry: path.resolve(__dirname, '../../lib/icons/index.js'),
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'ha-icon.js',
    library: 'HaIcon',
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
  }
}