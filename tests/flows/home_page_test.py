import pytest
from pages.home_page import HomePage
import time

def test_scroll_to_interactive_map(driver, base_url):
    home = HomePage(driver, base_url)

    home.open()
    
    time.sleep(2)

    home.scroll_to_element_smooth(home.SECTION_INTERACTIVE_MAP)

    time.sleep(2)
    
