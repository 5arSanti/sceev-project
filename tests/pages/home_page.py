from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

class HomePage:
    URL = "#/home"
    SECTION_INTERACTIVE_MAP = (By.ID, "section-interactive-map")
    DEPARTMENT = (By.NAME, "Tolima")
    SECTION_FILTER_RESUTLS = (By.ID, "section-filter-results")
    
    SEARCH_INPUT = (By.NAME, "search")
    OFERTS_RESULTS = (By.CLASS_NAME, "oferts-results-grid")

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

    def get_element_by_id(self, locator):
        return self.driver.find_element(*locator)
        
    
    def click_on_element(self, element):
        element.click()

    def get_input_and_type_text(self, locator, text):
        input_element = self.driver.find_element(*locator)
        input_element.clear()
        input_element.send_keys(text + Keys.ENTER)
