const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    })
  ],
  devServer: {
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:8080',
        pathRewrite: { '^/api': '' },
      },
    ],
  },
};