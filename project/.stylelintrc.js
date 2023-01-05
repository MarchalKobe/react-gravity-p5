/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ],

  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
        ],
      },
    ],

    'declaration-block-trailing-semicolon': 'always',

    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],

    'import-notation': 'string',
  },
};
