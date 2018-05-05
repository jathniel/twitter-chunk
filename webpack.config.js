module.exports = {
  entry: './assets/js/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'importer.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
