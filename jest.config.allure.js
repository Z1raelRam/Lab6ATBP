module.exports = {
    preset: 'babel-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['allure-jest'],
    reporters: ['default', ['allure-jest', { resultsDir: './allure-results' }]]
};