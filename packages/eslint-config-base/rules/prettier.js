module.exports = {
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        printWidth: 120,
        semi: false,
        singleQuote: true,
        quoteProps: 'as-needed',
        tabWidth: 2,
        trailingComma: 'none'
      }
    ]
  }
}
