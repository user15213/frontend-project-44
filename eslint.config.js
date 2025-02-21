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
    },
  },
];
