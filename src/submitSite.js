import { Builder, By, Key, until } from 'selenium-webdriver';

(async function example() {
  const dataUser = {
    "userTitle":"Mr",
    "userFirstName":"Glenn",
    "userLastName":"Frogg",
    "userAddressLine1":"101 1st Street",
    "userAddressLine2":"202 2nd Street",
    "userAddressCountry":"Canada",
    "userAddressCityMunicipality":"Waterloo",
    "userAddressProvinceTerritory":"Ontario",
    "userAddressCode":"1A1 2B2",
    "userContactNumber":"819-555-1234",
    "userContactEmail":"janeandjoe@name.com",
    "userContactConfirmEmail":"janeandjoe@name.com",
    "userContactLanguage":"english",
    "userSpammedNumber":"819-555-1234",
    "userSpammedPersonal":true,
    "userSpammedBusiness":false,
    "userSpammedProvider":"Rogers"
  }
  const dataCall = {
    "callUserAction":"Answered",
    "callOnPickup":"live",
    "callNameOrNumber":"number",
    "callDeclaration":"yes",
    "callerNumber":"519-635-6921",
    "callerID":"",
    "callerAddress":"",
    "callerWebsite":"",
    "callDate":"2021-10-29",
    "callTime":"12:45",
    "reasonSell":true,
    "reasonWon":false,
    "reasonSurvey":false,
    "reasonPolitical":false,
    "reasonDonation":false,
    "reasonDebt":false,
    "reasonPsa":false,
    "reasonUnknown":false,
    "purchaseStatus":"no",
    "purchaseNow":false,
    "purchaseRecent":false,
    "purchaseDistant":false,
    "businessInquiry":true,
    "businessContract":false,
    "businessDivulge":true,
    "businessVisit":false,
    "ceaseNow":false,
    "ceasePrior":false,
    "ceaseRefuse":false,
    "consent":true
  }
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Navigate to Url
    await driver.get('https://lnnte-dncl.gc.ca/en/Consumer/Complaint/#!/');
    if (dataCall.callUserAction==="Answered"){
      await driver.findElement(By.id('radio-answer-phone')).click();
    }
    await driver.findElement(By.css('div.submit-container button')).click();
    
    // 2nd page #Complaint details
    if (dataCall.callOnPickup==="live"){
      await driver.findElement(By.id('radio-phone-live')).click();
    }
    if (dataCall.callNameOrNumber==="number"){
      await driver.findElement(By.id('radio-comp-phone')).click();
    }
    if (dataCall.callDeclaration==="yes"){
      await driver.findElement(By.id('radio-declar-1')).click();
    }
    // await driver.wait(until.elementLocated(By.css('div.submit-container button:last-of-type')), 10000).click();
    // ASK LUKE WHY THE ABOVE DOES NOT WORK??! This took me 2+ hours to find the below. Progress sure, but at what cost. Last of type seemed to be a problem.
    await driver.findElement(By.css('div.submit-container button:nth-child(2)')).click();
    
    // 3rd Page #Caller details

  } finally {
  }
})();
