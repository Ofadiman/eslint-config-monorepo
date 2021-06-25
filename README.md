# Custom eslint configs

Monorepo provides extensible configs for [eslint](https://eslint.org/).

## Available configurations

Currently, there are 2 available configurations:

- `@ofadiman/eslint-config-base` - Configuration suitable for `NodeJS` and `ReactJS` development.
- `@ofadiman/eslint-config-react` - Extended configuration suitable for `ReactJS` development.

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

- The config for `ReactJS` already has a base config listed in its peer dependencies, so you don't have to install it manually.
