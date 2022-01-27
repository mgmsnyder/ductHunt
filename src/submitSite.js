import { Builder, By } from 'selenium-webdriver';

const submitFirstPageCSS = 'div.submit-container button';
const submitSecondPageCSS = 'div.submit-container button:nth-child(2)';
const submitThirdPageXpath = '//*[@id="complaint-3"]/div[3]/button[2]';
const submitFourthPageXpath = '//*[@id="complaint-4"]/div[18]/button[2]';
const submitFifthPageXpath = '//*[@id="complaint-5"]/div[20]/button[2]';

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
    "userAddressCode":"N1N 2H2",
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
    await driver.findElement(By.css(submitFirstPageCSS)).click();
    
    // 2nd page #Complaint details
    if (dataCall.callOnPickup==="live"){
      await driver.findElement(By.id('radio-phone-live')).click();
    }
    else if (dataCall.callOnPickup==="recording"){
      await driver.findElement(By.id('radio-phone-rec')).click();
    }
    else if (dataCall.callOnPickup==="hold"){
      await driver.findElement(By.id('radio-phone-rec-hold-for-live')).click();
    }
    else if (dataCall.callOnPickup==="vacant"){
      await driver.findElement(By.id('radio-nobody-online')).click();
    }
    if (dataCall.callNameOrNumber==="number"){
      await driver.findElement(By.id('radio-comp-phone')).click();
    }
    if (dataCall.callDeclaration==="yes"){
      await driver.findElement(By.id('radio-declar-1')).click();
    }
    await driver.findElement(By.css(submitSecondPageCSS)).click();
    
    // 3rd Page #Caller details
    await driver.findElement(By.id('number')).sendKeys(dataCall.callerNumber);
    await driver.findElement(By.id('callerId')).sendKeys(dataCall.callerID);
    await driver.findElement(By.id('address')).sendKeys(dataCall.callerAddress);
    await driver.findElement(By.id('website')).sendKeys(dataCall.callerWebsite);
    await driver.findElement(By.xpath(submitThirdPageXpath)).click();
    
    // 4th Page #Call details
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
    await driver.findElement(By.xpath(submitFourthPageXpath)).click();
    // 5th Page #Your details
    if (dataUser.userTitle!==""){
      await driver.findElement(By.css(`#title [label*=${dataUser.userTitle}]`)).click();
    }
    await driver.findElement(By.id('firstName')).sendKeys(dataUser.userFirstName);
    await driver.findElement(By.id('lastname')).sendKeys(dataUser.userLastName);
    await driver.findElement(By.id('address1')).sendKeys(dataUser.userAddressLine1);
    await driver.findElement(By.id('address2')).sendKeys(dataUser.userAddressLine2);
    // User address will be left as Canada for simplicity
    await driver.findElement(By.id('city')).sendKeys(dataUser.userAddressCityMunicipality);
    
    let province;
    if (dataUser.userAddressProvinceTerritory==="Alberta") {province = "object:589"}
    else if (dataUser.userAddressProvinceTerritory==="British Columbia") {province = "object:590"}
    else if (dataUser.userAddressProvinceTerritory==="Manitoba") {province = "object:591"}
    else if (dataUser.userAddressProvinceTerritory==="New Brunswick") {province = "object:592"}
    else if (dataUser.userAddressProvinceTerritory==="Newfoundland and Labrador") {province = "object:593"}
    else if (dataUser.userAddressProvinceTerritory==="Northwest Territories") {province = "object:594"}
    else if (dataUser.userAddressProvinceTerritory==="Nova Scotia") {province = "object:595"}
    else if (dataUser.userAddressProvinceTerritory==="Nunavut") {province = "object:596"}
    else if (dataUser.userAddressProvinceTerritory==="Ontario") {province = "object:597";}
    else if (dataUser.userAddressProvinceTerritory==="Prince Edward Island") {province = "object:598"}
    else if (dataUser.userAddressProvinceTerritory==="Quebec") {province = "object:599"}
    else if (dataUser.userAddressProvinceTerritory==="Saskatchewan") {province = "object:600"}
    else if (dataUser.userAddressProvinceTerritory==="Yukon") {province = "object:601"}
    await driver.findElement(By.css(`#province [value*="${province}"]`)).click();
    await driver.findElement(By.id('zip')).sendKeys(dataUser.userAddressCode);
    await driver.findElement(By.id('phone1')).sendKeys(dataUser.userContactNumber);
    await driver.findElement(By.id('email')).sendKeys(dataUser.userContactEmail);
    await driver.findElement(By.id('confirmEmail')).sendKeys(dataUser.userContactConfirmEmail);

    if(dataUser.userContactLanguage==="english") await driver.findElement(By.css(`#language [value*="object:34"]`)).click();
    else if (dataUser.userContactLanguage==="french") await driver.findElement(By.css(`#language [value*="object:35"]`)).click();
    await driver.findElement(By.id('calledAt')).sendKeys(dataUser.userSpammedNumber);
    if (dataUser.userSpammedPersonal){
      await driver.findElement(By.id('incidentPhoneIsPersonal')).click();
    }
    if (dataUser.userSpammedBusiness){
      await driver.findElement(By.id('incidentPhoneIsBusiness')).click();
    }
    await driver.findElement(By.css(`#provider [value*="${dataUser.userSpammedProvider}"]`)).click();
    await driver.findElement(By.xpath(submitFifthPageXpath)).click();
    // window.scroll(0,2000);
    // await driver.findElement(By.xpath('//*[@id="wb-auto-8"]/form/div/div[32]/button[1]')).scrollIntoView();
    // await document.querySelector("#wb-auto-8 > form > div > div.submit-container > button.btn-rounded.btn-secondary.ng-binding").scrollIntoView();
    // Unsure how to proceed to click the recaptcha, element cannot be located. Scrolling does not seem simple.
    // await driver.findElement(By.xpath('//*[@id="wb-dtmd"]/dd/time')).click();
    // driver.sendKeys(Key.PAGE_DOWN);
    // let nocap = await driver.wait(until.elementLocated(By.xpath('//*[@id="recaptcha-anchor"]/div[1]')), 1000);
    // nocap.click();

  } finally {
  }
})();
