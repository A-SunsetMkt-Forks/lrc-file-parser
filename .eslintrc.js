module.exports = {
  root: true,
  extends: ['standard-with-typescript'],
  rules: {
    'no-new': 'off',
    camelcase: 'off',
    'no-return-assign': 'off',
    'space-before-function-paren': ['error', 'never'],
    'no-var': 'error',
    'no-fallthrough': 'off',
    'prefer-promise-reject-errors': 'off',
    eqeqeq: 'off',
    'no-multiple-empty-lines': [1, { max: 2 }],
    'comma-dangle': [2, 'always-multiline'],
    'standard/no-callback-literal': 'off',
    'prefer-const': 'off',
    'no-labels': 'off',
    'node/no-callback-literal': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/restrict-template-expressions': [1, {
          allowBoolean: true,
        }],
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/return-await': 'off',
        'multiline-ternary': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
}
