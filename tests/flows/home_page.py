import pytest
from pages.home_page import HomePage

def test_scroll_to_interactive_map(driver, base_url):
    home = HomePage(driver, base_url)

    home.open()

    home.scroll_to_interactive_map()

    
