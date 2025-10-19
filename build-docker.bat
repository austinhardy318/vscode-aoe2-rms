@echo off
REM Build script for AoE2 RMS Extension using Docker (Windows)

echo 🐳 Building AoE2 RMS Extension in Docker...

REM Build the Docker image
echo 📦 Building Docker image...
docker build -t aoe2-rms-builder .

REM Check if build was successful
if %errorlevel% equ 0 (
    echo ✅ Docker image built successfully!
    
    REM Run the container to extract the built extension
    echo 📤 Extracting built extension...
    docker run --name aoe2-rms-extract aoe2-rms-builder
    
    REM Copy the .vsix file from container to host
    echo 📋 Copying .vsix file to current directory...
    docker cp aoe2-rms-extract:/output/. ./output/
    
    REM Clean up the container
    docker rm aoe2-rms-extract
    
    REM List the built files
    echo 🎉 Build complete! Built files:
    dir output\
    
    REM Move .vsix file to root directory
    for %%f in (output\*.vsix) do (
        move "%%f" .
        echo 📦 Extension packaged as: %%~nxf
    )
    
) else (
    echo ❌ Docker build failed!
    exit /b 1
)
