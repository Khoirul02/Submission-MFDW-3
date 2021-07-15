/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    host: 'localhost',
    port: 8080,
    disableHostCheck: true,
  },
});
