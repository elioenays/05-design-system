module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        singleQuote: true,
        trailingComma: 'all',
        jsxSingleQuote: true,
        bracketSpacing: true,
        bracketSameLine: false,
        singleAttributePerLine: true,
        semi: false,
        endOfLine: 'lf',
        printWidth: 80,
        tabWidth: 2,
      },
    ],
  },
}
