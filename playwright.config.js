// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
      