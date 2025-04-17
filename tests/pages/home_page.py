from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains

class HomePage:
    URL = "#/home"
    SECTION_INTERACTIVE_MAP = (By.ID, "section-interactive-map")
    DEPARTMENT = (By.NAME, "Meta")

    def __init__(self, driver, base_url):
        self.driver = driver
        self.base = base_url

    def open(self):
        self.driver.get(self.base + self.URL)

    def scroll_to_element_smooth(self, locator):
        element = self.driver.find_element(*locator)
        self.driver.execute_script("""
            arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        """, element)

