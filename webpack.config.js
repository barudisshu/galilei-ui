const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, './build/dist/components'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'umd',
  },
  entry: './src/docs/index.js',
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)?$/,
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
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: 'style-loader!css-loader?importLoaders=2!postcss-loader!sass-loader',
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        loader: 'style-loader!css-loader?importLoaders=1!postcss-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: { minimize: true },
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        exclude: /(node_modules)/,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new ForkTsCheckerWebpackPlugin()
  ],
};
