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
        trailingComma: 'all',
      },
    ],
  },
  overrides: [
    {
      files: ['*.spec.*', '*.test.*'],
      env: {
        jest: true,
      },
    },
  ],
};
