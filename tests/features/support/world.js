import seleniumWebdriver from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, browser, headless } from '../../config.js';
import chrome from 'selenium-webdriver/chrome.js';

// Set up Chrome options to remove any previous user-data-dir
const options = new chrome.Options();

// Ensure no user-data-dir is being used
options.addArguments('--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu');

// Optional: headless mode based on the configuration
if (headless) {
  options.addArguments('--headless');
}

class CustomWorld {
  constructor() {
    this.driver = new seleniumWebdriver
      .Builder()
      .setChromeOptions(options)
      .forBrowser(browser)
      .build();
  }
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);
