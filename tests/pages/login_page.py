from selenium.webdriver.common.by import By

class LoginPage:
    EMAIL_INPUT = (By.NAME, "email")
    PASSWORD_INPUT = (By.NAME, "password")
    LOGIN_BUTTON = (By.CSS_SELECTOR, "button[type='submit']")

    def __init__(self, driver, base_url):
        self.driver = driver
        self.base = base_url
        self.url = "localhost:5173/#/home"

    def open(self):
        self.driver.get(self.base + self.url)

    def login(self, email, password):
        self.driver.find_element(*self.EMAIL_INPUT).send_keys(email)
        self.driver.find_element(*self.PASSWORD_INPUT).send_keys(password)
        self.driver.find_element(*self.LOGIN_BUTTON).click()
