const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // use: {
        //   options: {
        //     loader: 'babel-loader',
        //     presets: ['@babel/preset-env'],
        //     plugins: ['@babel/plugin-proposal-class-properties']
        //   }
        // },
        exclude: /tests/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ]        
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // fallback: {
    //   "https": require.resolve("https-browserify"),
    //   "stream": require.resolve("stream-browserify"),
    //   "path": require.resolve("path-browserify"),
    //   "util": require.resolve("util/"),
    //   "zlib": require.resolve("browserify-zlib"),
    //   "os": require.resolve("os-browserify"),
    //   "fs":false,
    //   "net":false,
    //   "child_process":false,
    //   "assert":false,
    //   "readline": false,
    //   "url": false ,
    //   "http": false,
    // }
    plugins:[new TsconfigPathsPlugin()]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'public/index.html'
     }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ]
};
