import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  workers: 1,
  timeout: 45000,
  use: { baseURL: 'http://127.0.0.1:4175', screenshot: 'only-on-failure' },
  webServer: {
    command: 'node build.mjs && node server.mjs',
    env: { PORT: '4175' },
    url: 'http://127.0.0.1:4175',
    reuseExistingServer: false,
  },
  projects: [
    { name: 'iphone-webkit', use: { ...devices['iPhone 13'] } },
    { name: 'android-chrome', use: { ...devices['Pixel 5'], channel: 'chrome' } },
  ],
});
