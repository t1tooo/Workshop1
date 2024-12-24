import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

async function clickButton(driver, xpath, timeout = 5000) {
  const button = await driver.wait(
    until.elementLocated(By.xpath(xpath)),
    timeout
  );
  await driver.wait(until.elementIsVisible(button), timeout);
  await driver.wait(until.elementIsEnabled(button), timeout);
  await button.click();
}

Given('that I de {string}', async function (url) {
  await this.driver.get(url);
});

When('I press wait i should loose 10 health', async function () {
  const actions = [
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
  ];

  for (let action of actions) {
    await clickButton(this.driver, action);
  }
});
