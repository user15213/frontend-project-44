import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-console': 'off',
      'no-alert': 'warn',
      'operator-linebreak': ['error', 'after', { overrides: { '=': 'none' } }],
      'implicit-arrow-linebreak': ['error', 'beside'],
      'jsx-quotes': ['error', 'prefer-single'],
      'no-trailing-spaces': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'space-before-function-paren': ['error', 'never'],
      'space-before-blocks': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-unary-ops': [
        'error',
        {
          words: true,
          nonwords: false,
        },
      ],
      'spaced-comment': ['error', 'always'],
      'semi-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'no-whitespace-before-property': 'error',
    },
  },
];
