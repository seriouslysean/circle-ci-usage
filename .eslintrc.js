module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
    },
    extends: [
        'airbnb-base',
        'plugin:jest/all',
    ],
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        indent: ['error', 4],
    },
    plugins: ['jest'],
};
