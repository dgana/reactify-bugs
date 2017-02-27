module.exports = {
  entry: [
    './src/index.jsx'
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
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
}
