const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },{
      test: /\.less$/,
      exclude: /node_modules/,
      loader: "style-loader!css-loader!less-loader"
    },{
      test: /\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack-loader?{ pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
      ]
  }]
  },
  resolve: {
    root: [ path.resolve('./src') ],
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline: true
  }
};
