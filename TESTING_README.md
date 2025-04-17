# Configuración del Entorno de Pruebas con PowerShell

Este documento describe los pasos necesarios para preparar y ejecutar las pruebas automatizadas con Selenium y pytest en tu proyecto React + Vite, conectado a una API Node.js.

## 1. Ajustar la política de ejecución
Permite ejecutar scripts en la sesión actual de PowerShell sin restricciones de firma:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
```

## 2. Crear el Virtual Environment
Crea un entorno aislado para las dependencias de Python:

```powershell
python -m venv .venv
```

## 3. Activar el Virtual Environment
Activa el entorno virtual recién creado:

```powershell
.\.venv\Scripts\Activate.ps1
```

## 4. Actualizar pip
Asegúrate de tener la última versión del gestor de paquetes:

```powershell
pip install --upgrade pip
```

## 5. Instalar dependencias de pruebas
Instala Selenium, pytest y otras utilidades desde tu archivo de requisitos:

```powershell
pip install -r .\tests\requirements-dev.txt
```

## 6. Ejecutar las pruebas
Lanza todos los tests en paralelo (según núcleos disponibles):

```powershell
pytest
```

## 7. Desactivar el Virtual Environment
Cuando termines, sal del entorno virtual:

```powershell
deactivate
```

---

Con estos pasos tendrás un entorno listo para desarrollar y ejecutar tus pruebas automatizadas de manera ordenada y reproducible.

