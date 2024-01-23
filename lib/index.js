// @ts-check
'use strict';

/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@stylistic'],
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: require('./rules/base'),
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/stylistic'],
      rules: require('./rules/typescript'),
    },
  ],
};
