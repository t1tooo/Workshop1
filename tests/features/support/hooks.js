import { Before, After, AfterStep } from '@cucumber/cucumber';
import { sleepBetweenSteps } from '../../config.js';
import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

const sleep = ms => new Promise(res => setTimeout(res, ms));

Before(async function () {
  if (!this.driver) {
    const options = new chrome.Options();
    options.addArguments('--headless');

    this.driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  }
  await this.driver.manage().window().maximize();
});

After(async function () {
  if (this.driver) {
    await this.driver.quit();
    this.driver = null;
  }
});

AfterStep(async function () {
  await sleep(sleepBetweenSteps);
});
