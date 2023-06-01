module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    '@mate-academy/eslint-config',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
    'react',
  ],
  'rules': {
  },
};
