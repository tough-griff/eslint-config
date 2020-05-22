# @tough-griff/eslint-config

My personal preferred ESLint configuration.

## Usage

First, install the module and all necessary peer dependencies:

```sh
npm install -D @tough-griff/eslint-config-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier
```

or, using [`install-peerdeps`](https://github.com/nathanhleung/install-peerdeps):

```sh
npx install-peerdeps --dev @tough-griff/eslint-config
```

Add `"extends": "@tough-griff/eslint-config-typescript"` to your eslint config,
wherever it may live.
