import seleniumWebdriver from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, browser, headless } from '../../config.js';
import chrome from 'selenium-webdriver/chrome.js';
import os from 'os';
import fs from 'fs';
import path from 'path';

const options = new chrome.Options();


const userDataDir = path.join(os.tmpdir(), `chrome-profile-${Date.now()}-${Math.floor(Math.random() * 10000)}`);
fs.mkdirSync(userDataDir, { recursive: true });
options.addArguments(`--user-data-dir=${userDataDir}`);


headless && options.addArguments('--headless=new');

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
