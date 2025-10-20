@echo off
REM Manual publishing script for AoE2 RMS Extension (Windows)

echo Publishing AoE2 RMS Extension...

REM Check if OpenVSX CLI is installed
ovsx --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing OpenVSX CLI...
    npm install -g @openvsx/cli
)

REM Build the extension
echo Building extension...
npm run compile
npm run package

REM Check if VSIX file exists
if not exist aoe2-rms-*.vsix (
    echo VSIX file not found. Build failed.
    exit /b 1
)

echo Extension built successfully!

REM Publish to Open VSX Registry
echo Publishing to Open VSX Registry...
if "%OPENVSX_TOKEN%"=="" (
    echo OPENVSX_TOKEN environment variable not set.
    echo Please set your Open VSX personal access token:
    echo set OPENVSX_TOKEN=your_token_here
    exit /b 1
)

ovsx publish aoe2-rms-*.vsix --pat %OPENVSX_TOKEN%

echo Published to Open VSX Registry!
echo.
echo Next steps:
echo 1. Download the VSIX file for Cursor submission
echo 2. Submit to Cursor marketplace manually
echo 3. Update README with marketplace links
echo.
echo Publishing complete!
