import time
import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver
from bs4 import BeautifulSoup
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
        html_content = offer_element.get_attribute('outerHTML')
        soup = BeautifulSoup(html_content, 'html.parser')

        fecha_publicacion = extraer_dato(soup, "p.text-card.italic.text-color", "Fecha de Publicación")
        cargo = extraer_dato(soup, "h2", "Cargo")
        descripcion_cargo = extraer_dato(soup, "p.text-card.italic.text-color", "Descripción del Cargo")
        prestador = extraer_dato(soup, "p.text-card.italic.text-color", "Prestador")
        salario = extraer_dato(soup, "p.text-card.italic.text-color", "Salario")
        codigo_oferta = extraer_dato(soup, "p.text-card.italic.text-color", "Código de la Oferta")

        print(f"Fecha Publicación: {fecha_publicacion}")
        print(f"Cargo: {cargo}")
        print(f"Descripción Cargo: {descripcion_cargo}")
        print(f"Prestador: {prestador}")
        print(f"Salario: {salario}")
        print(f"Código de la Oferta: {codigo_oferta}")

        guardar_en_csv(fecha_publicacion, cargo, descripcion_cargo, prestador, salario, codigo_oferta)

def extraer_dato(soup, selector, tipo_dato):
    try:
        return soup.select_one(selector).text.strip()
    except AttributeError:
        return f"No encontrado ({tipo_dato})"

def guardar_en_csv(fecha_publicacion, cargo, descripcion_cargo, prestador, salario, codigo_oferta):
    with open('ofertas_scrapeadas.csv', mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow([fecha_publicacion, cargo, descripcion_cargo, prestador, salario, codigo_oferta])
