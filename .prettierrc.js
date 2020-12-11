module.exports = {
  arrowParens: 'always',
  printWidth: 120,
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  tabWidth: 2,
  trailingComma: 'none',
  overrides: [
    {
      files: ['packages/**/rules/*'],
      options: {
        printWidth: 1000
      }
    }
  ]
}
