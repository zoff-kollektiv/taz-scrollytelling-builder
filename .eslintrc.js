module.exports = {
  parser: "babel-eslint",
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 80,
        bracketSpacing: true,
      }
    ],
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: [ 'invalidHref' ]
      }
    ],
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 'off',
  },
  globals: {
    "FormData": true,
  }
};
