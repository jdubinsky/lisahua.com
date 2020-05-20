module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: ["last 2 versions", "> 0.25%", "ie >= 10"],
      },
    ],
    ["@babel/typescript", { jsxPragma: "h" }],
  ],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/plugin-transform-runtime",
    ["@babel/transform-react-jsx", { pragma: "h" }],
  ],
};
