from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from pages.users_page import UsersPage
from pages.home_page import HomePage
from pages.nav_bar_component import NavbarComponent
from pages.login_page import LoginPage
from pages.register_page import RegisterPage
import time

def test_users_page(driver, base_url):
    users = UsersPage(driver, base_url)
    home = HomePage(driver, base_url)
    navbarComponent = NavbarComponent(driver)
    login = LoginPage(driver)
    register = RegisterPage(driver, base_url)
    
    home.open()
    
    time.sleep(2)
    
    navbarComponent.go_login()
    
    time.sleep(1)
    
    login.get_input_and_type_text(login.EMAIL_INPUT, "santiari05@hotmail.com")
    time.sleep(2)

    login.get_input_and_type_text(login.PASSWORD_INPUT, "12345678")
    time.sleep(2)
    
    navbarComponent.go_users()
    time.sleep(2)
    
    home.scroll_to_element_smooth(users.TABLE)
    time.sleep(1)
    
    home.scroll_to_element_smooth(users.FIRST_MENU_LINK)
    time.sleep(1)
    
    home.wait_and_click(users.FIRST_MENU_LINK)
    time.sleep(1)
    
    home.scroll_to_element_smooth(users.TABLE)
    time.sleep(1)
    
    home.wait_and_click(users.USERS_MENU_LINK)
    time.sleep(1)
    
    home.wait_and_click(users.CREATE_USER_MENU_LINK)
    time.sleep(1)
    
    home.get_input_and_type_text(register.USER_ID, "12345679")
    home.get_input_and_type_text(register.NAME, "Test")
    home.get_input_and_type_text(register.SURNAMES, "Selenium")
    home.get_input_and_type_text(register.EMAIL, "test-selenium@mail.com")
    home.get_input_and_type_text(register.PASSWORD, "12345678")
    home.get_input_and_type_text(register.CONFIRM_PASSWORD, "12345678")
    register.select_user_type("Administrador")
    time.sleep(2)
    home.scroll_to_element_smooth(register.SAVE_USER_BTN)
    time.sleep(1)
    home.wait_and_click(register.SAVE_USER_BTN)
    time.sleep(2)
    
    navbarComponent.go_users()
    time.sleep(2)
    
    home.scroll_to_element_smooth(users.TABLE)
    time.sleep(3)
    
    home.scroll_to_element_smooth(users.FIRST_MENU_LINK)
    time.sleep(1)
    
    home.wait_and_click(users.FIRST_MENU_LINK)
    time.sleep(1)
    
    home.wait_and_click(users.EDIT_USERS_MENU_LINK)
    time.sleep(2)
    home.scroll_to_element_smooth(users.TABLE)
    time.sleep(2)
    
    home.wait_and_click(users.EDIT_BUTTON_FOR_USER)
    time.sleep(1)
    home.get_input_and_type_text(users.USER_NAME, "New name")
    home.get_input_and_type_text(users.USER_SURNAME, "New surname")
    time.sleep(3)
    home.wait_and_click(users.SAVE_BTN)
    time.sleep(2)
    
    home.scroll_to_element_smooth(users.TABLE)
    time.sleep(3)
    
    home.scroll_to_element_smooth(users.FIRST_MENU_LINK)
    time.sleep(1)
    
    home.wait_and_click(users.FIRST_MENU_LINK)
    time.sleep(2)
    
    home.wait_and_click(users.DELETE_USERS_MENU_LINK)
    time.sleep(2)
    
    home.scroll_to_element_smooth(users.TABLE)
    time.sleep(2)
    
    home.wait_and_click(users.DELETE_BUTTON_FOR_USER)
    time.sleep(2)
    
    home.scroll_to_element_smooth(users.TABLE)
    time.sleep(3)
    
    home.scroll_to_element_smooth(users.FIRST_MENU_LINK)
    time.sleep(1)
    home.wait_and_click(users.FIRST_MENU_LINK)
    time.sleep(1)
    
    home.scroll_to_element_smooth(users.TABLE)
    time.sleep(2)
    
    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located(users.SIDEBAR_CARDS)
    )
    
    print("Greet active user")
    
    mensaje = users.greet_active_user()
    print(mensaje)
    assert "Bienvenido" in mensaje
    assert "Administrador" in mensaje
    
    time.sleep(5)
    
    