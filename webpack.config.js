const path = require('path');

const { NODE_ENV } = process.env;
const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const ENVIRONMENTS = [DEVELOPMENT, PRODUCTION];

const CWD = process.cwd();

if (ENVIRONMENTS.every(mode => NODE_ENV !== mode)) {
  throw new Error(`Unknown environment ${NODE_ENV}`);
}

const config = {
  mode: NODE_ENV,
  entry: path.join(CWD, 'src', 'index.tsx')
};
