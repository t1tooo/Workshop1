import seleniumWebdriver from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, browser, headless } from '../../config.js';
import chrome from 'selenium-webdriver/chrome.js';

const options = new chrome.Options();
if (headless) options.addArguments('--headless=new');

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
