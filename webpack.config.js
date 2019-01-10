const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, './src/lib/index.js'),
  output: {
    path: path.resolve(__dirname, './dist/lib'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.html$/,
        loader: "html-loader",
        options: {minimize: true}
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/docs/index.html",
      filename: "./index.html"
    })
  ]
};
