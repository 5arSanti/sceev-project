from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from pages.nav_bar_components import NavbarComponent

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
        """Busca un input, limpia su contenido y escribe el texto dado."""
        input_element = self.driver.find_element(*locator)
        input_element.clear()
        input_element.send_keys(text + Keys.ENTER)

    def login(self, email, password):
        """Hace login usando el correo y contraseña que recibe."""
        self.open()
        self.get_input_and_type_text(self.EMAIL_INPUT, email)
        self.get_input_and_type_text(self.PASSWORD_INPUT, password)
