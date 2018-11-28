'use strict';

const webpack = require('atool-build/lib/webpack');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['antd', {
    style: 'css'  // if true, use less
  }]);
  // Parse all less files as css module.
  webpackConfig.module.loaders.forEach(function(loader, index) {
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
      loader.test = /\.dont\.exist\.file/;
    }
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.test = /\.less$/;
    }
  });

  const newEntries = {
    vendor: [
      'react',
      'react-dom',
      'history',
      'classnames',
      'react-router',
      'react-redux',
      'react-router-redux',
      'redux-logger',
      'redux-thunk'
    ]
  };

  webpackConfig.entry = Object.assign({}, webpackConfig.entry, newEntries);

  webpackConfig.plugins.shift();

  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    })
  );

  return webpackConfig;
};
