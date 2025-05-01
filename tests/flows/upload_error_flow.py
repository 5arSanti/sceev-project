import os
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from pages.upload_page import UploadPage
from pages.nav_bar_components import NavbarComponent
from pages.login_page import LoginPage
import time

def test_upload_file_with_invalid_format(driver, base_url):
    navbarComponent = NavbarComponent(driver)
    uploadPage = UploadPage(driver, base_url)
    loginPage = LoginPage(driver)

    driver.get(base_url)
    time.sleep(2)

    navbarComponent.go_login()
    time.sleep(3)

    loginPage.get_input_and_type_text(loginPage.EMAIL_INPUT, "juanp-marqueza@unilibre.edu.co")
    time.sleep(2)
    loginPage.get_input_and_type_text(loginPage.PASSWORD_INPUT, "12345678")
    time.sleep(2)

    navbarComponent.go_upload()
    time.sleep(3)

    uploadPage.scroll_to_element_smooth(uploadPage.UPLOAD_SECTION)
    time.sleep(2)

    WebDriverWait(driver, 10).until(EC.presence_of_element_located(uploadPage.FILE_INPUT))

    uploadPage.upload_file(os.path.abspath(os.path.join("..", "data", "TC2_formato_no_permitido.txt")))
    time.sleep(2)

    error_message = uploadPage.get_error_message()
    assert "Por favor, seleccione un archivo .xlsx válido." in error_message, f"Expected error message, but got: {error_message}"
    print("Error de formato de archivo detectado correctamente!")

def test_upload_empty_excel_file(driver, base_url):
    navbarComponent = NavbarComponent(driver)
    uploadPage = UploadPage(driver, base_url)
    loginPage = LoginPage(driver)

    driver.get(base_url)
    time.sleep(2)

    navbarComponent.go_login()
    time.sleep(3)

    loginPage.get_input_and_type_text(loginPage.EMAIL_INPUT, "juanp-marqueza@unilibre.edu.co")
    time.sleep(2)
    loginPage.get_input_and_type_text(loginPage.PASSWORD_INPUT, "12345678")
    time.sleep(2)

    navbarComponent.go_upload()
    time.sleep(3)

    uploadPage.scroll_to_element_smooth(uploadPage.UPLOAD_SECTION)
    time.sleep(2)

    WebDriverWait(driver, 10).until(EC.presence_of_element_located(uploadPage.FILE_INPUT))

    uploadPage.upload_file(os.path.abspath(os.path.join("..", "data", "TC3_archivo_vacio.xlsx")))
    time.sleep(2)

    error_message = uploadPage.get_error_message()
    assert "El archivo Excel está vacío." in error_message, f"Expected empty file message, but got: {error_message}"
    print("Archivo vacío detectado correctamente!") 
