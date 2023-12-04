// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // 진입점 설정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // CSS 적용을 위한 로더 설정
      },

    ],
  },
  // html 플러그인 세팅
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'bundle.html'
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), // 정적 파일 경로 설정
    port: 3000,
  },
};
