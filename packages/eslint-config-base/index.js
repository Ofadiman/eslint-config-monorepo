module.exports = {
  env: {
    es2020: true,
    jest: true
  },
  reportUnusedDisableDirectives: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module'
  },
  ignorePatterns: ['dist', '.eslintrc.js'],
  settings: {
    ['import/resolver']: {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    jest: {
      version: 'detect'
    }
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jest',
    'prettier',
    'promise',
    'simple-import-sort',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unicorn'
  ],
  extends: [
    'eslint',
    'import',
    'jest',
    'prettier',
    'promise',
    'simple-import-sort',
    'sort-keys-fix',
    'typescript-eslint',
    'typescript-sort-keys',
    'unicorn'
  ].map((path) => require.resolve(`./rules/${path}`))
}
