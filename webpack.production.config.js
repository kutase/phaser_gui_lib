let path = require('path')
let webpack = require('webpack')
let autoprefixer = require('autoprefixer')

let canvasinput = path.join(__dirname, '/node_modules/canvasinput/CanvasInput.js')

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
      beautify: true,
      // comments: false,
      // minimize: true,
      // debug: false,
      // compress: {
      //   sequences: true,
      //   booleans: true,
      //   loops: true,
      //   unused: true,
      //   warnings: false,
      //   drop_console: true,
      //   unsafe: true
      // }
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
      {
        test: /canvasinput\.js/,
        use: 'expose-loader?CanvasInput'
      },
    ]
  },
  resolve: {
    alias: {
      'canvasinput': canvasinput,
    },
  }
}
