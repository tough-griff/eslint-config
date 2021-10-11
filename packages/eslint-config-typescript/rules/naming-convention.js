module.exports = [
  'error',
  {
    selector: 'default',
    format: ['camelCase'],
  },

  {
    selector: 'variableLike',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
  },
  {
    selector: 'variableLike',
    modifiers: ['unused'],
    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    leadingUnderscore: 'require',
  },

  {
    selector: 'memberLike',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
  },
  {
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    leadingUnderscore: 'require',
  },

  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
];
