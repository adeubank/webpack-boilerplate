var webpack = require('webpack');
var common = require('./webpack.config.js');

module.exports = function () {
  // set the source map
  common.devtool = 'source-map';

  // add the hot module replacement (HMR) plugin
  common.plugins.push(new webpack.HotModuleReplacementPlugin());

  // setup the webpack development server
  common.devServer = {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  };
};
