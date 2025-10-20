# AoE2 RMS Syntax

![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)
![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![CI](https://github.com/austinhardy318/vscode-aoe2-rms/workflows/CI%2FCD%20Pipeline/badge.svg)
![GitHub release](https://img.shields.io/github/v/release/austinhardy318/vscode-aoe2-rms)

> Age of Empires 2 (AoE2) Random Map Scripting (RMS) language support for VS Code and Cursor

Modern VS Code and Cursor extension for Age of Empires 2 Random Map Scripting (RMS) files. This is a modernized fork of the original Mangudai extension with updated dependencies, improved build system, and enhanced developer experience.

## Key Features

- **Syntax Highlighting** - Full support for RMS syntax including commands, directives, conditionals, and random blocks
- **Error Detection** - Real-time linting and error reporting using the modern [aoe2-rms-parser](https://github.com/austinhardy318/aoe2-rms-parser)
- **IntelliSense** - Basic language support for RMS files
- **Multi-root Workspace** - Works with VS Code's multi-root workspace feature
- **Custom Themes** - Five built-in themes optimized for RMS syntax
- **High Performance** - Fast parsing and real-time error detection
- **Docker Ready** - Consistent development and testing environments
- **TypeScript First** - Full type safety and IntelliSense support

## Modern Tooling

- **TypeScript 5** - Latest language features and improved type safety
- **VS Code Language Server** - Modern LSP implementation for better performance
- **Docker** - Containerized builds for consistent environments
- **GitHub Actions** - Automated CI/CD with comprehensive testing
- **ESLint 9** - Latest linting rules and flat config support
- **Prettier** - Consistent code formatting

## Installation

### From Marketplace (Recommended)

For both VS Code and Cursor:

1. Open your editor (VS Code or Cursor)
2. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac) to open Extensions
3. Search for "AoE2 RMS Syntax"
4. Click **Install**

### Manual Installation

For both VS Code and Cursor:

1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type: `Extensions: Install from VSIX...`
3. Download the latest `.vsix` file from [Releases](https://github.com/austinhardy318/vscode-aoe2-rms/releases)
4. Select the downloaded file

## Usage

1. Open any `.rms` file
2. The file will be automatically recognized as RMS language
3. Select your preferred theme: `Ctrl+Shift+P` → "Preferences: Color Theme" → Choose an AoE2 RMS theme

### Comment Support

Native VS Code block comment shortcut:

- `Ctrl+Shift+/` - Toggle block comments (`/* */`)

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

- Node.js 20+
- VS Code 1.85.0+
- Docker (optional, for containerized builds)

### Setup

```bash
# Clone the repository
git clone https://github.com/austinhardy318/vscode-aoe2-rms.git
cd vscode-aoe2-rms

# Install dependencies
npm install

# Run tests
npm test

# Build the extension
npm run package
```

### Docker Development

```bash
# Build extension in Docker
./scripts/build-docker.sh

# Or manually
docker build -t aoe2-rms-builder .
docker run --name aoe2-rms-extract aoe2-rms-builder
docker cp aoe2-rms-extract:/output/. ./output/
docker rm aoe2-rms-extract
```

### Available Scripts

- `npm test` - Run comprehensive test suite
- `npm run test:parser` - Parser integration tests
- `npm run test:extension` - Extension validation tests
- `npm run test:integration` - Full integration tests
- `npm run compile` - Compile TypeScript code
- `npm run package` - Package extension as VSIX
- `npm run lint` - Run ESLint on source files
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code with Prettier
- `npm run ci:test` - Run same tests as CI
- `npm run ci:build` - Full CI build process

## Contributing

This project is actively maintained and welcomes contributions! Here's how you can help:

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Run the test suite: `npm test`
5. Run linting: `npm run lint`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to your branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Development Guidelines

- Follow the existing code style (enforced by ESLint and Prettier)
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PRs
- Use conventional commit messages

### Reporting Issues

Found a bug or have a feature request? Please open an issue with:

- Clear description of the problem or feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Environment details (Node.js version, OS, etc.)

## CI/CD

The project uses GitHub Actions for automated testing and deployment:

- **Continuous Integration** - Tests on multiple OS/Node.js versions
- **Security Auditing** - Automated vulnerability scanning
- **Docker Testing** - Containerized build verification
- **Automated Publishing** - Releases to Open VSX Registry

See [CI/CD Documentation](docs/CI_CD.md) for detailed information.

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

## License

MIT © Mangudai contributors (original), Austin (modernized)

## About

Modern VS Code and Cursor extension for Age of Empires 2 Random Map Scripting

### Resources

- **Repository**: [https://github.com/austinhardy318/vscode-aoe2-rms](https://github.com/austinhardy318/vscode-aoe2-rms)
- **Issues**: [https://github.com/austinhardy318/vscode-aoe2-rms/issues](https://github.com/austinhardy318/vscode-aoe2-rms/issues)
- **Releases**: [https://github.com/austinhardy318/vscode-aoe2-rms/releases](https://github.com/austinhardy318/vscode-aoe2-rms/releases)
- **Parser**: [aoe2-rms-parser](https://github.com/austinhardy318/aoe2-rms-parser)
