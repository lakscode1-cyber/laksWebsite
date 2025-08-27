@echo off
echo Preparing files for PythonAnywhere deployment...

REM Create a deployment zip file
echo Creating deployment zip file...
powershell Compress-Archive -Path app.py,wsgi.py,requirements.txt,.env,.gitignore,README.md -DestinationPath pythonanywheredeploy.zip -Force

echo Done! 
echo.
echo Upload pythonanywheredeploy.zip to PythonAnywhere, then extract it.
echo After uploading, follow the instructions in README.md for PythonAnywhere configuration.
echo.
pause
