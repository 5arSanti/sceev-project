import pytest
from pages.home_page import HomePage
from pages.ofert_details_page import OfertDetailsPage
from pages.nav_bar_component import NavbarComponent
import time

def test_scroll_to_interactive_map(driver, base_url):
    home = HomePage(driver, base_url)
    ofertDetail = OfertDetailsPage(driver)
    navbarComponent = NavbarComponent(driver)

    home.open()
    
    time.sleep(2)
    
    home.scroll_to_element_smooth(home.OFERTS_RESULTS)
    
    time.sleep(2)

    home.scroll_to_element_smooth(home.SECTION_INTERACTIVE_MAP)
    
    time.sleep(1)
    
    element = home.get_element(home.DEPARTMENT)
    home.click_on_element(element)    

    time.sleep(1)
    
    home.scroll_to_element_smooth(home.SEARCH_INPUT)
    home.get_input_and_type_text(home.SEARCH_INPUT, "Analista")
    
    time.sleep(1)
    
    home.scroll_to_element_smooth(home.OFERTS_RESULTS)
    
    time.sleep(2)
    
    home.scroll_to_element_smooth(home.SECTION_INTERACTIVE_MAP)
    time.sleep(1)
    home.wait_and_click(home.CLEAR_DEPARTMENT_SELECTION_BTN)
    
    time.sleep(2)
    
    home.scroll_to_element_smooth(home.OFERTS_RESULTS)
    time.sleep(2)
    element = home.wait_and_click(home.FIRST_RESULT)
    
    time.sleep(3)
    
    home.scroll_to_element_smooth(ofertDetail.SECTION_OFERT)
    time.sleep(2)
    home.scroll_to_element_smooth(ofertDetail.SECTION_OFERT_INFO)
    time.sleep(2)
    home.scroll_to_element_smooth(ofertDetail.SECTION_OFERT_LOCATION)
    time.sleep(2)
    home.scroll_to_element_smooth(ofertDetail.SECTION_PRESTADOR)
    time.sleep(2)
    home.scroll_to_element_smooth(ofertDetail.SECTION_EMPLEADOR)
    time.sleep(2)
    home.scroll_to_element_smooth(ofertDetail.SECTION_STYLED_OFERT)
    
    time.sleep(2)
    
    navbarComponent.go_back_home()
    time.sleep(2)
    
    
