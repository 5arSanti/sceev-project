from selenium.webdriver.common.by import By

class UsersPage:
    URL = "#/users"
    
    TABLE = (By.CLASS_NAME, "table-container")
   
    FIRST_MENU_LINK = (By.CSS_SELECTOR, ".menu-item-open-close .ps-menu-button")
    
    USERS_MENU_LINK = (By.XPATH, "//a[contains(@class, 'ps-menu-button')]//span[contains(text(), 'Ver usuarios')]")
    EDIT_USERS_MENU_LINK = (By.XPATH, "//a[contains(@class, 'ps-menu-button')]//span[contains(text(), 'Editar usuarios')]")
    DELETE_USERS_MENU_LINK = (By.XPATH, "//a[contains(@class, 'ps-menu-button')]//span[contains(text(), 'Eliminar usuarios')]")
    CREATE_USER_MENU_LINK = (By.XPATH, "//a[contains(@class, 'ps-menu-button')]//span[contains(text(), 'Crear usuario')]")


    EDIT_BUTTON_FOR_USER = (
        By.XPATH,
        "//tr[td[text()='12345679']]//button[contains(., 'Editar')]"
    )
    DELETE_BUTTON_FOR_USER = (
        By.XPATH,
        "//tr[td[text()='12345679']]//button[contains(., 'Eliminar')]"
    )
    USER_NAME = (By.ID, "names")
    USER_SURNAME = (By.ID, "surnames")
    SAVE_BTN = (By.CSS_SELECTOR, 'button[title="Guardar cambios"]')


    SIDEBAR_CARDS = (
        By.CSS_SELECTOR,
        "div.ps-sidebar-container > nav.ps-menu-root:nth-of-type(1) ul.css-ewdv3l > div.wrapper-container2:nth-of-type(1) p.text-card"
    )

    def __init__(self, driver, base_url):
        self.driver = driver
        self.base   = base_url

    def load(self):
        self.driver.get(self.base + self.URL)

    def greet_active_user(self) -> str:
        cards = self.driver.find_elements(*self.SIDEBAR_CARDS)
        if len(cards) < 4:
            raise Exception(f"Encontrados {len(cards)} elementos, se esperaban ≥4")

        bienvenida   = cards[0].text.strip()
        nombre       = cards[1].text.strip()
        correo       = cards[2].text.strip()
        tipo_usuario = cards[3].text.strip()

        return (
            f"{bienvenida}, {nombre}!\n"
            f"Correo: {correo}\n"
            f"Tipo de usuario: {tipo_usuario}"
        )