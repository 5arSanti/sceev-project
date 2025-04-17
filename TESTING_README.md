Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

python -m venv .venv


pip install --upgrade pip

if (!(Test-Path -Path .\tests)) {
  New-Item -ItemType Directory -Path .\tests
}


@"
selenium
pytest
pytest-xdist
python-dotenv
"@ | Out-File -FilePath .\tests\requirements-dev.txt -Encoding utf8


.\.venv\Scripts\Activate.ps1

pip install --upgrade pip

pip install -r .\tests\requirements-dev.txt

pytest -n auto

deactivate
