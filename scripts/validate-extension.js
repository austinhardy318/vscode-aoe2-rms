// Simple validation script for the AoE2 RMS extension
// This script checks if the .vsix file exists and has the expected structure

const fs = require('fs');
const path = require('path');

console.log('Validating AoE2 RMS Extension...\n');

// Check if .vsix file exists
const vsixFile = 'aoe2-rms-1.0.0.vsix';
if (fs.existsSync(vsixFile)) {
	const stats = fs.statSync(vsixFile);
	const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
	console.log(`[OK] Extension package found: ${vsixFile}`);
	console.log(`   Size: ${fileSizeMB} MB`);

	if (stats.size > 1000000) {
		// > 1MB
		console.log('   Status: Package size looks good');
	} else {
		console.log('   [WARN] Package seems small, might be missing dependencies');
	}
} else {
	console.log('[ERROR] Extension package not found!');
	console.log('   Run: npm run build:docker');
	process.exit(1);
}

// Check if test file exists
const testFile = 'test.rms';
if (fs.existsSync(testFile)) {
	console.log(`[OK] Test file found: ${testFile}`);

	const content = fs.readFileSync(testFile, 'utf8');
	const lines = content.split('\n').length;
	console.log(`   Lines: ${lines}`);

	// Check for RMS syntax elements
	const hasSectionHeaders = content.includes('<') && content.includes('>');
	const hasCommands = content.includes('create_object');
	const hasConditionals = content.includes('if') && content.includes('endif');
	const hasRandomBlocks = content.includes('start_random') && content.includes('end_random');

	console.log(`   Section headers: ${hasSectionHeaders ? '[OK]' : '[MISSING]'}`);
	console.log(`   Commands: ${hasCommands ? '[OK]' : '[MISSING]'}`);
	console.log(`   Conditionals: ${hasConditionals ? '[OK]' : '[MISSING]'}`);
	console.log(`   Random blocks: ${hasRandomBlocks ? '[OK]' : '[MISSING]'}`);
} else {
	console.log('[ERROR] Test file not found!');
}

// Check key project files
const keyFiles = [
	'package.json',
	'README.md',
	'CHANGELOG.md',
	'BUILD.md',
	'Dockerfile',
	'client/src/extension.ts',
	'server/src/server.ts',
];

console.log('\nChecking key project files:');
keyFiles.forEach((file) => {
	if (fs.existsSync(file)) {
		console.log(`   [OK] ${file}`);
	} else {
		console.log(`   [MISSING] ${file}`);
	}
});

console.log('\nExtension validation complete!');
console.log('\nNext steps:');
console.log('1. Install the extension in VS Code');
console.log('2. Open test.rms to test syntax highlighting');
console.log('3. Check for any error diagnostics');
console.log('4. Verify language server is working');
