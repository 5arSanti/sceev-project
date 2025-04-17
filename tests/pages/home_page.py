from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class HomePage:
    
    URL = "#/home"
    SECTION_INTERACTIVE_MAP = (By.ID, "section-interactive-map")
    DEPARTMENT = (By.NAME, "Huila")
    SECTION_FILTER_RESUTLS = (By.ID, "section-filter-results")
    SEARCH_INPUT = (By.NAME, "search")
    OFERTS_RESULTS = (By.CLASS_NAME, "oferts-results-grid")
    CLEAR_DEPARTMENT_SELECTION_BTN = (By.CLASS_NAME, "clear-department-selection")
    RESULTS_SCROLLABLE_WRAPPER = (By.CSS_SELECTOR, ".oferts-results-grid .scrollable-wrapper-container")
    FIRST_RESULT = (By.CSS_SELECTOR, ".oferts-results-grid .scrollable-wrapper-container a")
    DROP_NIVEL_ESTUDIOS = (By.CSS_SELECTOR, "button[id*='toggle-Nivel_Estudios']")
    OPTION_DOCTORADO = (By.CSS_SELECTOR, "a#option-Doctorado")
    OPTION_TODO = (By.CSS_SELECTOR, "a#option-todo-Nivel_Estudios")
    
    HOME_BTN = (By.CSS_SELECTOR, "button.home-page-pagination")
    BACK_BTN = (By.CSS_SELECTOR, "button.back-page-pagination")
    NEXT_BTN = (By.CSS_SELECTOR, "button.next-page-pagination")
    LAST_BTN = (By.CSS_SELECTOR, "button.last-page-pagination")


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

    def get_element(self, locator):
        return self.driver.find_element(*locator)
        
    
    def click_on_element(self, element):
        element.click()

    def get_input_and_type_text(self, locator, text):
        input_element = self.driver.find_element(*locator)
        input_element.clear()
        input_element.send_keys(text + Keys.ENTER)
        
    def wait_and_click(self, locator, timeout=10):
        element = WebDriverWait(self.driver, timeout).until(
            EC.element_to_be_clickable(locator)
        )
        element.click()


