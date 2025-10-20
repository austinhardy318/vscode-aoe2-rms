#!/bin/bash
# Manual publishing script for AoE2 RMS Extension

set -e

echo "Publishing AoE2 RMS Extension..."

# Check if OpenVSX CLI is installed
if ! command -v ovsx &> /dev/null; then
    echo " OpenVSX CLI not found. Installing..."
    npm install -g @openvsx/cli
fi

# Build the extension
echo "Building extension..."
npm run compile
npm run package

# Check if VSIX file exists
if [ ! -f aoe2-rms-*.vsix ]; then
    echo "VSIX file not found. Build failed."
    exit 1
fi

echo "Extension built successfully!"

# Publish to Open VSX Registry
echo "Publishing to Open VSX Registry..."
if [ -z "$OPENVSX_TOKEN" ]; then
    echo "OPENVSX_TOKEN environment variable not set."
    echo "Please set your Open VSX personal access token:"
    echo "export OPENVSX_TOKEN=your_token_here"
    exit 1
fi

ovsx publish aoe2-rms-*.vsix --pat $OPENVSX_TOKEN

echo "Published to Open VSX Registry!"
echo ""
echo "Next steps:"
echo "1. Download the VSIX file for Cursor submission"
echo "2. Submit to Cursor marketplace manually"
echo "3. Update README with marketplace links"
echo ""
echo "Publishing complete!"
