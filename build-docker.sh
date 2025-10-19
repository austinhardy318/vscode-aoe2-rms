#!/bin/bash

# Build script for AoE2 RMS Extension using Docker

echo "🐳 Building AoE2 RMS Extension in Docker..."

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t aoe2-rms-builder .

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
    
    # Run the container to extract the built extension
    echo "📤 Extracting built extension..."
    docker run --name aoe2-rms-extract aoe2-rms-builder
    
    # Copy the .vsix file from container to host
    echo "📋 Copying .vsix file to current directory..."
    docker cp aoe2-rms-extract:/output/. ./output/
    
    # Clean up the container
    docker rm aoe2-rms-extract
    
    # List the built files
    echo "🎉 Build complete! Built files:"
    ls -la output/
    
    # Move .vsix file to root directory
    if [ -f output/*.vsix ]; then
        mv output/*.vsix ./
        echo "📦 Extension packaged as: $(ls *.vsix)"
    fi
    
else
    echo "❌ Docker build failed!"
    exit 1
fi
