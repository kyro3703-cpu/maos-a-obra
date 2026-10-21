@echo off
setlocal
cd /d "%~dp0"

where py >nul 2>nul
if %errorlevel%==0 goto start_py

where python >nul 2>nul
if %errorlevel%==0 goto start_python

where node >nul 2>nul
if %errorlevel%==0 goto start_node

echo Python e Node.js nao foram encontrados.
echo Abrindo o site diretamente no navegador...
start "" "%~dp0index.html"
exit /b 0

:start_py
start "Site" /D "%~dp0" cmd /k py -m http.server 8080
goto open

:start_python
start "Site" /D "%~dp0" cmd /k python -m http.server 8080
goto open

:start_node
start "Site" /D "%~dp0" cmd /k node servidor-local.js

:open
timeout /t 2 /nobreak >nul
start "" "http://localhost:8080"
echo Site aberto em http://localhost:8080
echo Feche a janela do servidor para encerrar.
endlocal
