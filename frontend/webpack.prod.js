let webpack = require("webpack");
let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./app.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  mode: "production",
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    },
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: "raw-loader",
      },
      {
        test: /\.(ttf|eot|woff|woff2|otf)$/,
        loader: "file-loader",
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        API_HOST: JSON.stringify("https://www.lisahua.com/"),
        NODE_ENV: JSON.stringify("production"),
        STATIC_URL: JSON.stringify("https://lhua-static.s3.amazonaws.com/"),
      },
    }),
    new HtmlWebpackPlugin({
      template: "./base.html",
    }),
  ],
};
