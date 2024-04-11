module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'error',
    'react/no-unused-prop-types': 'error',
    'new-cap': ['error', { 'properties': false }],
    'no-unmodified-loop-condition': 'off',
    'no-console': 'error',
    'react/jsx-no-target-blank': 'off'
  }
}
