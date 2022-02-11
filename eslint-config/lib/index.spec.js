// @ts-check

const cp = require('child_process');
const util = require('util');

const execFile = util.promisify(cp.execFile);

const printConfig = (filename) =>
  execFile('npx', ['eslint', '--print-config', filename]);

it('configures javascript correctly', async () => {
  const { stdout, stderr } = await printConfig('index.js');
  expect(stderr).toEqual('');

  const config = JSON.parse(stdout);
  expect(config).toMatchSnapshot();
});

it('configures javascript tests correctly', async () => {
  const { stdout, stderr } = await printConfig('index.spec.js');
  expect(stderr).toEqual('');

  const config = JSON.parse(stdout);
  expect(config).toMatchSnapshot();
});

it('configures typescript correctly', async () => {
  const { stdout, stderr } = await printConfig('index.ts');
  expect(stderr).toEqual('');

  const config = JSON.parse(stdout);
  expect(config).toMatchSnapshot();
});

it('configures typescript tests correctly', async () => {
  const { stdout, stderr } = await printConfig('index.spec.ts');
  expect(stderr).toEqual('');

  const config = JSON.parse(stdout);
  expect(config).toMatchSnapshot();
});
