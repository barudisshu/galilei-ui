const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, './build/dist/components'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'umd',
  },
  entry: './src/docs/index.js',
  devServer: {
    contentBase: path.resolve(__dirname, './src/docs/index.html'),
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          cacheDirectory: true,
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            'react-hot-loader/babel',
          ],
        },
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: { minimize: true },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/docs/index.html',
      filename: './index.html',
    }),
    new ForkTsCheckerWebpackPlugin()
  ],
};
