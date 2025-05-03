from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select

class RegisterPage:
    URL = "#/register"
    
    USER_ID = (By.NAME, "user-id")
    NAME = (By.NAME, "name")
    SURNAMES = (By.NAME, "surnames")
    EMAIL = (By.NAME, "email")
    PASSWORD = (By.NAME, "password")
    CONFIRM_PASSWORD = (By.NAME, "confirm-password")
    USER_TYPE = (By.ID, "user-types")
    SAVE_USER_BTN = (By.XPATH, "//button[@type='submit' and text()='Guardar Usuario']")  # Selector para el botón

    
    def __init__(self, driver, base_url):
        self.driver = driver
        self.base = base_url
    
    def select_user_type(self, user_type_name):
        select_element = self.driver.find_element(*self.USER_TYPE)
        select = Select(select_element)
        select.select_by_visible_text(user_type_name) 