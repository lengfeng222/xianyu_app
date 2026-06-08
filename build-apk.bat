@echo off
REM 本地打包 APK（需先执行过 npx expo prebuild --platform android）
set "JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.18.8-hotspot"
if not exist "%JAVA_HOME%\bin\java.exe" (
  echo JAVA_HOME 指向的 JDK 不存在，请修改本脚本中的 JAVA_HOME 路径。
  pause
  exit /b 1
)
cd /d "%~dp0"
if not exist "android\gradlew.bat" (
  echo 未检测到 android 目录，正在执行 prebuild...
  call npx expo prebuild --platform android --no-install
)
cd android
call gradlew.bat assembleRelease
cd ..
if exist "android\app\build\outputs\apk\release\app-release.apk" (
  echo.
  echo APK 已生成: android\app\build\outputs\apk\release\app-release.apk
) else (
  echo 构建可能失败，请检查上方错误信息。
)
pause
