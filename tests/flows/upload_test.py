import time
import os
from selenium.webdriver.common.by import By
from pages.upload_page import UploadPage
from pages.nav_bar_components import NavbarComponent
from pages.login_page import LoginPage
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException


def test_login_and_upload(driver, base_url):
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

    uploadPage.select_municipios()
    time.sleep(2)

    uploadPage.submit_upload()
    time.sleep(2)

    try:
        error_message = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "upload-error-message"))
        )
        assert "Por favor, seleccione un archivo .xlsx válido" in error_message.text, f"Expected error message, but got: {error_message.text}"
        print("Mensaje de error recibido: Archivo no permitido.")
    except TimeoutException:
        print("Error: No se mostró el mensaje de error para archivo no permitido.")
    
    uploadPage.upload_file(os.path.abspath(os.path.join("..", "data", "TC3_archivo_vacio.xlsx")))
    time.sleep(2)

    uploadPage.select_municipios()
    time.sleep(2)

    uploadPage.submit_upload()
    time.sleep(2)

    try:
        empty_file_message = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "upload-error-message"))
        )
        assert "El archivo Excel está vacío" in empty_file_message.text, f"Expected empty file message, but got: {empty_file_message.text}"
        print("Mensaje de error recibido: Archivo vacío.")
    except TimeoutException:
        print("Error: No se mostró el mensaje de error para archivo vacío.")

    uploadPage.upload_file(os.path.abspath(os.path.join("..", "data", "TC1_carga_exitosa.xlsx")))
    time.sleep(2)

    uploadPage.select_municipios()
    time.sleep(2)

    uploadPage.submit_upload()
    time.sleep(2)

    try:
        success_message = WebDriverWait(driver, 20).until(
            EC.visibility_of_element_located((By.ID, "upload-success-message"))
        )
        assert "Archivo cargado exitosamente" in success_message.text, f"Expected success message, but got: {success_message.text}"
        print("Carga de archivo exitosa!")
    except TimeoutException:
        print("Error: No se mostró el mensaje de éxito.")
