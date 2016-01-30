var webpack = require('webpack');
var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// update the output files to use hashes for cache busting
config.output.filename = '[name]-[hash].js';

// modify the styles loader to include the extract text plugin so that our
// style sheets are in a separate file and not apart of the bundle
var styleLoader = config.module.loaders.find((ldr) => ldr['id'] === 'styles');
styleLoader.loader = ExtractTextPlugin.extract('style', 'css?modules!postcss');

// add optimization plugins
config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin(),
  new ExtractTextPlugin('[name]-[hash].css')
);

module.exports = config;
