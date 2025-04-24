import time
from pages.nav_bar_component import NavbarComponent
import time
from selenium.webdriver.common.by import By
from pages.estadisticas_page import EstadisticasPage
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

    
def test_scroll_to_interactive_map(driver, base_url):
    estadisticas = EstadisticasPage(driver, base_url)

    navbarComponent = NavbarComponent(driver)  
    navbarComponent.go_to_statics()    
    
   
    estadisticas.open()
    time.sleep(2)

    estadisticas.scroll_to_element_smooth(estadisticas.NAVEGAR_SECCION)
    time.sleep(2)

    estadisticas.scroll_to_element_smooth(estadisticas.NAVEGAR_SECCION_ESTADISTICAS)
    time.sleep(2)

    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "section-styled-stats-data")))


    estadisticas.scroll_to_element_smooth(estadisticas.INPUT_TITULO)
    estadisticas.get_input_and_type_text(estadisticas.INPUT_TITULO, "Estadística de Prueba")
    time.sleep(2)

    estadisticas.click_on_add()
    time.sleep(2)

    estadisticas.scroll_to_element_smooth(estadisticas.WRAPPER_CONT)
    time.sleep(2)

    estadisticas.click_on_dropdown_dv()
    time.sleep(1)
    estadisticas.select_tipo_contrato()
    time.sleep(2)

    estadisticas.click_on_dropdown_tg()
    time.sleep(1)
    estadisticas.select_pie()
    time.sleep(2)

    estadisticas.click_on_dropdown_og()
    time.sleep(1)
    estadisticas.select_y()
    time.sleep(2)

    estadisticas.scroll_to_element_smooth(estadisticas.SECTION_DECO)
    time.sleep(2)

    estadisticas.click_on_delete()
    time.sleep(2)

    estadisticas.scroll_to_element_smooth(estadisticas.INPUTS_CONTAINER_GRID)
    time.sleep(2)
