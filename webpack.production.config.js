var webpack = require('webpack');
var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// modify the styles loader to include the extract text plugin so that our
// style sheets are in a separate file and not apart of the bundle
var styleLoader = config.module.loaders.find((ldr) => ldr['id'] === 'styles');
styleLoader.loader = ExtractTextPlugin.extract('style', 'css?modules!postcss');

// add optimization plugins
config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin(),
  new ExtractTextPlugin('style.css')
);

module.exports = config;
