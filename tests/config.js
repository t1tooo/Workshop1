import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

// Browser setup
export const browser = 'chrome';
export const headless = false;
export const timeout = 30000;
export const sleepBetweenSteps = 400;

let options = new chrome.Options();

// Add --disable-extensions flag
options.addArguments('--disable-extensions');

// If you want to run Chrome headlessly, use the following:
if (headless) {
  options.addArguments('--headless');
  options.addArguments('--disable-gpu');
}

export const driver = new Builder()
  .forBrowser(browser)
  .setChromeOptions(options)
  .build();

// Export the driver for use in your step definitions or tests
export default driver;
