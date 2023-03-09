const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

const dist = path.resolve(__dirname, "dist");

module.exports = {
  entry: {
    index: "./js/bin/index.js",
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'my-framework-client',
    libraryTarget: 'umd',
  },
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    static: dist,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, 'wasm'),
      outDir: path.resolve(__dirname, 'dist/wasm'),
    }),

    new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'js/static/index.html'),
            to: path.resolve(__dirname, 'dist/index.html')
          },
          {
            from: path.resolve(__dirname, 'js/static'),
            to: path.resolve(__dirname, 'dist/static'),
            noErrorOnMissing: true,
            globOptions: {
              ignore: ['**/index.html']
            }
          },
        ],
    }),
  ],
};

