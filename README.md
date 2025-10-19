# AoE2 RMS Syntax

Age of Empires 2 (AoE2) Random Map Scripting (RMS) language support for VS Code and Cursor.

## Quick Start

### Installation

#### VS Code

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type: `Extensions: Install from VSIX...`
3. Download the latest `.vsix` file from [Releases](https://github.com/austinhardy318/vscode-aoe2-rms/releases)
4. Select the downloaded file

#### Cursor

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type: `Extensions: Install from VSIX...`
3. Download the latest `.vsix` file from [Releases](https://github.com/austinhardy318/vscode-aoe2-rms/releases)
4. Select the downloaded file

### Usage

1. Open any `.rms` file
2. The file will be automatically recognized as RMS language
3. Select your preferred theme: `Ctrl+Shift+P` → "Preferences: Color Theme" → Choose an AoE2 RMS theme

## Features

- **Syntax Highlighting** - Full support for RMS syntax including commands, directives, conditionals, and random blocks
- **Error Detection** - Real-time linting and error reporting using the modern aoe2-rms-parser
- **IntelliSense** - Basic language support for RMS files
- **Multi-root Workspace** - Works with VS Code's multi-root workspace feature
- **Custom Themes** - Five built-in themes optimized for RMS syntax

## Custom Themes

- **AoE2 RMS Dark** - Blue section headers, teal commands, optimized for dark environments
- **AoE2 RMS Light** - High contrast colors, perfect for daytime coding
- **AoE2 RMS Vibrant** - Bright, colorful palette for creative coding sessions
- **AoE2 RMS Monokai** - Classic Monokai-inspired theme for RMS syntax
- **AoE2 RMS Cursor Monokai** - Cursor's modern dark UI with Monokai syntax highlighting

## Documentation

- [Building the Extension](docs/BUILD.md)
- [Testing Guide](docs/TESTING.md)
- [Changelog](docs/CHANGELOG.md)
- [Theme Documentation](themes/README.md)

## Development

### Prerequisites

- Node.js 18+
- VS Code 1.85.0+
- Docker (for building)

### Quick Build

```bash
# Using Docker (recommended)
./scripts/build-docker.sh

# Or locally
npm install
npm run compile
npm run package
```

### Creating Releases

```bash
# Manual release
git tag v1.1.0
git push origin main
git push origin v1.1.0
```

## Project Structure

```text
vscode-aoe2-rms/
├── client/                  # Client-side extension code
├── server/                  # Language server code
├── themes/                  # Custom themes
├── docs/                    # Documentation
├── scripts/                 # Build and utility scripts
├── samples/                 # Sample RMS files
└── output/                  # Build artifacts
```

## Credits

- **Original Author**: Mangudai (deltaidea) - Original parser
- **Parser**: aoe2-rms-parser (modernized fork by Austin)
- **Modernization**: Austin (austinhardy318)
- **License**: MIT

## Links

- **Repository**: [https://github.com/austinhardy318/vscode-aoe2-rms](https://github.com/austinhardy318/vscode-aoe2-rms)
- **Issues**: [https://github.com/austinhardy318/vscode-aoe2-rms/issues](https://github.com/austinhardy318/vscode-aoe2-rms/issues)
- **Releases**: [https://github.com/austinhardy318/vscode-aoe2-rms/releases](https://github.com/austinhardy318/vscode-aoe2-rms/releases)
