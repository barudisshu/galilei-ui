const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

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
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
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
  ],
};
