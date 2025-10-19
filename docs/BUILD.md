# Building AoE2 RMS Extension

This document explains how to build the AoE2 RMS extension using Docker for a consistent build environment.

## Prerequisites

1. **Docker Desktop** - Install from [docker.com](https://www.docker.com/products/docker-desktop/)
2. **Git** - For cloning the repository

## Quick Build (Windows)

1. **Start Docker Desktop** - Make sure Docker Desktop is running
2. **Run the build script**:

   ```cmd
   scripts\build-docker.bat
   ```

## Quick Build (Linux/macOS)

1. **Start Docker** - Make sure Docker daemon is running
2. **Run the build script**:

   ```bash
   ./scripts/build-docker.sh
   ```

## Manual Build Steps

If you prefer to run the commands manually:

1. **Build the Docker image**:

   ```bash
   docker build -t aoe2-rms-builder .
   ```

2. **Run the build and extract the extension**:

   ```bash
   docker run --name aoe2-rms-extract aoe2-rms-builder
   docker cp aoe2-rms-extract:/output/. ./output/
   docker rm aoe2-rms-extract
   ```

3. **Move the .vsix file to the root directory**:

   ```bash
   move output\*.vsix .  # Windows
   mv output/*.vsix .    # Linux/macOS
   ```

## What Gets Built

The Docker build process:

1. Installs Node.js 20 LTS
2. Installs all npm dependencies
3. Compiles TypeScript code
4. Packages the extension as `.vsix` file
5. Extracts the built extension to your local machine

## Output

After a successful build, you'll have:

- `aoe2-rms-1.1.0.vsix` - The packaged extension ready for installation
- `output/` directory with build artifacts

## Installing the Extension

To install the built extension:

1. **In VS Code**: `Ctrl+Shift+P` → `Extensions: Install from VSIX...`
2. **Select** the `aoe2-rms-1.1.0.vsix` file
3. **Restart** VS Code if needed

## Troubleshooting

### Docker not running

```
ERROR: error during connect: Head "http://%2F%2F.%2Fpipe%2FdockerDesktopLinuxEngine/_ping"
```

**Solution**: Start Docker Desktop and wait for it to fully initialize.

### Build fails

**Solution**: Check the Docker logs:

```bash
docker logs aoe2-rms-extract
```

### No .vsix file generated

**Solution**: Check if the build completed successfully and look in the `output/` directory.

## Publishing

Once you have the `.vsix` file:

1. **Open VSX Registry**: Use `ovsx publish aoe2-rms-1.1.0.vsix`
2. **Cursor Marketplace**: Submit the `.vsix` file through their process
3. **Manual Distribution**: Share the `.vsix` file directly
