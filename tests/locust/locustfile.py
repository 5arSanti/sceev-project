from locust import HttpUser, task, between

class MyUser(HttpUser): 
    wait_time = between(1, 3)
    
    @task
    def load_home_page(self):
        self.client.get("/")