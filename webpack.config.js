var webpack = require('webpack');
var path = require('path');
var assign = require('object-assign');

var commonConfig = require('./webpack.common');

module.exports = assign({}, commonConfig, {
  devtool: 'eval',
  entry: [
    './src/index'
  ]
});
