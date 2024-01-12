// @ts-check
'use strict';

const { rules: tsPluginRules } = require('@typescript-eslint/eslint-plugin');
const baseRules = require('./base');

/**
 * Base rules to be expanded upon. Also handles TypeScript specific settings
 * which aren't as simple as copying over the normal rule config.
 * @type {import('eslint').Linter.RulesRecord}
 */
const tsBaseRules = {
  '@typescript-eslint/no-empty-interface': ['warn', { allowSingleExtends: true }],
  '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
  '@typescript-eslint/no-this-alias': ['error', { allowedNames: ['self'] }],
};

/**
 * TypeScript plugin rule overrides for base ESLint rules.
 * @type {import('eslint').Linter.RulesRecord}
 */
module.exports = Object.entries(baseRules).reduce(
  (rulesRecord, [rule, config]) => {
    // If the rule is already specified above in `tsBaseRules` or if it does not
    // have a ts specific implementation, leave as-is.
    if (rule in rulesRecord || !(rule in tsPluginRules)) return rulesRecord;

    // Disable the original and override with the TypeScript plugin rule.
    rulesRecord[rule] = 'off';
    rulesRecord[`@typescript-eslint/${rule}`] = config;

    return rulesRecord;
  },
  tsBaseRules,
);
