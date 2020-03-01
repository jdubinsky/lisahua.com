const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: './app.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    mode: "development",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          "react": "preact/compat",
          "react-dom/test-utils": "preact/test-utils",
          "react-dom": "preact/compat"
        }
    },
    devtool: "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      inline: true,
      compress: true,
      port: 9000
    },
    module: {
      rules: [
        {
          test: /\.txt$/i,
          use: 'raw-loader',
        },
        {
          test: /\.(jpe?g|gif|png|wav|mp3)$/,
          loader: "file-loader"
        },
        {
          test: /\.(ttf|eot|woff|woff2|otf)$/,
          loader: "file-loader"
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        }
      ],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./base.html"
      })
    ]
};
