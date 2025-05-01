
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class LoginPage:
    URL = "http://localhost:5173/#/login"
    EMAIL_INPUT = (By.NAME, "email")
    PASSWORD_INPUT = (By.NAME, "password")

    def __init__(self, driver):
        self.driver = driver

    def open(self):
        """Abre la página de inicio de sesión directamente."""
        self.driver.get(self.URL)

    def get_input_and_type_text(self, locator, text):
        input_element = self.driver.find_element(*locator)
        input_element.clear()
        input_element.send_keys(text + Keys.ENTER)