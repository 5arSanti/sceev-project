from selenium.webdriver.common.by import By

class NavbarComponent:
    NAV_HOME_BTN = (By.CSS_SELECTOR, "a.nav-buttons.animacion2[href='#/home']")
    
    def __init__(self, driver):
        self.driver = driver
        
    def go_back_home(self):
        self.driver.find_element(*self.NAV_HOME_BTN).click()