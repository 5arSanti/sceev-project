import time
import pytest
import csv
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from pages.login_page import LoginPage
from pages.home_page import HomePage

@pytest.mark.smoke
def test_scrape_offer(driver):
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

    print("Buscando elementos...")

    fecha_publicacion = obtener_texto_por_estilo(driver, "text-card bold text-color", "24px", index=0, tipo="Fecha de Publicación")
    fecha_vencimiento = obtener_texto_por_estilo(driver, "text-card bold text-color", "24px", index=1, tipo="Fecha de Vencimiento")
    cargo = obtener_texto_por_estilo(driver, "span-card undefined", "18px", tipo="Cargo")
    descripcion_cargo = obtener_texto_por_estilo(driver, "text-card italic text-color", "16px", tipo="Descripción Cargo")

    print(f"Fecha Publicación: {fecha_publicacion}")
    print(f"Fecha Vencimiento: {fecha_vencimiento}")
    print(f"Cargo: {cargo}")
    print(f"Descripción Cargo: {descripcion_cargo}")

    guardar_en_csv(fecha_publicacion, fecha_vencimiento, cargo, descripcion_cargo)

def obtener_texto_por_estilo(driver, clase, font_size, tipo="", index=0):
    try:
        elementos = driver.find_elements(By.CSS_SELECTOR, f".{clase}[style*='font-size: {font_size}']")
        print(f"Elementos encontrados para {tipo}: {len(elementos)}")  
        if elementos:
            return elementos[index].text.strip()
        else:
            return f"No encontrado ({tipo})"
    except (IndexError, AttributeError):
        return f"No encontrado ({tipo})"

def guardar_en_csv(fecha_publicacion, fecha_vencimiento, cargo, descripcion_cargo):
    with open('oferta_scrapeadas.csv', mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow([fecha_publicacion, fecha_vencimiento, cargo, descripcion_cargo])
