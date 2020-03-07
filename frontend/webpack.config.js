const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: './app.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.dev.bundle.js'
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
      new webpack.DefinePlugin({
        "process.env": {
          "API_HOST": JSON.stringify("http://localhost:9001/"),
          "STATIC_URL": JSON.stringify("https://lhua-static.s3.amazonaws.com/")
        }
      }),
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./base.html"
      })
    ]
};
