// @ts-nocheck
const { rules } = require('eslint-config-airbnb-base/rules/imports');

module.exports = [
  rules['import/no-extraneous-dependencies'][0],
  {
    ...rules['import/no-extraneous-dependencies'][1],
    devDependencies: rules[
      'import/no-extraneous-dependencies'
    ][1].devDependencies.map((glob) => glob.replace('js,jsx', 'js,jsx,ts,tsx')),
  },
];
