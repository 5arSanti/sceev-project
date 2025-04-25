from selenium.webdriver.common.by import By

class NavbarComponent:
    NAV_HOME_BTN = (By.CSS_SELECTOR, "a.nav-buttons.animacion2[href='#/home']")
    NAV_STATS_BTN = (By.CSS_SELECTOR, "a.nav-buttons.animacion2[href='#/stats']")
    NAV_LOGIN_BTN = (By.CSS_SELECTOR, "a.nav-buttons.animacion2[href='#/login']")
    NAV_UPLOAD_BTN = (By.CSS_SELECTOR, "a.nav-buttons.animacion2[href='#/upload']")
    NAV_USERS_BTN = (By.CSS_SELECTOR, "a.nav-buttons.animacion2[href='#/users']")
 

    def __init__(self, driver):
        self.driver = driver
        
    def go_back_home(self):
        self.driver.find_element(*self.NAV_HOME_BTN).click()

    def go_stats(self):
        self.driver.find_element(*self.NAV_STATS_BTN).click()

    def go_login(self):
        self.driver.find_element(*self.NAV_LOGIN_BTN).click()

    def go_upload(self):
        self.driver.find_element(*self.NAV_UPLOAD_BTN).click()

    def go_users(self):
        self.driver.find_element(*self.NAV_USERS_BTN).click()
