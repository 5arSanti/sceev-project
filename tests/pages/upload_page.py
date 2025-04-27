import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class UploadPage:
    FILE_INPUT = (By.CSS_SELECTOR, "input[type='file']")
    MUNICIPIOS_SELECT = (By.ID, "user-types")
    SUBMIT_BUTTON = (By.CSS_SELECTOR, "button.button-card-container")
    UPLOAD_SECTION = (By.CSS_SELECTOR, ".wrapper-container1")

    def __init__(self, driver, base_url):
        self.driver = driver
        self.base_url = base_url

    def open(self):
        self.driver.get(self.base_url + "/upload")

    def scroll_to_element_smooth(self, locator):
        element = WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located(locator)
        )
        self.driver.execute_script("arguments[0].scrollIntoView({behavior: 'smooth', block: 'center'});", element)
        time.sleep(1)

    def upload_file(self, file_path):
        file_input = WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located(self.FILE_INPUT)
        )
        file_input.send_keys(file_path)

    def select_municipios(self):
        municipios_select_button = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable(self.MUNICIPIOS_SELECT)
        )
        municipios_select_button.click()

        municipios_option = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//option[text()='Municipios']"))
        )
        municipios_option.click()

    def submit_upload(self):
        submit_button = WebDriverWait(self.driver, 10).until(
            EC.element_to_be_clickable(self.SUBMIT_BUTTON)
        )
        submit_button.click()
