const path = require('path');
const webpack = require('webpack');




module.exports = {
  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'public/build')
  },

  plugins: [new webpack.ProgressPlugin()],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader'
    }]
  },

  devServer: {
    open: true,
    host: 'localhost'
  }
}