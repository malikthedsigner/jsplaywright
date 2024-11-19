const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    retries: 1,
    reporter: [['html', { open: 'never' }], ['list']],
    use: {
        baseURL: 'https://www.saucedemo.com',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
    },
});
