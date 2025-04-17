from selenium.webdriver.common.by import By

class OfertDetailsPage:
    
    SECTION_STYLED_OFERT = (By.ID, "section-styled-ofert")
    SECTION_OFERT = (By.ID, "section-ofert")
    SECTION_OFERT_INFO = (By.ID, "section-ofert-info")
    SECTION_OFERT_LOCATION = (By.ID, "section-ofert-location")
    SECTION_PRESTADOR = (By.ID, "section-prestador")
    SECTION_EMPLEADOR = (By.ID, "section-empleador")
    
    def __init__(self, driver):
        self.driver = driver