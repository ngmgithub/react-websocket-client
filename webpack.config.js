var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'www'); // alternatively 'src/client/public'
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // Process all files ending in .jsx or .js
        // Load Bable to transpile ES2015 to ES5
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
      // todo: consider adding loaders for css, sass, eslint and unit testing
      // see React course source from Codementor for examples
    ]
  }
};

module.exports = config;
