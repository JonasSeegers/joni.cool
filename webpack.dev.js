const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const config = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, './public'),
    publicPath: '/',
    port: 3000
  }
};

module.exports = merge(common, config);
