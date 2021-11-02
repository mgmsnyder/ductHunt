import { Builder, By, Key, until } from 'selenium-webdriver';

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navigate to Url
    await driver.get('https://lnnte-dncl.gc.ca/en/Consumer/Complaint/#!/');

    await driver.findElement(By.id('radio-answer-phone')).click();

    await driver.findElement(By.css('div.submit-container button')).click();

  } finally {
  }
})();
