// @ts-check
'use strict';

/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@stylistic'],
  extends: ['eslint:recommended', 'plugin:n/recommended'],
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
    {
      files: ['test/**', '*.test.*'],
      rules: {
        'n/no-extraneous-import': 'off',
        'n/no-extraneous-require': 'off',
        'n/no-unpublished-import': 'off',
        'n/no-unpublished-require': 'off',
      },
    },
  ],
};
