# Custom eslint configs

Monorepo provides extensible configs for [eslint](https://eslint.org/).

## Available configurations

Currently, there are 3 available configurations:

- `@ofadiman/eslint-config-base` - Common rules valid for both `NodeJS` and `ReactJS` development.
- `@ofadiman/eslint-config-node` - Rules specific for `NodeJS` development.
- `@ofadiman/eslint-config-react` - Rules specific for `ReactJS` development.

## Installation

To install one of the configs just run the following command:

```shell
npx install-peerdeeps eslint-config-base
```

This will install the config itself and all its dependencies.

## Usage

To use the installed config, just add its name to `extends` field in your eslint configuration file:

```js
module.exports = {
  extends: ['@ofadiman/eslint-config-base']
}
```

## Info

- The configs for `NodeJS` and `ReactJS` already have a base config listed in their dependencies, so you don't have to install it manually.
