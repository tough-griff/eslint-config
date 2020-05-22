/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.spec.*', '*.test.*'],
      env: {
        jest: true,
      },
      rules: {
        'node/no-unpublished-require': 'off',
      },
    },
  ],
};
