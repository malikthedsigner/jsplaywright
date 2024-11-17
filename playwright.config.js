const { playwrightTestConfig } = require('@playwright/test');

const config = {
    retries: 1,
    timeout: 15000,
    fullyparallel: 'true',
    use: {
        headless: true,
        viewport: { width: 1200, height: 720 },
        video: "on",
        screenshot: "only-on-failure",
        baseURL: 'https://www.saucedemo.com'

    },

    projects: [
        {
            name: 'Chrome',
            use: { browserName: 'chromium' }
        },

        {
            name: 'Firefox',
            use: { browserName: 'firefox' }
        },

        {
            name: 'Webkit',
            use: { browserName: 'webkit' }
        },
    ]
}

module.exports = config