import { Before, After, AfterStep, setWorldConstructor } from '@cucumber/cucumber';
import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { sleepBetweenSteps } from '../../config.js';

const sleep = ms => new Promise(res => setTimeout(res, ms));

class CustomWorld {
  async initDriver() {
    // Create a unique temporary directory for Chrome profile
    this.tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-profile-'));

    const options = new chrome.Options();
    options.addArguments(`--user-data-dir=${this.tmpDir}`);
    options.addArguments('--headless'); // Optional: remove if you want to see browser
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    this.driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  }
}

setWorldConstructor(CustomWorld);

Before(async function () {
  await this.initDriver();
  await this.driver.manage().window().maximize();
});

After(async function () {
  if (this.driver) {
    await this.driver.quit();
  }


  if (this.tmpDir && fs.existsSync(this.tmpDir)) {
    fs.rmSync(this.tmpDir, { recursive: true, force: true });
  }
});

AfterStep(async function () {
  await sleep(sleepBetweenSteps);
});
