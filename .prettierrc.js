module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'none',
  semi: true,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  overrides: [
    {
      files: ['*.json', '.eslintrc', '.tslintrc', '.prettierrc', '.tern-project'],
      options: {
        parser: 'json',
        tabWidth: 2
      }
    },
    {
      files: '*.{css,sass,scss,less}',
      options: {
        parser: 'css',
        tabWidth: 2
      }
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript'
      }
    },
    {
      files: '*.vue',
      options: {
        parser: 'vue'
      }
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown'
      }
    }
  ]
};
