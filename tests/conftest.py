import os
import pytest
from dotenv import load_dotenv
from utils.driver_factory import create_driver

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '..', '.env'))

@pytest.fixture(scope="session")
def base_url():
    return os.getenv("BASE_URL", "http://localhost:3000")

@pytest.fixture
def driver():
    driver = create_driver()
    yield driver
    driver.quit()
