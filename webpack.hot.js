var webpack = require('webpack');
var path = require('path');
var assign = require('object-assign');

var commonConfig = require('./webpack.common');

module.exports = assign({}, commonConfig, {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:1234',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
