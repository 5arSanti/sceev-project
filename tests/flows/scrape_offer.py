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
def test_scrape_offer(driver):
    NOT_FOUND = 'No encontrada'
    
    login_page = LoginPage(driver)
    login_page.open()
    login_page.get_input_and_type_text(LoginPage.EMAIL_INPUT, "juanp-marqueza@unilibre.edu.co")
    login_page.get_input_and_type_text(LoginPage.PASSWORD_INPUT, "12345678")

    home_page = HomePage(driver, base_url="http://localhost:5173")
    home_page.open()

    home_page.scroll_to_element_smooth(HomePage.OFERTS_RESULTS)
    time.sleep(2) 
    home_page.wait_and_click(HomePage.FIRST_RESULT)

    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.TAG_NAME, "h1")) 
    )
    
    html_content = driver.page_source

    soup = BeautifulSoup(html_content, 'html.parser')

   
    try:
        fecha_publicacion = soup.select_one("p.text-card.bold.text-color[style='text-align: center; width: 100%; font-size: 24px;']").text.strip()
    except AttributeError:
        fecha_publicacion = NOT_FOUND
    
    try:
        fecha_vencimiento = soup.select("p.text-card.bold.text-color[style='text-align: center; width: 100%; font-size: 24px;']")[1].text.strip()
    except IndexError:
        fecha_vencimiento = NOT_FOUND
    
    try:
        cargo = soup.select_one("span.span-card.undefined[style='font-size: 18px;']").text.strip()
    except AttributeError:
        cargo = NOT_FOUND

    try:
        descripcion_cargo = soup.select_one("p.text-card.italic.text-color[style='text-align: start; width: 100%; font-size: 16px;']").text.strip()
    except AttributeError:
        descripcion_cargo = NOT_FOUND

    print(f"Fecha Publicación: {fecha_publicacion}")
    print(f"Fecha Vencimiento: {fecha_vencimiento}")
    print(f"Cargo: {cargo}")
    print(f"Descripción Cargo: {descripcion_cargo}")

    guardar_en_csv(fecha_publicacion, fecha_vencimiento, cargo, descripcion_cargo)

def guardar_en_csv(fecha_publicacion, fecha_vencimiento, cargo, descripcion_cargo):
    with open('ofertas_scrapeadas.csv', mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow([fecha_publicacion, fecha_vencimiento, cargo, descripcion_cargo])
