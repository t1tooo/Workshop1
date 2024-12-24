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

Then('I Buy an espresso two times', async function () {
    const actions = [
      "//menu[contains(@class, 'choices')]//li[contains(text(),'Enter the cafe')]",
      "//menu[contains(@class, 'choices')]//li[contains(text(),'Buy an espresso')]",
      "//menu[contains(@class, 'choices')]//li[contains(text(),'Buy an espresso')]",
    ]
    for (const action of actions) {
        await clickButton(this.driver, action);
    }
  });

  Then('I should have two espressos', async function () {
  
    try {
        const espressoValueElement = await this.driver.wait(until.elementLocated(By.css('section.espressocups .val')), 5000);
        const espressoValueText = await espressoValueElement.getText();
        expect(espressoValueText).to.equal('2');
        console.log('Espressos:', espressoValueText);
      } catch (error) {
        throw new Error('You have not gotten 2 Espressos: ' + error.message);
      }
  });
  

  