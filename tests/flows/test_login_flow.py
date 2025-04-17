from pages.login_page import LoginPage
import pytest

@pytest.mark.smoke
def test_login_happy_path(driver, base_url):
    login = LoginPage(driver, base_url)
    login.open()
    login.login("santiari05@hotmail.com", "12345678")
    
    assert "Dashboard" in driver.title
