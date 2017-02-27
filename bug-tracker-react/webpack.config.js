module.exports = {
  entry: [
    './src/index.js'
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
