module.exports = {
  rules: {
    'import/default': 'error',
    'import/dynamic-import-chunkname': 'error',
    'import/export': 'error',
    'import/exports-last': 'error',
    'import/extensions': ['error', 'never', { svg: 'always', png: 'always', jpg: 'always' }],
    'import/first': 'error',
    'import/group-exports': 'off', // Does not allow to have multiple exports in 1 file.
    'import/max-dependencies': 'off',
    'import/named': 'off', // Does not work with TypeScript.
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-commonjs': 'error',
    'import/no-cycle': 'error',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'off', // Sometimes breaks the whole eslint for unknown reasons.
    'import/no-import-module-exports': 'off', // Breaks imports for unknown reasons.
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off', // Sometimes there is no other options that importing something as a namespace (i.e. `import * as name from 'module'` syntax).
    'import/no-nodejs-modules': 'off',
    'import/no-relative-packages': 'error',
    'import/no-relative-parent-imports': 'off', // Shows an error when trying to inject modules from the same level directories in NestJS.
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': 'off', // Shows an error when trying to resolve a path to object living in `dist` directory (e.g. `react-hook-form/dist/types`).
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/no-webpack-loader-syntax': 'error',
    'import/order': 'off', // Sorting imports is already handled by the `eslint-plugin-simple-import-sort`.
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off' // Breaks some type definition files (e.g. `react-app-env.d.ts`).
  }
}
