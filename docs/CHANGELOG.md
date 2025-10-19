# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2025-10-19

### Added

- **Modern Parser Integration** - Upgraded to aoe2-rms-parser v2.0.1 for better performance and reliability
- **Optimized Package Structure** - Comprehensive .gitignore, .vscodeignore, and .dockerignore files
- **Enhanced Build Process** - Modern npm lock files (v3) eliminating all lock file warnings

### Changed

- **Parser** - Replaced mangudai v0.2.3 with aoe2-rms-parser v2.0.1 (modern, actively maintained)
- **Package Size** - Reduced VSIX package from 1.18 MB to 49.63 KB (96% reduction)
- **File Count** - Optimized from 1,370 files to 18 files (98% reduction)
- **Build Performance** - Faster Docker builds with smaller context and modern dependencies
- **Dependencies** - Updated esbuild to v0.25.11 (fixed security vulnerability)

### Fixed

- **Lock File Warnings** - Eliminated all "old lockfile" warnings with modern npm v3 format
- **Security Vulnerabilities** - Fixed esbuild security issue
- **Bundling Warnings** - Resolved VS Code bundling performance warnings
- **Build Context** - Optimized Docker build context from 1.49 MB to 2.23 kB

### Technical Details

- **Parser**: Modern aoe2-rms-parser v2.0.1 with updated dependencies
- **Lock Files**: All using npm v3 format (lockfileVersion: 3)
- **Package**: Optimized .vscodeignore excludes unnecessary files
- **Performance**: 98% reduction in file count, 96% reduction in package size
- **Compatibility**: Maintains full backward compatibility with existing RMS files

## [1.1.0] - 2025-10-18

### Added

- **AoE2 RMS Cursor Monokai Theme** - Cursor's modern dark UI with Monokai syntax highlighting
- **Release preparation script** - Automated build and release preparation
- **Enhanced theme documentation** - Updated all documentation with new theme

### Changed

- **Version** - Bumped to 1.1.0 for theme addition
- **Theme count** - Now includes 5 custom themes total
- **Documentation** - Updated README, themes README, and testing guides

### Technical Details

- **New Theme**: Cursor Dark UI colors with Monokai syntax highlighting
- **Theme File**: `themes/aoe2-rms-cursor-monokai.json`
- **Package Size**: Slightly increased due to additional theme
- **Compatibility**: Maintains full backward compatibility

## [1.0.0] - 2025-10-18

### Added

- Modern VS Code API support (v1.85.0+)
- Updated TypeScript configuration (v5.3+)
- Modern Language Server Protocol (v9.x)
- ESLint and Prettier for code quality
- Enhanced error handling and diagnostics
- Improved build system with modern tooling
- Comprehensive documentation and development setup

### Changed

- Upgraded from TypeScript 2.9.2 to 5.3.3
- Updated VS Code Language Client from 4.2.1 to 9.0.1
- Updated VS Code Language Server from 4.2.1 to 9.0.1
- Modernized TypeScript configuration with strict settings
- Updated Node.js engine requirement to 18.0.0+
- Improved error handling in language server

### Fixed

- Compatibility with modern VS Code versions
- TypeScript compilation errors
- LSP API compatibility issues
- Build system reliability

### Technical Details

- **Publisher**: Changed from "deltaidea" to "austinhardy318"
- **Repository**: Forked from mangudai/vscode to austinhardy318/vscode-aoe2-rms
- **Extension ID**: aoe2-rms (unchanged)
- **Display Name**: AoE2 RMS Syntax
- **Version**: 1.0.0 (major modernization)

### Credits

- **Original Author**: [Mangudai](https://github.com/mangudai)
- **Parser**: [aoe2-rms-parser](https://github.com/austinhardy318/aoe2-rms-parser) v2.0.1 (modernized fork)
- **Modernized by**: Austin

---

## Original Extension History

This fork is based on the original AoE2 Random Map Scripting extension by Mangudai.
For the complete history of the original extension (v0.1.0 to v0.3.2), see:
<https://github.com/mangudai/vscode>
