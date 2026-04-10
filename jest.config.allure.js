module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.js'],
    setupFilesAfterEnv: [require.resolve('allure-jest')],
    reporters: [
        'default',
        ['allure-jest', { resultsDir: './allure-results' }]
    ],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
};