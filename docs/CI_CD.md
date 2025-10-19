# CI/CD Documentation

This document describes the Continuous Integration and Continuous Deployment (CI/CD) setup for the AoE2 RMS VS Code extension.

## Overview

The project uses GitHub Actions for automated testing, building, and deployment. The CI/CD pipeline ensures code quality, compatibility, and automated releases.

## Workflows

### 1. Main CI Pipeline (`ci.yml`)

**Triggers:**

- Push to `main` and `develop` branches
- Pull requests to `main` branch
- Release creation

**Jobs:**

#### Test Extension

- **Matrix Strategy**: Tests on Ubuntu, Windows, and macOS with Node.js 18 and 20
- **Steps**:
  - Checkout repository
  - Setup Node.js with npm caching
  - Install dependencies with `npm ci`
  - Run linting with `npm run lint`
  - Check code formatting with `npm run format:check`
  - Compile TypeScript with `npm run compile`
  - Build VSIX package with `npm run package`
  - Test package installation and contents
  - Test parser integration
  - Validate package contents

#### Security Audit

- **Platform**: Ubuntu latest
- **Steps**:
  - Checkout repository
  - Setup Node.js 20
  - Install dependencies
  - Run security audit with `npm audit --audit-level=moderate`
  - Check for high/critical vulnerabilities

#### Docker Build Test

- **Platform**: Ubuntu latest
- **Steps**:
  - Checkout repository
  - Setup Docker Buildx
  - Build Docker image
  - Test Docker build produces valid VSIX
  - Verify package contents

#### Publish Extension

- **Platform**: Ubuntu latest
- **Triggers**: Only on release creation
- **Dependencies**: Requires all other jobs to pass
- **Steps**:
  - Checkout repository
  - Setup Node.js 20
  - Install dependencies
  - Build extension
  - Publish to Open VSX Registry
  - Create GitHub release with assets

### 2. Dependency Updates (`dependencies.yml`)

**Triggers:**

- Weekly schedule (Mondays at 9 AM UTC)
- Manual workflow dispatch

**Steps:**

- Checkout repository
- Setup Node.js 20
- Install dependencies
- Check for outdated packages
- Update dependencies (patch/minor only)
- Run security audit
- Test after updates
- Create pull request with changes

### 3. Parser Integration Tests (`parser-test.yml`)

**Triggers:**

- Push to `main` and `develop` branches (when parser-related files change)
- Pull requests to `main` branch (when parser-related files change)

**Steps:**

- Checkout repository
- Setup Node.js 20
- Install dependencies
- Test parser installation
- Test parser functionality with various RMS formats
- Test language server integration
- Test VSIX package creation
- Run performance tests

## Test Scripts

### Parser Tests (`scripts/test-parser.js`)

Tests the `aoe2-rms-parser` integration:

- **Basic RMS Structure**: Simple player setup commands
- **Complex RMS**: Multiple sections with nested blocks
- **Comments and Whitespace**: Various comment formats
- **Invalid Syntax**: Error handling
- **Empty Files**: Edge cases
- **Performance Test**: Large RMS files with timing
- **Sample File**: Real-world RMS file parsing

### Extension Tests (`scripts/test-extension.js`)

Tests the VS Code extension:

- **Package Validation**: All package.json files
- **TypeScript Compilation**: Client and server compilation
- **Language Configuration**: JSON syntax and structure
- **TextMate Grammar**: Syntax highlighting rules
- **Theme Files**: All custom themes
- **VSIX Package**: Creation and contents
- **Documentation**: Required files present
- **Git Configuration**: Ignore files

## Local Testing

### Run All Tests

```bash
npm test
```

### Run Specific Tests

```bash
# Parser tests only
npm run test:parser

# Extension tests only
npm run test:extension

# Integration tests
npm run test:integration
```

### CI Simulation

```bash
# Run the same tests as CI
npm run ci:test

# Full CI build
npm run ci:build
```

## Environment Variables

### Required Secrets

For publishing to work, the following secrets must be configured in the GitHub repository:

- `OPEN_VSX_TOKEN`: Personal Access Token for Open VSX Registry
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

### Setting Up Secrets

1. Go to repository Settings → Secrets and variables → Actions
2. Add the required secrets:
   - `OPEN_VSX_TOKEN`: Get from [Open VSX Registry](https://open-vsx.org/user-settings/tokens)
   - `GITHUB_TOKEN`: Automatically available

## Release Process

### Automatic Release

1. Create a new release in GitHub:
   - Go to repository → Releases → Create a new release
   - Choose a tag (e.g., `v1.2.0`)
   - Add release notes
   - Publish release

2. GitHub Actions will automatically:
   - Run all tests
   - Build the extension
   - Publish to Open VSX Registry
   - Create GitHub release with VSIX file

### Manual Release

1. Run tests locally:

   ```bash
   npm run ci:test
   ```

2. Build package:

   ```bash
   npm run package
   ```

3. Test installation:
   - Install the generated `.vsix` file in VS Code
   - Verify all features work

4. Publish manually:
   ```bash
   # To Open VSX Registry
   npx ovsx publish aoe2-rms-1.2.0.vsix --pat <token>
   ```

## Monitoring

### GitHub Actions Dashboard

- Go to repository → Actions tab
- View workflow runs and their status
- Check logs for any failures

### Test Results

- All tests must pass before merging
- Security audits must not find high/critical vulnerabilities
- Docker builds must produce valid packages

### Performance Monitoring

- Parser performance tests ensure < 100ms for typical files
- Package size is monitored (currently ~53KB)
- Build times are tracked

## Troubleshooting

### Common Issues

1. **Parser Tests Failing**
   - Check if `aoe2-rms-parser` is properly installed
   - Verify RMS syntax format matches parser expectations
   - Check for decimal numbers (parser expects integers)

2. **Extension Tests Failing**
   - Ensure all dependencies are installed
   - Check TypeScript compilation
   - Verify VSIX package creation

3. **Docker Build Failing**
   - Check Docker is running
   - Verify Dockerfile syntax
   - Check for missing files in build context

4. **Publishing Failing**
   - Verify secrets are configured
   - Check token permissions
   - Ensure version numbers are correct

### Getting Help

- Check GitHub Actions logs for detailed error messages
- Run tests locally to reproduce issues
- Check the [aoe2-rms-parser repository](https://github.com/austinhardy318/aoe2-rms-parser) for parser-related issues

## Best Practices

### Before Pushing

1. Run tests locally: `npm test`
2. Check formatting: `npm run format:check`
3. Run linting: `npm run lint`
4. Test package creation: `npm run package`

### Code Quality

- All code must pass linting
- TypeScript compilation must succeed
- Tests must pass
- Security audits must pass

### Release Management

- Use semantic versioning
- Update CHANGELOG.md
- Tag releases properly
- Test releases before publishing
