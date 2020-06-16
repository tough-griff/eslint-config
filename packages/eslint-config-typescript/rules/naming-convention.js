module.exports = [
  'error',
  {
    selector: 'default',
    format: ['camelCase'],
  },
  {
    selector: 'variable',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
  },
  {
    selector: 'variable',
    types: ['function'],
    format: ['camelCase', 'PascalCase'],
  },
  {
    selector: 'method',
    format: ['camelCase', 'PascalCase'],
  },
  {
    selector: 'property',
    types: ['function'],
    format: ['camelCase', 'PascalCase'],
  },
  {
    selector: 'parameter',
    format: ['camelCase'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'class',
    format: ['PascalCase'],
  },
  {
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['camelCase'],
    leadingUnderscore: 'require',
  },
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
];
