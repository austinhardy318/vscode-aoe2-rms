# AoE2 RMS Syntax

> Age of Empires 2 Random Map Scripting (RMS) language support for Visual Studio Code - Modernized fork

![Screenshot of syntax highlighting](https://github.com/austinhardy318/vscode-aoe2-rms/blob/main/client/screenshot.png?raw=true)

## About This Fork

This is a modernized fork of the original [AoE2 Random Map Scripting extension](https://github.com/mangudai/vscode) by Mangudai. This version includes:

- ✅ **Modern VS Code API support** (v1.85.0+)
- ✅ **Updated TypeScript** (v5.3+)
- ✅ **Modern Language Server Protocol** (v9.x)
- ✅ **Enhanced error handling** and diagnostics
- ✅ **Code quality tools** (ESLint, Prettier)
- ✅ **Improved build system**

## Install

### Open VSX Registry
1. Install the [Open VSX extension](https://open-vsx.org/extension/austinhardy318/aoe2-rms)
2. Or search for `aoe2-rms` in VS Code extensions

### Cursor Marketplace
1. Search for `AoE2 RMS Syntax` in Cursor's extension marketplace
2. Install the extension

### Manual Installation
1. Download the `.vsix` file from [Releases](https://github.com/austinhardy318/vscode-aoe2-rms/releases)
2. In VS Code: `Ctrl/Cmd + Shift + P` → `Extensions: Install from VSIX...`
3. Select the downloaded `.vsix` file

## Features

- **Syntax Highlighting** - Full support for RMS syntax including commands, directives, conditionals, and random blocks
- **Error Detection** - Real-time linting and error reporting using the Mangudai parser
- **IntelliSense** - Basic language support for RMS files
- **Multi-root Workspace** - Works with VS Code's multi-root workspace feature

## Release Notes

### 1.0.0 (Modernized Fork)

- 🚀 **Major modernization** - Updated for modern VS Code (v1.85.0+)
- 🔧 **Updated dependencies** - TypeScript 5.3+, modern LSP libraries
- 🛠️ **Enhanced tooling** - ESLint, Prettier, improved build system
- 🐛 **Better error handling** - Graceful parsing error handling
- 📦 **Publishing ready** - Available on Open VSX Registry and Cursor Marketplace

### Original Extension History

This fork is based on the original extension by Mangudai. See the [original repository](https://github.com/mangudai/vscode) for the complete history of changes from v0.1.0 to v0.3.2.

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn
- VS Code 1.85.0+

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/austinhardy318/vscode-aoe2-rms.git
   cd vscode-aoe2-rms
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile the extension:
   ```bash
   npm run compile
   ```

### Running in Development

1. Open this folder in VS Code
2. Press `F5` to launch the Extension Development Host
3. In the new VS Code window, open a `.rms` file to test the extension

### Building

#### Docker Build (Recommended)
```bash
# Build using Docker (requires Docker Desktop)
npm run build:docker

# Or use the build script directly
build-docker.bat  # Windows
./build-docker.sh # Linux/macOS
```

#### Local Build
```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Run linting
npm run lint

# Format code
npm run format

# Package extension
npm run package
```

See [BUILD.md](BUILD.md) for detailed build instructions.

### Project Structure

```
.
├── client/                 # Language Client
│   ├── src/
│   │   └── extension.ts    # Client entry point
│   └── package.json
├── server/                 # Language Server  
│   ├── src/
│   │   └── server.ts       # Server entry point
│   └── package.json
├── aoe2-rms.tmLanguage     # Syntax highlighting
├── language-configuration.json
└── package.json            # Extension manifest
```

## Credits

- **Original Author**: [Mangudai](https://github.com/mangudai) - Created the original AoE2 RMS extension
- **Parser**: [Mangudai parser](https://github.com/mangudai/mangudai) - RMS parsing and linting
- **Modernized by**: Austin Hardy - Updated for modern VS Code and tooling

## License

MIT License - see [LICENSE.md](LICENSE.md) for details.
