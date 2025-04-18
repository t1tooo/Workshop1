import seleniumWebdriver from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, browser, headless } from '../../config.js';
import chrome from 'selenium-webdriver/chrome.js';
import path from 'path';
import os from 'os';

const options = new chrome.Options();

if (headless) options.addArguments('--headless'); // headless mode

// Use a unique directory for user data to avoid conflicts
const userDataDir = path.join(os.tmpdir(), `chrome_user_data_${Date.now()}`);

options.addArguments(`--user-data-dir=${userDataDir}`);

class CustomWorld {
  constructor() {
    this.driver = new seleniumWebdriver.Builder()
      .forBrowser(browser)
      .setChromeOptions(options)
      .build();
  }

  async quit() {
    if (this.driver) {
      await this.driver.quit();
    }
  }
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);
