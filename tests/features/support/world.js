import seleniumWebdriver from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, browser, headless } from '../../config.js';
import chrome from 'selenium-webdriver/chrome.js';

const options = new chrome.Options();

if (headless) {
  options.addArguments('--headless=new');
}

options.addArguments(
  '--no-sandbox',
  '--disable-dev-shm-usage',
  '--disable-gpu',
  '--disable-extensions',
  '--disable-background-networking',
  '--disable-default-apps',
  '--disable-sync',
  '--disable-translate',
  '--metrics-recording-only',
  '--mute-audio',
  '--no-first-run',
  '--safebrowsing-disable-auto-update'
);



class CustomWorld {
  constructor() {
    this.driver = new seleniumWebdriver.Builder()
      .forBrowser(browser)
      .setChromeOptions(options)
      .build();
  }
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);
