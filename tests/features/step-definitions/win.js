import { Given, When, Then } from '@cucumber/cucumber';
import { By, until } from 'selenium-webdriver';
import { expect } from 'chai';



const TIMEOUT = 7000;
const ELEMENT_TEXT_REGEX = /\d+/;



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


Given('that I am at {string}', async function (url) {
  await this.driver.get(url);
  console.log(`Navigated to ${url}`);
});


Then('I run through the game so I win', async function () {
  const actions = [
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Enter the cafe')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Buy an espresso')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Buy an espresso')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Exit the cafe')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go north')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go east')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go west')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go south')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Enter the cafe')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Give beer to barista')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Exit the cafe')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go south')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go west')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Jam with the band')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go east')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go north')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Enter the cafe')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Buy an espresso')]",
  ];

  for (const action of actions) {
    await clickButton(this.driver, action);
  }
});


Then('I should win and see a picture with the win message "Yes! You feel alive and pumping. Full of caffeine! You feel like... like... Luke Skywalker!"', async function () {
  try {
    const winMessageElement = await this.driver.wait(
      until.elementLocated(By.css('p.description')), 5000
    );
    const winMessageText = await winMessageElement.getText();
    expect(winMessageText).to.equal('Yes! You feel alive and pumping. Full of caffeine! You feel like... like... Luke Skywalker!');
  } catch (error) {
    throw new Error('Win message not found' + error.message);
  }
});

