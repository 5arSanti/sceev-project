from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class EstadisticasPage:
    # principal
    URL = "#/stats"
    
    
    section_locator = (By.ID, "section-styled-stats-data")
    NAVEGAR_SECCION_ESTADISTICAS = (By.ID, "section-graphs")
    INPUT_TITULO = (By.ID, "graph-title")



    # Botones de dropdowns
    DROPDOWN_BTN_DV = (By.ID, "dropdown-card-basic toggle-¿Que datos deseas visualizar?")
    DROPDOWN_BTN_TG = (By.ID, "dropdown-card-basic toggle-Selecciona el tipo de grafico")
    DROPDOWN_BTN_OG = (By.ID, "dropdown-card-basic toggle-Orientación de la gráfica")

    # Contenedores
    WRAPPER_CONT = (By.CLASS_NAME, "wrapper-container2")
    
    SECTION_DECO = (By.CLASS_NAME, "section-decoration")
    INPUTS_CONTAINER_GRID = (By.CSS_SELECTOR, ".grid-container.grid-1-1-1")

     # Botones generales
    ESTADISTICAS_BTN_BORRAR = (By.CSS_SELECTOR, "button.button-card-container.delete-graph-button")
    ESTADISTICAS_BTN_GENERAL = (By.CSS_SELECTOR, "button.button-card-container")

# F u n c i o n e s ya hechas
    def __init__(self, driver, base_url):
        self.driver = driver
        self.base = base_url

    def open(self):
        self.driver.get(self.base + self.URL)

    def scroll_to_element_smooth(self, locator):
        element = self.driver.find_element(*locator)
        self.driver.execute_script("""
            arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        """, element)

    def get_element(self, locator):
        return self.driver.find_element(*locator)

    def click_on_element(self, element):
        element.click()

    def get_input_and_type_text(self, locator, text):
        input_element = self.driver.find_element(*locator)
        input_element.clear()
        input_element.send_keys(text + Keys.ENTER)

    def wait_and_click(self, locator, timeout=10):
        element = WebDriverWait(self.driver, timeout).until(
            EC.element_to_be_clickable(locator)
        )
        element.click()


    # funciones de estadistica
    def click_on_add(self):
        self.wait_and_click(self.ESTADISTICAS_BTN_GENERAL)

    def click_on_delete(self):
        self.wait_and_click(self.ESTADISTICAS_BTN_BORRAR)

    def click_on_dropdown_dv(self):
        self.wait_and_click(self.DROPDOWN_BTN_DV)

    def click_on_dropdown_tg(self):
        self.wait_and_click(self.DROPDOWN_BTN_TG)

    def click_on_dropdown_og(self):
        self.wait_and_click(self.DROPDOWN_BTN_OG)


    # funciones  de seleccion
    def select_tipo_contrato(self):
        button_locator = (By.XPATH, "//button[@id='dropdown-card-basic toggle-¿Que datos deseas visualizar?' and @type='button' and contains(text(), 'Tipo_Contrato')]")
        self.wait_and_click(button_locator)

    def select_pie(self):
        button_locator = (By.XPATH, "//button[@id='dropdown-card-basic toggle-Selecciona el tipo de grafico' and @type='button' and contains(text(), 'pie')]")
        self.wait_and_click(button_locator)
    def select_y(self):
        button_locator = (By.XPATH, "//button[@id='dropdown-card-basic toggle-Orientación de la gráfica' and @type='button' and contains(text(), 'y')]")
        self.wait_and_click(button_locator)
        
        