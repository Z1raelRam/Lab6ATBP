module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.js'],
    // Мы убрали setupFilesAfterEnv, так как allure-jest v3 настраивается через репортеры
    reporters: [
        'default',
        ['allure-jest', { resultsDir: './allure-results' }]
    ],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
};