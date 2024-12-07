import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that I am at {string}', async function (url) {
    await this.driver.get(url);
  });

When ('I have spawned infront of the cafe. I should have 50 health and 10 Dollars', async function (url) {
    await this.driver.get(url);
  });