/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['next', 'next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['unused-imports'],

  rules: {
    'prettier/prettier': [2, { singleQuote: true, trailingComma: 'all' }],

    'import/no-anonymous-default-export': 0,

    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-imports-ts': 2,

    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['internal'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
          },
        ],
      },
    ],
    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './src/shared',
            from: './src/entities',
          },
          {
            target: './src/shared',
            from: './src/features',
          },
          {
            target: './src/shared',
            from: './src/widgets',
          },
          {
            target: './src/shared',
            from: './src/pages',
          },
          {
            target: './src/entities',
            from: './src/features',
          },
          {
            target: './src/entities',
            from: './src/widgets',
          },
          {
            target: './src/entities',
            from: './src/pages',
          },
          {
            target: './src/features',
            from: './src/widgets',
          },
          {
            target: './src/features',
            from: './src/pages',
          },
          {
            target: './src/widgets',
            from: './src/pages',
          },
        ],
      },
    ],
  },

  ignorePatterns: ['!.storybook', '!.stylelintrc.js'],
};
