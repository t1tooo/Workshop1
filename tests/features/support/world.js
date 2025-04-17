import seleniumWebdriver from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, browser, headless } from '../../config.js';
import chrome from 'selenium-webdriver/chrome.js';

const options = new chrome.Options();
headless && options.addArguments('--headless'); 


class CustomWorld {
  constructor() {
    this.driver = null;
  }

  async initDriver() {
    this.driver = await new seleniumWebdriver
      .Builder()
      .setChromeOptions(options)
      .forBrowser(browser)
      .build();
  }

  async quitDriver() {
    if (this.driver) {
      await this.driver.quit();
    }
  }
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);
