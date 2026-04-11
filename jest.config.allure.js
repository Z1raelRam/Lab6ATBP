module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.js'],
    reporters: [
        'default',
        ['jest-allure2-reporter', { resultsDir: './allure-results' }]
    ],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
};