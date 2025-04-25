from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class UploadPage:
    FILE_INPUT = (By.CSS_SELECTOR, "input[type='file']")
    MUNICIPIOS_SELECT = (By.ID, "municipios")
    FINAL_SUBMIT = (By.ID, "submit-upload")

    def __init__(self, driver, base_url):
        self.driver = driver
        self.base = base_url
        self.url = "//localhost:5173/#/upload"

    def open(self):
        self.driver.get(self.base + self.url)

    def upload_file(self, file_path):
        self.driver.find_element(*self.FILE_INPUT).send_keys(file_path)

    def select_municipios(self):
        self.driver.find_element(*self.MUNICIPIOS_SELECT).click()

    def submit_upload(self):
        WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable(self.FINAL_SUBMIT)).click()
