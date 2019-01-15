const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminJpegoptim = require('imagemin-jpegoptim');

module.exports = {
  mode:'development',
  entry:'./src/scripts/app.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js',
  },
  module: {
    rules: [
      {
    test: /\.js?/i,
    exclude: /node_modules/i,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  },
  {
    test: /\.s?css?/i,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '/dist',
        }
      },
      'css-loader',
      'sass-loader',
    ]
  }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new CopyWebpackPlugin([
      {from: './src/images', to: './images'}
    ]),
    new ImageMinPlugin({
      test: /\.(jpe?g|png|gif|svg)?/i,
      plugins: [
        ImageminJpegoptim({
          size: '50%',
          progressive: true,
        })
      ]
    })
  ]
}
