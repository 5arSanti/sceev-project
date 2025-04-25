from utils.driver_factory import create_driver
from pages.login_page import LoginPage
from pages.upload_page import UploadPage
import time

def test_upload_flow():
    driver = create_driver()
    base_url = "localhost:5173/"

    try:
        login_page = LoginPage(driver, base_url)
        login_page.open()
        login_page.login("juanp-marqueza@unilibre.edu.co", "12345678")
        time.sleep(2)

        upload_page = UploadPage(driver, base_url)
        upload_page.open()
        upload_page.upload_file(r"C:\Users\USUARIO\OneDrive\Documentos\5toSemestre\IngenieriadeSoftwareIII\Doc pruebas\TC1_carga_exitosa.xlsx")
        upload_page.select_municipios()
        upload_page.submit_upload()

        time.sleep(3)
    finally:
        driver.quit()
