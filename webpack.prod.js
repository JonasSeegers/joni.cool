const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CopyPlugin([
      { from: 'public/assets', to: 'assets' },
      { from: 'public/data', to: 'data' },
      { from: 'public/reset.css', to: 'reset.css' }
    ])
  ]
});
