module.exports = {
  entry: './src/main.js',
  output: {
    publicPath: 'public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: 'public',
    port: 3000
  }
}
