module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: ["last 2 versions", "> 0.25%", "ie >= 10"]
      }
    ],
    ["@babel/typescript", { jsxPragma: "h" }]
  ],
  plugins: [
    "@babel/proposal-class-properties",
    ["@babel/transform-react-jsx", { pragma: "h" }]
  ]
};
