const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true
  },

  entry: './editor/index.jsx',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true
            }
          }
        ]
      },

      {
        test: /\.(woff(2)?|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: '_redirects'
      }
    ]),

    new HtmlWebPackPlugin({
      template: './editor/index.html',
      filename: './index.html'
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  }
};
