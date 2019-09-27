const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const aliyunTheme = require('@ant-design/aliyun-theme');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: aliyunTheme
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // use: ['babel-loader', 'eslint-loader'],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Advanced React with Webpack Setup',
      template: './src/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
};
