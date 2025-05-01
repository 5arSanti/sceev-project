import time
import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import csv
from pages.login_page import LoginPage
from pages.home_page import HomePage

@pytest.mark.smoke
def test_scrape_home_offers(driver):
    login_page = LoginPage(driver)
    login_page.open()
    login_page.get_input_and_type_text(LoginPage.EMAIL_INPUT, "juanp-marqueza@unilibre.edu.co")
    login_page.get_input_and_type_text(LoginPage.PASSWORD_INPUT, "12345678")

    home_page = HomePage(driver, base_url="http://localhost:5173")
    home_page.open()

    home_page.scroll_to_element_smooth(HomePage.OFERTS_RESULTS)
    time.sleep(2)

    offers_elements = driver.find_elements(By.CLASS_NAME, "wrapper-container2.results-card-container")

    for offer_element in offers_elements:
        try:
            fecha_publicacion = buscar_dato_selenium(offer_element, "p.text-card.italic.text-color", "Fecha de Publicación")
            cargo = buscar_dato_selenium(offer_element, "h2", "Cargo")
            descripcion_cargo = buscar_dato_selenium(offer_element, "p.text-card.italic.text-color", "Descripción del Cargo")
            prestador = buscar_dato_selenium(offer_element, "p.text-card.italic.text-color", "Prestador")
            salario = buscar_dato_selenium(offer_element, "p.text-card.italic.text-color", "Salario")
            codigo_oferta = buscar_dato_selenium(offer_element, "p.text-card.italic.text-color", "Código de la Oferta")
        except Exception as e:
            print(f"Error al extraer los datos: {e}")
            continue

        print(f"Fecha Publicación: {fecha_publicacion}")
        print(f"Cargo: {cargo}")
        print(f"Descripción Cargo: {descripcion_cargo}")
        print(f"Prestador: {prestador}")
        print(f"Salario: {salario}")
        print(f"Código de la Oferta: {codigo_oferta}")

        guardar_en_csv(fecha_publicacion, cargo, descripcion_cargo, prestador, salario, codigo_oferta)

def buscar_dato_selenium(container, css_selector, tipo_dato):
    try:
        elementos = container.find_elements(By.CSS_SELECTOR, css_selector)
        for el in elementos:
            if tipo_dato.lower() in el.text.lower():
                return el.text.strip()
        return f"No encontrado ({tipo_dato})"
    except Exception:
        return f"No encontrado ({tipo_dato})"

def guardar_en_csv(fecha_publicacion, cargo, descripcion_cargo, prestador, salario, codigo_oferta):
    with open('ofertas_scrapeadas.csv', mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow([fecha_publicacion, cargo, descripcion_cargo, prestador, salario, codigo_oferta])
