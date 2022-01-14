from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.support.ui import WebDriverWait

options = ChromeOptions()
#config driver options before initiating driver

driver = webdriver.Chrome(options=options)
WebDriverWait(driver).until(driver.get('https://lnnte-dncl.gc.ca/en/Consumer/Complaint/#!/'))

# WebDriverWait(driver).until(lambda d: d.find_element_by_tag_name("p"))

driver.quit()