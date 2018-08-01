const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  }
};
