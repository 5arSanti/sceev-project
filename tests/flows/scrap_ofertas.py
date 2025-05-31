from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver
from pages.login_page import LoginPage
from pages.home_page import HomePage
from bs4 import BeautifulSoup
import pytest
import time
import csv

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

        codigo_oferta = extraer_dato(soup, "p.text-card.italic.text-color", "Código de la Oferta")
        nombre_oferta = extraer_dato(soup, "h2", "Nombre de la Oferta")  
        sueldo = extraer_sueldo(soup)  

        print(f"Código de la Oferta: {codigo_oferta}")
        print(f"Nombre de la Oferta: {nombre_oferta}")
        print(f"Sueldo: {sueldo}")

        guardar_en_csv(codigo_oferta, nombre_oferta, sueldo)

def extraer_dato(soup, selector, tipo_dato):
    try:
        return soup.select_one(selector).text.strip()
    except AttributeError:
        return f"No encontrado ({tipo_dato})"

def extraer_sueldo(soup):
    try:
        salario_label = soup.find('p', string='Salario.') 
        if salario_label:
            siguiente_p = salario_label.find_next('p', class_='text-card italic text-color')
            if siguiente_p:
                return siguiente_p.text.strip()  
        return "No encontrado (Sueldo)"
    except AttributeError:
        return "No encontrado (Sueldo)"

def guardar_en_csv(codigo_oferta, nombre_oferta, sueldo):
    with open('data/ofertas_scrapeadas.csv', mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow([codigo_oferta, nombre_oferta, sueldo])
