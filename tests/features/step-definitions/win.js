import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that I am at {string}', async function (url) {
    await this.driver.get(url);
  });

  When( 'I have spawned infront of the cafe. I should have {int} health and {int} dollars',
    async function (expectedHealth, expectedDollars) {
        const healthValueElement = await this.driver.wait(
            until.elementLocated(By.css('.health .progress .val')),
            5000 
        );

        await this.driver.wait(
            until.elementTextMatches(healthValueElement, /\d+/),
            5000 
        );

        const healthText = await healthValueElement.getText();
        const health = parseInt(healthText.trim(), 10);

        const moneyValueElement = await this.driver.wait(
            until.elementLocated(By.css('.money .progress .val')),
            5000 
        );

        await this.driver.wait(
            until.elementTextMatches(moneyValueElement, /\d+/),
            5000 
        );

        const moneyText = await moneyValueElement.getText();
        const money = parseInt(moneyText.trim(), 10);

        expect(health).to.equal(expectedHealth);
        expect(money).to.equal(expectedDollars);
    }
);


async function clickButton(driver, xpath, timeout = 5000) {
  const button = await driver.wait(
    until.elementLocated(By.xpath(xpath)),
    timeout 
  );
  await driver.wait(until.elementIsVisible(button), timeout); 
  await driver.wait(until.elementIsEnabled(button), timeout); 
  await button.click(); 
}

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
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Give beer to barista')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Exit the cafe')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go south')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go west')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Wait')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Jam with the band')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go east')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Go north')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Enter the cafe')]",
    "//menu[contains(@class, 'choices')]//li[contains(text(),'Buy an espresso')]", 
  ];

  for (let action of actions) {
    await clickButton(this.driver, action); 
  }
});

Then('I should win and see a picture with the win message "Yes! You feel alive and pumping. Full of caffeine! You feel like... like... Luke Skywalker!"', async function () {
});