from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.support.ui import WebDriverWait

submitFirstPageCSS = 'div.submit-container button'
submitSecondPageCSS = 'div.submit-container button:nth-child(2)'
submitThirdPageXpath = '//*[@id="complaint-3"]/div[3]/button[2]'
submitFourthPageXpath = '//*[@id="complaint-4"]/div[18]/button[2]'
submitFifthPageXpath = '//*[@id="complaint-5"]/div[20]/button[2]'

dataUser = {
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
    "userSpammedPersonal":True,
    "userSpammedBusiness":False,
    "userSpammedProvider":"Rogers"
  }
dataCall = {
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
    "reasonSell":True,
    "reasonWon":False,
    "reasonSurvey":False,
    "reasonPolitical":False,
    "reasonDonation":False,
    "reasonDebt":False,
    "reasonPsa":False,
    "reasonUnknown":False,
    "purchaseStatus":"no",
    "purchaseNow":False,
    "purchaseRecent":False,
    "purchaseDistant":False,
    "businessInquiry":True,
    "businessContract":False,
    "businessDivulge":True,
    "businessVisit":False,
    "ceaseNow":False,
    "ceasePrior":False,
    "ceaseRefuse":False,
    "consent":True
  }

options = ChromeOptions()
#config driver options before initiating driver

driver = webdriver.Chrome(options=options)
driver.implicitly_wait(10)
# WebDriverWait(driver, timeout=3).until(driver.get('https://lnnte-dncl.gc.ca/en/Consumer/Complaint/#!/'))
driver.get('https://lnnte-dncl.gc.ca/en/Consumer/Complaint/#!/')
if (dataCall["callUserAction"]=="Answered"):
  driver.find_element(By.ID,"radio-answer-phone").click()
  driver.find_element(By.CSS_SELECTOR,submitFirstPageCSS).click()

# driver.quit()