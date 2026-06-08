@echo off
cd /d %~dp0
echo Starting Xianyu APP Web Server...
npx expo start --web --port 8083
pause
