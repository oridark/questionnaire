/*
 * @Author: your name
 * @Date: 2020-07-17 14:55:51
 * @LastEditTime: 2020-07-17 15:42:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \accounting2.0\.eslintrc.js
 */
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/camelcase': ['off', { properties: 'always' }],
        'space-before-function-paren': 0,
        semi: ['error', 'always'],
        '@typescript-eslint/no-explicit-any': ['off', { properties: 'always' }],
        indent: ['error', 4],
        '@typescript-eslint/no-var-requires': 0,
        'comma-dangle': 0
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                mocha: true
            }
        }
    ]
};
