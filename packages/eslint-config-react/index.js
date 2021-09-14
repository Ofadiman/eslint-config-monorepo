module.exports = {
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['jest-dom', 'react', 'react-hooks', 'testing-library'],
  extends: [
    ...['jest-dom', 'react', 'react-hooks', 'testing-library'].map((path) => require.resolve(`./rules/${path}`)),
    '@ofadiman/eslint-config-base'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true, kebabCase: true } }]
      }
    }
  ]
}
