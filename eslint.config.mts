import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import perfectionist from 'eslint-plugin-perfectionist';
import tsESLint from 'typescript-eslint';

const eslintConfig: ReturnType<typeof tsESLint.config> = tsESLint.config(
  js.configs.recommended,
  stylistic.configs['recommended-flat'],
  tsESLint.configs.strictTypeChecked,
  tsESLint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        projectService: true,
      },
    },
  },
  {
    plugins: { perfectionist },
    rules: {
      ...perfectionist.configs['recommended-natural'].rules,
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: { type: {}, value: {} },
          environment: 'node',
          groups: [
            'type',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          ignoreCase: false,
          internalPattern: ['@/**'],
          matcher: 'minimatch',
          maxLineLength: undefined,
          newlinesBetween: 'always',
          order: 'asc',
          specialCharacters: 'keep',
          type: 'natural',
        },
      ],
    },
  },
  {
    rules: {
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/indent': 'off',
      '@stylistic/indent-binary-ops': 'off',
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: true,
          },
        },
      ],
      '@stylistic/no-extra-parens': ['error', 'functions'],
      '@stylistic/no-mixed-operators': 'off',
      '@stylistic/operator-linebreak': [
        'error',
        'after',
        {
          overrides: {
            ':': 'before',
            '?': 'before',
          },
        },
      ],
      '@stylistic/quote-props': ['error', 'consistent-as-needed'],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/semi': ['error', 'always'],
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'separate-type-imports' },
      ],

      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'with-single-extends',
          allowObjectTypes: 'never',
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/unified-signatures': 'off',

      'import/order': 'off',
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: false,
        },
      ],
    },
  },
);

export default eslintConfig;
