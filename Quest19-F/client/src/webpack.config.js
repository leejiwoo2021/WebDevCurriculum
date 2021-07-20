const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.ts',
    sw: './src/sw.ts',
  },
  output: {
    path: __dirname + 'public',
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /tests/,
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    fallback: {
      crypto: false,
    },
    extensions: ['.ts', '.js'],
    alias: {
      vue$: 'vue/dist/vue.runtime.esm-bundler.js',
    },
    plugins: [new TsconfigPathsPlugin()],
  },
  devtool: 'eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
      generate: () => {
        return {
          short_name: 'Text Editor',
          name: 'Text Editor made by Vue.js',
          icons: [
            {
              src: 'logo.png',
              type: 'image/png',
              sizes: '192x192',
            },
            {
              src: 'logo2.png',
              type: 'image/png',
              sizes: '512x512',
            },
          ],
          start_url: '/?source=pwa',
          background_color: '#4c5aff',
          display: 'standalone',
          theme_color: '#4c5aff',
          description: 'vuejs로 생성한 텍스트 에디터입니다.',
        };
      },
    }),
  ],
};
