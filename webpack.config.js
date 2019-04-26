const path = require('path');

const { NODE_ENV } = process.env;
const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const ENVIRONMENTS = [DEVELOPMENT, PRODUCTION];

if (ENVIRONMENTS.every(mode => NODE_ENV !== mode)) {
  throw new Error(`Unknown environment ${NODE_ENV}`);
}

const CWD = process.cwd();

const config = {
  mode: NODE_ENV,
  entry: path.join(CWD, 'src', 'index.tsx'),
  output: {
    filename: 'index.js',
    path: path.join(CWD, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  devServer: {
    contentBase: path.join(CWD, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/'
  }
};

module.exports = config;
