const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'build'),
  },
  resolve: {
    extensions: ['.js','.jsx'],
  },
  
  module: {
    rules: [
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        },
      },
      {
        test: /scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", 'sass-loader'],
      },
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
  ],
  
  devServer: {
    host: 'localhost',
    port: 5000,
    static: {
      directory: path.resolve(__dirname, './build')
    },
    proxy: {
      '/blueprint/**': 'http://localhost:5000',
    }
  },
};