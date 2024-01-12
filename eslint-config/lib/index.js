// @ts-check
'use strict';

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['@stylistic'],
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: require('./rules/base'),
  overrides: [
    {
      files: ['*.ts', '*.cts', '*.mts'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: require('./rules/typescript'),
    },
    {
      files: ['test/**', '*.test.*'],
      rules: {
        'node/no-extraneous-import': 'off',
        'node/no-extraneous-require': 'off',
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'off',
      },
    },
  ],
};
