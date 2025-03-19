import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from './prettier.config.js';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';
import react from 'eslint-plugin-react';
import security from 'eslint-plugin-security';
import jsxA11y from 'eslint-plugin-jsx-a11y';


export default tseslint.config(
  { ignores: ['dist'] },
  {
    settings: {
      'import/resolver': {
        alias: {
          map: [['@core', './src']],
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
      },
    },
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
      plugins: {
          'react-hooks': reactHooks,
          'react-refresh': reactRefresh,
          prettier: eslintPluginPrettier,
          'import': eslintPluginImport,
          'simple-import-sort': eslintPluginSimpleImportSort,
          'unused-imports': eslintPluginUnusedImports,
          'react': react,
          'security': security,
          'jsx-a11y': jsxA11y,
      },
      rules: {
          ...reactHooks.configs.recommended.rules,
          'react-refresh/only-export-components': [
              'warn',
              { allowConstantExport: true },
          ],
          '@typescript-eslint/explicit-function-return-type': ['error'],
          'prettier/prettier': ['error', prettierConfig],

          // Import rules
          'import/order': ['error', { 'groups': [['builtin', 'external', 'internal']] }],
          'import/no-unresolved': 'error',
          'import/no-duplicates': 'error',

          // Sort imports
          'simple-import-sort/imports': 'error',
          'simple-import-sort/exports': 'error',

          // Remove unused imports
          'unused-imports/no-unused-imports': 'error',
          'unused-imports/no-unused-vars': [
              'error',
              { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' },
          ],

          // React rules
          'react/jsx-uses-react': 'error',
          'react/jsx-uses-vars': 'error',
          'react/react-in-jsx-scope': 'off',

          // Security rules
          'security/detect-object-injection': 'off',

          // Accessibility (a11y) rules
          'jsx-a11y/anchor-is-valid': ['error', { aspects: ['invalidHref', 'preferButton'] }],
          'jsx-a11y/no-static-element-interactions': 'warn',
      },
  },
);
