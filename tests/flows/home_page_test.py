import pytest
from pages.home_page import HomePage
import time

def test_scroll_to_interactive_map(driver, base_url):
    home = HomePage(driver, base_url)

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
    
    time.sleep(1)
    
    home.scroll_to_element_smooth(home.SECTION_INTERACTIVE_MAP)
    time.sleep(0.5)
    home.wait_and_click(home.CLEAR_DEPARTMENT_SELECTION_BTN)
    
    time.sleep(1)
    
    home.scroll_to_element_smooth(home.OFERTS_RESULTS)
    
    time.sleep(1)
    
    
