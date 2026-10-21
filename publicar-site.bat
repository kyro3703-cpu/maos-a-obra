@echo off
setlocal
cd /d "%~dp0"

set "GIT_EXE=C:\Program Files\Git\cmd\git.exe"
if not exist "%GIT_EXE%" set "GIT_EXE=git"

echo Configurando o repositorio...
"%GIT_EXE%" config --global --add safe.directory "%CD%" >nul 2>&1

echo Adicionando todos os arquivos alterados...
"%GIT_EXE%" add .
if errorlevel 1 goto error

"%GIT_EXE%" diff --cached --quiet
if not errorlevel 1 (
  echo Nenhuma alteracao nova para publicar.
  goto end
)

echo Criando commit...
"%GIT_EXE%" commit -m "Atualiza site"
if errorlevel 1 goto error

echo Enviando para o GitHub...
"%GIT_EXE%" push
if errorlevel 1 goto error

echo.
echo Publicacao concluida. O Cloudflare Pages iniciara o deploy automaticamente.
goto end

:error
echo.
echo Nao foi possivel concluir a publicacao. Confira a mensagem acima.
pause
exit /b 1

:end
pause
endlocal
