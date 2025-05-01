from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class NavbarComponent:
    NAV_HOME_BTN = (By.CSS_SELECTOR, "a.nav-buttons.animacion2[href='#/home']")
    NAV_STATS_BTN = (By.CSS_SELECTOR, "a.nav-buttons.animacion2[href='#/stats']")
    NAV_LOGIN_BTN = (By.CSS_SELECTOR, "a.nav-buttons.animacion2[href='#/login']")
    NAV_UPLOAD_BTN = (By.CSS_SELECTOR, "a.nav-buttons.animacion2[href='#/upload']")
    NAV_USERS_BTN = (By.CSS_SELECTOR, "a.nav-buttons.animacion2[href='#/users']")

    def __init__(self, driver):
        self.driver = driver

    def wait_for_element(self, locator, timeout=10):
        """Esperar a que el elemento sea visible y clickeable."""
        return WebDriverWait(self.driver, timeout).until(
            EC.element_to_be_clickable(locator)
        )

    def go_back_home(self):
        """Navegar a la página de inicio."""
        home_button = self.wait_for_element(self.NAV_HOME_BTN)
        home_button.click()

    def go_stats(self):
        """Navegar a la página de estadísticas."""
        stats_button = self.wait_for_element(self.NAV_STATS_BTN)
        stats_button.click()

    def go_login(self):
        """Navegar a la página de login."""
        login_button = self.wait_for_element(self.NAV_LOGIN_BTN)
        login_button.click()

    def go_upload(self):
        """Navegar a la página de upload."""
        upload_button = self.wait_for_element(self.NAV_UPLOAD_BTN)
        upload_button.click()

    def go_users(self):
        """Navegar a la página de usuarios."""
        users_button = self.wait_for_element(self.NAV_USERS_BTN)
        users_button.click()
