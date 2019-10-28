const path = require('path');

module.exports = {
  entry: {
    index: './source/js/index.js',
    OnGrab: './source/js/OnGrab.js'
  },
  output: {
    path: path.resolve(__dirname, 'build/js'),
    publicPath: '_ui/build/js/arezzo/pages/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
};
