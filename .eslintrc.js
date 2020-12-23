module.exports = {
  extends: "airbnb-typescript-prettier",
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react/prop-types": "off",
    "import/no-unresolved": [2, {"commonjs": true, "amd": true}],
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "no-param-reassign": [2, { "props": false }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "consistent-return": "off",
    "jsx-a11y/media-has-caption" : "off"
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [
          ".js",
          ".ts",
          ".jsx",
          ".tsx"
        ]
      }
    }
  }
};
