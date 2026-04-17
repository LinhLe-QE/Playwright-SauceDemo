import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: 'Swag/specs',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright'],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: 'https://www.saucedemo.com',

    // Collect trace when retrying the failed test. 
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    launchOptions: {
      slowMo: 500, // Adds a 500ms delay between actions
    }
  },

  /* Configure projects for major browsers */
  projects: [
    isCI
      ? {
        name: 'Chromium',
        use: { ...devices['Desktop Chrome'] },
      }
      : {
        name: 'Google Chrome',
        use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      },
  ],
});
