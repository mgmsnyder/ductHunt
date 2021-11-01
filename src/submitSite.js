import { Builder, By, Key, until } from 'selenium-webdriver';

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  // chrome.setDefaultService(
  //   new chrome.ServiceBuilder("/Users/endevour/myBin/chromedriver").build()
  // );
  try {
    // Navigate to Url
    await driver.get('https://www.google.com');

    // Enter text "cheese" and perform keyboard action "Enter"
    await driver.findElement(By.name('q')).sendKeys('cheese', Key.ENTER);

    let firstResult = await driver.wait(
      until.elementLocated(By.css('h3')),
      10000
    );

    console.log(await firstResult.getAttribute('textContent'));
  } finally {
    await driver.quit();
  }
})();
