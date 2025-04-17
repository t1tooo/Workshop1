import { Builder } from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import chrome from 'selenium-webdriver/chrome.js';
import { timeout, browser, headless } from '../../config.js';

// Set the default timeout for Cucumber
setDefaultTimeout(timeout);

// Configure Chrome options
const options = new chrome.Options();

// Optionally, enable headless mode if needed
if (headless) {
  options.addArguments('--headless=new');
}

// Add other Chrome options that help with stability
options.addArguments('--disable-dev-shm-usage');
options.addArguments('--no-sandbox');
options.addArguments('--disable-gpu'); // Disable GPU hardware acceleration in headless mode
options.addArguments('--incognito');  // Use incognito mode to avoid saving session data

// Custom World constructor for each test scenario
class CustomWorld {
  constructor() {
    // Initialize the WebDriver for each test
    this.driver = new Builder()
      .setChromeOptions(options)
      .forBrowser(browser)
      .build();
  }
}

// Set the world constructor in Cucumber
setWorldConstructor(CustomWorld);
