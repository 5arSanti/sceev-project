from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from pages.nav_bar_component import NavbarComponent
from pages.estadisticas_page import EstadisticasPage
from pages.home_page import HomePage
import time

    
def test_scroll_to_interactive_map(driver, base_url):
    home = HomePage(driver, base_url)
    estadisticas = EstadisticasPage(driver, base_url)
    navbarComponent = NavbarComponent(driver) 
    
    home.open()
    
    time.sleep(2)
     
    navbarComponent.go_to_statics()    
   
    time.sleep(2)

    home.scroll_to_element_smooth(estadisticas.NAVEGAR_SECCION_ESTADISTICAS)
    time.sleep(2)

    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "section-styled-stats-data")))


    home.scroll_to_element_smooth(estadisticas.INPUT_TITULO)
    home.get_input_and_type_text(estadisticas.INPUT_TITULO, "Estadística de Prueba")
    time.sleep(2)
    
    home.scroll_to_element_smooth(estadisticas.INPUTS_CONTAINER_GRID)
    time.sleep(2)
    
    
    
    home.wait_and_click(estadisticas.DROPDOWN_BTN_DV)
    time.sleep(1)
    home.wait_and_click(estadisticas.Button_tipocontrato)
    time.sleep(2)


    home.wait_and_click(estadisticas.DROPDOWN_BTN_TG)
    time.sleep(1)
    home.wait_and_click(estadisticas.button_tipopie)
    time.sleep(2)


    home.wait_and_click(estadisticas.DROPDOWN_BTN_OG)
    time.sleep(1)
    home.wait_and_click(estadisticas.button_tipoy)
    time.sleep(2)
    
 

    home.scroll_to_element_smooth(estadisticas.NAVEGAR_SECCION_ESTADISTICAS)
    time.sleep(2)
    home.scroll_to_element_smooth()
    time.sleep(2)
    estadisticas.click_on_add()
    time.sleep(2)
    estadisticas.click_on_delete()
    time.sleep(2)


