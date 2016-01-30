var webpack = require('webpack');
var config = require('./webpack.config.js');

// set the source map
config.devtool = 'source-map';

// add the hot module replacement (HMR) plugin
config.plugins.push(new webpack.HotModuleReplacementPlugin());

// setup the webpack development server
config.devServer = {
  colors: true,
  historyApiFallback: true,
  inline: true,
  hot: true
};

module.exports = config;

