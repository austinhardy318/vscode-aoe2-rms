@echo off
echo Creating AoE2 RMS Extension Release v1.1.0
echo.

echo Building extension with Docker...
docker build -t aoe2-rms-builder .
if %errorlevel% neq 0 (
    echo Error: Docker build failed
    exit /b 1
)

echo Extracting VSIX file...
docker run --name aoe2-rms-extract aoe2-rms-builder
docker cp aoe2-rms-extract:/output/. ./output/
docker rm aoe2-rms-extract

echo.
echo Release files ready:
echo - VSIX: output\aoe2-rms-1.0.0.vsix
echo - Release Notes: GITHUB_RELEASE.md
echo - Changelog: CHANGELOG.md
echo.
echo Next steps:
echo 1. Go to https://github.com/austinhardy318/vscode-aoe2-rms
echo 2. Click "Releases" then "Create a new release"
echo 3. Use tag "v1.1.0" and title "AoE2 RMS Syntax v1.1.0"
echo 4. Copy content from GITHUB_RELEASE.md for description
echo 5. Upload the VSIX file from output\aoe2-rms-1.0.0.vsix
echo 6. Publish the release
echo.
pause
