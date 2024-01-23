// @ts-check
'use strict';

const stylistic = require('@stylistic/eslint-plugin');

/**
 * Base rule set to be expanded upon.
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = {
  // Possible Problems
  'no-new-native-nonconstructor': 'error',
  'no-unused-vars': ['error', { args: 'after-used' }],

  // Suggestions
  'arrow-body-style': ['error', 'as-needed'],
  'capitalized-comments': ['warn', 'always', { ignoreConsecutiveComments: true }],
  'default-case-last': 'error',
  'default-param-last': 'error',
  'eqeqeq': 'error',
  'func-names': ['warn', 'as-needed'],
  'new-cap': ['warn', { newIsCap: true, capIsNew: true }],
  'no-console': 'warn',
  'no-else-return': 'error',
  'no-lonely-if': 'error',
  'no-sequences': 'error',
  'no-var': 'error',
  'object-shorthand': ['error', 'always'],
  'prefer-const': 'error',
  'prefer-destructuring': ['error', {
    AssignmentExpression: { array: false, object: false },
    VariableDeclarator: { array: false, object: true },
  }],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'radix': 'warn',
  'strict': ['error',
    'safe'],

  // @stylistic
  ...stylistic.configs.customize({
    braceStyle: '1tbs',
    flat: false,
    semi: true,
  }).rules,

  '@stylistic/array-bracket-newline': ['error', 'consistent'],
  '@stylistic/array-element-newline': ['error', 'consistent'],
  '@stylistic/object-curly-newline': ['error', { consistent: true }],
  '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
};
