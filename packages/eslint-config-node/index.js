module.exports = {
  env: {
    node: true
  },
  plugins: ['node'],
  extends: [...['node'].map((path) => require.resolve(`./rules/${path}`)), '@ofadiman/eslint-config-base']
}
