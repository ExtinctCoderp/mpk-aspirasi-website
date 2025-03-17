const path = require("path");
const { FlatCompat } = require("@eslint/eslintrc");

const __filename = path.resolve(__dirname);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

module.exports = eslintConfig;