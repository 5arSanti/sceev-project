from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def create_driver():
    opts = Options()
    # opts.add_argument("--headless")
    opts.add_argument("--disable-gpu")
    opts.add_argument("--start-maximized")
    driver = webdriver.Chrome(options=opts)
    driver.implicitly_wait(5)
    return driver