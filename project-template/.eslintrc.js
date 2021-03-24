module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
  ],
  plugins: [
    'react',
    'react-app',
    'prettier',
    'jest',
    'compat',
    'sonarjs',
    'optimize-regex',
    'react-hooks',
  ],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-warning-comments': [1, { terms: ['todo', 'fixme'], location: 'anywhere' }],
    'react/jsx-one-expression-per-line': 'off', // Conflicts with Prettier.
    'react/prop-types': 'off', // Not needed when using TypeScript. Enforce TypeScript for JSX. I.e. `.tsx.` over `.jsx`.
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-curly-newline': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'sonarjs/cognitive-complexity': ['warn', 20],
    'sonarjs/no-duplicate-string': 'warn',
    'react/jsx-props-no-spreading': 'off',
  },
};
