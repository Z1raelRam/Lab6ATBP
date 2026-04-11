module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.js'],
    reporters: [
        'default',
        ['allure-jest/node', { resultsDir: './allure-results' }]
    ],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
};