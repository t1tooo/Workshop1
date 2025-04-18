// Import necessary modules
import { setWorldConstructor } from '@cucumber/cucumber';
import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import path from 'path';
import fs from 'fs';

// Set up the custom World constructor
class CustomWorld {
  constructor() {
    this.driver = null;
  }

  async initDriver() {
    // Generate a unique temporary directory for user data
    const tempDir = path.join(new URL('.', import.meta.url).pathname, `tmp/chrome-user-data-${Math.random().toString(36).substring(2, 15)}`);

    // Create the directory if it doesn't exist
    fs.mkdirSync(tempDir, { recursive: true });

    // Set up Chrome options
    const options = new chrome.Options();
    options.addArguments(`--user-data-dir=${tempDir}`);  // Specify the unique user data directory

    try {
      // Create a new WebDriver instance with the specified options
      this.driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

      // Optionally navigate to a page
      await this.driver.get('http://localhost:3000');
    } catch (error) {
      console.error('Error during WebDriver session creation:', error);
    }
  }

  async closeDriver() {
    if (this.driver) {
      await this.driver.quit();
    }
  }
}

// Set the custom World constructor
setWorldConstructor(CustomWorld);
