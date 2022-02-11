// @ts-check

// Thanks @iamturns for the help!
// see: https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/lib/shared.js

const { rules: tsPluginRules } = require('@typescript-eslint/eslint-plugin');
const airbnbConfig = require('eslint-config-airbnb-base');

/** @type {import('eslint').Linter.RulesRecord} */
const baseRules = airbnbConfig.extends.reduce((rules, ruleFile) => {
  try {
    return Object.assign(rules, require(ruleFile).rules); // eslint-disable-line global-require, import/no-dynamic-require
  } catch (err) {
    return rules;
  }
}, {});

/** @type {import('eslint').Linter.RulesRecord} */
const tsBaseRules = {
  // The following rules are enabled in Airbnb config, but are already checked (more thoroughly) by the TypeScript compiler
  // Some of the rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
  'constructor-super': 'off',
  'getter-return': 'off',
  'no-const-assign': 'off',
  'no-dupe-args': 'off',
  'no-dupe-class-members': 'off',
  'no-dupe-keys': 'off',
  'no-func-assign': 'off',
  'no-new-symbol': 'off',
  'no-obj-calls': 'off',
  'no-redeclare': 'off',
  'no-this-before-super': 'off',
  'no-undef': 'off',
  'no-unreachable': 'off',
  'no-unsafe-negation': 'off',
  'valid-typeof': 'off',
  'import/named': 'off',
  'import/no-unresolved': 'off',

  // Prettier will handle these
  indent: 'off',
  '@typescript-eslint/indent': 'off',
  quotes: 'off',
  '@typescript-eslint/quotes': 'off',

  // Replace Airbnb 'camelcase' rule with '@typescript-eslint/naming-convention'
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
  camelcase: 'off',
  '@typescript-eslint/naming-convention': [
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
  ],

  // Replace Airbnb 'comma-dangle' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
  // The TypeScript version also adds 3 new options, all of which should be set to the same value as the base config
  'comma-dangle': 'off',
  '@typescript-eslint/comma-dangle': [
    baseRules['comma-dangle'][0],
    {
      ...baseRules['comma-dangle'][1],
      enums: baseRules['comma-dangle'][1].arrays,
      generics: baseRules['comma-dangle'][1].arrays,
      tuples: baseRules['comma-dangle'][1].arrays,
    },
  ],

  'lines-between-class-members': 'off',
  '@typescript-eslint/lines-between-class-members': [
    'error',
    'always',
    { exceptAfterSingleLine: true, exceptAfterOverload: true },
  ],

  // Append 'ts' and 'tsx' to Airbnb 'import/extensions' rule
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
  'import/extensions': [
    baseRules['import/extensions'][0],
    baseRules['import/extensions'][1],
    {
      ...baseRules['import/extensions'][2],
      ts: 'never',
      tsx: 'never',
    },
  ],

  // Append 'ts' and 'tsx' extensions to Airbnb 'import/no-extraneous-dependencies' rule
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
  'import/no-extraneous-dependencies': [
    baseRules['import/no-extraneous-dependencies'][0],
    {
      ...baseRules['import/no-extraneous-dependencies'][1],
      devDependencies: baseRules[
        'import/no-extraneous-dependencies'
      ][1].devDependencies.reduce((result, devDep) => {
        const toAppend = [devDep];
        const devDepWithTs = devDep.replace(/\bjs(x?)\b/g, 'ts$1');
        if (devDepWithTs !== devDep) {
          toAppend.push(devDepWithTs);
        }
        return [...result, ...toAppend];
      }, []),
    },
  ],

  'import/prefer-default-export': 'off',
};

const tsRules = Object.entries(baseRules).reduce(
  (rulesRecord, [rule, ruleEntry]) => {
    if (rule in rulesRecord || !(rule in tsPluginRules)) return rulesRecord;

    // Disable the original version and override with the typescript plugin rule
    rulesRecord[rule] = 'off';
    rulesRecord[`@typescript-eslint/${rule}`] = ruleEntry;

    return rulesRecord;
  },
  tsBaseRules,
);

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    // Apply special parsing for TypeScript files
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
      },
    },
    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    // Resolve type definition packages
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
  rules: tsRules,
};
