const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  // output: {
  //   path: __dirname + '/dist',
  //   filename: 'bundle.js',
  // },
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
      'vue$':'vue/dist/vue.esm-browser.js',
    },
    plugins:[new TsconfigPathsPlugin()]
  },
  devtool: 'eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'public/index.html'
     }),
  ]
};
