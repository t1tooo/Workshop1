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


When('I run through the game and get a beer', async function () {
  const actions = [
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go north')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go east')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go west')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go south')]",
  ];
  for (const action of actions) {
    await clickButton(this.driver, action);
  }

  try {
    const beerElement = await this.driver.wait(until.elementLocated(By.xpath("//span[text()='a can of beer']")), 5000);
    const beerText = await beerElement.getText();
    expect(beerText).to.equal('a can of beer');  
    console.log('The can of beer is inside the hipster bag!');
  } catch (error) {
    throw new Error('Failed to find the can of beer inside the hipster bag: ' + error.message);
  }

});


Then('I should give it to the barista and I should revieve 2 free espressos from him', async function () {
    const actions = [
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Enter the cafe')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Give beer to barista')]",
    ];

    for (const action of actions) {
        await clickButton(this.driver, action);}

      try {
        const espressoValueElement = await this.driver.wait(until.elementLocated(By.css('section.espressocups .val')), 5000);
        const espressoValueText = await espressoValueElement.getText();
        expect(espressoValueText).to.equal('2');
        console.log('Espressos:', espressoValueText);
      } catch (error) {
        throw new Error('You have not gotten 2 Espressos: ' + error.message);
      }
});