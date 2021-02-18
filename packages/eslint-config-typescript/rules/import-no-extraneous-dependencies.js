// @ts-nocheck
const { rules } = require('eslint-config-airbnb-base/rules/imports');

module.exports = [
  rules['import/no-extraneous-dependencies'][0],
  {
    ...rules['import/no-extraneous-dependencies'][1],
    devDependencies: rules[
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
];
