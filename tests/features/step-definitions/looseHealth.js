import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';

const TIMEOUT = 7000;  


async function clickButton(driver, xpath, timeout = TIMEOUT) {
  try {
    const button = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
    await driver.wait(until.elementIsVisible(button), timeout);
    await driver.wait(until.elementIsEnabled(button), timeout);
    await button.click();
    console.log(`Clicked: ${xpath}`);
  } catch (error) {
    throw new Error(`Failed to click button at ${xpath}: ${error.message}`);
  }
}



Given('that I am at the localhost', async function () {
  const url = 'http://localhost:3000';
  await this.driver.get(url);
  console.log(`Navigated to ${url}`);
});


When('I press wait i should loose 10 health', async function () {
  const actions = [
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]"
  ];

  for (const action of actions) {
    await clickButton(this.driver, action);
  }

});

When('I press wait again i should loose 5 health', async function () {
    const actions1 = [
      "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]"
    ];
  
    for (const action of actions1) {
      await clickButton(this.driver, action);
    }
  
  });
  
  Then('My Health Bar should be at 35', async function () {
    try {
      const healthBarValueElement = await this.driver.wait(
        until.elementLocated(By.css('span.val')), 5000
      );
      const healthBarValueText = await healthBarValueElement.getText();
      expect(healthBarValueText).to.equal('35');
    } catch (error) {
      throw new Error('Health Bar value is not 35: ' + error.message);
    }
  });
  
  