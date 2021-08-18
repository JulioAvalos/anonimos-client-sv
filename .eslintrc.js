module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', 
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', 
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2021, 
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, 
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-hooks'],
  rules: {
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/interface-name-prefix': 0, 
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
};