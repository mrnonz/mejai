var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    config.module.rules.push({
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      })
    config.module.loaders = [{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }]
    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }
}