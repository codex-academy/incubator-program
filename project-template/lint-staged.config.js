module.exports = {
  '*.{js,jsx}': [
    'yarn run eslint --fix',
    'stylelint',
    'yarn run prettier --write',
  ],
};
