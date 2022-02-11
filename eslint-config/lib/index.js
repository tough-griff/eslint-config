// @ts-check

/** @type {import('eslint').Linter.Config} */
const config = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'class-methods-use-this': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-underscore-dangle': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.cjs'],
      extends: ['plugin:node/recommended'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.spec.*', '*.test.*'],
      env: {
        jest: true,
      },
      rules: {
        'node/no-unpublished-require': 'off',
      },
    },
    {
      files: ['*.ts'],
      extends: [require.resolve('./typescript')],
    },
  ],
};

module.exports = config;
