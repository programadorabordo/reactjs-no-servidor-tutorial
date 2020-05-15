const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle_client.js'
  },
  module: {
    rules: [{
      test: /.js/,
      use: 'babel-loader'
    }]
  }
}