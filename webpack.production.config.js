let path = require('path')
let webpack = require('webpack')
let autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'source-map',
  entry: [
    './index'
  ],
  output: {
    pathinfo: true,
    path: path.join(__dirname, 'build/'),
    filename: 'index.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      // sourceMap: true,
      beautify: false,
      comments: false,
      minimize: true,
      debug: false,
      compress: {
        sequences: true,
        booleans: true,
        loops: true,
        unused: true,
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  module: {
    rules: [
      { 
        test: /\.json$/, 
        use: "json-loader" 
      },
      {
        test: /(\.jsx|\.js)$/,
        use: [ 'babel-loader' ],
        include: [
          path.resolve('./')
        ]
      },
    ]
  },
}
