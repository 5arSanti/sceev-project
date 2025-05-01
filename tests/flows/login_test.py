from pages.home_page import HomePage
from pages.nav_bar_component import NavbarComponent
from pages.login_page import LoginPage
import time

def test_open_login_page(driver, base_url):
    """Prueba que la página de login se abre correctamente."""
    navbarComponent = NavbarComponent(driver)
    login = LoginPage(driver)
    home = HomePage(driver, base_url)

    home.open()

    time.sleep(3)   


    #PRIMERA PRUEBA INICIO DE SESIÓN INCORRECTO Y LUEGO CORRECTO

    navbarComponent.go_login()
    time.sleep(3)

    login.get_input_and_type_text(login.EMAIL_INPUT, "juanp-marqueza@unilibre.edu.co")
    time.sleep(3)

    login.get_input_and_type_text(login.PASSWORD_INPUT, "12345679")
    time.sleep(3)

    login.get_input_and_type_text(login.PASSWORD_INPUT, "12345678")
    time.sleep(3)
    
    navbarComponent.close_session()
    time.sleep(3)

    #SEGUNDA PRUEBA INICIO DE SESIÓN CORRECTO SIN ERRORES

    navbarComponent.go_login()
    time.sleep(3)

    login.get_input_and_type_text(login.EMAIL_INPUT, "juanp-marqueza@unilibre.edu.co")
    time.sleep(3)

    login.get_input_and_type_text(login.PASSWORD_INPUT, "12345678")
    time.sleep(3)
    
    navbarComponent.close_session()
    time.sleep(3)

    #TERCERA PRUEBA INICIO DE SESIÓN CORRECTO CON INGRESO A TODAS LAS PÁGINAS DEL SISTEMA

    navbarComponent.go_login()
    time.sleep(3)

    login.get_input_and_type_text(login.EMAIL_INPUT, "juanp-marqueza@unilibre.edu.co")
    time.sleep(3)

    login.get_input_and_type_text(login.PASSWORD_INPUT, "12345678")
    time.sleep(3)

    navbarComponent.go_back_home()
    time.sleep(2)

    navbarComponent.go_stats()
    time.sleep(2)

    navbarComponent.go_upload()
    time.sleep(2)

    navbarComponent.go_users()
    time.sleep(2)
    
    navbarComponent.close_session()
    time.sleep(3)

    #CUARTA PRUEBA INICIO DE SESIÓN CORRECTO CON INGRESO A LA SECCIÓN DE USUARIOS

    navbarComponent.go_login()
    time.sleep(3)

    login.get_input_and_type_text(login.EMAIL_INPUT, "juanp-marqueza@unilibre.edu.co")
    time.sleep(3)

    login.get_input_and_type_text(login.PASSWORD_INPUT, "12345678")
    time.sleep(3)

    navbarComponent.go_users()
    time.sleep(2)