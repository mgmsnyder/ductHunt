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
    await driver.findElement(By.id('number')).sendKeys(dataCall.callerNumber);
    await driver.findElement(By.id('callerId')).sendKeys(dataCall.callerID);
    await driver.findElement(By.id('address')).sendKeys(dataCall.callerAddress);
    await driver.findElement(By.id('website')).sendKeys(dataCall.callerWebsite);
    // await driver.findElement(By.css('div.submit-container button:nth-child(2)')).click(); MY GOSH IT HAPPENED AGAIN BUT WHAT MAKES THE NEXT LINE WORK!!??!@?#JN I have decided submit-container was not reliable, which fits since it is a class, not an id. Xpath for lyyyfe. -_-
    await driver.findElement(By.xpath('//*[@id="complaint-3"]/div[3]/button[2]')).click();
    await driver.findElement(By.id('date-container')).sendKeys(dataCall.callDate);
    await driver.findElement(By.id('uib-Hours')).sendKeys(dataCall.callTime.slice(0,2));
    await driver.findElement(By.id('uib-Minutes')).sendKeys(dataCall.callTime.slice(-2));
    if (dataCall.reasonSell){
      await driver.findElement(By.id('check-comp-sell')).click();
    }
    if (dataCall.reasonWon){
      await driver.findElement(By.id('check-comp-win')).click();
    }
    if (dataCall.reasonSurvey){
      await driver.findElement(By.id('check-comp-survey')).click();
    }
    if (dataCall.reasonPolitical){
      await driver.findElement(By.id('check-comp-political')).click();
    }
    if (dataCall.reasonDonation){
      await driver.findElement(By.id('check-comp-donation')).click();
    }
    if (dataCall.reasonDebt){
      await driver.findElement(By.id('check-comp-debt')).click();
    }
    if (dataCall.reasonPsa){
      await driver.findElement(By.id('check-comp-publicServiceMsg')).click();
    }
    if (dataCall.purchaseStatus==="yes"){
      await driver.findElement(By.id('radio-cp-true')).click();
      if (dataCall.purchaseNow){
        await driver.findElement(By.id('check-comp-purchaseDuringCall')).click();
      }
      if (dataCall.purchaseRecent){
        await driver.findElement(By.id('check-comp-purchaseWithin18M')).click();
      }
      if (dataCall.purchaseDistant){
        await driver.findElement(By.id('check-comp-purchaseMoreThan18M')).click();
      }
    }else{
      await driver.findElement(By.id('radio-cp-false')).click();
    }
    if (dataCall.businessInquiry){
      await driver.findElement(By.id('check-comp-askedAboutProduct')).click();
    }
    if (dataCall.businessContract){
      await driver.findElement(By.id('check-comp-contractExpired')).click();
    }
    if (dataCall.businessDivulge){
      await driver.findElement(By.id('check-comp-personalInfo')).click();
    }
    if (dataCall.businessVisit){
      await driver.findElement(By.id('check-comp-serviceEstimate')).click();
    }
    if (dataCall.ceaseNow){
      await driver.findElement(By.id('check-comp-duringCall')).click();
    }
    if (dataCall.ceasePrior){
      await driver.findElement(By.id('check-comp-prev14D')).click();
    }
    if (dataCall.ceaseRefuse){
      await driver.findElement(By.id('check-comp-prevRefused')).click();
    }
    await driver.findElement(By.xpath('//*[@id="complaint-4"]/div[18]/button[2]')).click();
  } finally {
  }
})();
