var path = require('path');
var glob = require('glob')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var Dotenv = require('dotenv-webpack');
module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    config.module.rules.push(
      {
        test: /\.(scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    config.module.loaders = [{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    }
  ]
  config.plugins.push(new Dotenv())
    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }
}