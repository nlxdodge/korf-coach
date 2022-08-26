module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"]
  }
}
