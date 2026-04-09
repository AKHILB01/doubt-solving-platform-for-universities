@echo off
REM Startup script for Doubt Resolution Platform (Windows)

setlocal enabledelayedexpansion

echo.
echo ============================================================
echo  Doubt Resolution Platform - Windows Startup Script
echo ============================================================
echo.

:check_mongodb
echo Checking MongoDB connection...
mongosh --eval "db.adminCommand('ping')" >nul 2>&1
if errorlevel 1 (
    echo.
    echo [X] MongoDB is NOT running!
    echo.
    echo Please start MongoDB first. Options:
    echo   1. Run MongoDB from Windows Services
    echo   2. Use command: mongod.exe (if installed)
    echo   3. Use MongoDB Atlas (cloud) instead of local MongoDB
    echo.
    pause
    exit /b 1
)

echo [OK] MongoDB is running
echo.

echo ============================================================
echo Starting servers...
echo ============================================================
echo.

REM Start backend in first terminal
echo [1/2] Starting Backend Server on http://localhost:5000
echo Command: cd server ^&^& npm run dev
echo.
start cmd /k "cd server && npm run dev"

REM Wait a bit for backend to start
timeout /t 3 /nobreak

REM Start frontend in second terminal
echo [2/2] Starting Frontend Client on http://localhost:3000
echo Command: cd client ^&^& npm start
echo.
start cmd /k "cd client && npm start"

echo.
echo ============================================================
echo [OK] Both servers are starting!
echo ============================================================
echo.
echo Backend will be available at:  http://localhost:5000
echo Frontend will be available at: http://localhost:3000
echo.
echo Note: 
echo   - It may take 30-60 seconds for the frontend to compile
echo   - The browser will open automatically when ready
echo   - Keep both terminal windows open while using the app
echo.
echo To stop the servers: Close both terminal windows or press Ctrl+C
echo.
pause
