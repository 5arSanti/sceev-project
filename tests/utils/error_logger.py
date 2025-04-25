import logging

class ErrorLogger:
    def __init__(self, log_file='error_log.log'):
        self.logger = logging.getLogger(__name__)
        self.logger.setLevel(logging.ERROR)
        file_handler = logging.FileHandler(log_file)
        file_handler.setLevel(logging.ERROR)
        formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
        file_handler.setFormatter(formatter)
        self.logger.addHandler(file_handler)

    def log_error(self, error_message):
        """registrar un error en el log"""
        self.logger.error(error_message)
