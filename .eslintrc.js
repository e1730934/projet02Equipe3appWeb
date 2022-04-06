module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:jest/recommended',
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-alert': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'import/extensions': [
            'off',
            'ignorePackages',
        ],
        'no-restricted-syntax': [
            'off',
            'ignorePackages',
        ],
        'no-restricted-globals': [
            'off',
            'ignorePackages',
        ],
        indent: ['warn', 4],
    },
};
