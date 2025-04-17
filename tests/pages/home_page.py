from selenium.webdriver.common.by import By

class HomePage:
    URL = "#/home"

    def __init__(self, driver, base_url):
        self.driver = driver
        self.base = base_url

    def open(self):
        self.driver.get(self.base + self.URL)

    def login(self, user, pwd):
        self.driver.find_element(*self.USER).send_keys(user)
        self.driver.find_element(*self.PASS).send_keys(pwd)
        self.driver.find_element(*self.BTN).click()
