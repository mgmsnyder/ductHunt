import { Builder, By, Key, until } from 'selenium-webdriver';

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  // chrome.setDefaultService(
  //   new chrome.ServiceBuilder("/Users/endevour/myBin/chromedriver").build()
  // );
  try {
    // Navigate to Url
    await driver.get('https://lnnte-dncl.gc.ca/en/Consumer/Complaint/#!/');

    // Enter text "cheese" and perform keyboard action "Enter"
    await driver.findElement(By.id('radio-answer-phone')).click();

    // let firstResult = await driver.wait(
    //   until.elementLocated(By.css('h3')),
    //   10000
    // );

    // console.log(await firstResult.getAttribute('textContent'));
  } finally {
    // await driver.wait(false,10000);
    // await driver.quit();
  }
})();
