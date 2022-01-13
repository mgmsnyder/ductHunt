from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions

options = ChromeOptions()
#config driver options before initiating driver
driver = webdriver.Chrome(options=options)
driver.quit()