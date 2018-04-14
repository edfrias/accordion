module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: [/\.css$/, /\.scss$/, /\.sass$/],
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    port: 8000
  }
};