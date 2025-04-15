import seleniumWebdriver from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, browser, headless } from '../../config.js';
import chrome from 'selenium-webdriver/chrome.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';  // Import dirname from path
import fs from 'fs';
import path from 'path';  // Import the path module

// Get the directory name of the current module using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generate a unique directory for each session
const userDataDir = path.resolve(__dirname, `user-data-dir-${Date.now()}`);

// Ensure the directory exists (creates it if not)
if (!fs.existsSync(userDataDir)) {
  fs.mkdirSync(userDataDir);
}

const options = new chrome.Options();
headless && options.addArguments('--headless=new');
options.addArguments(`--user-data-dir=${userDataDir}`); // Add the user data directory argument

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
