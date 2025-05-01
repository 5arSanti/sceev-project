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
    DROPDOWN_BTN_DV = (By.CSS_SELECTOR, "button[id='dropdown-card-basic toggle-¿Que datos deseas visualizar?']")
    DROPDOWN_BTN_TG = (By.CSS_SELECTOR, "button[id='dropdown-card-basic toggle-Selecciona el tipo de grafico']")
    DROPDOWN_BTN_OG = (By.CSS_SELECTOR, "button[id='dropdown-card-basic toggle-Orientación de la gráfica']")
    
    Button_tipocontrato = (By.CSS_SELECTOR, "a#option-Tipo_Contrato")
    button_tipopie= (By.CSS_SELECTOR, "a#option-line")
    button_tipoy = (By.CSS_SELECTOR, "a#option-y")
    
    SECTION_ADD_GRA = (By.CSS_SELECTOR, "button-card-container ")
    SECTION_DECO = (By.CLASS_NAME, "section-decoration")
    INPUTS_CONTAINER_GRID = (By.CSS_SELECTOR, ".grid-container.grid-1-1-1")
    ESTADISTICAS_BTN_AGREGAR = (By.CSS_SELECTOR, "button.button-card-container.add-graph-button")
    ESTADISTICAS_BTN_BORRAR = (By.CSS_SELECTOR, "button.button-card-container.delete-graph-button")
    ESTADISTICAS_BTN_GENERAL = (By.CSS_SELECTOR, "button.button-card-container")
    ESTADISTICAS_BTN_GRAFICO = (By.CSS_SELECTOR, "button.button-card-container.graph-button")
    
    

# F u n c i o n e s ya hechas
    def __init__(self, driver, base_url):
        self.driver = driver
        self.base = base_url

    def open(self):
        self.driver.get(self.base + self.URL)
        
        
    def section_graphs(self):
        self.wait_and_click(self.SECTION_ADD_GRA)

        