/* eslint-disable no-undef */
//eslit-disable-next-line
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "comma-spacing": ["error", { before: false, after: true }],
  },
};
