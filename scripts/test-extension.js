#!/usr/bin/env node

/**
 * Extension Integration Test Script
 * Tests the VS Code extension functionality
 */

const fs = require('fs');
const path = require('path');

console.log('🧪 Testing VS Code extension integration...\n');

// Test cases
const tests = [
	{
		name: 'Package.json Validation',
		test: () => {
			const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

			// Check required fields
			const required = ['name', 'version', 'publisher', 'displayName', 'description'];
			for (const field of required) {
				if (!packageJson[field]) {
					throw new Error(`Missing required field: ${field}`);
				}
			}

			// Check version format
			if (!/^\d+\.\d+\.\d+$/.test(packageJson.version)) {
				throw new Error(`Invalid version format: ${packageJson.version}`);
			}

			// Check publisher
			if (packageJson.publisher !== 'austinhardy318') {
				throw new Error(`Invalid publisher: ${packageJson.publisher}`);
			}

			return 'Package.json is valid';
		},
	},
	{
		name: 'Client Package Validation',
		test: () => {
			const clientPackage = JSON.parse(fs.readFileSync('client/package.json', 'utf8'));

			if (!clientPackage.devDependencies['@types/vscode']) {
				throw new Error('Missing @types/vscode dependency');
			}

			if (clientPackage.version !== '1.2.0') {
				throw new Error(`Version mismatch: ${clientPackage.version}`);
			}

			return 'Client package is valid';
		},
	},
	{
		name: 'Server Package Validation',
		test: () => {
			const serverPackage = JSON.parse(fs.readFileSync('server/package.json', 'utf8'));

			if (!serverPackage.dependencies['aoe2-rms-parser']) {
				throw new Error('Missing aoe2-rms-parser dependency');
			}

			if (!serverPackage.dependencies['vscode-languageserver']) {
				throw new Error('Missing vscode-languageserver dependency');
			}

			if (serverPackage.version !== '1.2.0') {
				throw new Error(`Version mismatch: ${serverPackage.version}`);
			}

			return 'Server package is valid';
		},
	},
	{
		name: 'TypeScript Compilation',
		test: () => {
			// Check if compiled files exist
			const clientOut = path.join('client', 'out', 'extension.js');
			const serverOut = path.join('server', 'out', 'server.js');

			if (!fs.existsSync(clientOut)) {
				throw new Error('Client not compiled - extension.js missing');
			}

			if (!fs.existsSync(serverOut)) {
				throw new Error('Server not compiled - server.js missing');
			}

			return 'TypeScript compilation successful';
		},
	},
	{
		name: 'Language Configuration',
		test: () => {
			const langConfig = JSON.parse(fs.readFileSync('language-configuration.json', 'utf8'));

			if (!langConfig.comments) {
				throw new Error('Missing comments configuration');
			}

			if (!langConfig.brackets) {
				throw new Error('Missing brackets configuration');
			}

			return 'Language configuration is valid';
		},
	},
	{
		name: 'TextMate Grammar',
		test: () => {
			const grammar = fs.readFileSync('aoe2-rms.tmLanguage', 'utf8');

			if (!grammar.includes('aoe2-rms')) {
				throw new Error('TextMate grammar missing aoe2-rms language');
			}

			if (!grammar.includes('\\&lt;[A-Z_]+\\&gt;')) {
				throw new Error('TextMate grammar missing RMS section header pattern');
			}

			return 'TextMate grammar is valid';
		},
	},
	{
		name: 'Theme Files',
		test: () => {
			const themesDir = 'themes';
			const themeFiles = fs.readdirSync(themesDir).filter((f) => f.endsWith('.json'));

			if (themeFiles.length < 5) {
				throw new Error(`Expected at least 5 theme files, found ${themeFiles.length}`);
			}

			// Check each theme file
			for (const themeFile of themeFiles) {
				const themePath = path.join(themesDir, themeFile);
				const theme = JSON.parse(fs.readFileSync(themePath, 'utf8'));

				if (!theme.name) {
					throw new Error(`Theme ${themeFile} missing name`);
				}

				if (!theme.tokenColors) {
					throw new Error(`Theme ${themeFile} missing tokenColors`);
				}
			}

			return `Found ${themeFiles.length} valid theme files`;
		},
	},
	{
		name: 'VSIX Package Creation',
		test: () => {
			const vsixFiles = fs.readdirSync('.').filter((f) => f.endsWith('.vsix'));

			if (vsixFiles.length === 0) {
				throw new Error('No VSIX files found - run npm run package first');
			}

			const latestVsix = vsixFiles.sort().pop();
			const stats = fs.statSync(latestVsix);

			if (stats.size < 10000) {
				// Less than 10KB seems too small
				throw new Error(`VSIX file too small: ${stats.size} bytes`);
			}

			if (stats.size > 1000000) {
				// More than 1MB seems too large
				throw new Error(`VSIX file too large: ${stats.size} bytes`);
			}

			return `VSIX package created: ${latestVsix} (${Math.round(stats.size / 1024)}KB)`;
		},
	},
	{
		name: 'Documentation Files',
		test: () => {
			const requiredDocs = [
				'README.md',
				'LICENSE.md',
				'docs/CHANGELOG.md',
				'docs/BUILD.md',
				'docs/TESTING.md',
			];

			for (const doc of requiredDocs) {
				if (!fs.existsSync(doc)) {
					throw new Error(`Missing documentation: ${doc}`);
				}
			}

			return 'All documentation files present';
		},
	},
	{
		name: 'Git Configuration',
		test: () => {
			const gitignore = fs.readFileSync('.gitignore', 'utf8');
			const vscodeignore = fs.readFileSync('.vscodeignore', 'utf8');

			if (!gitignore.includes('node_modules')) {
				throw new Error('.gitignore missing node_modules');
			}

			if (!vscodeignore.includes('**/node_modules/**')) {
				throw new Error('.vscodeignore missing node_modules pattern');
			}

			return 'Git configuration files are valid';
		},
	},
];

let passed = 0;
let failed = 0;

// Run all tests
tests.forEach((test) => {
	try {
		console.log(`📋 Testing: ${test.name}`);
		const result = test.test();
		console.log(`  ✅ PASS - ${result}`);
		passed++;
	} catch (error) {
		console.log(`  ❌ FAIL - ${error.message}`);
		failed++;
	}
	console.log('');
});

// Summary
console.log('📈 Extension Test Summary:');
console.log(`  ✅ Passed: ${passed}`);
console.log(`  ❌ Failed: ${failed}`);
console.log(`  📊 Total: ${passed + failed}`);

if (failed === 0) {
	console.log('\n🎉 All extension integration tests passed!');
	process.exit(0);
} else {
	console.log('\n💥 Some extension integration tests failed!');
	process.exit(1);
}
