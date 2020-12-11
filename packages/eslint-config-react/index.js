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
  plugins: ['jest-dom', 'react', 'react-hooks', 'testing-library', 'better-styled-components'],
  extends: [
    ...['jest-dom', 'react', 'react-hooks', 'testing-library', 'better-styled-components'].map((path) =>
      require.resolve(`./rules/${path}`)
    ),
    '@ofadiman/eslint-config-base'
  ]
}
