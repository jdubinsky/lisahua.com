const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './app.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    mode: "production",
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          "react": "preact/compat",
          "react-dom/test-utils": "preact/test-utils",
          "react-dom": "preact/compat"
        }
    },
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.txt$/i,
          use: 'raw-loader',
        },
        {
          test: /\.(jpe?g|gif|png|wav|mp3)$/,
          loader: "file-loader",
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
      new HtmlWebpackPlugin({
        template: "./base.html"
      })
    ]
};
