var path = require('path');
// allows the html file to be copied into the dist folder
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader','css-loader'] },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })],
  mode: "development"
}
