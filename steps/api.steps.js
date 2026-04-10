const { Given, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I call the hello API', async function () {
    const response = await fetch('http://localhost:3000/api/hello');
    this.data = await response.json();
});

Then('I should get a success message', function () {
    assert.strictEqual(this.data.message, 'Hello from API!');
});