const webpack = require('webpack')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: 'dist',
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        loader: ['babel-loader'],
        query: {
          presets: ['latest', 'react', 'stage-0']
        }
      },
      {
          test: /\.json$/,
          exclude: /(node_modules)/,
          loader: 'json-loader'
      }
    ]
  }
}
