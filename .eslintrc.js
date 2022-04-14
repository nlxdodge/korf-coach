module.exports = {
  root: true,
  env: {
    node: true
  },
  // TODO FIX LINTING
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parserOptions: {
    es2021: true,
  }
}
