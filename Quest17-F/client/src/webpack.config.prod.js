const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'production',
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
        options: {
          hotReload: true 
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
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
    extensions: ['.ts', '.js'],
    alias: {
      'vue$':'vue/dist/vue.esm-browser.prod.js'
    },
    plugins:[new TsconfigPathsPlugin()]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: 'public/index.html'
     }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ]
};
