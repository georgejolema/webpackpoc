const path = require('path');

module.exports = {
  entry: ['./web/main.ts'],
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  devtool: "source-map",
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  module:{
    rules: [
      {
        test: /html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].html'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run postcss actions
          options: {
            plugins: function () { // postcss plugins, can be exported to postcss.config.js
              return [
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
    ]
  },
  devServer: {
    contentBase: 'dist'
  }
}